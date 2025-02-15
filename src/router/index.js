import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginVue from '@/views/LoginVue.vue'
import TicketVue from '@/views/TicketVue.vue'
import { useLoginStore } from '@/stores/useLoginStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
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
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardVue.vue'),
      meta: {
        requiresAuth: true,
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useLoginStore();
  if (!authStore.token && to.name !== 'login') {
    console.log("User not authenticated, redirecting to login");
    next({
      path: 'login',
    });  // Redirect if not authenticated
  } else {
    next();
  }
});

export default router
