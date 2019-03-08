import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/pages/login/Login'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      fhide:false
    }
  }]
})
