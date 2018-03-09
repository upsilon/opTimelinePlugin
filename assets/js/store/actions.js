import _ from 'lodash';

import api from '../api';

function createPost(activity) {
  return {
    postId: _.uniqueId('post-'),
    activityId: activity.id,
    collapseCommentList: true,
    commentsOrder: [],
  };
}

function createComment(activity) {
  return {
    commentId: _.uniqueId('comment-'),
    activityId: activity.id,
  };
}

export default {
  async fetchTimelineInit({ dispatch }) {
    await dispatch('fetchTimeline', {});
  },

  async fetchTimelineBackward({ state, dispatch }) {
    const params = {};
    const { activityIdMin } = state.timeline;

    if (activityIdMin !== -Infinity) {
      params.max_id = (activityIdMin - 1).toString();
    }

    await dispatch('fetchTimeline', params);
  },

  async fetchTimeline({ commit }, searchParams) {
    commit('setTimelineLoading', { loading: true });

    try {
      const response = await api.activity.searchAll(searchParams);
      const activities = response.data;

      activities.forEach((activity) => {
        const post = createPost(activity);

        const replies = activity.replies || [];
        post.collapseCommentList = replies.length === 0;

        commit('addActivity', { activity });
        commit('addPost', { post });

        commit('insertBottomOfTimeline', { postId: post.postId });
        commit('updateTimelineActivityIdMinMax', { activity });

        replies.forEach((replyActivity) => {
          const comment = createComment(replyActivity);

          commit('addActivity', { activity: replyActivity });
          commit('addComment', { comment });

          commit('insertBottomOfPostComments', {
            parentPostId: post.postId,
            commentId: comment.commentId,
          });
        });
      });
    } finally {
      commit('setTimelineLoading', { loading: false });
    }
  },
};
