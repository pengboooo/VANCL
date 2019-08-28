<template>
  <div class="home">
    <Goods></Goods>
    <Sale></Sale>
    <Recs></Recs>
    <Back></Back>
    <Btn></Btn>
  </div>
</template>

<script>
import Goods from './components/t-shirt'
import Sale from './components/sale'
import Recs from './components/recs'
import Back from './components/back'
import Btn from './components/btn'
export default {
  components:
  {
    Goods,
    Sale,
    Recs,
    Btn,
    Back
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home{
  margin-bottom: 102px;
}
</style>
