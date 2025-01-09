<template>
  <view class="ebike-page">
    <view class="ebike-list">
      <view 
        class="ebike-item"
        v-for="bike in bikeList" 
        :key="bike.id"
      >
        <view class="bike-info">
          <view class="bike-header">
            <text class="plate-number">{{ bike.plateNumber }}</text>
            <text :class="['status-tag', bike.status === '正常' ? 'normal' : 'warning']">
              {{ bike.status }}
            </text>
          </view>
          <view class="bike-details">
            <view class="detail-item">
              <text class="label">品牌型号：</text>
              <text class="value">{{ bike.model }}</text>
            </view>
            <view class="detail-item">
              <text class="label">注册日期：</text>
              <text class="value">{{ bike.registerDate }}</text>
            </view>
            <view class="detail-item">
              <text class="label">车架号：</text>
              <text class="value">{{ bike.frameNo }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="add-btn" @tap="handleAddBike">
      <text class="btn-text">添加电动车</text>
    </view>
  </view>
</template>

<script>
import { ref } from 'vue'
import { showToast } from '@tarojs/taro'

export default {
  name: 'MyEbike',
  setup() {
    const bikeList = ref([
      {
        id: 1,
        plateNumber: '苏A12345',
        status: '正常',
        model: '雅迪致尚',
        registerDate: '2023-12-01',
        frameNo: 'YD2023120100001'
      },
      {
        id: 2,
        plateNumber: '苏A67890',
        status: '已过期',
        model: '爱玛猎鹰',
        registerDate: '2023-06-15',
        frameNo: 'AM2023061500001'
      },
      {
        id: 3,
        plateNumber: '苏A24680',
        status: '正常',
        model: '小牛UQi',
        registerDate: '2024-01-10',
        frameNo: 'XN2024011000001'
      }
    ])

    const handleAddBike = () => {
      showToast({
        title: '添加功能开发中',
        icon: 'none'
      })
    }

    return {
      bikeList,
      handleAddBike
    }
  }
}
</script>

<style>
.ebike-page {
  padding: 20px;
  min-height: 100vh;
  background: #f5f5f5;
}

.ebike-list {
  margin-bottom: 100px;
}

.ebike-item {
  margin-bottom: 20px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.bike-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.plate-number {
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

.status-tag {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 24px;
}

.status-tag.normal {
  background: #e6f7e6;
  color: #07c160;
}

.status-tag.warning {
  background: #fff2f0;
  color: #ff4d4f;
}

.bike-details .detail-item {
  display: flex;
  margin-bottom: 12px;
  font-size: 28px;
}

.bike-details .detail-item:last-child {
  margin-bottom: 0;
}

.detail-item .label {
  color: #666;
  width: 160px;
}

.detail-item .value {
  color: #333;
  flex: 1;
}

.add-btn {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #07c160;
  color: #fff;
  padding: 20px 60px;
  border-radius: 40px;
  box-shadow: 0 4px 12px rgba(7, 193, 96, 0.3);
}

.btn-text {
  font-size: 32px;
}
</style> 