<template>
  <div class="home">
      <!-- 搜索框 -->
    <search></search>
    <!-- 轮播图 -->
    <banner></banner>
    <!-- 菜单 -->
    <homenav></homenav>
    <!-- 精选模块 -->
    <jingxuan></jingxuan>
    <!-- 秒杀模块 -->
    <miaosha></miaosha>
    <Goods></Goods>
    <Sale></Sale>
    <Recs></Recs>
    <Back></Back>
    <Btn></Btn>
  </div>
</template>

<script>
import search from './components/search'
import banner from './components/banner'
import homenav from './components/homenav'
import jingxuan from './components/jingxuan'
import miaosha from './components/miaosha'
import Goods from './components/t-shirt'
import Sale from './components/sale'
import Recs from './components/recs'
import Back from './components/back'
import Btn from './components/btn'
export default {

  name: 'channel',
  data () {
    return {
      msg: '首页'
    }
  },

  components:
  {
    search,
    banner,
    homenav,
    jingxuan,
    miaosha,
    Goods,
    Sale,
    Recs,
    Btn,
    Back
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.home{
  margin-bottom: 102px;
  overflow: hidden;
}
</style>
