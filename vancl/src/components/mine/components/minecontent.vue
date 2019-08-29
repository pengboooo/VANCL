<template>
  <div class="minecontent">
    <h3>
      <span>全部订单</span>
      <i>&gt;</i>
    </h3>
    <ul>
      <li>
        <p class="mineicon1"></p>
        <span>进行中</span>
      </li>
      <li>
        <p class="mineicon2"></p>
        <span>已完成</span>
      </li>
      <li>
        <p class="mineicon3"></p>
        <span>待评论</span>
      </li>
      <li>
        <p class="mineicon4"></p>
        <span>无效</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="less" scoped>
.minecontent{
  width: 100%;
  height: 224px;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 24px;
  h3{
    height: 84px;
    padding: 0 20px;
    line-height: 84px;
    border-bottom: 2px solid #F0EFF5;
    position: relative;
    font-size: 26px;
    i{
      font-style: normal;
      position: absolute;
      right: 20px;
      top: 0;
      display: block;
      width: 60px;
      height: 100%;
      text-align: center;
      font-size: 40px;
    }
  }
  ul{
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    li{
      width: 25%;
      text-align: center;
      padding-top: 30px;
      box-sizing: border-box;
      p{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin: 0 auto 10px;
      }
      .mineicon1{
        background: url(http://i10.m.vancl.com/Content/H5/img/order-icon.png) no-repeat center -56px;
        background-size: 48px;
      }
      .mineicon2{
        background: url(http://i10.m.vancl.com/Content/H5/img/order-icon.png) no-repeat center -110px;
        background-size: 48px;
      }
      .mineicon3{
        background: url(http://i10.m.vancl.com/Content/H5/img/uc-order-icon.png) no-repeat center -216px;
        background-size: 48px;
      }
      .mineicon4{
        background: url(http://i10.m.vancl.com/Content/H5/img/order-icon.png) no-repeat center -162px;
        background-size: 48px;
      }
    }
  }
}
</style>
