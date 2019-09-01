<template>
  <swiper :options="swiperOption" v-if="swiperSlides.length">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Banner } from '@/api/api.js'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true
      },
      swiperSlides: []
    }
  },
  created () {
    Banner().then(data => {
      this.swiperSlides = data
    })
  }
}
</script>
<style  scoped>
img{
  width: 100%;
}

</style>
