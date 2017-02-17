import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import {state,mutations} from './state'

import resource from './modules/system-resource'
//import localStorageState from './localStorageState'
//import products from './modules/products'
//import createLogger from '../../../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules: {
    resource
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
  //plugins:[ localStorageState({
  //  paths:['resource','routerPath']
  //})]
})
