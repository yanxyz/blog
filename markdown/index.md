# Markdown

Markdown 是一种轻量级的标记语言。“轻量”是相对于 HTML、XML等标记语言而言。

## 对于普通用户

了解 [Markdown 语法](http://markdown.tw/)。通常网站编辑器会提供一份语法速查。

编辑器：

- Windows: [MarkdownPad](http://markdownpad.com/)
- Mac: [Mou](http://25.io/mou/)

## 目录

- [Github Markdown](../github/markdown.md)
- [语法高亮](highlight.md)
<!-- - [compilers](compilers.md) -->
- [Pandoc](pandoc.md)

## 问题

editor 通常会去除行尾空白，不过对于 markdown 来说，行尾两个空格表示 `<br>`

.editorconfig

```
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
