#vue项目全家桶
## 预览
http://htmlpreview.github.io/?https://github.com/fastCreator/vue-zyx/blob/master/dist/index.html

## 技术栈
 
vue + vuex + vue-loader + vue-router + webpack + mockJs + element-UI
 
## 调试
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
├── app             # the actual app you want to bundle with Electron
│    ├── dist       # directory which contains all bundled files
│    └── index.js   # entry file for Electron
├── build           # webpack configs and other scripts
├── client          # client-side app files
├── dist            # bundled files and index.html
│    ├── index.html
│    └── [...other bundled files]  
├── tests           # e2e tests written by testcafe 
├── node_modules    # dependencies
└── package.json    # package info
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
属性是不能改变的，就像人的头
状态是可以变化的,分为本地状态(data)，和共享状态(store)
本地状态：由自己维护
共享状态：由store维护
store:状态树
我们用常量声明mutation，并把它放到单独的地方。mutation常量习惯性大写的，区分于actions。
 
 

