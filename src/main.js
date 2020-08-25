import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import netClient from "./network/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(Vant);

Vue.prototype.$netClient = netClient;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
