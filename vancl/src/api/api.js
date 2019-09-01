// 导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'
// axios.defaults.baseURL = 'http://192.168.137.1:3000/api/'
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// 首页 start
export function getGoods () {
  return axios.get('home/goods')
}
export function getSales () {
  return axios.get('home/sale')
}
export function getRecs () {
  return axios.get('home/recs')
}
export function Banner () {
  return axios.get('home/banner')
}
// 列表
export function Homenav () {
  return axios.get('home/homenav')
}
export function Jingxuan () {
  return axios.get('home/jingxuan')
}
export function Miaosha () {
  return axios.get('home/miaosha')
}
// 首页end

// 购物车、我的  start
// 获取商品
export function getcartshopping (url) {
  return axios.get(url)
}
// 我的菜单
export function getminenav (url) {
  return axios.get(url)
}
// 购物车、我的  end

// 分类 和  频道
export function getSlide (url) {
  return axios.get(url)
}
// 返回上一级
export function goback () {
  this.$router.go(-1)
}

export function GetLogin (data) {
  return axios.post('login', data)
}

export function open1 () {
  /* eslint-disable */
  this.$message(`登录成功`); 
}
// 修改密码
export function getback (data) {
  return axios.post('getback', data)
}
// 添加用户
export function registe (data) {
  return axios.post('registe', data)
}

