#vue项目全家桶
## 查看


## 技术栈
###开发栈
vue + vuex + vue-loader + vue-router + webpack + mockJs + element-UI +axios 
###调试 
vue tools
###动画 
velocityjs + animation.css
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
- [animate.css](https://daneden.github.io/animate.css/)  
- [velocityjs](https://github.com/shepherdwind/velocity.js/blob/master/README-cn.md)  
- [Vue原理解析之Virtual Dom](http://www.tuicool.com/articles/ZNry6rj)  
 

## 目录结构

```bash
├── build                         # 打包配置文件 
├── client                        # 客户端开发代码
│    ├── api                     # ajax请求
│    ├── components              # 组件
│    ├── config                  # 前端配置文件
│    │    └nav.js                 # nav配置文件  
│    ├── directives              # 自定义指令
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

## 简介
Vue.js是当下很火的一个JavaScript MVVM库，它是以数据驱动和组件化的思想构建的。相比于Angular.js，Vue.js提供了更加简洁、更易于理解的API，使得我们能够快速地上手并使用Vue.js。

## vue 和react比较
1,React推荐jsx，缺点:阅读性比较差,优点:为未来跨平台做基础(用不同解释器)
2,大部分人觉得vue学习成本比较低
3,vue轻量
4,React使用 Virtual DOM，用diff算法更新视图；vue:使用get/set事件响应更新视图
5,React做数据比较庞大页面有性能优势

## 开发
1,webpack包请求(require),前端模块化请求(es6)
2,为了让所有组件能够在任何地方被调用,组件的属性，不能由自己决定，只能由调用它的组件或试图决定,回调事件，由父组件传入
3,我们用常量声明mutation，并把它放到单独的地方。mutation常量习惯性大写的，区分于actions。
4,组件命名约定(在 HTML 模版中，请使用 kebab-case 形式)
## 号外
###优化
####keep-alive
<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。
####v-once
尽管在 Vue 中渲染 HTML 很快，不过当组件中包含大量静态内容时，可以考虑使用 v-once 将渲染结果缓存起来

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
 

 
###pakage.json
```bash
npm install 
####dependencies(正常运行该包时所需要的依赖项)
npm i node_module –save 
npm install --production
####devDependencies
npm i node_module –save-dev
npm install packagename
开发的时候需要的依赖项，像一些进行单元测试之类的包
```
 
CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装来自受信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比XSS更具危险性。CSRF（Cross-site request forgery）跨站请求伪造，也被称为“One Click Attack”或者Session Riding，通常缩写为CSRF或者XSRF，是一种对网站的恶意利用。尽管听起来像跨站脚本（XSS），但它与XSS非常不同，XSS利用站点内的信任用户，而CSRF则通过伪装来自受信任用户的请求来利用受信任的网站。与XSS攻击相比，CSRF攻击往往不大流行（因此对其进行防范的资源也相当稀少）和难以防范，所以被认为比XSS更具危险性。
