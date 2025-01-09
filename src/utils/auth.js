import Taro from '@tarojs/taro'
import request from './request'

const api = {
  login: '/api/user/login',
  getUserInfo: '/api/user/info'
}

// 登录方法
export const login = async (username, password) => {
  try {
    const res = await request({
      url: api.login,
      method: 'POST',
      data: {
        username,
        password
      },
      loading: true
    })
    
    // 保存token
    if (res.token) {
      Taro.setStorageSync('token', res.token)
    }
    
    return res
  } catch (error) {
    throw error
  }
}

// 检查登录状态
export const checkLogin = () => {
  const token = Taro.getStorageSync('token')
  return !!token
}

// 退出登录
export const logout = () => {
  Taro.removeStorageSync('token')
  // 可以添加其他清理逻辑
} 