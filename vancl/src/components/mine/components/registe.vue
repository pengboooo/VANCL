<template>
<div class="registe">
  <!-- 头部 -->
    <heads :manoe="m"></heads>
  <div class="cont">
    <ul>
      <li><input type="text" placeholder="请输入图片验证码" class="inp1"><img src="../images/PhoneLogin.jpg"></li>
      <li><input type="text" placeholder="请输入您的手机号" class="inp1"><button class="ri">获取验证码</button></li>
      <li><input type="text" placeholder="请输入手机验证码" class="inp2"></li>
      <li><input type="text" placeholder="密码:6-16位字母，数字，特殊字符"  class="inp2"></li>
      <li class="tip"><span>注册账号即表示同意遵守</span>《VANCL凡客服务条款》</li>
      <li><button class="btn">点击注册</button></li>
    </ul>
  </div>
</div>
</template>
<script>
import heads from './heads'
export default {
  components: {
    heads
  },
  data () {
    return {
      m: '免费注册'
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
  .tip{
    text-align: center;
  }
}
</style>
