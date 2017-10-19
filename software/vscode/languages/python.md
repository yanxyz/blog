---
permalink: /software/vscode/languages/python/
---

# VSCode Python

## MagicPython

提供更好的 Python 语法高亮。

## Python Extension

<https://github.com/DonJayamanne/pythonVSCode/wiki>

在缺少相关工具时会提示安装。

### Intellisense

jedi 安装 `pip install jedi`

ctags，将它添加到 PATH 中
<http://ctags.sourceforge.net/>

我不清楚为什么需要它们。

### Linting

支持多种 linter，默认为 pylint。

[Python lint](../../python/tools/lint.md)

相关配置 `python.linting`。

### Formmatting

支持 autopep8, yapf，默认为 autopep8。

相关配置 `python.formmatting`。

### Unit Tests

支持 unittest, pytest, nose。

相关配置 `python.unitTest`。
