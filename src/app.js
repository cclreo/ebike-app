
import { createApp } from 'vue'

import './app.less'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
  

const App = createApp({
  onShow (options) {
    console.log('App onShow.')
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
