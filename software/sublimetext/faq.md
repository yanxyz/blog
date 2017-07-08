---
permalink: /software/sublimetext/faq/
---

# Sublime Text FAQ

### Sublime Text 为什么总是打开两个窗口？

开始 `hot_exit: true` 之后，在关闭编辑器时不再提示保存文件，而会保存文件的编辑状态，在下次启动时恢复文件的状态，这是一个窗口，打开的文件又是一个窗口，所以总是打开两个窗口。

不想这样的话，关闭这个配置是一个办法。另一个办法是使用命令行选项 '-a'，就会把打开的文件添加到前一窗口中。

[When opening a directory through command line, Sublime text opens two windows instead of one - Stack Overflow](https://stackoverflow.com/questions/12193913/when-opening-a-directory-through-command-line-sublime-text-opens-two-windows-in)

### Sublime Text 输入法候选框不跟随光标

使用新的输入法框架（TSF）的输入法，比如 Windows 10 微软拼音输入法，候选框固定在屏幕左上角，不跟随光标。

这个问题无解。看 Sublime Text 作者是否解决这个问题。

我是将候选框拖动到屏幕右下角，一定程度上缓解这个问题。
