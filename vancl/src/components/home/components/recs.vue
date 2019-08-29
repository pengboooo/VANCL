<template>
  <div class="recs">
    <h3><img src="https://mi.vanclimg.com/oms/2018_1_10_14_54_45_8302_26x26.jpg">优选推荐</h3>
     <div class="box" v-for="(item,index) in mydata" :key="index">
       <div class="banner">
         <img :src="item.advert">
         <span class="tip"></span>
       </div>
      <ul class="lists" ref="myul">
        <li ref="myli" v-for="(item,index) in item.lists" :key="index">
          <img :src="item.img">
          <p class="name">{{item.title}}</p>
          <p class="pri">售价：￥{{item.pri}}</p>
          <p class="newpri">充值相当于：<span>￥{{item.newpri}}</span></p>
        </li>
        <li ref="myli" class="ll">
          <span class="s1">查看更多</span>
          <span class="s2">View More</span>
          <span class="s3">></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getRecs} from '@/api/api.js'
export default {
  data () {
    return {
      mydata: []
    }
  },
  created () {
    getRecs().then((data) => {
      this.mydata = data
      console.log(data)
    })
  }
}
</script>
<style lang="less" scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.banner{
  position: relative;
  height: 396px;
  width: 100%;
  .img{
    height: 396px;
    display: block;
    width: 100%;
  }
}
.tip{
  position: absolute;
  bottom: 0;
  left: 20px;
  border: 10px solid transparent;
  border-bottom: 12px solid #fafafa;
}
h3{
  height: 76px;
  width: 100%;
  line-height: 76px;
  font-size: 28px;
  font-weight: normal;
  img{
    width: 28px;
    height:28px;
    padding-top: 4px;
    display: inline-block;
    margin: 0 20px;
  }
}
.box{
  // overflow: hidden;
  // overflow-x: auto;
  width: 100%;
  .lists{
    display: flex;
    // width: 3200px;
    overflow-x: auto;
    height: 476px;
    margin-top: 20px;
    margin-bottom: 20px;
  li{
    width: 264px;
    height: 476px;
    background: white;
    margin-left: 14px;
    float: left;
    img{
      width: 100%;
      height: 340px;
    }
    .name{
      height: 36px;
      line-height: 26px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 8px;
      font-size: 26px;
    }
    .pri{
      margin-top: 2px;
      height: 30px;
      line-height: 30px;
      color:#cccccc;
      font-size: 22px;
    }
    .newpri{
      height: 30px;
      line-height:30px;
      font-size: 24px;
      span{
        color: #b81c22;
      }
    }
  }
  li:last-child{
    text-align: center;
    border: 1px solid #cdba8d;
    color:#cdba8d;
    visibility: visible;
    span{
      display: block;
      width: 264px;
    }
    .s1{
      padding-top: 160px;
      font-size: 36px;
      font-weight: bold;
      display: block;
    }
    .s2{
      padding: 8px 0;
      font-size: 30px;
      display: block;
    }
    .s3{
      display: block;
      width: 24px;
      height: 24px;
      line-height: 24px;
      background: #cdba8d;
      border-radius: 50%;
      color: white;
      font-size: 20px;
      margin: 0 auto;
    }
  }
}
}
</style>
