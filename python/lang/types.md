---
permalink: /python/lang/types/
---

# Python Types

Python 有许多内置类型。

## 假值

type      | false
----      | ----
NoneType  | None
bool      | False
numeric   | 0
sequence  | 空的，即 `len(x) == 0`，比如 `''`, `()`, `[]`
mapping   | 空的，即 `len(x) == 0`，比如 `{}`
instances | `__bool__()` 返回 False 或 `__len__()` 返回 0

```py
x = 1
type(x)  # int
```

## None

None 是 NoneType 的唯一的值

```py
if (x is not None)
```

## Types 转换


## Type Hints

<https://github.com/python/mypy>



