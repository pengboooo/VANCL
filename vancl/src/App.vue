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
@import url("./style/common.css");
@import url("./assets/reset.css");
#app{
  height: 100%;
  width: 100%;
}

</style>
