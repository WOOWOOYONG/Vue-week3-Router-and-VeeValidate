import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Vue-week3-hw',
        showNavbar: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
      meta: {
        title: '產品',
        showNavbar: true
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
      meta: {
        title: '產品內頁',
        showNavbar: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      meta: {
        title: '後台',
        showNavbar: false
      },
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/admin/UsersTable.vue'),
          meta: {
            title: '後台使用者',
            showNavbar: false
          }
        }
      ]
    },
    {
      path: '/validate',
      name: 'validate',
      component: () => import('@/views/ValidateView.vue'),
      meta: {
        title: '表單',
        showNavbar: true
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
