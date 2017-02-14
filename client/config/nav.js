const nav = [
  {
    name: 'demo',
    text: '演示',
    icon: 'shezhi',
    path: '/demo',
    children: [
      {
        name: 'user',
        path: '/user',
        icon: 'yonghu',
        text: '用户管理'
      }, {
        name: 'editor',
        path: '/editor',
        icon: 'icon',
        text: '富文本'
      }
    ]
  }, {
    name: 'system',
    text: '系统',
    icon: 'ziyuan',
    path: '/system',
    children: [
      {
        name: 'resource',
        path: '/system/resource',
        icon: 'ziyuan',
        text: '资源管理'
      }
    ]
  }
]
export default nav
