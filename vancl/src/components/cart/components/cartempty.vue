<template>
  <div class="cartempty">
    <div class="emptytop">
      <div class="topcart">
        <img src="../images/iconcart.png" alt="">
        <p>购物车还是空的，赶紧去选购</p>
      </div>
    </div>
    <div class="emptybtn">
      <button>我的收藏</button>
      <button>去逛逛</button>
    </div>
    <div class="emptycontent">
      <span>{{ user }}</span>
      <i>|</i>
      <span>退出</span>
    </div>
    <div class="emptyfloor">
      <ul>
        <li>
          <p><img src="../images/iconphone.png" alt=""></p>
          <span>{{'内容'}}</span>
        </li>
        <li>
          <p><img src="../images/icondownload.png" alt=""></p>
          <span>{{'内容'}}</span>
        </li>
        <li>
          <p><img src="../images/iconWeChat.png" alt=""></p>
          <span>{{'内容'}}</span>
        </li>
        <li>
          <p><img src="../images/iconcomputer.png" alt=""></p>
          <span>{{'内容'}}</span>
        </li>
      </ul>
    </div>
    <div class="cartfloor">
      <p>京ICP证100557号</p>
    </div>
  </div>
</template>
<script>
export default({
  data () {
    return {
      user: ''
    }
  },
  created () {
    this.user = JSON.parse(sessionStorage.getItem('user')).datauser.nc
  }
})
</script>
<style lang="less" scoped>
  .cartempty{
    font-size: 24px;
    .emptytop{
      margin: 50px auto;
      width: 660px;
      height: 488px;
      border: 4px solid #D9D9D9;
      text-align: center;
      position: relative;
      .topcart{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        img{
        width: 56px;
        opacity: .5;
        line-height: 488px;
        }
        p{
          margin-top: 10px;
        }
      }
    }
    .emptybtn{
      padding: 0 50px;
      position: relative;
      button{
        width: 312px;
        height: 70px;
        background: #F5F5F5;
        color: #4d4d4d;
        border: none;
        font-size: 24px;
      }
      button:last-child{
        position: absolute;
        right: 50px;
      }
    }
    .emptycontent{
      width: 100%;
      height: 240px;
      text-align: center;
      line-height: 240px;
      i{
        font-style: normal;
        padding: 0 10px;
      }
    }
    .emptyfloor{
      padding: 0 107px;
      height: 186px;
      margin-bottom: 40px;
      ul{
        border-top: 2px solid #7C7C7C;
        border-bottom: 2px solid #7C7C7C;
        display: flex;
        justify-content: space-between;
        li{
          text-align: center;
          padding-bottom: 20px;
          p{
            width: 84px;
            height: 84px;
            border-radius: 50%;
            border: 2px solid #8F8F8F;
            position: relative;
            margin: 20px 0;
            img{
              width: 56px;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              margin: auto;
              opacity: .5;
            }
          }
        }
      }
    }
    .cartfloor{
      p{
        text-align: center;
      }
    }
  }
</style>
