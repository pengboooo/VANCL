<template>
  <div class="cart">
    <div class="cartcontent" v-if="cartflag">
      <!-- 多选/删除全部 -->
      <div class="contentcheck">
        <span>在售商品：</span>
        <button @click.prevent="btncheck">{{ checkval }}</button>
        <el-button type="text" @click="openall" :class="!delflag ? 'activebtn' : ''">删除全部</el-button>
      </div>
      <!-- 商品 -->
      <ul ref="cartul">
        <li v-for="(item, index) in shoppingArr" :key="index">
          <input class="boxposition" type="checkbox" v-model="item.cartcheckbox" @change="itemschange">
          <img :src="item.cartpic" alt="">
          <div class="content">
            <h3>{{ item.cartname }}</h3>
            <p>颜色： {{ item.cartcolor }}</p>
            <p>尺码： {{ item.cartsize }}</p>
            <span>￥{{ item.cartmoney * item.cartsum }}</span>
            <i @click="redsum(index)">-</i>
            <input type="text" class="sum" v-model="item.cartsum" @change="sumchange(index)">
            <i @click="addsum(index)">+</i>
          </div>
           <el-button type="text" @click="opendel(index)">
             <img src="../images/icondel.png" class="icondel">
           </el-button>
        </li>
      </ul>
      <!-- 结算 -->
      <div class="floor">
        <div class="floorleft">
          <h3>需支付：<i>￥{{ summoney.toFixed(2) }}</i></h3>
          <span>总金额：￥{{ summoney.toFixed(2) }}</span>
          <span>以优惠：</span>
        </div>
        <button @click="end">结算 ( {{ sumnumber }} )</button>
      </div>
    </div>
    <cartempty v-else></cartempty>
  </div>
</template>
<script>
import { getcartshopping } from '../../../api/api'
import cartempty from './cartempty'
export default{
  data () {
    return {
      checkval: '全不选',
      checkflag: true,
      delflag: true,
      shoppingArr: [],
      sumnumber: 0,
      summoney: 0,
      cartflag: false
    }
  },
  created () {
    getcartshopping('cart/shopping').then(data => {
      this.shoppingArr = data
      // 显示不同页面；
      if (this.shoppingArr.length === 0) {
        this.cartflag = false
      } else {
        this.cartflag = true
      }
      this.shoppingArr.forEach(item => {
        this.summoney += item.cartmoney * item.cartsum
      })
      // 统计个数
      this.shoppingArr.forEach(item => {
        this.sumnumber += item.cartsum
      })
    })
  },
  methods: {
    // 全选/全不选
    btncheck () {
      this.checkflag = !this.checkflag
      if (this.checkflag) {
        this.checkval = '全不选'
        this.shoppingArr.forEach(item => {
          item.cartcheckbox = this.checkflag
        })
      } else {
        this.checkval = '全选'
        this.shoppingArr.forEach(item => {
          item.cartcheckbox = this.checkflag
        })
      }
    },
    // 删除全部
    openall () {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.cartflag = false
        this.summoney = 0
        this.sumnumber = 0
        this.$refs.cartul.innerHTML = ''
        if (this.$refs.cartul.innerHTML === '') {
          this.delflag = false
        } else {
          this.delflag = true
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 商品选不选
    itemschange () {
      this.sumnumber = 0
      this.summoney = 0
      this.shoppingArr.forEach(item => {
        if (item.cartcheckbox === true) {
          // 统计个数
          this.sumnumber += item.cartsum
          // 统计总钱数
          this.summoney += item.cartmoney * item.cartsum
        }
      })
      this.checkflag = this.shoppingArr.every(item => {
        return item.cartcheckbox === true
      })
      if (this.checkflag) {
        this.checkval = '全不选'
      } else {
        this.checkval = '全选'
      }
    },
    // 删除
    opendel (index) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        if (this.shoppingArr[index].cartcheckbox) {
          this.summoney -= this.shoppingArr[index].cartmoney * this.shoppingArr[index].cartsum
          this.sumnumber -= this.shoppingArr[index].cartsum
        }
        this.shoppingArr.splice(index, 1)
        if (this.shoppingArr.length === 0) {
          this.checkflag = false
          this.delflag = false
        } else {
          this.delflag = true
          this.checkflag = true
        }
        if (this.shoppingArr.length === 0) {
          this.cartflag = false
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 添加数量
    addsum (index) {
      this.shoppingArr[index].cartsum = (+this.shoppingArr[index].cartsum) + 1
      // 统计个数
      if (this.shoppingArr[index].cartcheckbox) {
        this.sumnumber = (+this.sumnumber) + 1
        this.summoney += this.shoppingArr[index].cartmoney
      }
    },
    // 减少数量
    redsum (index) {
      if (this.shoppingArr[index].cartsum === 1) {
        return false
      }
      this.shoppingArr[index].cartsum = (+this.shoppingArr[index].cartsum) - 1
      if (this.shoppingArr[index].cartcheckbox) {
        this.sumnumber = (+this.sumnumber) - 1
        this.summoney -= this.shoppingArr[index].cartmoney
      }
    },
    // 数量发生改变
    sumchange (index) {
      this.sumnumber = 0
      this.summoney = 0
      if (this.shoppingArr[index].cartcheckbox) {
        this.shoppingArr.forEach(item => {
          this.sumnumber += (+item.cartsum)
        })
        this.shoppingArr.forEach(item => {
          this.summoney += item.cartmoney * item.cartsum
        })
      }
    },
    end () {
      alert('余额不足')
    }
  },
  components: {
    cartempty
  }
}
</script>
<style lang="less" scoped>
  .cartcontent{
    .contentcheck{
      padding: 20px 40px 0;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 40px;
      span{
        font-size: 24px;
        position: relative;
        left: -220px;
        top: 10px;
      }
      button{
        width: 140px;
        height: 60px;
        text-align: center;
        // line-height: 70px;
        border: none;
        outline: none;
        background: #B81C22;
        color: #fff;
        border-radius: 8px;
        font-size: 24px;
        margin-right: 20px;
        span{
          width: 100%;
          height: 100%;
          display: block;
          line-height: 0px;
          text-align: center;
        }
      }
      .activebtn{
        background: #B2B2B2;
      }
    }
    ul{
      padding: 0px 40px;
      li{
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #E3E3E3;
        display: flex;
        .boxposition{
          position: relative;
          top: 60px;
          width: 30px;
          height: 30px;
          border: 1px solid #999;
        }
        img{
          margin-top: 10px;
          width: 168px;
          height: 168px;
        }
        .content{
          flex: 1;
          padding-top: 10px;
          h3{
            font-size: 28px;
          }
          p{
            margin: 10px 0;
            font-size: 24px;
          }
          span{
            color: #B81C22;
            display: inline-block;
            width: 100px;
            font-size: 24px;
          }
          i{
            display: inline-block;
            width: 52px;
            height: 52px;
            background: #F5F5F5;
            text-align: center;
            line-height: 52px;
            font-style: normal;
            font-size: 36px;
          }
          .sum{
            display: inline-block;
            height: 52px;
            width: 60px;
            background: #fff;
            border: 1px solid #aaa;
            margin: 0 20px;
            font-size: 24px;
            text-align: center;
            line-height: 52px;
          }
        }
        .icondel{
          width: 44px;
          height: 44px;
          position: relative;
          top: 60px;
          right: 20px;
          opacity: 0.5;
        }
      }
    }
    .floor{
      padding: 20px 40px 0;
      width: 100%;
      height: 120px;
      background: #F5F5F5;
      position: fixed;
      bottom: 0;
      z-index: 1000;
      display: flex;
      box-sizing: border-box;
      .floorleft{
        flex: 1;
        h3{
          font-size: 26px;
          margin-bottom: 10px;
          i{
            font-style: normal;
            color: #B81C22;
          }
        }
        span{
          font-size: 24px;
          margin-right: 20px;
        }
      }
      button{
        width: 200px;
        height: 74px;
        background: #B81C22;
        color: #fff;
        text-align: center;
        line-height: 74px;
        font-weight: 700;
        border: none;
        border-radius: 8px;
        font-size: 28px;
      }
    }
  }
</style>
