<template>
  <div class="minefloor">
    <ul>
      <li v-for="(item, index) in mineNav" :key="index">
        <span></span>
        <p>{{ item }}</p>
      </li>
    </ul>
    <p>ahsjka</p>
    <p>ahsjka</p>
    <p>ahsjka</p>
    <p>ahsjka</p>
    <p>ahsjka</p>
    <p>ahsjka</p>
    <p>ahsjka</p>
    <p>ahsjka</p>
  </div>
</template>
<script>
import { getminenav } from '../../../api/api'
export default({
  data () {
    return {
      mineNav: []
    }
  },
  async created () {
    await getminenav('mine/nav').then(data => {
      console.log(data)
      this.mineNav = data
    })
  }
})
</script>
<style lang="less" scoped>
.minefloor{
  width: 100%;
  background: #fff;
  font-size: 22px;
  ul{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-bottom: 2px solid #F0EFF5;
    li{
      margin-top: 30px;
      width: 25%;
      text-align: center;
      padding-bottom: 30px;
      border-bottom: 2px solid #F0EFF5;
      position: relative;
      span{
        display: block;
        width: 72px;
        height: 72px;
        margin: 0 auto 10px;
      }
    }
    li::after{
      content: '';
      display: block;
      width: 2px;
      height: 112px;
      background: #F0EFF5;
      position: absolute;
      top: 0;
      right: 0;
    }
    li:last-child::after, li:nth-child(4n)::after{
      content: '';
      display: none;
    }
    li:nth-child(1) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center 0px;
        background-size: 72px;
    }
    li:nth-child(2) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -72px;
        background-size: 72px;
    }
    li:nth-child(3) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -864px;
        background-size: 72px;
    }
    li:nth-child(4) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -936px;
        background-size: 72px;
    }
    li:nth-child(5) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -288px;
        background-size: 72px;
    }
    li:nth-child(6) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -144px;
        background-size: 72px;
    }
    li:nth-child(7) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -216px;
        background-size: 72px;
    }
    li:nth-child(8) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -504px;
        background-size: 72px;
    }
    li:nth-child(9) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -360px;
        background-size: 72px;
    }
    li:nth-child(10) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -432px;
        background-size: 72px;
    }
    li:nth-child(11) span{
      background: url(http://i10.m.vancl.com/Content/H5/img/uc-section-icon.png) no-repeat center -576px;
        background-size: 72px;
    }
  }
}
</style>
