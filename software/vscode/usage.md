---
permalink: /software/vscode/usage/
---

# VSCode 用法

## 编辑器界面

![](http://code.visualstudio.com/images/codebasics_hero.png)

View Bar 跟操作系统任务栏类似，可以拖拽图标。通过右键菜单可以隐藏图标。

## 配置

在中文系统下 VSCode 界面语言默认为中文，[修改为英文](https://code.visualstudio.com/docs/customization/locales#_configure-language-command)。

菜单 **File > Preferrences**

- "User Settings" 为用户配置 settings.json, 快捷键 `Ctrl+,`。
- "Workspace Settings" 为项目配置 `.vscode/settings.json`，覆盖用户配置。

字体推荐 [source code pro](https://github.com/adobe-fonts/source-code-pro/releases)

[配置文件的位置](https://code.visualstudio.com/docs/customization/userandworkspace#_settings-file-locations)

[设置窗口标题](https://code.visualstudio.com/updates/v1_10#_configurable-window-title)

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

## Snippets

菜单 **File > Preferrences > User Snippets** 添加 Snippets。

Snippets 可以指定快捷键。

可以使用多点编辑在多个地方插入 Snippets。

[Snippets 语法](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)

## IntelliSense

[docs](https://code.visualstudio.com/docs/editor/intellisense)

候选列表会合适的自动打开，在JavaScript `.` 是触发字符。方向键选择列表项，`tab` 或 `enter` 输入选中项，`esc` 取消输入。

`Ctrl+Space` 主动打开候选列表。Win10 在中文输入状态下，这个键被占用，先切换到英文输入。

在注释和字符串中没有 IntelliSense，可以 `Ctrl+Space`，也可以修改配置 `editor.quickSuggestions`。

Snippets 默认在列表的底部，可以修改配置 `"editor.snippetSuggestions": "top"`。

候选列表打开后，`Ctrl+Space` 查看选中项的文档

![](https://code.visualstudio.com/images/1_13_suggest.gif)

## Panel

![](https://code.visualstudio.com/images/1_9_output_scroll_lock.png)

蓝框按钮可以锁定 Output，禁止滚屏。

## 搜索

搜索引擎为 [ripgrep](https://github.com/BurntSushi/ripgrep), 支持 `.gitignore`，在搜索面板中点击相应按钮启用。

## 书签

目前不支持书签，可以安装相关扩展 bookmark

## Multi-root workspaces

目前只能有一个 workspace，即只能有一个根目录。

[Multi-root workspaces](https://code.visualstudio.com/updates/v1_13#_multiroot-workspaces) 在计划当中。

## macOS

[macOS: Sierra Tabs](https://code.visualstudio.com/updates/v1_12#_macos-sierra-tabs)

[macOS: Mouse swipe to navigate](https://code.visualstudio.com/updates/v1_12#_macos-mouse-swipe-to-navigate)
