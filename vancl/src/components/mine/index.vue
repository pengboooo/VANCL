<template>
  <div class="mine">
    <!-- 头部 -->
    <mineheader></mineheader>
    <!-- 中间 -->
    <minecontent></minecontent>
    <!-- 底部 -->
    <minefloor></minefloor>
  </div>
</template>

<script>
import mineheader from './components/mineheader'
import minecontent from './components/minecontent'
import minefloor from './components/minefloor'
export default {
  name: 'mine',
  data () {
    return {
    }
  },
  components: {
    mineheader,
    minecontent,
    minefloor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine{
  background: #F0EFF5;
}
</style>
