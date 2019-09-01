# vancl

> 凡客项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 在基础项目之前添加了返回上一个页面的函数
## 加入rem单位的转换
##  在项目中加入了Animate 动画切换，
##  图片懒加载
##  头部标题栏自动修改
##  ico图片的显示
## 添加分类页里中的详情页，
## 添加了详情页的排序，
## 父组件向子组件传值，
## 添加了路由传值，在下一页发送该值的请求
##  遇到的难题  如何去进行根据价格去排序

一开始没头绪，但是用了sort方法中a-b 的方法思想，通过a.money，这样方式进行了排序，问题解决

## 用到emelentui 中button按钮里的消息提示。
## 用到了数据派发 $emit  和数据监听 $on  进行数据之间的分发

## 新增加 验证码算法，随机产生验证码，并数据分发,当点击验证码时，验证码内容和样式切换
## 新增登录对json数据读取并且比对，返回登录码
## keep-alive增加页面级缓存减少服务器压力
##  新增手机验证码验证功能
##  新增密码找回功能
## 新增购物车以及个人中心登录状态检测



# 要解决的问题
##  分类页 上一个页面传值到下一个页面，刷新值消失，考虑用locastort。

## Element UI

### 商品详情页

遇到的问题：点击选中的颜色或尺码，添加样式

1. ![1567217762266](C:\Users\曾书乐\AppData\Roaming\Typora\typora-user-images\1567217762266.png)

   解决办法    

   

   > <span
   >
   > ​            v-for="(item, index) in detailArr.detcolor"
   >
   > ​            :key="index"
   >
   > ​            @click="addcolor(index)"
   >
   > ​			`// 判断当colorflag 和index  相等时才添加样式`
   >
   > ​            :class="colorflag === index ? 'detactive' : ' ' " \>
   >
   > ​	{{ item }}
   >
   > </span>
   >
   > data () {
   >
   > ​    return {
   >
   > ​      colorflag: null
   >
   > ​    }
   >
   >   },
   >
   >  methods: {
   >
   > ​    addcolor (index) {					// 当点击事件触发时，把对应元素的索引值赋值给  colorflag     
   >
   > ​      this.colorflag = index
   >
   > ​    }
   >
   > }