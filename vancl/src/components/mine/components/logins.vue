<template>
  <div class="logins">
    <input type="text" class="pic" placeholder="请输入图片验证码" v-model="picval" @blur="checkPic">
    <Gitma @msg='getdata' class="code"></Gitma>
    <span>{{tx1}}</span>
    <input type="text" class="tel" placeholder="请输入您的手机号" v-model="telval" @blur="checkTel">
    <a @click="giePWD">获取动态密码</a>
    <span>{{tx2}}</span>
    <input type="text" placeholder="请输入手机登录密码" v-model="telpwdval" @blur="checkTelpwd">
    <span>{{tx3}}</span>
     <el-button :plain="true" @click="allCheck">登录</el-button>
    <!-- 登录底部组件 -->
    <bottoms></bottoms>
  </div>
</template>
<script>
import Gitma from './gitma'
import { Checks } from '../js/checks'
import bottoms from './bottoms'
import { registe } from '@/api/api'
export default {
  data () {
    return {
      code: '',
      picval: '',
      telval: '',
      telpwdval: '',
      tx1: '',
      tx2: '',
      tx3: '',
      but: false
    }
  },
  methods: {
    getdata (data) {
      // 事件分发监听
      this.code = data
    },
    checkPic () {
      if (this.picval === '') {
        this.tx1 = '验证码不能为空'
        this.but = false
      } else if (this.picval !== this.code) {
        this.tx1 = '请输入正确验证码'
        this.but = false
      } else {
        this.tx1 = ''
        this.but = true
      }
    },
    checkTel () {
      let tool = new Checks()
      console.log(tool)
      if (this.telval === '') {
        this.tx2 = '手机号不能为空'
        this.but = false
      } else if (!tool.isTel(this.telval)) {
        this.tx2 = '手机号码不合法'
        this.but = false
      } else {
        this.tx2 = ''
        this.but = true
      }
    },
    checkTelpwd () {
      let tool = new Checks()
      if (this.pwdval === '') {
        this.tx3 = '密码不能为空'
        this.but = false
      } else if (!tool.isPwd(this.pwdval)) {
        this.tx3 = '密码不合法'
        this.but = false
      } else {
        this.tx3 = ''
        this.but = true
      }
    },
    allCheck () {
      if (this.but === true) {
        let user = {
          id: 1,
          tel: +this.telval,
          pwd: this.telpwdval

        }
        console.log('填好了')
        registe(user).then(data => {
          if (data.codel === 200) {
            this.$router.push({path: '/home'})
            this.$notify({
              title: '成功',
              message: '注册成功，请登录',
              type: 'success'
            })
          } else {
            this.telval = ''
            this.$notify({
              title: '警告',
              message: '这个手机号已经注册了',
              type: 'warning'
            })
          }
        })
      } else {
        this.$message({
          message: '请将信息填写完整',
          type: 'warning'
        })
      }
    },
    giePWD () {
      let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'g', 'u', 'v', 'w', 's', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'G', 'U', 'V', 'W', 'S', 'Y', 'Z']
      var pwd = ''
      for (let index = 0; index < 7; index++) {
        let number = Math.floor(Math.random() * (arr.length - 0) + 0)
        pwd += arr[number]
      }
      this.$alert(pwd, '您生成的随机动态码', {
        confirmButtonText: '确定'
      })
    }
  },
  components: {
    bottoms,
    Gitma
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
  .code{
        position: absolute;
        top: 100px;
        right: 60px;
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
  span{
    color: red;
   display: block;
   margin-top: 20px;
   position: fixed;
  }
   button{
     letter-spacing:20px;
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
