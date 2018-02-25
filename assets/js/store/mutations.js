export default {
  addPostToTimeline(state, { post, activity }) {
    if (post.activityId !== activity.id) {
      throw new Error('post.activityId must equals to activity.id.');
    }

    state.activities[activity.id] = activity;
    state.posts[post.postId] = post;

    state.timeline.postsOrder.push(post.postId);
  },

  addCommentToPost(state, { parentPostId, comment, activity }) {
    if (comment.activityId !== activity.id) {
      throw new Error('comment.activityId must equals to activity.id.');
    }

    state.activities[activity.id] = activity;
    state.comments[comment.commentId] = comment;

    state.posts[parentPostId].commentsOrder.push(comment.commentId);
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

