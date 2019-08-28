import axios from 'axios'
// axios.defaults.baseURL = 'http://192.168.137.1:3000/api'
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'
// 默认导出的地址；
// 轮播函数
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
