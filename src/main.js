import Vue from 'vue';
import { Icon } from 'leaflet';
import VueToast from 'vue-toast-notification';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './styles/app.scss';
import 'leaflet/dist/leaflet.css';
import 'vue-toast-notification/dist/theme-default.css';

// leaflet
const iconRetinaUrl = require('leaflet/dist/images/marker-icon-2x.png');
const iconUrl = require('leaflet/dist/images/marker-icon.png');
const shadowUrl = require('leaflet/dist/images/marker-shadow.png');

/* eslint no-underscore-dangle: 0 */
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

Vue.config.productionTip = false;
Vue.use(VueToast);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
