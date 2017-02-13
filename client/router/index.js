import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import auth from '../auth'
import login from '../views/login'
import nav from '../config/nav'

Vue.use(Router)

const loginSuccess = (to, from, next) => {
  console.log(1);
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
    component: index,
    children:[]
  },
  {path: '/login', name:'login',component: login, beforeEnter: loginSuccess  }
]

/**
 * 配置nav漏油
 * */
nav.forEach((mod) => {
  const subMenus = mod.children
  subMenus.forEach((subMenu) => {
    routers[0].children.push({
      path: subMenu.path,
      name: subMenu.name,
      component: getComponent(subMenu.name)
    })
  })
})


console.log(routers)
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
