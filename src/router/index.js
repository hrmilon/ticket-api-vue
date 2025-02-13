import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/LoginVue.vue'
import TicketVue from '@/views/TicketVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketVue,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardVue.vue'),
    },
  ],
})

export default router
