---
permalink: /vbs/script/
---

# VBScript Script File

vbs 脚本文件扩展名为 `.vbs`，双击可以运行它。

vbs script 有两个解释器：

- wscript.exe "w" 即 window。它是默认的解释器。
- cscript.exe "c" 即 console

假设有脚本 echo.vbs

```vbs
WScript.StdOut.Write("Hello VBScript")
```

双击运行它会报错。这是因为 `WScript.StdOut` 只能用在 console 中。

打开 console（即命令提示符），输入运行：

```bat
cscript.exe echo.vbs
```

这次没有问题了。不过多了 Windows 版权信息，去掉它：

```bat
cscript.exe /?
cscript.exe //Nologo echo.vbs
```

## 脚本编码

如果代码中有中文，例如：

```vbs
WScript.Echo "hello 你好"
```

ANSI（简体中文系统为 GBK），Unicode(UTF-16 LE)，UTF-16 BE 没有问题。UTF-8 按 ANSI 处理，所以乱码。

UTF 有 BOM 时，只有 Unicode(UTF-16 LE) 没有问题，其它报错：“编译器错误: 无效字符”。UTF-16 通常有 BOM。

如果只是注释有中文，也可能导致不能正常运行，例如

```vbs
Function Sum(a, b)
    Sum = a + b  ' 返回值
End Function

WScript.Echo Sum(1, 2)
```

## 脚本参数


