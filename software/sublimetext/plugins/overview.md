# 开发插件

文档

- <http://docs.sublimetext.info/en/latest/extensibility/plugins.html>
- <http://www.sublimetext.com/docs/plugin-basics>
- [Sublime Text 3 API Reference](https://www.sublimetext.com/docs/3/api_reference.html)

文件

- `Installed Packages/*.sublime-package`
- `Packages/*.py`
- `Packages/<pkg_name>`，`Packages/User` 就视为一个插件

`Packages/Default` 有示例。

在修改 pkg 的 py 文件时，会自动加载；修改更深的文件不会自动加载。
