<template>
  <nav>
    <ul class = "nav-ul">
      <router-link to = "/home" tag = "li">
        <i class = "iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to = "/category" tag = "li">
        <i class = "iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link to = "/channel" tag = "li">
        <i class = "iconfont icon-baobao"></i>
        <span>频道</span>
      </router-link>
      <router-link to = "/cart" tag = "li">
        <i class = "iconfont icon-che"></i>
        <span>购物车</span>
      </router-link>
      <router-link to = "/mine" tag = "li">
        <i class = "iconfont icon-mine"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {

}
</script>

<style scoped>
@import url("../style/main.css");
</style>
