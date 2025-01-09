const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    baseUrl: 'http://dev-api.example.com',
  },
  production: {
    baseUrl: 'https://api.example.com',
  },
}

export const { baseUrl } = config[env]

export const api = {
  login: '/api/user/login',
  getUserInfo: '/api/user/info',
  // 其他接口...
} 