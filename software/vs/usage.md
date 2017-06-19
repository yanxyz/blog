---
permalink: /software/vs/usage/
---

# Visual Studio 用法

## 设置

点击菜单 **Tools > Options** 打开配置对话框。另一种方式是使用 [Quick Launch](https://msdn.microsoft.com/en-us/library/hh417697.aspx)。

登录帐户后默认同步配置 **Quick Launch > sync**

菜单 **Tools > Import and Export Settings...** 可以导入导出配置，也可以重置配置。

设置字体 **Quick Launch > @opt font**

### 文件类型

可以对单个语言设置行号、折行、tab 格式、格式化等。如 **Quick Launch > @opt javascript**

注意如果修改所有语言的设置会修改掉各语言的设置，不是分了全局与单个两级。

### 编码

VS 默认使用 UTF8-BOM 编码，保存 UTF8 编码的文件时会添加 BOM。

不能设置默认编码。

VS2015 菜单 **File > Advanced Save Options...** 可以修改当前文件的编码。

### 换行符

VS 默认使用系统换行符。

不能设置默认换行符。

VS2015 菜单 **File > Advanced Save Options...** 可以修改当前文件的换行符。

[mixed line endings](http://www.adamtuliper.com/2015/10/stop-visual-studio-from-complaining.html)

### 选择

列选择，按下 `Alt` 键选择


## 快捷键

[Visual Studio 2017 快捷键](http://visualstudioshortcuts.com/2017/)

**Quick Launch > @opt keyboard** 修改快捷键。

- 注释 `Ctrl+K, Ctrl+C`， 取消注释  `Ctrl+K, Ctrl+U`
- 格式化文档 `Ctrl+K, Ctrl+D`，格式化选中文档 `Ctrl+K, Ctrl+F`
- 创建新项目 `Ctrl+Shift+N`

## 调试

### Diagnostics Tools

调试时自动打开分析工具。找到这个选项 "Enable Diagnostics Tools while debugging"，去掉勾选。

![](/uploads/vs/enable-diagnostics-tools.png)

## 添加外部工具

[Managing External Tools](https://msdn.microsoft.com/en-us/library/76712d27.aspx)

点击菜单 **Tools > External Tools...** 打开 External Tools 对话框。命令参数等可以使用 VS 提供的变量。添加的外部工具在菜单  `Tools` 下访问。

## XAML

**XAML Desinger** setting 修改窗口默认的分割方向。
