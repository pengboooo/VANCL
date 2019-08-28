<template>
  <div id="app">
    <Common></Common>
    <router-view/>
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
</style>
