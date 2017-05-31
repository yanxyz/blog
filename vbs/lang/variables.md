---
permalink: /vbs/lang/variables/
---

# VBScript 变量

## 数据类型

只有一个基础数据类型，所有的变量默认是 variant 类型。

字符串用双引号。单引号用作注释了。

## Dim

Dim 声明变量。

```
name = Null
IsNull(name) ' true
IsEmpty(name) ' true


name = Null
IsNull(name) ' true
IsEmpty(name) ' true
```

```vbs
Option explicit

```

## Const

Const 声明常量。


## Set

为变量赋值一个对象的引用

```vbs
Dim fso

' 如果没有 set 则报错
Set fso = WScript.CreateObject("Scripting.FileSystemObject")

' 销毁对象, 通常不需要
Set fso = Nothing
```
