<template>
  <view class="violation-page">
    <view class="violation-list">
      <view 
        class="violation-item"
        v-for="item in violationList" 
        :key="item.id"
      >
        <view class="violation-info">
          <view class="header">
            <text class="plate-number">{{ item.plateNumber }}</text>
            <text class="status">{{ item.status }}</text>
          </view>
          <view class="details">
            <view class="detail-item">
              <text class="label">违法时间：</text>
              <text class="value">{{ item.violationTime }}</text>
            </view>
            <view class="detail-item">
              <text class="label">违法地点：</text>
              <text class="value">{{ item.location }}</text>
            </view>
            <view class="detail-item">
              <text class="label">违法行为：</text>
              <text class="value">{{ item.description }}</text>
            </view>
            <view class="detail-item">
              <text class="label">处罚金额：</text>
              <text class="value fine">¥{{ item.fine }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Violation',
  setup() {
    const violationList = ref([
      {
        id: 1,
        plateNumber: '苏A12345',
        status: '未处理',
        violationTime: '2024-01-15 14:30',
        location: '南京市玄武区珠江路128号',
        description: '电动自行车逆向行驶',
        fine: 50
      },
      {
        id: 2,
        plateNumber: '苏A67890',
        status: '已处理',
        violationTime: '2024-01-10 09:15',
        location: '南京市鼓楼区中山北路321号',
        description: '闯红灯',
        fine: 100
      },
      {
        id: 3,
        plateNumber: '苏A24680',
        status: '未处理',
        violationTime: '2024-01-12 16:45',
        location: '南京市秦淮区中华路456号',
        description: '违规载人',
        fine: 50
      }
    ])

    return {
      violationList
    }
  }
}
</script>

<style>
.violation-page {
  padding: 20px;
  min-height: 100vh;
  background: #f5f5f5;
}

.violation-list {
  margin-bottom: 20px;
}

.violation-item {
  margin-bottom: 20px;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.header {
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

.status {
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 24px;
  background: #fff2f0;
  color: #ff4d4f;
}

.details .detail-item {
  display: flex;
  margin-bottom: 12px;
  font-size: 28px;
}

.details .detail-item:last-child {
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

.detail-item .fine {
  color: #ff4d4f;
  font-weight: bold;
}
</style> 