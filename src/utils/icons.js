import { createCanvasContext } from '@tarojs/taro'

// 创建 tabBar 图标
const createTabBarIcons = () => {
  const iconConfigs = {
    home: {
      normal: '#999',
      active: '#07c160'
    },
    ebike: {
      normal: '#999',
      active: '#07c160'
    },
    violation: {
      normal: '#999',
      active: '#07c160'
    }
  }

  // 为每个图标创建正常和激活状态
  Object.entries(iconConfigs).forEach(([name, colors]) => {
    const ctx = createCanvasContext(`${name}-icon`)
    // 使用之前的图标绘制代码
    ctx.draw()
  })
}

export default createTabBarIcons 