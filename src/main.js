import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import CKEditor from '@ckeditor/ckeditor5-vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

const base = axios.create({
  baseURL: 'https://importexporttraders.herokuapp.com/'
})

Vue.prototype.$http = base

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use( CKEditor );

require('@/store/subscribe.js')

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

})
