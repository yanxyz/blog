---
permalink: /vbs/lang/basics/
---

# VBScript

VBScript 建立在 Microsoft Visual Basic 基础上，语法为 VB 风格，跟 C 风格区别较大。

VBScript 标识符不区分大小写。

## 注释

第一种方式，使用单引号

```vbs
' comments
message = "hello world" ' comments
```

看得不大清楚，可以这样：

```vbs
'* comments
```

第二种方法，使用 `REM` 语句。既然是语句，`REM` 与其它语句同行时要用  `:` 隔开。

```vbs
REM remarks
message = "hello world" : REM remarks
```

## 语句

语句不需要结束符。

多个语句写在一行时，用 `:` 隔开。

过长的语句可以跨行，行末用 `_`。字符串不可以跨行。

## 代码规范

[Scripting Guidelines](https://technet.microsoft.com/en-us/library/ee198686.aspx)

关键字使用 PascalCase

```
If True Then
    WScript.Echo "hello world"
End If
```

变量名字使用 Hungarian Notation
<https://technet.microsoft.com/en-us/library/ee198696.aspx>

```vbs
strName = "Ivan Yan"
intAge = 20
dtmNow = #2017# ' date 字面量用 # 包裹
```

不建议使用这种命名风格。
