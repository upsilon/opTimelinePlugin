import 'babel-polyfill';

import Vue from 'vue';
import TimelineSmt from '../apps/TimelineSmt.vue';

new Vue({
  el: '#app',
  render: h => h(TimelineSmt),
});
