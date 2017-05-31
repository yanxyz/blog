---
permalink: /nodejs/install/
---

# 安装 node.js

## Windows
​
从 [官网](https://nodejs.org/)下载安装程序，双击运行安装。安装完成之后，在命令行中运行下面命令，看看是否正常:
​
```bat
node -v
npm -v
```
​
可以用 [nvmw](https://github.com/hakobera/nvmw) 安装不同版本的 node.js，同时会安装 npm，但是它下载的是 npm 的源码包，而包内的文档需要编译后才能使用。
​
## Linux
​
[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
​
Ubuntu:
​
```bash
sudo apt-get install nodejs
node -v
```
​
Debian 的 node.js 版本比较旧，可以使用 [NodeSource 的源](https://github.com/nodesource/distributions#readme)。
​
多版本可以用 [nvm](https://github.com/creationix/nvm#readme)。
​
### nvm
​
我的 `~/.bashrc`：
​
```bash
# 使用淘宝的镜像
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
# 随 bash 启动
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
# 默认启动 Node.js 6.x
nvm use 6
```
​
提示：
​
```bash
# 安装最新的 Node.js 并安装当前使用的 Node.js 的全局包
# 不然新的版本没有全局包
nvm install node --reinstall-packages-from=node
```
