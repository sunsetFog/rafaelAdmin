import { createStore } from 'vuex'

import tabs from './modular/tabs.js'
import login from './modular/login.js'
import screenAndRem from './modular/screenAndRem'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tabs,
    login,
    screenAndRem
  }
})
