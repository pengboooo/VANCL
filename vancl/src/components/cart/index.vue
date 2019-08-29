<template>
  <div class="cart">
    <cartnav></cartnav>
    <cartcontent></cartcontent>
    <router-view></router-view>
  </div>
</template>

<script>
import cartnav from './components/cartnav'
import cartcontent from './components/cartcontent'
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  components: {
    cartnav,
    cartcontent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart{
  height: 100%;
  width: 100%;
  background: #fff;
  padding-bottom: 98px;
}
</style>
