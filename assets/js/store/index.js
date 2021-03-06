import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  activities: {},
  posts: {},
  comments: {},
  timeline: {
    activityIdMin: Infinity,
    activityIdMax: -Infinity,
    loading: false,
    postsOrder: [],
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
