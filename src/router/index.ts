import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
   // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/About.vue')
  // },
  // {
  //   404 page
  //   path: '/:pathMatch(.*)*',
  //   name: 'not-found',
  //   component: () => import('../views/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
