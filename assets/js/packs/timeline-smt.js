import 'babel-polyfill';

import Vue from 'vue';
import TimelineSmt from '../apps/TimelineSmt.vue';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(TimelineSmt),
});
