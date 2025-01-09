<template>
  <view class="login-container">
    <view class="login-form">
      <view class="form-item">
        <input
          v-model="username"
          type="text"
          placeholder="请输入用户名"
          class="input"
        />
      </view>
      <view class="form-item">
        <input
          v-model="password"
          type="password"
          placeholder="请输入密码"
          class="input"
        />
      </view>
      <view class="form-item">
        <button @tap="handleLogin" class="login-btn">登录</button>
      </view>
    </view>
  </view>
</template>

<script>
import { ref } from 'vue'
import { showToast, switchTab } from '@tarojs/taro'
import { login } from '../../utils/auth'

export default {
  setup() {
    const username = ref('')
    const password = ref('')

    const handleLogin = async () => {
      if (!username.value || !password.value) {
        showToast({
          title: '请输入用户名和密码',
          icon: 'none'
        })
        return
      }

      try {
        const res = await login(username.value, password.value)
        showToast({
          title: '登录成功',
          icon: 'success'
        })
        
        // 登录成功后跳转
        setTimeout(() => {
          switchTab({
            url: '/pages/index/index'
          })
        }, 1500)
      } catch (error) {
        showToast({
          title: '登录失败',
          icon: 'none'
        })
        switchTab({
            url: '/pages/index/index'
          })
      }
    }

    return {
      username,
      password,
      handleLogin
    }
  }
}
</script>

<style lang="less">
.login-container {
  padding: 40px 20px;
  
  .login-form {
    .form-item {
      margin-bottom: 20px;
      
      .input {
        width: 100%;
        height: 88px;
        padding: 0 30px;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-sizing: border-box;
      }
      
      .login-btn {
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        background: #07c160;
        color: #fff;
        border-radius: 8px;
      }
    }
  }
}
</style> 