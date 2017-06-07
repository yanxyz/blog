---
permalink: /python/lang/expressions/
---

# Python 表达式

[**The Python Language Reference > Expressions > Operator precedence**](https://docs.python.org/reference/expressions.html#operator-precedence)

## 算术

不会自动转换类型

```py
'2' + 2  # TypeError
```

没有 `++`, `--` 运算符，变通方法

```py
i = 0
i += 1
```

除法有两种，`/` 结果为 float，`//`（floor division）结果为 integer; 除以 0 抛出 ZeroDivisionError。

```py
10 / 2   # 5.0
10 // 2  # 5
10 / 0   # ZeroDivisionError
```

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

## Conditional operator

没有 conditional operator `?:`，变通方法

```py
a if condition else b
```

先计算 condition，根据的它的结果返回 a 或 b。

```py
x = 1 if True else 0
print(x)
```
