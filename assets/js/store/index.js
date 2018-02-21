import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  activities: {
    1: {
      id: 1,
      body_html: 'ててて',
      public_status: 'friend',
      created_at: 'Thu, 15 Feb 2018 04:30:59 +0900',
      member: {
        name: 'OpenPNE 君',
        profile_url: 'http://v39.localhost/member/1',
        profile_image: 'http://v39.localhost/images/no_image.gif',
      },
    },
    2: {
      id: 2,
      body_html: 'こめんと',
      created_at: 'Thu, 15 Feb 2018 04:31:10 +0900',
      member: {
        name: 'OpenPNE 君',
        profile_url: 'http://v39.localhost/member/1',
        profile_image: 'http://v39.localhost/images/no_image.gif',
      },
    },
  },
  posts: {
    'post-1': {
      postId: 'post-1',
      activityId: 1,
      collapseCommentList: false,
      commentsOrder: [
        'comment-1',
      ],
    },
  },
  comments: {
    'comment-1': {
      commentId: 'comment-1',
      activityId: 2,
    },
  },
  timeline: {
    loading: false,
    postsOrder: [
      'post-1',
    ],
  },
};

export default new Vuex.Store({
  state,
});
