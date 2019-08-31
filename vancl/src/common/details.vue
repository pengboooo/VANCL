<template>
  <div class="detail">
    <nav class="detnav">
      <i @click="goback">&lt;</i>
      <span>商品详情</span>
    </nav>
    <!-- delswiper   start -->
    <div class="detswiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <img :src="slide" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- delswiper   end -->
    <div class="detheader">
      <h3>{{ detailArr.dettitle }}</h3>
      <span>
        <s>{{ detailArr.detremoney }}</s>
        {{detailArr.detmoney}}元
      </span>
      <p>{{ detailArr.detinterests }}</p>
    </div>
    <div class="cheap">
      <span>免邮</span>
      <p>全场购物满199元免运费</p>
    </div>
    <div class="chose">
      <div class="choseBox" @click="flag=!flag">
        <img src="./img/chose.png" alt class="chosepic" />
        <span>选择</span>
        <img src="./img/right.png" alt class="right" />
      </div>
      <div class="all" v-show="flag">
        <div class="color">
          <h3>选择颜色</h3>
          <span
            ref="colorspan"
            v-for="(item, index) in detailArr.detcolor"
            :key="index"
            @click="addcolor(index)"
            :class="colorflag === index ? 'detactive' : ''"
          >{{ item }}</span>
        </div>
        <div class="size">
          <h3>选择尺码</h3>
          <span
            ref="sizespan"
            v-for="(item, index) in detailArr.detsize"
            :key="index"
            @click="addsize(index)"
            :class="sizeflag === index ? 'detactive' : ''"
          >{{ item }}</span>
        </div>
        <div class="num">
          <h3>购买数量</h3>
          <i @click="redsum()" class="one">-</i>
          <input type="text" class="sum" v-model="detsum" />
          <i @click="addsum()">+</i>
        </div>
      </div>
    </div>
    <!-- 切换 -->
    <el-tabs v-model="activeName" class="detfloor">
      <el-tab-pane label="商品详情" name="first">
        <img v-for="(item, index) in detailArr.detshopping" :key="index" :src="item" alt="">
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <ul class="detapl">
          <li v-for="(item, index) in detailArr.delpl" :key="index">
            <p>来自:{{ item.telname }}</p>
            <p>{{ item.namepl }}</p>
            <span>{{ item.nametime }}</span>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="咨询" name="third" @click.prevent="textfoucs">
        <div class="consulting">
          <h3>我要咨询:</h3>
          <textarea ref="textdh" class="content" placeholder="您输入的字数不要超过60个字"></textarea>
          <button>提交</button>
        </div>
        <ul class="question">
          <li v-for="(item, index) in detailArr.questions" :key="index">
            <h3>问: {{ item.quetitle }}</h3>
            <div class="content">
              <p>用户: {{ item.answerArr.anname }}</p>
              <p>{{ item.answerArr.ancontent }}</p>
              <span>{{ item.answerArr.antime }}</span>
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getdetail } from '../api/api'
export default {
  data () {
    return {
      detailArr: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [],
      activeName: 'second',
      flag: false,
      detsum: 1,
      colorflag: 0,
      sizeflag: 0
    }
  },
  created () {
    getdetail('details').then(data => {
      this.detailArr = data[0]
      this.swiperSlides = data[0].detpic
    })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    // 添加数量
    addsum () {
      this.detsum += 1
    },
    // 减少数量
    redsum () {
      if (this.detsum === 1) {
        return false
      }
      this.detsum -= 1
    },
    addcolor (index) {
      this.colorflag = index
    },
    addsize (index) {
      this.sizeflag = index
    },
    // 咨询里的文本框获取焦点;
    textfoucs () {
      console.log(this.$refs.textdh)
      this.$refs.textdh[0].focus()
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  background: #fff;
  padding-bottom: 102px;
  box-sizing: border-box;
  .detnav {
    background: #b81c22;
    color: #fff;
    height: 96px;
    display: flex;
    i {
      font-style: normal;
      font-size: 60px;
      margin-left: 20px;
      line-height: 96px;
    }
    span {
      display: inline-block;
      font-size: 40px;
      text-align: center;
      line-height: 96px;
      flex: 1;
    }
  }
  .detheader {
    padding: 10px 30px;
    line-height: 44px;
    h3 {
      color: #4c4c4c;
      font-size: 28px;
    }
    span {
      color: #c8161e;
      font-size: 30px;
      display: block;
      line-height: 50px;
      s {
        margin-right: 20px;
        font-size: 28px;
      }
    }
    p {
      color: #c8161e;
      font-size: 28px;
    }
  }
  .cheap {
    border-top: #717070 1px solid;
    border-bottom: #717070 1px solid;
    padding: 20px 0px;
    height: 50px;
    width: 700px;
    margin: 0 auto;
    margin-top: 12px;
    span {
      color: #fff;
      border-radius: 3px;
      margin-right: 5px;
      padding: 2px;
      background: #b81c22;
      display: block;
      width: 50px;
      height: 30px;
      float: left;
    }
    p {
      float: left;
      display: block;
      height: 50px;
      width: 380px;
      color: #717070;
      font-size: 28px;
      margin-left: 30px;
    }
  }
  .chose {
    margin: 18px 20px;
    .choseBox {
      padding: 16px 16px;
      height: 60px;
      display: flex;
      // width: 100%;
      background: #f5f5f5;
      .chosepic {
        width: 40px;
        height: 40px;
        margin-right: 30px;
        display: inline-block;
        margin-top: 10px;
        margin-left: 30px;
      }
      .right {
        width: 50px;
        height: 50px;
        display: inline-block;
        margin-top: 10px;
        margin-right: 20px;
      }
      span {
        line-height: 60px;
        flex: 1;
      }
    }
    .all {
      height: auto;
      overflow: hidden;
      div {
        border-bottom: #4c4c4c 1px solid;
        padding-bottom: 30px;
      }
      h3 {
        color: #4d4d4d;
        font-size: 26px;
        padding: 20px;
        display: block;
        width: 100%;
      }
      span {
        display: inline-block;
        border: 2px solid #b3b3b3;
        border-radius: 2px;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 10px 16px;
      }
      .detactive {
        border: 2px solid #b81c22;
      }
      .color,
      .size {
        span:first-of-type {
          margin-left: 80px;
        }
      }
      i {
        display: inline-block;
        width: 52px;
        height: 52px;
        background: #f5f5f5;
        text-align: center;
        line-height: 52px;
        font-style: normal;
        font-size: 36px;
      }
      .sum {
        display: inline-block;
        height: 52px;
        width: 60px;
        background: #fff;
        border: 1px solid #aaa;
        margin: 0 20px;
        font-size: 24px;
        text-align: center;
        line-height: 52px;
      }
    }
  }
  .detfloor{
    .detapl{
      padding: 0 40px;
      margin-bottom: 20px;
      li{
        margin-top: 30px;
        position: relative;
        border-bottom: 1px dashed #999;
        color: #999;
        font-size: 24px;
        padding-bottom: 10px;
        p{
          margin-bottom: 10px;
        }
        span{
          position: absolute;
          top: 10px;
          right: 40px;
        }
      }
    }
    .consulting{
      height: 380px;
      background: #E3E3E3;
      font-size: 28px;
      padding: 10px 50px;
      margin-top: 30px;
      box-sizing: border-box;
      h3{
        height: 60px;
        color: #666;
        line-height: 60px;
      }
      .content{
        height: 174px;
        background: #fff;
        display: block;
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 26px;
        line-height: 34px;
        outline: #f00;
      }
      button{
        height: 64px;
        background: #D5200E;
        color: #fff;
        width: 100%;
        font-size: 24px;
        margin-top: 30px;
        border: none;
        outline: none;
      }
    }
    .question{
      padding: 10px 40px 30px;
      li{
        padding: 10px 0;
        border-bottom: 1px dashed #999;
        margin-top: 10px;
        font-size: 26px;
        position: relative;
        h3{
          color: #D5200E;
          line-height: 36px;
          padding-bottom: 10px;
        }
        .content{
          p{
            padding: 6px 0;
            line-height: 36px;
            color: #666;
          }
          p:first-of-type{
            color: #999;
          }
          span{
            position: absolute;
            top: 60px;
            right: 0;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
