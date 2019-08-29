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
  </div>
</template>
<script>
import search from './components/search'
import banner from './components/banner'
import homenav from './components/homenav'
import jingxuan from './components/jingxuan'
import miaosha from './components/miaosha'
export default {
  components: {
    search,
    banner,
    homenav,
    jingxuan,
    miaosha
  }
}
</script>
