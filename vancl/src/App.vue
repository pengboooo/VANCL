<template>
  <div id="app">
   <Home></Home>
    <router-view/>
  </div>
</template>

<script>
import Home from '@/components/home/home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url("./assets/reset.css");
</style>
