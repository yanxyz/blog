---
permalink: /nodejs/npm/install/
---

# npm install

```sh
npm install -h
npm help install
```

这跟 npm 不一样，npm 将从当前目录向上搜索 `package.json`，若找到则将模块安装到 `package.json` 所在目录下的 `node_modules` 目录；若没有找到则在当前


## install native modules

native modules 如 sqlite3、node-sass 等，它们可能已经提供了编译好的 binary，不过被墙无法正常下载。

### 本地编译

需要准备：

- [编译环境](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#prerequisites)
- Node.js 头文件，[下载办法](https://github.com/mafintosh/node-gyp-install)

```sh
set "PYTHON_MIRROR=http://npm.taobao.org/mirrors/python"
npm install --global --production windows-build-tools
```

### 使用国内镜像

<https://npm.taobao.org/mirrors> 为常用的模块提供镜像。

```shell
# 将 sqlite3 添加到 npm 配置中
npm config set SQLITE3_BINARY_SITE=http://npm.taobao.org/mirrors/sqlite3
```
