export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/my-ebike/index',
    'pages/violation/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#07c160',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home-active.png'
      },
      {
        pagePath: 'pages/my-ebike/index',
        text: '我的电动车',
        iconPath: './assets/images/ebike.png',
        selectedIconPath: './assets/images/ebike-active.png'
      },
      {
        pagePath: 'pages/violation/index',
        text: '我的违法',
        iconPath: './assets/images/violation.png',
        selectedIconPath: './assets/images/violation-active.png'
      }
    ]
  }
})
