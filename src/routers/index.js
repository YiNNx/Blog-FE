import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/compose',
    name: 'compose',
    component: () => import('../views/ComposeView.vue')
  },
  {
    path: '/post/:pid',
    name: 'postDetail',
    component: () => import('../views/PostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
