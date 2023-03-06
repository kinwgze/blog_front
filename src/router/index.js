import { createRouter, createWebHashHistory } from 'vue-router'
// import { h } from 'vue'

const home = () => import('@/views/Home.vue')
const visit = () => import('@/components/VisitorSystem.vue')
const routes = [
  { path: '/', component: home },
  { path: '/visit', name: 'visit', component: visit }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior () {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  }
})

export default router
