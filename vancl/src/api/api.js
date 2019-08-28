// 导入axios
import axios from 'axios'
// 截获数据，对数据进行处理
axios.interceptors.response.use(function (response) {
  // 返回对象的data数据
  return response.data
}, function (error) {
  // 返回error
  return Promise.reject(error)
})
// 默认导出的地址；
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'

export function getcartshopping () {
  return axios.get('cart/shopping')
}
export function getminenav () {
  return axios.get('mine/nav')
}
