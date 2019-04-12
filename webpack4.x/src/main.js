// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Confirm,
  Alert,
  Toast,
  Notify,
  Loading
} from 'vue-ydui/dist/lib.rem/dialog'
Vue.config.productionTip = false
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading
}
// this.$dialog.confirm({ /* 参数 */ });
// this.$dialog.alert({ /* 参数 */ });
// this.$dialog.toast({ /* 参数 */ });
// this.$dialog.notify({ /* 参数 */ });
// this.$dialog.loading({ /* 参数 */ });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
