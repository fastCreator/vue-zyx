import * as types from './mutation-types'

const state = {
  routerPath: ''
}

// mutations
const mutations = {
  [types.SET_ROUTER] (state, path) {
    state.routerPath = path
  }
}

export default {
  state,
  mutations
}
