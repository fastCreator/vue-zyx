import * as types from '../mutation-types'

const state =
{
  tree: [],
  table: [],
  searchName: '',
  header: [
    {
      prop: 'data',
      label: '日期',
      width: 150,
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'city',
      label: '城市'
    },
    {
      prop: 'address',
      label: '地址'
    },
    {
      prop: 'role',
      label: '角色'
    },
  ]
}


// mutations
const mutations = {
  [types.SET_TREE] (state, tree) {
    console.log('SET_TREE');
    state.tree = tree
  },
  [types.SET_TABLE] (state, table) {
    console.log('SET_TABLE');
    state.table = table
  },
  [types.SET_SEARCH] (state, str) {
    console.log('SET_SEARCH');
    state.searchName = str + ''
  }
}

export default {
  state,
  mutations
}
