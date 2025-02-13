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

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   if (to.meta.requiresAuth && !authStore.token) {
//     next('/login');  // Redirect if not authenticated
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    next("login");
  } else {
    next();
  }
});

export default router
