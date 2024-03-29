import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'home',
      component: () => import('../components/main.vue'),
      children: [
        { path: '/dashboard', component: () => import('../views/dashboard.vue') },
        { path: '/opportunity', component: () => import('../views/opportunity.vue') },
        { path: '/kycapproval', component: () => import('../views/kycapproval.vue') },
        { path: '/re', component: () => import('../views/re.vue') },
        { path: '/lead', component: () => import('../views/lead.vue') },
      ],
    },
  ]
})

export default router
