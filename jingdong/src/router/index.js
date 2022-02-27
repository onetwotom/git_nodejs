import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* "Home" */ '../views/home/Home')
  }, {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList')
  }, {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/me/Me')
  }, {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList')
  }, {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* "Home" */ '../views/shop/Shop')
  },
  {
    path: '/manageAddress',
    name: 'ManageAddress',
    component: () => import(/* "Login" */ '../views/address/ManageAddress')
  },
  {
    path: '/createAddress',
    name: 'CreateAddress',
    component: () => import(/* "Login" */ '../views/address/CreateAddress')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* "Login" */ '../views/login/Login'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin === true) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* "Register" */ '../views/register/Register'),
    beforeEnter (to, from, next) {
      const isLogin = localStorage.isLogin
      if (!isLogin) {
        next({ name: 'Register' })
      } else {
        next()
      }
    }
  },
  {
    path: '/oneAddress/:id',
    name: 'OneAddress',
    component: () => import(/* "Home" */ '../views/oneAddress/OneAddress')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// !isLogin && to.name !== 'Login'
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (!isLogin && (to.name !== 'Login' && to.name !== 'Register')) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
