import Vuex from 'vuex'
import Vue from 'vue'
import * as action from './action'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    title: ''
  },
  mutations: {
    [action.LOGIN]: (state, data) => {
      console.log(data)
      localStorage.token = data
      state.token = data
    },
    [action.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    [action.TITLE]: (state, data) => {
      console.log(data)
      state.title = data
    }
  }
})
