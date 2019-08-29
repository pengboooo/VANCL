<template>
<div class="search">
<div class="inp">
<img src="" alt="">
<input type="text" name="" id="" placeholder="搜索商品">
</div>
<a href="#">···</a>
<span></span>
</div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.search {
 position: fixed;
    width: 100%;
    height: 90px;
    overflow: hidden;
    z-index: 999;
    background:  rgba(209, 207, 207, 0.5);

.inp {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 85%;
    height:50px;
    line-height: 60px;
    background-color: #fff;
    border: 1px solid #aaaaaa;
    border-radius: 30px;
    overflow: hidden;
    img {
      position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    display: inline-block;
    margin-left: 30px;
    width: 32px;
    height:32px;
    border: 0;
    background: url(http://i10.m.vancl.com/Content/H5/img/search2.png) no-repeat;
    background-size: contain;
    cursor: pointer;
}
input{
  outline: none;
  border: none;
  width: 80%;
  height: 100%;
   margin-left:80px;
   font-size: 32px;
}
}
a {
  position: absolute;
  right: 18px;
  bottom: 26px;
  width: 42px;
     line-height:32px;
    display: inline-block;
    text-align: center;
    color: #aaa;
    border: 1px solid #aaa;
    border-radius: 10px;
    cursor: pointer;
}
span{
      position: absolute;
   right:18px;
  bottom: 56px;
    border: 4px solid #aaa;
    border-radius: 4px;
}
}
</style>
