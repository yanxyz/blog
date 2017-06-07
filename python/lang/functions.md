---
permalink: /python/lang/functions/
---

# Python 函数

定义函数

```py
def func():
    """docstring"""
    pass

func()
```

在函数内变量查找顺序：本地变量 > 外部函数的变量 > 全局变量 > built-in name（比如 None）。

在函数内可以访问全局变量，不过要用 global 声明全局变量。

参数按值传递。object 复制的是 reference。

函数如果没有 return 语句，则返回 None。

## 参数

Keyword Arguments

在调用函数时，keyword arguments 放在 positional arguments 的后面。

`*name` positional arguments
`**name` keyword arguments


