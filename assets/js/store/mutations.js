import Vue from 'vue';

export default {
  addActivity(state, { activity }) {
    const activityId = activity.id;

    if (state.activities[activityId] !== undefined) {
      throw new Error(`Duplicate activityId: ${activityId}`);
    }

    Vue.set(state.activities, activityId, activity);
  },

  addPost(state, { post }) {
    const { postId, activityId } = post;

    if (state.posts[postId] !== undefined) {
      throw new Error(`Duplicate postId: ${postId}`);
    }
    if (state.activities[activityId] === undefined) {
      throw new Error(`Unknown activityId: ${activityId}`);
    }

    Vue.set(state.posts, postId, post);
  },

  addComment(state, { comment }) {
    const { commentId, activityId } = comment;

    if (state.comments[commentId] !== undefined) {
      throw new Error(`Duplicate commentId: ${commentId}`);
    }
    if (state.activities[activityId] === undefined) {
      throw new Error(`Unknown activityId: ${activityId}`);
    }

    Vue.set(state.comments, commentId, comment);
  },

  insertBottomOfTimeline(state, { postId }) {
    if (state.posts[postId] === undefined) {
      throw new Error(`Unknown postId: ${postId}`);
    }

    state.timeline.postsOrder.push(postId);
  },

  insertBottomOfPostComments(state, { parentPostId, commentId }) {
    if (state.posts[parentPostId] === undefined) {
      throw new Error(`Unknown postId: ${parentPostId}`);
    }
    if (state.comments[commentId] === undefined) {
      throw new Error(`Unknown commentId: ${commentId}`);
    }

    state.posts[parentPostId].commentsOrder.push(commentId);
  },

  setTimelineLoading(state, { loading }) {
    state.timeline.loading = loading;
  },

  updateTimelineActivityIdMinMax(state, { activity }) {
    const activityId = parseInt(activity.id.toString(), 10);

    state.timeline.activityIdMin = Math.min(state.timeline.activityIdMin, activityId);
    state.timeline.activityIdMax = Math.max(state.timeline.activityIdMax, activityId);
  },
};

