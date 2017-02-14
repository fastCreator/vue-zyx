import * as types from '../../mutation-types'
import {getTable,getTree} from '../../../api/system/resource'


const state = {
  tree: [],
  table: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  [types.INIT_TREE] ({ commit }) {
    console.log(1)
     getTree(null).then(tree => {
      commit(types.SET_TREE, tree)
    })
  }
}

// mutations
const mutations = {
  [types.SET_TREE] (state, tree) {

    console.log(tree)
    state.tree = tree
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
