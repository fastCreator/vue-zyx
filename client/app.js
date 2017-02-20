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

import './directives'
import './components'


sync(store, router)
Vue.use(ElementUI)

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
