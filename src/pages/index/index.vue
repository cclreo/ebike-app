<template>
  <view class="index">
    <view class="header">
      <text class="title">共享服务</text>
    </view>
    
    <view class="service-grid">
      <view class="service-item" @tap="handleNavigate('my-ebike')">
        <view class="icon-wrapper">
          <canvas id="ebike-icon" canvas-id="ebike-icon" class="icon"></canvas>
        </view>
        <text class="label">我的电动车</text>
      </view>
      
      <view class="service-item" @tap="handleNavigate('violation')">
        <view class="icon-wrapper">
          <canvas id="violation-icon" canvas-id="violation-icon" class="icon"></canvas>
        </view>
        <text class="label">我的违法</text>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, onMounted } from 'vue'
import { switchTab, createCanvasContext } from '@tarojs/taro'
import './index.less'

export default {
  setup() {
    const handleNavigate = (page) => {
      switchTab({
        url: `/pages/${page}/index`
      })
    }

    // 绘制电动车图标
    const drawEbikeIcon = () => {
      const ctx = createCanvasContext('ebike-icon')
      
      // 设置线条样式
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
      
      // 设置线条样式
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
      // 在组件挂载后绘制图标
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
  padding: 20px;
  
  .header {
    margin-bottom: 30px;
    text-align: center;  // 标题居中
    
    .title {
      font-size: 36px;
      font-weight: bold;
      color: #333;
      display: inline-block;  // 使用 inline-block 确保文字居中
    }
  }
  
  .service-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    
    .service-item {
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .icon-wrapper {
        width: 120px;
        height: 120px;
        background: #f5f5f5;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        
        .icon {
          width: 60px;
          height: 60px;
        }
      }
      
      .label {
        font-size: 28px;
        color: #333;
      }
    }
  }
}
</style>
