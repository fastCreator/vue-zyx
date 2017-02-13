const nav = [
  {
    name: 'demo',
    text: '演示',
    icon: 'shezhi',
    path: '/user',
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
    icon: 'xitong',
    path: '/system/resource',
    children: [
      {
        name: 'system-resource',
        path: '/system/resource',
        icon: 'ziyuan',
        text: '资源管理'
      }
    ]
  }
]
export default nav
