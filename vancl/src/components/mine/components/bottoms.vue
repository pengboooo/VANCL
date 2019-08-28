<template>
  <div class="bottom">
    <div class="backbot">
      <span>免费注册&nbsp;></span>
      <span>手机账号取回密码&nbsp;></span>
    </div>
    <p>使用其他账号登录</p>
    <ul>
      <li><img src="../images/zhb.png" alt=""></li>
      <li><img src="../images/wx.png" alt=""></li>
      <li><img src="../images/QQ.png" alt=""></li>
      <li><img src="../images/wb.png" alt=""></li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="less" scoped>
.bottom{
  margin-top: 30px;
  padding: 0 10px;
  .backbot{
    height: 50px;
    margin-top: 20px;
    span{
      display: inline-block;
      color: #4c4c4c;
      font-size: 22px;
       &:hover{
        color: #b81b22;
        cursor: pointer;
      }
    }
    span:first-child {
      float: left;
    }
    span:last-child {
      float: right;
    }
  }
  p{
    float: left;
    display: block;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
    font-size: 26px;
    margin-top: 60px;
  }
  ul{
    li{
      width: 50px;
      height: 50px;
      float: left;
      margin-left: 30px;
    }
    li:first-child{
      margin-left: 0px;
    }
  }
}
</style>
