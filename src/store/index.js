'use strict'

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS (store, payload) {
      store.posts = payload
    }
  }

})
