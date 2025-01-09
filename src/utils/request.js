import Taro from '@tarojs/taro'

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
            title: '请求失败',
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