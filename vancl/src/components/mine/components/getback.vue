<template>
<div class="getback">
  <!-- 头部 -->
    <heads :manoe="m"></heads>
  <div class="cont">
    <ul>
      <li><input type="text" placeholder="请输入验证码" v-model="inpcode" class="inp1"  @blur="checkcode" ref = "loginInp1">
        <Gitma @msg='getdata' class="code"></Gitma>
        <span>{{tx1}}</span>
      </li>
      <li><input type="text" placeholder="请输入您的手机号" class="inp1"><button class="ri" @click="getiphone">获取短信验证码</button></li>
      <li><input type="text" placeholder="请输入短信验证码" class="inp2"></li>
      <li><input type="text" placeholder="新密码:6-16位字母，数字，特殊字符" class="inp2"></li>
      <li><input type="text" placeholder="再次输入新密码" class="inp2"></li>
      <li><button class="btn">提交</button></li>
    </ul>
  </div>
</div>
</template>
<script>
import heads from './heads'
import Gitma from './gitma'
export default {
  components: {
    heads,
    Gitma
  },
  data () {
    return {
      m: '找回密码',
      code: '',
      inputcode: '',
      tx1: ''
    }
  },
  methods: {
    getdata (data) {
      // 事件分发监听
      this.code = data
    },
    checkcode () {
      if (this.inpcode === '') {
        this.tx1 = '验证码不允许为空'
      } else if (this.inpcode !== this.code) {
        this.tx1 = '请输入正确验证码'
      } else {
        this.tx1 = ''
      }
    },
    getiphone () {
      // 产生随机数
      return Math.random() * (999999 - 100000) + 100000
    }
  }
}
</script>
<style lang="less" scoped>
.getback{
  background: white;
  width: 100%;
  height: 100%;
}
.cont{
  padding: 48px;
  background: white;
  li{
    margin-bottom: 40px;
    input{
      flex: 6;
      border: 0;
      font-size: 24px;
      background: #f5f5f5;
      color:#b5b5b5;
      box-sizing: border-box;
      padding: 16px;
      margin-right: 30px;
    }
     .code{
       flex: 4;
       display: inline-block;
       font-size: 35px;
      }
      span{
        display: block;
        margin-top: 10px;
        line-height: 30px;
        color: #b81b22;
      }
    .inp1{
      width: 378px;
      height: 73px;
    }
    .inp2{
      width: 654px;
      height: 73px;
    }
    img{
      display: inline-block;
      width: 144px;
      height: 70px;
      float: right;
    }
    .ri{
        color: #b81b22;
        font-size: 24px;
        background: white;
        border: 2px solid #b2b2b2;
        padding: 15px 24px;
        border-radius: 8px;
        text-align: center;
        float: right;
      }
    .btn{
      height: 80px;
      width: 654px;
      background: #b81b22;
      color: white;
      font-size: 32px;
      text-align: center;
      border-radius: 6px;
    }
    span{
      font-size: 24px;
      color: #b3b3b3;
    }
  }
}
</style>
