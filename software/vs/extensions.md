---
permalink: /software/vs/extensions/
---

# Visual Studio 扩展

[Finding and Using Visual Studio Extensions](https://msdn.microsoft.com/en-us/library/dd293638.aspx)

[Visual Studio marketplace](https://marketplace.visualstudio.com/vs)

点击菜单 `Tools > Extensions and Updates...` 打开扩展管理对话框。

- CodeMaid
- MultiEditing 多点编辑
- Hide Main Menu 隐藏主菜单
- ReSharper 付费扩展

## EditorConfig

[VS2017 已支持 EditorConfig](https://blogs.msdn.microsoft.com/dotnet/2016/12/15/code-style-configuration-in-the-vs2017-rc-update/)

<https://docs.microsoft.com/en-us/visualstudio/ide/create-portable-custom-editor-options>

添加或修改 `.editorconfig` 时，已打开的文件要关闭再打开才有效。

## Productivity Power Tools

工具套件。`Quick Launch > @opt power tools` 打开配置选项。

列宽边界线由 Editor Guidelines 实现。

Align Assignments 不需要则关闭。

多彩标签颜色不协调，只好将 Custom Document Well 选项关闭。

Structure Visualizer 颜色不协调，关闭。

## VsVim

[FAQ](https://github.com/jaredpar/VsVim/wiki/faq)

 `Quick Launch > @opt vsvim` 配置 VsVim。keyboard 可以看到它与 VS 冲突的快捷键。

编辑区有一个白条，黑色主题下不大协调，它其实是 VsVim Command Margin。在 `Quick Launch > @opt color` 配置中修改配色：

![](/uploads/vs/vsvim-command-margin.png)

