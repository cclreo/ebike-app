<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import request from '@/utils/request'
import { api } from '@/config'

export default {
  setup() {
    const msg = ref('Hello world')
    
    const getData = async () => {
      try {
        const res = await request({
          url: api.getUserInfo,
          loading: true
        })
        console.log('接口返回数据：', res)
      } catch (err) {
        console.error('请求失败：', err)
      }
    }

    return {
      msg,
      getData
    }
  }
}
</script>
