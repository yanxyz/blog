---
permalink: /python/lang/inheritance/
---

# Python Inheritance


`isinstance()` 检查 instance 的 type

```py
如果 obj.__class__ 继承自 int (直接继承或间接继承)，则返回 True
isinstance(obj, int)
```

`issubclass()` 检查继承

```py
issubclass(bool, int)   # True, 因为 bool 是 int 的子类
issubclass(float, int)  # False
```

## Multiple Inheritance

```py
class DerivedClassName(Base1, Base2, Base3):
    pass
```


