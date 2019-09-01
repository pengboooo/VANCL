import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 存放你要传递的值；
  state: {
    cid: null,
    userObj: 'null'
  },
  mutations: {
    getcid (state, ID) {
      state.cid = ID
    },
    getuserObj (state, obj) {
      state.userObj = obj
    }
  }
})

export default store
