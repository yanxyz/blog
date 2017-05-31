---
permalink: /python/lang/expressions/
---

# Python 表达式

Python 操作符优先级，这张表可以了解 Python 有哪些操作符
<https://docs.python.org/reference/expressions.html#operator-precedence>

## 算术

Python 不会自动转换类型

```py
'2' + 2  # TypeError
```

Python 没有 `++`, `--` 运算符

```py
i = 0
i += 1
```

除法有两种，`/` 结果为 float，`//`（floor division）结果为 integer：

```py
10 / 2   # 5.0
10 // 2  # 5
```

不可以除以 0，否则抛出 ZeroDivisionError。

幂运算

```py
10 ** 2   # 100
10 ** -2  # 0.01
```

## 比较

链式比较

```py
x = 2
1 < x <= 3
```
