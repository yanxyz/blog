# PowerShell 语法

`about_*` 系列帮助讲解语法，比如 [about_Operators](https://msdn.microsoft.com/en-us/powershell/reference/5.1/microsoft.powershell.core/about/about_Operators)。

```powershell
# 首先更新帮助
# 需要以管理员权限运行
# 指定下载英文帮助，因为有些命令没有中文帮助
Update-Help -UICulture en-US

# 列出所有的 about_ 帮助
help about_*

# 查看帮助
# 不能使用 -Online
help about_Operators
```

## 目录

- [基本词法](basic.md)
- [Types](types.md)
- [Booleans](booleans.md)
- [字符串](strings.md)
    - [通配符](wildcards.md)
    - [正则表达式](regex.md)
- [数组](arrays.md)
- [哈希表](hashtables.md)
- [变量](variables.md)
- [表达式](expressions.md)
- [语句](statements.md)
    - [pipelines](pipelines.md)
    - [redirection](redirection.md)
    - [Requires](requires.md)
- [错误/异常](exceptions.md)
- [脚本块](scriptblocks.md)
- [函数](functions.md)
- [高级函数](advanced-functions.md)
- [Classes](classes.md)
- [Objects](objects.md)
<!-- - [Emnu](emnu.md) -->
<!-- - [模块](modules.md) -->

## 资料

- [Windows PowerShell Language Specification Version 3.0](https://www.microsoft.com/en-us/download/details.aspx?id=36389)
- [Windows PowerShell 4.0 and Other Quick Reference Guides](https://www.microsoft.com/en-us/download/details.aspx?id=42554)
- [PowerShell Reference](https://msdn.microsoft.com/powershell/reference/readme)
- [The PowerShell Best Practices and Style Guide](https://github.com/PoshCode/PowerShellPracticeAndStyle)
