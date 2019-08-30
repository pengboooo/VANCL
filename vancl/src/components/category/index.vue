<template>
  <div class="home">
    <Top :manoe="m"></Top>
    <div class="content-l">
      <ul>
       <li @click="getindex(index)" :class="actives === index? 'active':''" v-for="(item,index) in listdata" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="content-r">
      <ul >
        <router-link :to="{name:'lists',params:{spans:item.spans}}" tag='li' v-for="(item,index) in rigehtdata[0].lists" :key="index" @click="setname(item)">
          <img  v-lazy="item.img" alt="">
          <span v-text="item.spans"></span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSlide } from '../../api/api'
import Top from './top'
export default {
  name: 'home',
  created () {
    // 获取数据 初始化左边数据
    getSlide('fklist').then(data => {
      this.listdata = data
    })
    // 初始化右侧数据，并传递id=0
    getSlide('getlistdata?id=0').then(data => {
      this.rigehtdata = data
    })
  },
  components: {
    Top
  },
  methods: {
    // 获取index改变激活和右侧数据
    getindex (index) {
      this.actives = index
      var url = `getlistdata?id=${index}`
      getSlide(url).then(data => {
        this.rigehtdata = data
      })
    }
  },
  data () {
    return {
      listdata: '',
      actives: 0,
      rigehtdata: 'akHFKSHFLKAI',
      m: '分类'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
@import url("../../assets/reset.css");
// 清除谷歌滚动条
*::-webkit-scrollbar {  display: none!important }

.active{
  background: #fff;
}
  .home{
    display: flex;
     height: 100%;
      padding-top: 96px;
      padding-bottom: 102px;
      box-sizing: border-box;
  .content-l{
     height: 100%;
    flex: 2.5;
    ul{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      background: rgb(209, 209, 209);
      li{
        font-size: 30px;
        width: 188px;
        height: 74px;
        line-height: 74px;
        text-align: center;
        border-bottom: 2px solid #fff;
        box-sizing: border-box;
      }
    }
    // ul::-webkit-scrollbar {  display: none!important }
    }
  .content-r {
  flex: 7.5;
  height: 100%;
  ul{
    display: flex;
   height:100%;
   flex-wrap: wrap;
   align-content:flex-start;
  overflow-y: auto;
    li{
    width: 33.33%;
      font-size: 30px;
     text-align: center;
     height: 200px;
     display:block;
     margin-top: 30px;
      img{
        width: 140px;
        height: 140px;
      }
      span{
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  }
  }
  }
</style>
