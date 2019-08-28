<template>
  <div class="channel">
    <Top :manoe="m"></Top>
    <ul class="bodyimg">
      <li v-for="(item,index) in pddata" :key="index">
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { getSlide } from '../../api/api'
import Top from './top'
export default {
  name: 'channel',
  created () {
    // 获取数据 初始化数据
    getSlide('pdlist').then(data => {
      console.log(data)
      this.pddata = data
    })
  },
  components: {
    Top
  },
  data () {
    return {
      m: '频道',
      pddata: ''
    }
  }
}
</script>

<style lang="less" scoped>
// 清除谷歌滚动条
*::-webkit-scrollbar {  display: none!important }
 .channel{
    width: 100%;
     height: 100%;
   .bodyimg{
     width: 100%;
     height: 100%;
     overflow-y: auto;
     padding: 96px 0;
     li{
       width: 100%;
       height: 470px;
       img{
         width: 100%;
         height: 100%;
       }
     }
   }
 }
</style>
