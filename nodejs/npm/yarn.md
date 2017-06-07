---
permalink: /npm/yarn/
---

# yarn

yarn 是 npm 的替代品。

[安装](https://yarnpkg.com/en/docs/install)

```sh
yarn --version
yarn --help
```

## config

查看配置

```sh
yarn config list
```

yarn 会使用 [npm 的配置选项](https://docs.npmjs.com/misc/config)，比如 "init-license"。

设置缓存位置

```sh
yarn config set cache-folder <path>
```

使用 taobao 镜像

```sh
yarn config set registry https://registry.npm.taobao.org
# 或者
npm install yarn tyarn -g
tyarn --version
```

配置文件为 `~/.yarnrc`。

## Usage

[yarn 与 npm 命令对照表](https://yarnpkg.com/docs/migrating-from-npm)

```sh
yarn # 同 yarn install
npm  # 同 npm -h
```

yarn 没有缩写命令，比如 list 不能缩写为 ls。也没有命令别名，比如 remove 没有别名 rm, info 没有别名 show。

`yarn install` 安装 `package.json` 指定的模块，并创建 `yarn.lock`。模块默认安装目录为 `./node_modules`，注意是当前目录下的 `node_modules`，即使当前目录下不存在 `package.json`。

`yarn add` 添加模块（保存到 `package.json`）。如果当前目录下不存在 `package.json` 则创建一个。

`yarn global add` 全局安装模块。更多命令 `yarn global -h`。
目前 Windows 下有一点问题。[不能设置全局安装的位置](https://github.com/yarnpkg/yarn/issues/630)，`yarn global bin` 返回的是 npm prefix，不是真正的全局 `bin` 位置。

`yarn clean`，清除已安装的模块中不必要的文件，在当前目录生成一个配置文件 `.yarnclean`。

`yarn why <pkg>` 为什么要安装这个模块？
