import 'babel-polyfill';

import Vue from 'vue';

import TimelineSmt from '../apps/TimelineSmt.vue';
import store from '../store';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: h => h(TimelineSmt),
});
