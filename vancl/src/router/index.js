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
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
