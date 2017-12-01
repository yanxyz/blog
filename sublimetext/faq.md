# FAQ

### Sublime Text 为什么总是打开两个窗口？

[When opening a directory through command line, Sublime text opens two windows instead of one - Stack Overflow](https://stackoverflow.com/questions/12193913)

建议 `hot_exit: false`。

### Sublime Text 输入法候选框不跟随光标

在 Sublime Text 中输入法候选框固定在屏幕左上角，不跟随光标。
这是因为输入法使用了新的输入法框架（TSF），比如 Windows 10 微软拼音输入法。

这个问题无解。看 Sublime Text 作者是否解决这个问题。

我是将候选框拖动到屏幕右下角，一定程度上缓解这个问题。
