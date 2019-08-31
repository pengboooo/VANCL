<template>
  <div class="box">
    <img src="https://mi1.vanclimg.com/oms/2019_8_27_10_2_34_5362_678x60.jpg" alt="">
    <ul>
      <li v-for="(item, index) in navArr" :key="index">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { Homenav } from '@/api/api.js'
export default {
  data () {
    return {
      navArr: []
    }
  },
  created () {
    Homenav().then(data => {
      this.navArr = data
    })
  }
}
</script>
<style lang="less" scoped>
.box{
  padding: 26px;
  background: #fff;
  ul{
    width: 100%;
    height: 100px;
    margin-top: 20px;
  }
  li{
    float: left;
    width: 20%;
    text-align: center;
    color: #666;
    img{
      width:60px;
      height: 60px;
    }
    span{
      width:136px;
      text-align: center;
      display:block;
    margin-top: 5px;
    color: #666;
    }
  }
}
</style>
