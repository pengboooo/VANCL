<template>
  <nav class="cartnav">
    <i class="iconfont icon-left" @click="goback"></i>
    <span>购物车</span>
  </nav>
</template>

<script>
import { goback } from '../../../api/api'
export default {
  methods: {
    goback
  }
}
</script>
<style lang="less" scoped>
.cartnav{
  background: #B81C22;
  color: #fff;
  height: 96px;
  display: flex;
  i{
    font-style: normal;
    font-size: 45px;
    margin-left: 20px;
    line-height: 96px;
  }
  span{
    display: inline-block;
    font-size: 40px;
    text-align: center;
    line-height: 96px;
    flex: 1;
  }
}
</style>
