import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Vue-week3-hw'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
      meta: {
        title: '產品'
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      meta: {
        title: '產品內頁'
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      meta: {
        title: '後台'
      },
      children: [
        {
          path: 'userstable',
          name: 'userstable',
          component: () => import('@/views/admin/UsersTable.vue'),
          meta: {
            title: '後台使用者'
          }
        }
      ]
    },
    {
      path: '/validate',
      name: 'validate',
      component: () => import('@/views/ValidateView.vue'),
      meta: {
        title: '表單'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
