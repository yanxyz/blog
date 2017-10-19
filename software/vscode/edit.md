---
permalink: /software/vscode/edit/
---

# 文件编辑


## 编辑

点击菜单 **Help > Welcome** 打开 Welcome 页面，以交互的方式学习编辑功能。

### 多点编辑

`Alt+Click` 添加 multiple cursors，Sublime Text 默认为 `Ctrl+Click`，可以修改

```js
"editor.multiCursorModifier": "ctrlCmd",
```

不过 **Go To Definition** 和 **Open Link** 将改为 `Alt+Click`。

多选快捷键

- `ctrl+d`

[区分大小写](https://code.visualstudio.com/updates/v1_9#_match-case-and-whole-words-in-multicursor-actions)

### 列编辑

`alt+shift`，其它编辑器一般是 `alt`。

## 搜索替换

支持 `.gitignore`，在搜索面板中点击相应按钮启用。


## 代码折叠

相关快捷键，命令面板输入 `fold` 查找。

[Folding regions](https://code.visualstudio.com/updates/v1_17#_folding-regions)

跟 Visual Studio 中类似

- C# `#region` `#endregion`
- js `//#region` `//#endregion`


## 书签

目前不支持书签，可以安装相关扩展 bookmark


## IntelliSense

[docs](https://code.visualstudio.com/docs/editor/intellisense)

候选列表会合适的自动打开，在JavaScript `.` 是触发字符。方向键选择列表项，`tab` 或 `enter` 输入选中项，`esc` 取消输入。

`Ctrl+Space` 主动打开候选列表。Win10 在中文输入状态下，这个键被占用，先切换到英文输入。

在注释和字符串中没有 IntelliSense，可以 `Ctrl+Space`，也可以修改配置 `editor.quickSuggestions`。

Snippets 默认在列表的底部，可以修改配置 `"editor.snippetSuggestions": "top"`。

候选列表打开后，`Ctrl+Space` 查看选中项的文档

![](https://code.visualstudio.com/images/1_13_suggest.gif)

## 文件格式

当前文件格式显示在状态栏右边区域，点击相关文字可以改变文件格式。

相关设置：

```json
"files.encoding": "utf8",
"files.eol": "\n",
"editor.tabSize": 4,
"editor.insertSpaces": true,
"editor.detectIndentation": true,
```

针对某种程序语言的配置，命令 `Preferences: Configure language specific settings...`
<https://code.visualstudio.com/updates/v1_9#_language-specific-settings>

## 文件编码

`files.autoGuessEncoding: true`

encoding 不能自动识别 GBK。
