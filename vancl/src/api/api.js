import axios from 'axios'
// 截获数据，对数据进行处理
axios.interceptors.response.use(function (response) {
  // 返回对象的data数据
  return response.data
}, function (error) {
  // 返回error
  return Promise.reject(error)
})
axios.defaults.baseURL = 'http://127.0.0.1:9000/fkapi/' // 设置请求前地址
export function getSlide (url) {
  return axios.get(url)
}
export function goback () {
  this.$router.go(-1)
}
