<template>
<div class="registe">
  <!-- 头部 -->
    <heads :manoe="m"></heads>
  <div class="cont">
    <ul>
      <li><input type="text" placeholder="请输入图片验证码" class="inp1" v-model="inpcode"   @blur="checkcode">
        <Gitma @msg='getdata' class="code"></Gitma>
        <span>{{tx1}}</span>
      </li>
      <li><input type="text" placeholder="请输入您的手机号" class="inp1" v-model="inpiph" @blur="iph">
        <button class="ri" @click="getiphone();open()">获取验证码</button>
         <span>{{tx2}}</span>
      </li>
      <li><input type="text" placeholder="请输入手机验证码" class="inp2" @blur="iph2" v-model="ipcode">
        <span>{{tx3}}</span>
      </li>
      <li><input type="text" placeholder="密码:6-16位字母，数字，特殊字符"  class="inp2" v-model="pwdval" @blur="checkPwd">
         <span>{{tx4}}</span>
      </li>
      <li class="tip"><i>注册账号即表示同意遵守</i>《VANCL凡客服务条款》</li>
      <li><button class="btn"  @click="veriAll">点击注册</button></li>
    </ul>
  </div>
</div>
</template>
<script>
import Gitma from './gitma'
import heads from './heads'
import { Checks } from '../js/checks'
import { registe } from '@/api/api'
export default {
  components: {
    heads,
    Gitma
  },
  data () {
    return {
      m: '免费注册',
      but: false,
      inpcode: '',
      tx1: '',
      inpiph: '',
      tx2: '',
      numbers: '',
      tx3: '',
      ipcode: '',
      tx4: '',
      pwdval: ''

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
    },
    iph2 () {
      if (this.ipcode === '') {
        this.tx3 = '手机验证码不允许为空'
        this.but = false
      } else if (+this.ipcode !== this.numbers) {
        console.log(this.ipcode)

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
    veriAll () {
      if (this.but === true) {
        let users = {
          id: 3,
          tel: +this.inpiph,
          pwd: this.pwdval
        }
        console.log(users)
        registe(users).then(data => {
          if (data.codel === 200) {
            this.$router.push({path: '/login'})
            this.$notify({
              title: '成功',
              message: '注册成功，请登录',
              type: 'success'
            })
          } else {
            this.inpiph = ''
            this.$notify({
              title: '警告',
              message: '这个手机号已经注册了',
              type: 'warning'
            })
          }
        })
      } else {
        this.$notify.error({
          title: '错误',
          message: '请将以上信息填写完整'
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.registe{
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
      border: 0;
      font-size: 24px;
      background: #f5f5f5;
      color:#b5b5b5;
      box-sizing: border-box;
      padding: 16px;
    }
     .code{
       flex: 4;
       display: inline-block;
       font-size: 35px;
       margin-left: 65px;
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
    i{
      font-size: 24px;
      color: #b3b3b3;
    }
  }
  .tip{
    text-align: center;
  }
}
</style>
