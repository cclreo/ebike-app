import Taro from '@tarojs/taro'
import { baseUrl } from '@/config'

const codeMessage = {
  200: '服务器成功返回请求数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队',
  204: '删除数据成功',
  400: '请求错误',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求失败',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
}

const request = (options = {}) => {
  const { url, data, method = 'GET', header = {}, loading = false } = options

  if (loading) {
    Taro.showLoading({
      title: '加载中...',
    })
  }

  const token = Taro.getStorageSync('token')
  const headers = {
    'Content-Type': 'application/json',
    ...header,
  }
  
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return new Promise((resolve, reject) => {
    Taro.request({
      url: `${baseUrl}${url}`,
      data,
      method,
      header: headers,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          Taro.showToast({
            title: codeMessage[res.statusCode] || '请求失败',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail: (err) => {
        Taro.showToast({
          title: '网络请求失败',
          icon: 'none',
        })
        reject(err)
      },
      complete: () => {
        if (loading) {
          Taro.hideLoading()
        }
      },
    })
  })
}

export default request 