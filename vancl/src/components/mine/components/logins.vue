<template>
  <div class="logins">
    <input type="text" class="pic" placeholder="请输入图片验证码" v-model="picval" @blur="checkPic"><br>
    <img src="../images/PhoneLogin.jpg" alt="">
    <span>{{tx1}}</span>
    <input type="text" class="tel" placeholder="请输入您的手机号" v-model="telval" @blur="checkTel">
    <a>获取动态密码</a>
    <span>{{tx2}}</span>
    <input type="text" placeholder="请输入手机登录密码" v-model="telpwdval" @blur="checkTelpwd">
    <span>{{tx3}}</span>
    <button @click="allCheck">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
    <!-- 登录底部组件 -->
    <bottoms></bottoms>
  </div>
</template>
<script>
import { Checks } from '../js/checks'
import bottoms from './bottoms'
export default {
  data () {
    return {
      picval: '',
      telval: '',
      telpwdval: '',
      tx1: '',
      tx2: '',
      tx3: ''
    }
  },
  methods: {
    checkPic () {
      if (this.telval === '') {
        this.tx1 = '验证码不能为空'
      }
    },
    checkTel () {
      let tool = new Checks()
      console.log(tool)
      if (this.telval === '') {
        this.tx2 = '手机号不能为空'
      } else if (!tool.isTel(this.telval)) {
        this.tx2 = '手机号码不合法'
      }
    },
    checkTelpwd () {
      let tool = new Checks()
      if (this.pwdval === '') {
        this.tx3 = '密码不能为空'
      } else if (!tool.isPwd(this.pwdval)) {
        this.tx3 = '密码不合法'
      }
    },
    allCheck () {
      let tool = new Checks()
      if (this.telval === '') {
        this.tx1 = '验证码不能为空'
      } else if (this.telval === '') {
        this.tx2 = '手机号不能为空'
      } else if (!tool.isTel(this.telval)) {
        this.tx2 = '手机号码不合法'
      } else if (this.pwdval === '') {
        this.tx3 = '密码不能为空'
      } else if (!tool.isPwd(this.pwdval)) {
        this.tx3 = '密码不合法'
      }
    }
  },
  components: {
    bottoms
  }
}
</script>
<style lang="less" scoped>
.logins{
  position: relative;
  padding: 0 60px;
  .pic,.tel{
    width: 60%;
  }
  img{
    display: inline-block;
    width: 156px;
    height: 64px;
    position: absolute;
    right: 60px;
    top: 90px;
  }
  a{
    width: 152px;
    height: 50px;
    vertical-align: middle;
    line-height: 52px;
    padding: 0px;
    color: #b71c22;
    font-size: 24px;
    background: #fff;
    border:4px solid #b2b2b2;
    padding: 15px 24px;
    border-radius: 4px;
    text-align: center;
    float: right;
    margin-top: 80px;
  }
  input{
    border: 0;
    font-size: 24px;
    display: inline-block;
    background: #f5f5f5;
    color: #b5b5b5;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 80px;
    height: 90px;
    font-size: 28px
  }
  span{
    color: red;
   display: block;
   margin-top: 20px;
   position: fixed;
  }
   button{
    margin-top: 80px;
    border: none;
    outline: none;
    display: block;
    border-radius: 60px;
    width: 100%;
    height: 100px;
    background: #b81b22;
    color: #fff;
    padding: 10px 0;
    font-size: 32px;
    text-align: center;
  }
}
</style>
