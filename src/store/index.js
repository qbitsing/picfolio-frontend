'use strict'

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    layout: 'login'
  },
  mutations: {
    SET_LAYOUT (store, payload) {
      store.layout = payload
    }
  }

})
