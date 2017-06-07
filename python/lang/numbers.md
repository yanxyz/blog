---
permalink: /python/lang/numbers/
---

# Python 数字

<https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex>

Integer literals

```py
9_9    # 十进制
0b_10  # 二进制
0o_70  # 十进制
0x_ff  # 十六进制
```

`_` 只是方便阅读。


## 长整型 Long Integers


```py
import sys

x = sys.maxint + 1
print(x)
print(type(x))
```

## Types

built-in mumberic types: int, float, complex

标准库提供的数字类型：Decimal，Fraction。

