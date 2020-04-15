import Vue from 'vue'
import Router from 'vue-router'

import Error from '@/components/Error'

import ShoppingMall from '@/components/pages/ShoppingMall'
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import shopCar from '@/components/pages/ShopCar'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      // 404页面
      path: '*', name: 'error', component: Error,
      meta: {
        title: '页面丢失了~'
      }
    },
    {
      path: '/', name: 'ShoppingMall', component: ShoppingMall,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/register', name: 'Register', component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/login', name: 'Login', component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/goods', name: 'Goods', component: Goods,
      meta: {
        title: '商品'
      }
    },
    {
      path: '/categoryList', name: 'CategoryList', component: CategoryList,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/shopCar', name: 'shopCar', component: shopCar,
      meta: {
        title: '购物车'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router