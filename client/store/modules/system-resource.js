import * as types from '../mutation-types'

const state = {
  tree: [],
  table: []
}



// mutations
const mutations = {
  [types.SET_TREE] (state, tree) {
    state.tree = tree
  },
  [types.SET_TABLE] (state, table) {
    state.table = table
  }
}

export default {
  state,
  mutations
}
