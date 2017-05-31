---
permalink: /powershell/lang/expressions/
---

# PowerShell Expressions

```powershell
help about_Operators
help about_Operator_Precedence
```

## Arithmetic Operators

```powershell
help about_Arithmetic_Operators
```

`+` 和 `*` 可以用于字符串、数组和哈希表:

```powershell
'a' + 'b'  # 'ab'
'a' * 3    # 'aaa'
```

不同 types 参与计算，算式结果的类型为左边操作数的 type:

```powershell
'b' + 2  # 'b2'
2 + 'b'  # Error，'b' 不能转为 int
```

## Comparison Operators

比较操作符

```powershell
# -eq -ne -gt -ge -lt -le
# -Like -NotLike -Match -NotMatch
# -Contains -NotContains -In -NotIn
help about_Comparison_Operators
```

## Logical Operators

逻辑操作符

```powershell
# -and, -or, -xor, -not, !
help about_Logical_Operators
```

## Assignment Operators

```powershell
# -and, -or, -xor, -not, !
help about_Assignment_Operators
```

## &

调用命令（程序）

```powershell
# 不加引号，直接调用外部命令
node.exe --version
# 如果命令路径中有空格，需要用引号包裹，用 & 调用命令
& "C:\Program Files\nodejs\node.exe"
```
