// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import animated from 'animate.css'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)

Vue.use(animated)

Vue.use(VueLazyload)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 创建一个 store(全局存储)
const store = new Vuex.Store({
  // state存储应用层的状态
  state: {
    listName: '这是一个值'
  },
  mutations: {
    changeValue (state, newVal) {
      state.listName = newVal
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
