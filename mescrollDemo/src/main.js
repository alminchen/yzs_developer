// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import store from './store/store'
import router from './router'
import App from './App'
import 'vue-ydui/dist/ydui.flexible'
import 'vue-ydui/dist/ydui.base.css'
import axios from 'axios'
import QS from 'qs'
// FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = QS
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
