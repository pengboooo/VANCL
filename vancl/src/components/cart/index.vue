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
  created () {
    if (!JSON.parse(sessionStorage.getItem('user'))) {
      this.$router.push({path: '/login'})
    }
  },
  components: {
    cartnav,
    cartcontent
  },
  method () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart{
  height: 100%;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding-bottom: 102px;
}
</style>
