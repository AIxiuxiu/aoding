## 环境搭建

### 安装 Node 环境

下载最新稳定版本安装即可（node16 以上版本）
安装 node.js [下载地址](https://nodejs.org/zh-cn/download/)https://nodejs.org/zh-cn/
打开命令端输入 `node -v 和 npm -v` 打印版本号即安装成功

### 安装依赖

npm 默认和 node 一起安装，但使用时需要代理，不然有些可能无法下载，推荐使用[yarn](https://yarn.bootcss.com/)

```shell
# 安装yarn
npm install -g yarn
# 查看版本
yarn -v
```

## 启动

```shell
# web端启动
yarn start
# 或者
yarn dev
```

### 图标

把图标 svg 文件放到`src/assets/icons`文件下
使用方式 <icon-an-svg 文件名字 />

其他图标如@element-plus/icons-vue
<icon-ep-svg 名字 />

所有图标库 https://icon-sets.iconify.design

网站统计： https://www.jianshu.com/p/828e3b9b8c28
