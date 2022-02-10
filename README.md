# newpro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目特点
+ vue3.0 + webpack4 + elementUI
+ 可以使用全部es6+语法
+ 可以使用sass 等css预处理器

## 目录结构说明
```
.
├── dist                     // 打包输出目录
├── public                     //webpack入口目录
│   ├── index.html          // 入口html
├── src                     // 开发目录
│   ├── assets              // 静态资源
│   ├── components          // 组件文件
│   ├── javascripts         // js
│   ├── mixins         // 混入
│   ├── router          // 路由
│   ├── store          // vuex
│   ├── styles              // 样式文件
│   ├── views               // 模板视图
│   ├── App.vue               // 首页
│   └── main.js            // webpack入口文件
├── README.md
├── package-lock.json
├── package.json
├── vue.config.js       // webpack 通用配置
