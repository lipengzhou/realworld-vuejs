import Vue from 'vue'
import Vuex from 'vuex'
import { SET_USER } from './mutation-types'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

const state = {
  user: null
}

const mutations = {
  [SET_USER] (state, user) {
    state.user = user
    auth.setToken(user)
  }
}

const actions = {}

const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
