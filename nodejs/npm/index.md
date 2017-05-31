# npm

npm 起初是 Node.js 模块管理工具，后来不再局限于 Node.js, 发展目标是通用的 JavaScript 模块管理工具。

npm 随 Node.js 安装，不需要单独安装。如果不想使用 Node.js 自带的 npm, 见 [安装及更新 npm](./npm-install.md)。

[文档](https://docs.npmjs.com/)

```bash
# 查看帮助
npm -h

# 查看详细帮助，Windows 是打开浏览器查看
# 如果只显示 ”Top hits for “，说明 npm 有问题。按上面的升级说明重装 npm 试试。
npm help install
```

- [package.json](./package.json.md)


cli:

- [config](./config.md)
- [install](./install.md)


开始自己的项目：

```bash
# 通过问答创建 package.json
# 如果已有 package.json 则是修改
npm init

# 查找模块
npm search express

# 查看模块信息
npm view express

# 输出太多！指定字段
npm view express version # 查看最新版本
npm view express dependencies # 查看依赖包

# 打开模块的帮助页面
npm docs express

# 安装模块，并将它保存到 package.json
npm install --save express
```
