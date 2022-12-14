// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {

        path: '/',
        name: 'main',
        component: () => import('../components/main-page/main-page.vue'),
        meta: {
          title: 'Moscow Country Clab'
        }
      },
      {
        path: '/calculate',
        name: 'calculate',
        component: () => import('../components/calculate-page/calculate-page.vue'),
        meta: {
          title: 'Moscow Country Clab'
        }
      },
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  router.beforeEach((to) => {

      document.title = to.meta.title
    
  })
  export default router