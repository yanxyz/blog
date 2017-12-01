# VSCode Markdown

## 预览

VSCode 可以并排预览或在新标签中预览 markdown。

`F1` 打开命令面板，输入 `markdown`，查看相关命令及其快捷键。

![](../../images/markdown.png)

上图红框是预览按钮，点击它可以并排预览 markdown。

### 换行符

默认忽略单个换行符。`"markdown.preview.breaks": true` 将换行符都转为 `<br>`。

[Control handling of line breaks in the Markdown preview](https://code.visualstudio.com/updates/v1_14#_control-handling-of-line-breaks-in-the-markdown-preview)

## 编辑

[Surround snippets for Markdown](https://code.visualstudio.com/updates/v1_12#_surround-snippets-for-markdown)

## 语法高亮

支持高亮代码块，不过不支持相应语言的补全。

不支持 powershell 的别名 posh。
