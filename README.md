#vue项目全家桶
## 预览
http://htmlpreview.github.io/?https://github.com/fastCreator/vue-zyx/blob/master/dist/index.html

## 技术栈
###开发栈
vue + vuex + vue-loader + vue-router + webpack + mockJs + element-UI +axios
###调试栈 
vue tools
 
## 文档
- [vue](https://cn.vuejs.org/v2/guide/)
- [vuex](https://vuex.vuejs.org/zh-cn/state.html)
- [vue-loader](http://vue-loader.vuejs.org/en/)
- [element UI](http://element.eleme.io/#/zh-CN/component/installation)
- [lodash](http://lodashjs.com/docs/)
- [Vue Tools](https://github.com/vuejs/vue-devtools) 
- [webstorm vue插件](http://www.cnblogs.com/ssrsblogs/p/6231981.html) 
- [webstorm vue es6支持](http://www.cnblogs.com/xuange306/p/6175680.html)  
- [关于vuex](https://github.com/huangtubiao/vuex-example) 
 

## 目录结构

```bash
├── build                         # 打包配置文件 
├── client                        # 客户端开发代码
│    ├── api                     # ajax请求
│    ├── components              # 组件
│    ├── config                  # 前端配置文件
│    │    └nav.js                 # nav配置文件  
│    ├── router                  # 路由
│    ├── store                   # vuex状态管理中心
│    │    └modules                # 分组模块
│    ├  view                       # 视图
│    ├  app.js                     # 入口文件
│    ├  app.vue                    # 入口模板
│    └  auth.js                    # 用户鉴权
├── dist                          # 打包静态文件 
├── mock                          # 数据模拟 
├── plugins                       # 开发辅助插件 
├── static                        # 静态文件
├── test                          # 测试
├── theme                         # element UI 主题包 
├── element-variables.css         # element UI 编辑文件
├── node_modules                  # dependencies
└── package.json                  # package info
```
## 运行
```bash

 $ npm install 
 
 To develop:
 $ npm run dev
 
 To build for production:
 $ npm run build
 
 To lint you code:
 $ npm run lint
```
 
## element-UI 自定义主题
```bash
###安装工具
npm i element-theme -g

###修改主题
直接编辑 element-variables.css 文件

###编译主题
et
``` 

## 项目图标库
```bash
阿里图标库（智营销图标库）github登录
账号：zyx11111111
密码: zyx123456
加入到我的收藏=》添加到我的项目(智营销)=>下载至本地
替换到 static/fonts目录 
``` 

## 服务端渲染
 暂不考虑服务端渲染

## vue 和react比较
为了让所有组件能够在任何地方被调用
组件的属性，不能由自己决定，只能由调用它的组件或试图决定
回调事件，由父组件传入

## 开发原则
1,webpack包请求(require),前端模块化请求(es6)
2,store:状态树
我们用常量声明mutation，并把它放到单独的地方。mutation常量习惯性大写的，区分于actions。
 
## 号外
###组件
```bash
├── 状态                               # 状态可以改变
│    ├── 本地状态(data)               # 组件内部数据,自己维护
│    └── 共享状态(store)              # 组件之间共享的状态,相互影响,由store维护
└── 属性                               # 属性不能改变

组件:对象(电脑)
属性:电脑必须由属性(显示器、鼠标、主机。。)构成（不能改变）
状态:显示器状态(24寸，30寸)(可以改变)
``` 
 

