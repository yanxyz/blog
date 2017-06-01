---
permalink: /cmd/intro/
---

# 命令提示符

- [wiki cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe)

Windows 命令提示符（command prompt）通常是 cmd.exe，具体得看

```bat
echo %ComSpec%
```

Windows 将来的版本可能会改为 PowerShell。

## 如何打开？

在 Windows 10 下：

- 开始菜单，上下文菜单有两项：**命令提示符**，**命令提示符（管理员）**。
- 资源管理器，菜单 **文件 > 打开命令提示符** 有两项，**打开命令提示符** 和 **以管理员身份打开命令提示符**。

在 Total Commander 中使用快捷键更方便，[见这里](../software/totalcmd/index.md#cmd)。

## 替代品

自 Windows 10 开始，console 支持复制粘贴快捷键 `ctrl+c` `ctrl+v`，方便了一些。但是仍然不是很方便，因此我使用替代品 [ConEmu](../software/conemu/index.md)。
