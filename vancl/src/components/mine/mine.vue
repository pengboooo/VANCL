<template>
  <div class="mine">
    <!-- 头部 -->
    <heads></heads>
    <div class="tablebtn">
      <button @click="pt" :class="flag ? 'active' : ''">普通登录</button>
      <button @click="ks" :class="flag ? '' : 'active'">快速登录</button>
    </div>
    <transition name="mylog" mode="out-in">
      <!-- 登录 -->
      <login v-if="flag"></login>
      <!-- 快速登录 -->
      <logins v-else></logins>
    </transition>
    <router-view></router-view>
  </div>
</template>
<script>
import heads from './components/heads'
import login from './components/login'
import logins from './components/logins'
export default {
  data () {
    return {
      flag: true
    }
  },
  methods: {
    pt () {
      this.flag = true
    },
    ks () {
      this.flag = false
    }
  },
  components: {
    heads,
    login,
    logins
  }
}
</script>
<style lang="less" scoped>
.mylog-enter,.mylog-leave-to{
  opacity: 0;
}
.mylog-enter-active,.mylog-leave-active{
  transition: all .5s ease;
}
.mine{
  background: #fff;
  height: 100%;
  .tablebtn{
    width: 100%;
    height: 90px;
    display: flex;
    button{
      font-size: 32px;
      width: 50%;
      height: 80px;
      border: none;
      text-align: center;
      line-height: 80px;
      background: #fff;
      outline: none;
    }
    .active{
      border-bottom: 4px solid #B81B22;
    }
  }
}
</style>
