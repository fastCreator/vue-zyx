import Vue from 'vue'
import ElementUI from 'element-ui'
import '../theme/index.css'
import '../static/fonts/iconfont.css'
import 'animate.css'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import auth from './auth'

import Layout from './components/Layout'
import Search from './components/Search'
import Editor from './components/Editor'
import Mtree from './components/MainTree'
import Mtable from './components/MainTable'

//import _ from 'lodash'


sync(store, router)

Vue.use(ElementUI)

Vue.component(Layout.name, Layout)
Vue.component(Search.name, Search)
Vue.component(Editor.name, Editor)
Vue.component(Mtree.name, Mtree)
Vue.component(Mtable.name, Mtable)

router.beforeEach((to, from, next) => {
  store.commit('SET_ROUTER',to.fullPath);
  if (!auth.loggedIn() && to.name !== 'login') {
    next({
      path: '/login',
    })
  } else {
    next()
  }
})

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
