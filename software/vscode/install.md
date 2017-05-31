---
permalink: /software/vscode/install/
---

# 安装 VSCode

Windows, Linux, Mac 三个平台都支持。

[下载](https://code.visualstudio.com)

## Windows

安装程序默认将 `code.exe` 添加到 PATH:

```shell
code --help

# 打开文件
code test.js

# 打开当前目录，即将当前目录设为 workspace
code .
```

## Portable

借助下面选项，可以实现一定程度上的便携版本：

- `--user-data-dir`
- `--extensions-dir`
