import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Category from '@/components/category/index'
import Channel from '@/components/channel/index'
import Cart from '@/components/cart/index'
import Mine from '@/components/mine/index'
import Detail from '@/common/details'
import login from '@/components/mine/mine'
import Lists from '@/components/category/lists/index'
import Registe from '@/components/mine/components/registe'
import Getback from '@/components/mine/components/getback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        keepAlive: false
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        title: '分类',
        keepAlive: true
      }
    },
    {
      path: '/channel',
      name: 'Channel',
      component: Channel,
      meta: {
        title: '频道',
        keepAlive: true
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        title: '购物车',
        keepAlive: true
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        title: '个人中心',
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录页',
        keepAlive: true
      }
    },
    {
      path: '/category/lists',
      name: 'lists',
      component: Lists,
      meta: {
        title: '分类列表',
        keepAlive: true
      }
    },
    {
      path: '/mine/registe',
      name: 'Registe',
      component: Registe,
      meta: {
        title: '免费注册',
        keepAlive: true
      }
    },
    {
      path: '/mine/getback',
      name: 'Getback',
      component: Getback,
      meta: {
        title: '找回密码',
        keepAlive: true
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '商品详情'
      }
    }
  ]
})
