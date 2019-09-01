<template>
<div class="getback">
  <!-- 头部 -->
    <heads :manoe="m"></heads>
  <div class="cont">
    <ul>
      <li><input type="text" placeholder="请输入验证码" class="inp1" v-model="inpcode"   @blur="checkcode">
        <Gitma @msg='getdata' class="code"></Gitma>
        <span>{{tx1}}</span>
      </li>
      <li><input type="text" placeholder="请输入您的手机号" class="inp1" v-model="inpiph" @blur="iph"><button class="ri" @click="getiphone();open()">获取短信验证码</button>
        <span>{{tx2}}</span>
      </li>
      <li><input type="text" placeholder="请输入短信验证码" class="inp2" @blur="iph2" v-model="ipcode">
        <span>{{tx3}}</span>
      </li>
      <li><input type="text" placeholder="新密码:6-16位字母，数字，特殊字符" class="inp2"  v-model="pwdval" @blur="checkPwd">
        <span>{{tx4}}</span>
      </li>
      <li><input type="text" placeholder="再次输入新密码" class="inp2"  v-model="pwdval2" @blur="checkPwd2">
        <span>{{tx5}}</span>
      </li>
      <li><button class="btn" @click="veriAll">提交</button></li>
    </ul>
  </div>
</div>
</template>
<script>
import { Checks } from '../js/checks'
import { getback } from '@/api/api'
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
      but: false,
      code: ' ',
      inputcode: ' ',
      inpcode: '',
      tx1: ' ',
      tx2: '',
      tx3: '',
      pwdval: '',
      pwdval2: '',
      tx4: '',
      tx5: '',
      ipcode: '',
      numbers: '',
      inpiph: ''
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
        this.but = false
      } else if (this.inpcode !== this.code) {
        this.tx1 = '请输入正确验证码'
        this.but = false
      } else {
        this.tx1 = ''
        this.but = true
      }
    },
    iph () {
      let tool = new Checks()
      if (this.inpiph === '') {
        this.tx2 = '手机号不允许为空'
        this.but = false
      } else if (!tool.isTel(this.inpiph)) {
        this.tx2 = '手机号不合法'
        this.but = false
      } else {
        this.tx2 = ''
        this.but = true
      }
    },
    iph2 () {
      if (this.ipcode === '') {
        this.tx3 = '手机号验证码不允许为空'
        this.but = false
      } else if (+this.ipcode !== this.numbers) {
        this.tx3 = '手机验证码不允许为空'
        this.but = false
      } else if (+this.ipcode !== this.numbers) {
        this.tx3 = '验证码输入错误'
        this.but = false
      } else {
        this.tx3 = ''
        this.but = true
      }
    },
    checkPwd () {
      let tool = new Checks()
      if (this.pwdval === '') {
        this.tx4 = '密码不能为空'
        this.but = false
      } else if (!tool.isPwd(this.pwdval)) {
        this.tx4 = '密码不合法'
        this.but = false
      } else {
        this.tx4 = ''
        this.but = true
      }
    },
    checkPwd2 () {
      let tool = new Checks()
      if (this.pwdval2 === '') {
        this.tx5 = '密码不能为空'
        this.but = false
      } else if (!tool.isPwd(this.pwdval2)) {
        this.tx5 = '密码不合法'
        this.but = false
      } else if (this.pwdval !== this.pwdval2) {
        this.tx5 = '两次密码不一致'
        this.but = false
      } else {
        this.tx5 = ''
        this.but = true
      }
    },
    veriAll () {
      if (this.but === true) {
        let users = {
          id: 3,
          tel: +this.inpiph,
          pwd: this.pwdval
        }
        getback(users).then(data => {
          if (data.codel === 200) {
            console.log('成功了')
            this.$router.push({path: '/mine'})
          }
        })
      }
    },
    open () {
      // 获取手机验证码弹窗
      this.$alert(this.numbers, '您获取的手机验证码', {
        confirmButtonText: '确定'
      })
    },
    getiphone () {
      // 产生随机数 下取整
      let numbers = Math.floor(Math.random() * (999999 - 100000) + 100000)
      this.numbers = numbers
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
        width: 100%;
        height: 25px;
        margin-top: 10px;
        line-height: 30px;
        color: #b81b22!important;
        margin-bottom: -20px;
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
