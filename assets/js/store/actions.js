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

  async fetchTimeline({ commit }, searchParams) {
    commit('setTimelineLoading', { loading: true });

    try {
      const response = await api.activity.searchAll(searchParams);
      const activities = response.data;

      activities.forEach((activity) => {
        const post = createPost(activity);

        const replies = activity.replies || [];
        post.collapseCommentList = replies.length === 0;

        commit('addPostToTimeline', { post, activity });

        replies.forEach((replyActivity) => {
          const comment = createComment(replyActivity);

          commit('addCommentToPost', {
            comment,
            activity: replyActivity,
            parentPostId: post.postId,
          });
        });
      });
    } finally {
      commit('setTimelineLoading', { loading: false });
    }
  },
};
