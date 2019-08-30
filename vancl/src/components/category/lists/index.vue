<template>
<div class="lists">
  <div class="wrap">
    <span class="topback iconfont icon-left" @click="goback"></span>
    <span class="title" v-text="spans"></span>
  </div>
  <div class="ullist">
  <ul class="ul">
    <li :class="index === 0? 'active':''" @click="getIndex($event)">新品</li>
    <li :class="index === 1? 'active':''" @click="sortj(),getIndex($event)">销量</li>
    <li :class="index === 2? 'active':''" @click="getIndex($event)">评价</li>
    <li :class="index === 3? 'active':''" @click="sort(),getIndex($event)">价格<img src="./images/icon_order.jpg"></li>
  </ul>
  </div>
  <div class="cont">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <img :src="item.img">
        <p class="tit">{{item.title}}</p>
        <p class="pri">{{item.pri}}元</p>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import { getSlide, goback } from '../../../api/api'

export default {
  name: 'lists',
  data () {
    return {
      lists: [],
      spans: '',
      index: 0
    }
  },
  methods: {
    goback,
    sort () {
      // json升序排序
     this.lists.sort((a, b) => {
        return a.pri - b.pri
      })
    },
     sortj () {
      // json降序排序
     this.lists.sort((a, b) => {
        return b.pri - a.pri
      })
    },
     getIndex(index){
         let target=index.target;//事件发生的元素
     let ul = index.target.parentNode.children;//同级元素集合
     for(let i = 0; i < ul.length; i++){
          if(ul[i] ===target){
          this.index = i;
        }
     }
   
     
     
    }
  },
  created (index) {
    this.spans = this.$route.params.spans
    let span = this.spans
    let url = `lists?spans=${span}`
    getSlide(url).then((data) => {
      this.lists = data[0].lists
    })
  }
}
</script>
<style lang="less" scoped>
@import url("../../../assets/reset.css");
.lists{
  width: 100% !important;
  margin-bottom: 102px;
 
  .wrap{
        width: 100%;
        height: 96px;
        background: #b81c22;
  span:last-child{
                     display: inline-block;
                     width: 70%;
                     text-align: center;
                     font-size: 34px;
                     color: #fff;
    }
   span:first-child{
                     display: inline-block;
                     width: 15%;
                     height: 100%;
                     font-size: 45px;
                     color: #fff;
                     line-height: 96px;
                     text-align: center;
    }
  }
  .ullist{
    .active{
    color: red;
  }
     ul{
    display: flex;
    justify-content: flex-start;
    li{
      text-align: center;
      height:94px ;
      line-height: 94px;
      width: 25%;
      font-size: 28px;
      position: relative;
      img{
        position: absolute;
       top: 36px;
        width: 16px;
        height: 28px;
        display: inline-block;
        margin: 0 10px;
      }
    }
  }
  }
  .cont{
    width: 100%;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 50%;
        height: 450px;
        text-align: center;
        img{
          width: 290px;
          height: 290px;
          margin: 30px 20px;
        }
        p{
          text-overflow: ellipsis;
          overflow: hidden;
           white-space: nowrap;
           margin: 0 10px;
        }
      }
    }
  }
}
</style>
