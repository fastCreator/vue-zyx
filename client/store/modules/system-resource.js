import * as types from '../mutation-types'

const state =
{
  tree: [],
  table: [],
  loading:true,
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
    state.tree = tree
  },
  [types.SET_TABLE] (state, table) {
    state.table = table
    state.loading =false;
  },
  [types.SET_LOADING] (state, bool) {
    state.loading=bool;
  },
  [types.SET_SEARCH] (state, str) {
    state.searchName = str + ''
  }
}

export default {
  state,
  mutations
}
