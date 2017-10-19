---
permalink: /software/sublimetext/usage/
---

# Sublime Text 用法

帮助文档：

- [Sublime Text 3 Documentation](https://www.sublimetext.com/docs/3/)
- [Sublime Text Unofficial Documentation](http://docs.sublimetext.info/en/latest/index.html)

## 命令面板

命令面板， fuzzy 匹配命令，能快速定位所有的命令，比如切换文件类型，输入 `html`，就能看见 `Set Syntax: HTML`。

点击菜单 **Tools > Command Palette...** 打开命令面板。

## 配置

Sublime Text 没有图形配置界面，而是直接编辑配置文件，配置文件为 JSON 格式，支持注释。

Sublime Text 及其插件，配置分为 Default 与 User 两个级别

- Default 是默认配置，升级时会被覆盖
- User 是自定义配置，升级时不会被覆盖。

点击菜单 **Preferences > Settings** 并排打开两个配置文件，左边是 Default, 右边是 User。

## 编辑

### 编码

不支持 GBK，可以通过插件 ConvertToUTF8 支持。

配置 `"show_encoding": true` 在状态栏上显示编码，点击它，可以改变当前文件的编码。

### 换行符

配置 `"default_line_ending": "unix"` 将换行符默认设为 Unix 风格，便于跨平台协作。

在状态栏上点击换行符，可以改变当前文件的编码。

### 选择

多点编辑建立在多选基础上。多选快捷键

Command | Windows
------- | -------
Quick Add Next  | `Ctrl+D`
Undo Selection  | `Ctrl+U`
Quick Skip Next | `Ctrl+K Ctrl+D`
Find All        | `Alt+F3`

`ESC` 取消多选，只选中第一个。

大小写由 "Find..." 的选项控制。

![](/uploads/sublimetext/find.png)

`Ctrl` 添加选择；`Alt` 减少选择。

列选择，鼠标右键+Shift，或者鼠标中键。

- [selection](http://www.sublimetext.com/docs/selection)

### 行编辑

`Ctrl+C`, `Ctrl+V` 支持行。

`Ctrl+Shift+ ↑/↓` 移动当前行。

`Ctrl+J` 合并行。

连续单击选择当前行。

### 代码折叠

折叠快捷键见菜单 **Edit > Code Folding**

### 书签

书签快捷键见菜单 **Goto > Bookmarks**

当关闭 Sublime Text 后，书签便丢失。想保存书签可以找下相关插件。

[Sublime Text Bookmarks](http://www.macdrifter.com/2012/07/sublime-text-bookmarks.html)

## 快捷键

点击菜单 **Preferences > Key Bindings** 并排打开两个配置文件，左边是 Default，右边是 User。

例如修改命令面板的快捷键，在默认快捷键配置文件查找 "command_palette"，将它复制到用户快捷键配置文件中，将按键改为 `f1`。

快捷键修改之后会即时反映到菜单上。

## 文件类型

在状态栏上点击文件类型，可以改变当前文件类型。

菜单 **Preferences > Settings - Syntax Specific** 设置文件类型的扩展名，代码风格等。比如我将 HTML 的缩进设为两个空格的缩进：

```json
{
  "extensions": [
    "html",
  ],
  "tab_size": 2,
  "translate_tabs_to_spaces": true
}
```

## Context Menu

show unsaved changes，显示未保存的修改，红色减号表示删去的内容，绿色加号表示新增的内容

标签栏如果文件修改过，显示一个圆圈。

## 代码补全

[优先级](http://docs.sublimetext.info/en/latest/extensibility/completions.html#sources-for-completions-and-their-priorities)：

1. Snippets
1. API
1. 代码完成文件 Completions files

Snippets 的优先级最高，`*.sublime-snippet` 放到 User 目录下，一个文件只能定义一个代码片断。

Completions 的优先级最低，`*.sublime-completion` 放到 User 目录下，一个文件可以定义多个代码片断.

我偏好 Completions，可惜它的优先级最低。

## 主题

菜单 **Preferences > Color Scheme** 选择主题。

我一直用 Monokai，我没有使用自带的，用的插件 Monokai Extended。

## subl

Sublime Text 提供一个命令行程序 subl，方便从命令行启动它。查看命令行选项

```sh
subl -h
```

比如在 VS 中添加一个外部工具，用 Sublime Text 编辑当前文件，并指定插入符位置

- Title: Sublime Text
- Command: subl.exe
- Arguments: -n -a $(ProjectDir) $(ItemPath):$(CurLine):$(CurCol)
