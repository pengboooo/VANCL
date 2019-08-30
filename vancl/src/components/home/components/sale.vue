<template>
    <div class="sale">
        <h3>
            <img v-lazy="'https://mi.vanclimg.com/oms/2017_12_19_14_40_52_8584_26x26.jpg'" />特惠专区
        </h3>
        <img class="tip" v-lazy="'https://mi1.vanclimg.com/wap/2019_8_27_9_24_2_5860_640x54.jpg'">
        <div class="box">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <img v-lazy="item">
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import {getSales} from '@/api/api.js'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    getSales().then((data) => {
      this.list = data
    })
  }
}
</script>
<style lang="less" scoped>
h3 {
    height: 76px;
    width: 100%;
    line-height: 76px;
    font-size: 28px;
    font-weight: normal;
    img {
        width: 28px;
        height: 28px;
        padding-top: 4px;
        display: inline-block;
        margin: 0 20px;
    }
}
.tip{
  width: 100%;
  height: 63px;
}
.box{
  background: white;
  height: 5120px;
  li{
    width: 375px;
    height: 640px;
    float: left;
    }
  img{
    width: 376px;
    height: 640px;
  }
}
</style>
