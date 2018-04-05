'use strict'

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    modal: false
  },
  mutations: {
    MODAL_TOGGLE (store, payload) {
      store.modal = !store.modal
    }
  }

})
