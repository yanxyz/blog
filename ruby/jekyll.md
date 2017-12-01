# Jekyll

Jekyll，静态网站生成器。Github Pages 用的便是它。

## 目录结构

[目录结构](https://jekyllrb.com/docs/structure/)

`_sass` 是默认的 SCSS 模块目录，放在这个目录下的 `.scss` 文件只用于 `@import`，不要添加 Front Matter。
[详细说明](https://jekyllrb.com/docs/assets/#sassscss)。

## 模板

[docs](https://jekyllrb.com/docs/templates/)

Jekyll 使用 [Liquid](https://shopify.github.io/liquid/) 作为模板语言。

`link` tag 所用的 path 是相对于 root 目录（config file 所在目录），而不是相对于 tag 所在文档。
