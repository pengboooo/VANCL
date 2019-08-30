<template>
  <div id="app">
    <Common></Common>
    <transition  enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
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
.animated {
    animation-duration: 0.5s;
    animation-fill-mode: both;
}
#app{
  height: 100%;
  width: 100%;
}

</style>
