import { createRouter, createWebHashHistory } from 'vue-router'

// 使用webpack自动构建子路由
var childRoutes = []
var files = require.context('../views', true, /.vue$/i)
files.keys().forEach(key => {
  if (key.match(/(login|index)\//i)) return
  const route = createRoute(key)
  childRoutes.push(route)
})

function createRoute (url) {
  let name = ''
  let path = ''
  const str = url.replace(/(\.\/|.vue)/g, '')
  const arr = str.split('/')
  arr.forEach((e, i) => {
    name += e.substring(0, 1).toUpperCase() + e.substring(1)
    path += e.replace(/[A-Z]/g, (c, i2) => {
      if (i2 === 0 || i2 === (e.length - 1)) {
        return c.toLowerCase()
      } else {
        return '-' + c.toLowerCase()
      }
    })

    if (i !== (arr.length - 1)) {
      path += '/'
    }
  })
  return {
    name: name,
    path: path,
    component: () => import('../views/' + str + '.vue')
  }
}
console.log(childRoutes)
const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "Index" */ '../views/index/Index.vue')
      },
      ...childRoutes
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
