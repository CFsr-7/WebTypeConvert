import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

import
  Index
from '../views/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
