---
permalink: /software/editorconfig/
---

# EditorConfig

[EditorConfig](http://editorconfig.org/) 为代码文件指定 code style，如果编辑器安装了 EditorConfig 插件，编辑器将使用指定的 code style。

Sublime Text，VSCode 等都有 EditorConfig 插件。

## .editorconfig

配置文件 `.editorconfig`，从当前文件所在的目录向上查找，然后综合为一个配置，离当前文件最近的优先级最高。

[EditorConfig Properties](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)

注意：各个编辑器的插件支持程度不一。

示例：

- [.editorconfig example](.editorconfig)
- [ESLint .editorconfig](https://github.com/eslint/eslint/blob/master/.editorconfig)
