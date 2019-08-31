<template>
  <nav class="cartnav">
    <i class="iconfont icon-left" @click="goback"></i>
    <span :v-text='manoe'>{{manoe}}</span>
  </nav>
</template>
<script>
import { goback } from '../../../api/api'
export default {
  props: ['manoe'],
  methods: {
    goback
  }
}
</script>
<style lang="less" scoped>
@import url("../../../assets/reset.css");
.cartnav {
  background: #b81c22;
  color: #fff;
  height: 96px;
  display: flex;
  i {
    font-style: normal;
    font-size: 45px;
    line-height: 60px;
    margin-left: 20px;
    margin-top: 16px;
  }
  span {
    display: inline-block;
    font-size: 35px;
    text-align: center;
    line-height: 96px;
    flex: 1;
  }
}
</style>
