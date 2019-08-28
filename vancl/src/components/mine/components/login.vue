<template>
  <div class="login">
    <input type="text" placeholder="点击输入手机号" v-model="telval" @blur="checkTel"><br>
    <span>{{tx1}}</span>
    <input type="text" placeholder="请输入密码" v-model="pwdval" @blur="checkPwd">
    <span>{{tx2}}</span>
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
      telval: '',
      pwdval: '',
      tx1: '',
      tx2: ''
    }
  },
  methods: {
    checkTel () {
      let tool = new Checks()
      console.log(tool)
      if (this.telval === '') {
        this.tx1 = '手机号不能为空'
      } else if (!tool.isTel(this.telval)) {
        this.tx1 = '手机号码不合法'
      }
    },
    checkPwd () {
      let tool = new Checks()
      if (this.pwdval === '') {
        this.tx2 = '密码不能为空'
      } else if (!tool.isPwd(this.pwdval)) {
        this.tx2 = '密码不合法'
      }
    },
    allCheck () {
      let tool = new Checks()
      if (this.telval === '') {
        this.tx1 = '手机号不能为空'
      } else if (!tool.isTel(this.telval)) {
        this.tx1 = '手机号码不合法'
      } else if (this.pwdval === '') {
        this.tx2 = '密码不能为空'
      } else if (!tool.isPwd(this.pwdval)) {
        this.tx2 = '密码不合法'
      }
    }

  },
  components: {
    bottoms
  }
}
</script>
<style lang="less" scoped>
.login{
  padding: 0 60px;
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
