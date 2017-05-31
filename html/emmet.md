---
permalink: /html/emmet/
---

# Emmet

Emmet 以 CSS 选择符语法书写 HTML。

- [docs](https://docs.emmet.io/)

## 安装

流行的编辑器都有 Emmet 插件。

也可以在页面当中使用。

## 配置

查看所用编辑器 Emmet 插件的说明。

```json
"extensions_path": "~/emmet"
```

"extensions_path" 为配置文件的目录。放到家目录方便不同的编辑器使用相同的配置。

配置文件 snippets.json。

多个 snippets.json 合并为一个文件，合并优先级由高到低：

- snippets.json
- snippets*.json，加上名字后缀，方便分享配置，如 snippets-foo.json, snippets_bar.json, snippetsBaz.json。
- [default](https://github.com/emmetio/emmet/blob/master/lib/snippets.json)

修改 snippets.json 需要重启编辑器生效。
