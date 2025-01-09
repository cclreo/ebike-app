<template>
  <view class="index">
    <view class="header">
      <text class="title">共享服务</text>
    </view>
    
    <view class="grid-container">
      <view 
        class="grid-item"
        @tap="handleNavigate('my-ebike')"
      >
        <view class="icon-box">
          <canvas id="ebike-icon" canvas-id="ebike-icon" class="icon"></canvas>
        </view>
        <text class="label">我的电动车</text>
      </view>
      
      <view 
        class="grid-item"
        @tap="handleNavigate('violation')"
      >
        <view class="icon-box">
          <canvas id="violation-icon" canvas-id="violation-icon" class="icon"></canvas>
        </view>
        <text class="label">我的违法</text>
      </view>
      
      <view class="grid-item disabled">
        <view class="icon-box empty"></view>
        <text class="label">敬请期待</text>
      </view>
      
      <view class="grid-item disabled">
        <view class="icon-box empty"></view>
        <text class="label">敬请期待</text>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, onMounted } from 'vue'
import { createCanvasContext, reLaunch } from '@tarojs/taro'

export default {
  setup() {
    const handleNavigate = (page) => {
      console.log('navigating to:', page)
      reLaunch({
        url: `/pages/${page}/index`,
        success: () => {
          console.log('navigation success')
        },
        fail: (err) => {
          console.error('navigation failed:', err)
        },
        complete: () => {
          console.log('navigation complete')
        }
      })
    }

    // 绘制电动车图标
    const drawEbikeIcon = () => {
      const ctx = createCanvasContext('ebike-icon')
      ctx.setLineWidth(2)
      ctx.setStrokeStyle('#07c160')
      
      // 绘制车身
      ctx.beginPath()
      ctx.moveTo(15, 40)
      ctx.lineTo(45, 40)
      ctx.lineTo(40, 25)
      ctx.lineTo(20, 25)
      ctx.closePath()
      ctx.stroke()
      
      // 绘制车轮
      ctx.beginPath()
      ctx.arc(20, 45, 8, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(40, 45, 8, 0, 2 * Math.PI)
      ctx.stroke()
      
      // 绘制把手
      ctx.beginPath()
      ctx.moveTo(30, 25)
      ctx.lineTo(30, 15)
      ctx.stroke()
      
      ctx.draw()
    }

    // 绘制违法图标
    const drawViolationIcon = () => {
      const ctx = createCanvasContext('violation-icon')
      ctx.setLineWidth(2)
      ctx.setStrokeStyle('#ff4d4f')
      
      // 绘制警示标志
      ctx.beginPath()
      ctx.moveTo(30, 10)
      ctx.lineTo(50, 45)
      ctx.lineTo(10, 45)
      ctx.closePath()
      ctx.stroke()
      
      // 绘制感叹号
      ctx.beginPath()
      ctx.moveTo(30, 25)
      ctx.lineTo(30, 35)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(30, 40, 1, 0, 2 * Math.PI)
      ctx.fill()
      
      ctx.draw()
    }

    onMounted(() => {
      drawEbikeIcon()
      drawViolationIcon()
    })

    return {
      handleNavigate
    }
  }
}
</script>

<style lang="less">
.index {
  padding: 30px 20px;
  
  .header {
    margin-bottom: 40px;
    text-align: center;
    
    .title {
      font-size: 36px;
      font-weight: bold;
      color: #333;
      display: inline-block;
    }
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 10px;
    
    .grid-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      
      &.disabled {
        opacity: 0.6;
        pointer-events: none;
      }
      
      .icon-box {
        width: 120px;
        height: 120px;
        background: #f5f5f5;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        
        &.empty {
          background: #eee;
        }
        
        .icon {
          width: 60px;
          height: 60px;
        }
      }
      
      .label {
        font-size: 28px;
        color: #333;
        font-weight: 500;
      }
    }
  }
}
</style>
