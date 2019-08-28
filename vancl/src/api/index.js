import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export function getGoods () {
  return axios.get('goods')
}
export function getSales () {
  return axios.get('sale')
}
export function getRecs () {
  return axios.get('recs')
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