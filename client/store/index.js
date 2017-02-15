import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import resource from './modules/system-resource'
//import products from './modules/products'
//import createLogger from '../../../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

console.log(actions)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    resource
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
})
