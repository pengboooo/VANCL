<template>
  <div class="jxbox">
    <h3><i></i> 精选专题</h3>
    <div class="part">
      <ul>
        <li v-for="(item,index) in jingxuanArr" :key='index'>
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Jingxuan } from '@/api/index.js'
export default {
  data () {
    return {
      jingxuanArr: []
    }
  },
  created () {
    Jingxuan().then(data => {
      console.log(data)
      this.jingxuanArr = data
    })
  }
}
</script>
<style lang="less" scoped>
.jxbox{
  margin-top: 20px;
  h3{
    padding:20px;
    font-size: 26px;
    line-height: 20px;
    background-color: #FAFAFA;
    i{
      background: url(https://mi.vanclimg.com/oms/2017_12_19_14_40_52_8584_26x26.jpg) no-repeat ;
      display: inline-block;
      width: 52px;
      height: 38px;
      margin-top: 4px;
      margin-right: 5px;
      vertical-align: middle;
     background-size: 35px
    }
  }
.part{
  overflow: hidden;
  width: 100%;
  background: #fff;
    ul{
      display: flex;
      overflow-x: auto;
      li{
        // width: 30%;
        height: 100%;
        padding: 0 10px;
        img{
          width: 300px;
          height: 100%;
        }
      }
      li:first-child {
        padding-left: 0;
      }
  }
  ul::-webkit-scrollbar {display:none}
}

}

</style>
