<template>
  <div class="top">
   <i class="iconfont icon-left" @click="goback"></i>
   <span :v-text='manoe'>{{manoe}}</span>
  </div>
</template>
<script>
import { goback } from '../../api/api'
export default {
  props: ['manoe'],
  methods: {
    goback
  }
}
</script>
<style lang="less" scoped>
@import url("../../assets/reset.css");
.top{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  background: #b81c22;
  font-size: 60px;
  color: #fff;
  line-height: 94px;
  i{
    display: inline-block;
   width: 15%;
    height: 100%;
    text-align: center;
    font-size: 50px;
    font-style: normal;
  }
  span{
    display: inline-block;
    height: 100%;
    width: 70%;
    font-size: 34px;
    line-height: 96px;
    text-align: center;
    margin: 0;
    padding: 0;
  }
}
</style>
