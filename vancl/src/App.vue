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
/* 详情页面修改样式 start */
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
.el-tabs__item.is-active {
    color: #f00;
}
.el-tabs__item:hover {
    color: #f00;
    cursor: pointer;
}
.el-badge__content.is-fixed {
    position: absolute;
    top: 10px;
    right: 46px;
    font-size: 28px;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(100%);
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
}
.el-badge__content {
  background-color: #B81C22;
}
[class*=" el-icon-"], [class^=el-icon-] {
  font-size: 52px;
}
/* 详情页面修改样式 end */
/* 购物车修改删除提示框样式  start */
.el-message-box{
  width: 560px;
  height: 200px;
}
.el-message-box__title{
  font-size: 28px;
  padding-top: 6px
}
.el-message-box__headerbtn .el-message-box__close {
    color: #909399;
    width: 34px;
    height: 34px;
    font-size: 34px;
}
.el-message-box__message p{
  font-size: 24px;
  padding: 10px 0;
}
.el-button--small, .el-button--small.is-round {
    padding: 0.12rem 0.2rem;
    width: 120px;
    height: 40px;
    font-size: 20px;
    margin-top: 10px;
}
/* 购物车修改删除提示框样式  end */
</style>
