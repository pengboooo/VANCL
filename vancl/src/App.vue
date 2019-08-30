<template>
  <div id="app">
    <Common></Common>
    <transition class="fadeln">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import Common from '@/common/Common.vue'
export default {
  name: 'App',
  components: {
    Common
  }
}
</script>

<style>
@import url("./assets/reset.css");
#app{
  height: 100%;
  width: 100%;
}
.el-tabs__nav {
    white-space: nowrap;
    position: relative;
    transition: -webkit-transform .3s;
    -webkit-transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    /* float: left; */
    z-index: 2;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
}
.el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.02667rem;
    background-color: #f00;
    z-index: 1;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
}
.el-tabs__item {
    flex: 1;
    height: 60px;
    box-sizing: border-box;
    line-height: 60px;
    display: inline-block;
    list-style: none;
    font-weight: 500;
    color: #303133;
    position: relative;
    text-align: center;
    flex: 1;
    font-size: 28px;
}
.el-tabs__item:hover {
    color: #f00;
    cursor: pointer;
}
</style>
