import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Category from '@/components/category/index'
import Channel from '@/components/channel/index'
import Cart from '@/components/cart/index'
import Mine from '@/components/mine/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel,
      meta: {
        title: '频道'
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/mine',
      name: 'Mine',

      component: Mine,
      meta: {
        title: '个人中心'
      }
    }
  ]
})
