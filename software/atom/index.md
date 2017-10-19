# Atom

Atom 是 Github 出品的一款编辑器。

Atom 吸收了 [Sublime Text](../sublimetext/index.md) 的优点，两款编辑器有不少相似之处。

Atom 基于 Electron，开发语言是 CoffeeScript，配置文件格式是 CSON（类比于 JSON）。

- [官网](http://atom.io/)
- [新手指南](http://flight-manual.atom.io/)

## 安装

可以从 [淘宝镜像](http://npm.taobao.org/mirrors/atom/) 下载安装包。

- [安装教程](http://flight-manual.atom.io/getting-started/sections/installing-atom/)
- [更新日志](https://github.com/atom/atom/releases)

在安装的过程中会添加两个命令：

```bash
atom -h
apm -h
```

## 配置

菜单 `File > Settings` 打开配置面板。这里可以修改配置，安装主题、包等。

了解 Atom 配置文件格式 [CSON](http://flight-manual.atom.io/using-atom/sections/basic-customization/)。

[面板字体太小]( https://discuss.atom.io/t/how-to-enable-retina-high-dpi-mode-in-linux/10873/16)

一些配置由文件 `~/.atom/config.cson` 设置。

### 文件类型

[设置某个文件类型的格式](http://flight-manual.atom.io/using-atom/sections/basic-customization/#language-specific-configuration-settings)

### 自动保存

进入默认包 `autosave` 设置，启用。

[Save on focus lost](https://discuss.atom.io/t/save-on-focus-lost/2555)

### 快捷键

在菜单，命令面板，配置页，包配置等地方都可以看到相关的快捷键。

在 `Settings > Keybindings` 面板可以搜素快捷键，也能帮助修改快捷键。修改快捷键实际是编辑文件 `~/.atom/keymap.cson`。

## APM

Atom 的功能由包实现。既可以在 settings 页 packages 标签下管理包，也可以在终端中使用命令 apm 管理。apm 跟 npm 类似。

有些包需要编译安装。

```bash
apm install --check
```

我安装的插件：

- docblockr 方便写 API 注释
- emmet 以 CSS 选择符语法写 HTML
- language-vue
- linter 代码检查器框架。根据语言类型安装检查器，比如 linter-eslint
- merge-conflicts 解决 git 合并冲突
- open-rencent 最近打开文件
- pretty-json 格式化 JSON
- vim-mode 启用 vim 编辑风格

## 用法

### 命令面板

命令面板（Command Palette）的快捷键见菜单 `View > Toggle Command Palette`

### Fuzzy Finder

[Fuzzy Finder](http://flight-manual.atom.io/getting-started/sections/atom-basics/#opening-a-file-in-a-project)

### 多光标

[Mutiple Cursors](http://flight-manual.atom.io/using-atom/sections/moving-in-atom/#multiple-cursors-and-selections)

### 代码折叠

[Folding](http://flight-manual.atom.io/using-atom/sections/folding/)

### 标签

[Atom Bookmarks](http://flight-manual.atom.io/using-atom/sections/moving-in-atom/#atom-bookmarks)

### 符号导航

[Navigating by Symbols](http://flight-manual.atom.io/using-atom/sections/moving-in-atom/#navigating-by-symbols)

### 项目

需要安装第三方包支持。

跟其它编辑器不同，全部项目的信息都保存到同一个文件中 `~/.atom/projects.cson`

### 调试

需要安装第三方包支持。

- node-debugger

### Git

默认支持 git diff。不过不如 VSCode 方便，VSCode 会并排窗口对比变化。
