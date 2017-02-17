import * as types from './mutation-types'

export const  state ={
  routerPath: ''
}

export const  mutations ={
  [types.SET_ROUTER] (state, path) {
    state.routerPath = path
  }
}
