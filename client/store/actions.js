import * as types from './mutation-types'
import {getTable,getTree} from '../api/system/resource'

export const initTree = ({commit}, product) => {
  getTree(null).then(tree => {
    commit(types.SET_TREE, tree)
  })
}
export const initTable = ({commit}, product) => {
  getTable(null).then(table => {
    commit(types.SET_TABLE, table)
  })
}

export const itemClick = ({commit}, product) => {
  getTable(null).then(table => {
    commit(types.SET_TABLE, table)
  })
}
