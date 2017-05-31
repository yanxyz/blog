---
permalink: /software/sublimetext/usage/
---

# Sublime Text

帮助文档：

- [Sublime Text 3 Documentation](https://www.sublimetext.com/docs/3/)
- [Sublime Text Unofficial Documentation](http://docs.sublimetext.info/en/latest/index.html)

## 命令面板

点击菜单 `Tools -> Command Palette...` 打开命令面板。看看菜单上的快捷键，记住它。

命令面板， fuzzy 匹配命令，能快速定位所有的命令，比如切换文件类型，输入 `html`，就能看见 `Set Syntax: HTML`。

## 快捷键

点击菜单 `Preferences -> Key Bindings - Default` 查看默认快捷键。

点击菜单 `Preferences -> Key Bindings - User` 修改快捷键。例如修改命令面板的快捷键，在默认快捷键配置文件查找 "command_palette"，将它复制到用户快捷键配置文件中，将按键改为 `f1`。

## 编辑

### 编码

不支持 GBK，可以用插件 ConvertToUTF8。

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

### 文件类型

在状态栏上点击文件类型，可以改变当前文件类型。

菜单 `Preferences -> Settings - More -> Syntax Specific - User` 设置文件类型的扩展名，代码风格等。比如我将 HTML 的缩进设为两个空格的缩进：

```json
{
  "extensions": [
    "html",
  ],
  "tab_size": 2,
  "translate_tabs_to_spaces": true
}
```

## 主题

菜单 `Preferences -> Color Scheme` 选择主题。

我一直用 Monokai，我没有使用自带的，用的插件 Monokai Extended。

## 代码补全

[优先级](http://docs.sublimetext.info/en/latest/extensibility/completions.html#sources-for-completions-and-their-priorities)：

1. Snippets
1. API
1. 代码完成文件 Completions files

Snippets 的优先级最高，`*.sublime-snippet` 放到 User 目录下，一个文件只能定义一个代码片断。

Completions 的优先级最低，`*.sublime-completion` 放到 User 目录下，一个文件可以定义多个代码片断.

我偏好 Completions，可惜它的优先级最低。

## FAQ

### Sublime Text 为什么总是打开两个窗口？

开始 `hot_exit: true` 之后，在关闭编辑器时不再提示保存文件，而会保存文件的编辑状态，在下次启动时恢复文件的状态，这是一个窗口，打开的文件又是一个窗口，所以总是打开两个窗口。

不想这样的话，关闭这个配置是一个办法。另一个办法是使用命令行选项 '-a'，就会把打开的文件添加到前一窗口中。

[StackOverflow](http://stackoverflow.com/questions/12193913/)
