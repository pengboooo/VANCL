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