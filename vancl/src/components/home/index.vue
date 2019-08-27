<template>
  <div class="home">
    <div class="content-l">
      <ul>
       <li @click="getindex(index)" :class="actives === index? 'active':''" v-for="(item,index) in listdata" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="content-r">
      <ul>
        <li  v-for="(item,index) in rigehtdata[0].lists" :key="index">
          <img :src="item.img" alt="">
          <span>{{item.spans}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSlide } from '../../api/api'
export default {
  name: 'home',
  created () {
    getSlide('fklist').then(data => {
      this.listdata = data
    })
    getSlide('getlistdata?id=1').then(data => {
      console.log(data.lists)
      this.rigehtdata = data
    })
  },
  methods: {
    getindex (index) {
      this.actives = index
      var url = `getlistdata?id=${index}`
      getSlide(url).then(data => {
        console.log(data)
        // this.rigehtdata = data.lists
      })
    }
  },
  data () {
    return {
      listdata: '',
      actives: 1,
      rigehtdata: 'akHFKSHFLKAI'
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
@import url("../../style/common.css");
.active{
  background: #fff;
}
  .home{
    display: flex;
     height: 100%;
  .content-l{
     height: 100%;
    flex: 2.5;
    ul{
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      background: rgb(209, 209, 209);
      li{
        font-size: 30px;
        width: 188px;
        height: 74px;
        line-height: 74px;
        text-align: center;
        border-bottom: 2px solid #fff;
        box-sizing: border-box;
      }
    }
    }
  .content-r {
  flex: 7.5;
  height: 100%;
  ul{
   height:100%;
   justify-content: flex-start;
    li{
      font-size: 30px;
      text-align: center;
      img{
        width: 140px;
        height: 140px;
      }
    }
  }
  }
  }
</style>
