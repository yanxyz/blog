# Pandoc

Pandoc 是一个通用转换器，可以在 Markdown, HTML, reStructuredText, EPUB, docx 等之间相互转换。

- [下载](https://github.com/jgm/pandoc/releases) 支持 Windows, Linux, MacOS。
- [文档](http://pandoc.org/README.html)

查看帮助

```sh
pandoc -h
```

查看支持的格式

```sh
pandoc --list-input-formats
pandoc --list-output-formats
```

输入与输出编码均为 utf-8，其它编码需要用 iconv。

## Markdown

Markdown 有多个扩展。

### 语法高亮

查看支持的语言

```sh
pandoc --list-highlight-languages
```

语言不支持别名，不如 'javascript' 不能用 'js'。

```sh
pandoc --no-highlight
```

### 标题 id

标题自动生成 id
