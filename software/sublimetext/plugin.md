---
permalink: /software/sublimetext/plugin/
---

# Sublime Text 插件

使用 Package Control 来管理插件，点击菜单 `Tools > Install Package Control...` 安装。

安装插件，打开命令面板（菜单 `Tools > Command palette... `），输入 "install"，不用输入完，就会看到 PackageControl: Install Package。等待 Package Control 下载数据，然后输入插件的名字。

在 [Package Control 网站](https://packagecontrol.io) 查看下载排行：

- BracketHighlighter, 引号、括号等配对。
- DocBlockr, 函数参数注释。
- Emmet, 以 CSS 选择器语法写 HTML。
- HTML-CSS-JS Prettify, 格式化 HTML, CSS, JS 代码。
- Vintageous, 启用 vim 编辑方式。默认插件 Vintage 已停止开发，使用这个插件替代。
- SyncedSideBar，同步边栏

### Eslint

安装 SublimeLinter, SublimeLinter-contrib-eslint。

SublimeLinter-contrib-eslint 支持 HTML 中的 script，但是如果 ESLint 使用 eslint-plugin-html 就不可以了。
<https://github.com/roadhump/SublimeLinter-eslint/issues/87>

## 开发插件

文档

- <http://docs.sublimetext.info/en/latest/extensibility/plugins.html>
- <http://www.sublimetext.com/docs/plugin-basics>
- [Sublime Text 3 API Reference](https://www.sublimetext.com/docs/3/api_reference.html)

文件

- `Installed Packages/*.sublime-package`
- `Packages/*.py`
- `Packages/<pkg_name>`，`Packages/User` 就视为一个插件

`Packages/Default` 有示例。

在修改 pkg 的 py 文件时，会自动加载；修改更深的文件不会自动加载。

### 语法高亮

Sublime Text 可以用两种文件 `.sublime-syntax` 与 `.tmLanguage` 定义语法高亮。

`.tmLanguage` 是 TextMate 的语法高亮文件，为 XML 格式。TextMate 是 Sublime Text 出现之前的优秀的代码编码器（只能用于 Mac），已经 [开源](https://github.com/textmate/textmate)。

[`.sublime-syntax`](http://www.sublimetext.com/docs/3/syntax.html) 文件格式是 YAML，相比 `.tmLanguage` 修改方便多了。
