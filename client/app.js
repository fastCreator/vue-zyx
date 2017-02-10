import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import auth from './auth'

import Layout from './components/Layout'
import Search from './components/Search'
import Editor from './components/Editor'

sync(store, router)

Vue.use(ElementUI)

Vue.component(Layout.name, Layout)
Vue.component(Search.name, Search)
Vue.component(Editor.name, Editor)

router.beforeEach((to, from, next) => {
  console.log(to.name);
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
