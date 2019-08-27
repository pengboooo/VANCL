<template>
  <div class="kill">
    <div class="top">
       <h3><i></i>每日秒杀<span>15点场</span></h3>
       <div class="killtime">
          距结束 <span>{{showTime.hour}}</span>: <span>{{showTime.m}}</span>: <span>{{showTime.s}}</span>
       </div>
    </div>
    <div class="bom">
        <ul>
          <li v-for='(item,index) in miaoshaArr' :key='index'>
            <img :src="item.img" alt="">
            <span>{{item.price}}</span>
            <s>{{item.Reprice}}</s>
          </li>
           <div class="more">
              <a href="#">查看更多 v</a>
            </div>
        </ul>
    </div>
  </div>
</template>
<script>
import { Miaosha } from '../../../axios/axios'
export default {
  data () {
    return {
      dingshi: '',
      timer: null,
      miaoshaArr: [],
      showTime: {
        hour: '',
        m: '',
        s: ''

      }
    }
  },
  methods: {
    killTime () {
    // 截止日期
      // let endDate = new Date("2019/6/26 12:00:00")
      let endDate = new Date('2019/8/27 22:00:00')
      let nowDate = new Date()
      let diffTime = parseInt((endDate.getTime() - nowDate.getTime()) / 1000)
      // console.log(diffTime);
      // 将时间转换为时分秒格式，小时
      let hour = parseInt(diffTime / 3600)
      let s = diffTime % 60
      let m = parseInt(diffTime / 60) % 60

      // 对小于10的数字补零
      hour = addZero(hour)
      m = addZero(m)
      s = addZero(s)

      return {
        hour,
        m,
        s
      }
      // 小于10的数字补零;
      function addZero (num) {
        if (num < 10) {
          return '0' + num
        }
        return num
      }
    }
  },
  mounted () {
    this.dingshi = setInterval(() => {
      this.showTime = this.killTime()
    }, 1000)
    Miaosha().then(data => {
      console.log(data.data)
      this.miaoshaArr = data.data
    })
  },
  destroyed () {
    clearInterval(this.dingshi)
  }
}
</script>
<style lang="less" scoped>
.kill{
  .top{
     background-color: #FAFAFA;
     position: relative;
     h3{
    padding:20px;
    font-size: 26px;
    line-height: 20px;
    display:inline-block;
    width: 50%;
    i{
      display: inline-block;
      width: 52px;
      height: 38px;
      margin-right: 5px;
      vertical-align: middle;
      background: url(http://i10.m.vancl.com/Content/H5/img/wallet-clock-hot.png) no-repeat;
      background-size: 35px;
      background-position: 0px -36px;
    }
    span{
      margin-left: 30px;
      color: #adadad;
      font-size: 24px;
    }
    span:before{
        display: inline-block;
        height: 32px;
        width: 2px;
        content:'';
        background-color: #adadad;
        margin: 0 30px;
        position: relative;
        top:10px;
        }
     }
     .killtime{
        float: right !important;
        color: #adadad;
        font-size: 24px;
       width: 35%;
       height: 100%;
        line-height:86px;
        span{
          display: inline-block;
          margin: 0 5px;
          width: 28px;
          line-height: 28px;
          color: #fff;
          text-align: center;
          border-radius: 2px;
          background-color: #b81c22;
          border-radius: 6px;

        }
     }
  }
  .bom{
     overflow: hidden;
  width: 100%;
  background: #fff;
    ul{
      display: flex;
      overflow-x: auto;
      li{
        padding: 0 20px;
        img{
          width: 200px;
        }
        span{
              color: #b81c22;
              font-size: 22px;
              margin-left: 20px;
        }
        s{
          color: #adadad;
          font-size: 16px;
        }
      }
      li:first-child {
        padding-left: 0;
      }
     .more{
       margin-left: 20px;
       margin-top: 20px;
       width: 82px;
       height: 240px;
       padding: 30px 10px;
         text-align: center;
          letter-spacing: 4px;
          border: 1px solid #cdba8d;
          border-radius: 4px;
          box-sizing: border-box;
        a{
          display: inline-block;
          color: #cdba8d;
         }
      }
    }
      ul::-webkit-scrollbar {display:none}
  }
}
</style>
