<template>
  <div class="mineheader">
    <div class="headertop">
      <span></span>
      <div class="pic">
        <img src="http://i10.m.vancl.com/Content/H5/img/H5-V0.jpg" alt="">
      </div>
      <p>ThirdSign_qq_E20B46381931A98127E8400E408F8D0B</p>
      <i></i>
    </div>
    <ul>
      <li>积分：</li>
      <li>余额：</li>
      <li>成长值：</li>
    </ul>
  </div>
</template>
<script>
export default({

})
</script>
<style lang="less" scoped>
.mineheader{
  width: 100%;
  font-size: 24px;
  height: 428px;
  background: url(http://i10.m.vancl.com/Content/H5/img/uc-topbgd.png) no-repeat center top;
  background-size: cover;
  color: #fff;
  .headertop{
    width: 100%;
    height: 336px;
    padding: 0 20px;
    span{
      background: url(http://i10.m.vancl.com/Content/H5/img/order-icon.png) no-repeat 0 0;
      background-size: 46px;
      display: block;
      width: 44px;
      height: 48px;
      position: relative;
      top: 4%;
      left: 94%;
    }
    .pic{
      margin: 0 auto;
      width: 144px;
      height: 144px;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 20px;
      img{
        width: 100%;
      }
    }
    p{
      text-align: center;
      margin-top: 20px;
    }
    i{
      width: 120px;
      height: 36px;
      background: url(http://i10.m.vancl.com/Content/H5/img/H5-NewV0.png) no-repeat center 0;
      background-size: 120px;
      display: block;
      margin: 20px auto 0;
    }
  }
  ul{
    padding: 10px 120px 0;
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    li{

    }
  }
}
</style>
