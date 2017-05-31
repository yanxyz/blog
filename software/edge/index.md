# Edge

Edge 是微软新一代浏览器，用于替代 IE。

Edge 内置于 Win10, 目前无独立发行版本。

Edge 的更新由 Windows 更新完成。
Edge 目前有 Stable 和 Insider 两个更新频道。Stable 是稳定版本。
Insider 是预览版本，只有 Windows Insider Preview 可以使用。

在 [Edge 官网](https://developer.microsoft.com/microsoft-edge/) 上，
可以查看更新日志、文档、路线图，可以下载 IE 虚拟机。

查看 Edge 的版本，代开 Edge 的设置面板，滚动到最底部可以看到：

![](/uploads/edge/version.png)

Edge 使用新的排版引擎 EdgeHTML，目前在统计浏览器兼容性使用的是 EdgeHTML 的版本。

Edge 的 JavaScript 引擎是 Chakra。微软已经以 MIT 许可将 Chakra 开源发布在 [Github](https://github.com/Microsoft/ChakraCore) 上。

打开 F12 的控制台面板查看 `navigator.userAgent`:

```
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586"
```
