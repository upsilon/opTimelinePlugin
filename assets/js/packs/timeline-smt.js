import 'babel-polyfill';

import Vue from 'vue';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/src/locale/ja';

import TimelineSmt from '../apps/TimelineSmt.vue';
import store from '../store';

moment.locale('ja');
Vue.use(VueMoment, { moment });

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: h => h(TimelineSmt),
});
