import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/visit',
    name: 'visit',
    component: () => import('../views/VisitorSystem.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
