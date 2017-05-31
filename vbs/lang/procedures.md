---
permalink: /vbs/lang/procedures/
---

# VBScript 过程

VBScript 有两种过程：sub 和 function。

## Sub

```vbs
Sub Sum(a, b)
    WScript.Echo a + b
End Sub

Sum 1, 1
Call Sum(2, 2)
```

如果用 Call 调用过程，过程的参数需要放到括号内。

用 `Exit Sub` 退出 sub。

## Function

函数有返回值，所以可以用在表达式中。
跟 JavaScript 类似，可以在函数定义的前面调用它

```vbs
WScript.Echo Sum(1, 2) ' an expression

Function Sum(a, b)
    Sum = a + b  ' return value
End Function
```

