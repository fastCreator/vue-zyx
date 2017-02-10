import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import auth from '../auth'
import login from '../views/login'
import nav from '../config/nav'

Vue.use(Router)

const loginSuccess = (to, from, next) => {
  if (auth.loggedIn()) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}
const getComponent = name => require(`../views/${name}.vue`)
const routers = [
  {
    path: '/',
    component: index
  },
  {path: '/login', name:'login', component: login }
]

/**
 * 配置nav漏油
 * */
nav.forEach((mod) => {
  const subMenus = mod.children

  subMenus.forEach((subMenu) => {
    routers.push({
      path: subMenu.path,
      name: subMenu.name,
      component: getComponent(subMenu.name)
    })
  })
})

/**
 * 404页面
 * */
routers.push({
  path: '*',
  name: 'notfound',
  component: require('../views/notfound')
})

export default new Router({
  mode: 'hash',
  routes: routers
})
