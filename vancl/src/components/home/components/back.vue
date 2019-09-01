<template>
  <div class="back">
    <router-link to="/category" class="nn">
      <img v-lazy="'https://mi5.vanclimg.com/content/html5v3/images/see-all.jpg'">
    </router-link>
    <span class="nm" v-if="btnFlag" @click="backTop">
      <img v-lazy="'https://mi5.vanclimg.com/content/html5v3/images/ret-top.jpg'">
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnFlag: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 300) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.back{
  height: 90px;
  width: 100%;
  img{
    width: 370px;
    height: 90px;
  }
  .nn{
    float: left;
  }
  .nm{
    float: left;
    margin-left: 9px;
  }
}
</style>
