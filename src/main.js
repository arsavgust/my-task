import Vue from 'vue';
import App from './App.vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import locale from 'view-design/dist/locale/ru-RU';

import VueMask from 'v-mask';

import ymapPlugin  from 'vue-yandex-maps';

import _ from 'lodash';

/*const settings = {
  apiKey: '8043c711-95d9-4162-8d61-852ab2b067ab',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
};*/

Vue.use(_);
Vue.use(ymapPlugin);
Vue.use(VueMask);
Vue.use(ViewUI, { locale });
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
