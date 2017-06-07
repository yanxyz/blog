---
permalink: /python/lang/classes/
---

# Python Classes

class 跟 function 一样，可以放在 if 或其它 function 内。

class 定义创建新的 namespace。

method 的第一个形参 self 是 instance object。调用 method

```
x.f()
MyClass.f(x)
```

self 只是惯例。不过有些工具可能只认 self。

可以将一个外部函数赋值给 class variable。

## Instance

```py
m.__self__  # instance object
m.__func__  # function object
```


## Conventions

名字添加 `_` 前缀，比如 `_spam`，表示 private members。

name mangling，为避免 class members 与 suclasses members 名字冲突，`__spam` 自动转为 `_classname__spam`。
