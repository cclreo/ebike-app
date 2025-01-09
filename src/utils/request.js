import { request as taroRequest, showToast, showLoading, hideLoading, getStorageSync } from '@tarojs/taro'

// 定义基础配置
const config = {
  development: {
    baseUrl: 'http://dev-api.example.com',
  },
  production: {
    baseUrl: 'https://api.example.com',
  }
}

const env = process.env.NODE_ENV || 'development'
const baseUrl = config[env].baseUrl

const request = (options = {}) => {
  const { url, data, method = 'GET', header = {}, loading = false } = options

  if (loading) {
    showLoading({
      title: '加载中...',
    })
  }

  const token = getStorageSync('token')
  const headers = {
    'Content-Type': 'application/json',
    ...header,
  }
  
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return new Promise((resolve, reject) => {
    taroRequest({
      url: `${baseUrl}${url}`,
      data,
      method,
      header: headers,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          showToast({
            title: '请求失败',
            icon: 'none',
          })
          reject(res)
        }
      },
      fail: (err) => {
        showToast({
          title: '网络请求失败',
          icon: 'none',
        })
        reject(err)
      },
      complete: () => {
        if (loading) {
          hideLoading()
        }
      },
    })
  })
}

export default request 