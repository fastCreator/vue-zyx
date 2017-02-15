# starter

To start:

```bash
$ npm install
```

To develop:

```bash
$ npm run dev```

To build for production:

```bash
$ npm run build
```

To lint you code:

```bash
$ npm run lint
```
阿里图标库（智营销图标库）github登录
账号：zyx11111111
密码: zyx123456
加入到我的收藏=》添加到我的项目(智营销)=>下载至本地
替换到 static/fonts目录

关于webstorm 对 vue的设置
http://www.cnblogs.com/ssrsblogs/p/6231981.html

webstorm添加*.vue文件代码提醒支持webstorm支持es6vue里支持es6写法
http://www.cnblogs.com/xuange306/p/6175680.html

文档
vuex:https://vuex.vuejs.org/zh-cn/state.html
vue-loader:http://vue-loader.vuejs.org/en/
vue:https://cn.vuejs.org/v2/guide/


组件不应该存在store
视图：可以存在store

购物车 ：https://segmentfault.com/a/1190000005780326
vuex:   https://segmentfault.com/a/1190000006981296

Vue Tools  调试和工具,服务端渲染

vue 和react比较

为了让所有组件能够在任何地方被调用
组件的属性，不能由自己决定，只能由调用它的组件或试图决定
回调事件，由父组件传入

原则:
属性是不能改变的，就像人的头
状态是可以变化的,分为本地状态(data)，和共享状态(store)
本地状态：由自己维护
共享状态：由store维护
store:状态树


我们用常量声明mutation，并把它放到单独的地方。mutation常量习惯性大写的，区分于actions。


树的数据放在store
表格的数据不放在store

使用常量替代 Mutation 事件类型
使 linter 之类的工具发挥作用

关于vuex
https://github.com/huangtubiao/vuex-example
