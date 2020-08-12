import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '../pages/Top'
import MyInformation from '../pages/MyInformation'
import DestinationInformation from '../pages/DestinationInformation'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/MyInformation',
    name: 'MyInformation',
    component: MyInformation
  },
  {
    path: '/DestinationInformation',
    name: 'DestinationInformation',
    component: DestinationInformation
  },
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })
//
// export default router


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router
