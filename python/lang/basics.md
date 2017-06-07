---
permalink: /python/lang/basic/
---

# Python 基本词法

标识符区分大小写。比如常量 None, False, True。

注释：

```py
# 注释
```

语句不需要特别的结束符，多个语句放到一行时以 ";" 隔开。

语句块采用缩进形式，通常以四个空格缩进：

```python
if x < 0:
    x = 0
```

## 变量

变量没有声明语句，赋值后可以使用

```python
x = 0
print(x)
print(y)  # NameError
```
