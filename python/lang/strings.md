---
permalink: /python/lang/strings/
---

# Python Strings

Python 字符串，单引号和双引号没有区别。

使用 `\\` 转义，单引号在双引号内不需要转义，反之亦然。

```py
'It\'s a dog.'
"It\'s a dog."
```

triple-quotes：

- 三个单引号或三个双引号，不过为了与 docstring 一致（PEP 257），应使用三个双引号。
- 可以方便的多行。行末的 `\` 取消换行，即连续行。

```py
"""\
hello
world
"""
```

## 字符串前缀

带有前缀字母的是特殊的字符串。前缀字母不区分大小写。

`r`, raw strings:

```py
path = r'C:\Windows'
```

`f`, formatted string literal:

- 替换表达式放在 `{}` 内
- 字面的 `{}` 用 `\{\{\}\}` 表示

```py
name = 'Yan'
f'Hello {name!r}'

f'result: {12.34567:10.4}'
```

## basic

Python 字符串可以使用 `+` 和 `*`:

```py
>>> 3 * 'un' + 'ium'
'unununium'
```

相邻两个 literal string（即不是变量）自动合并为一个：

```py
>>> 'Py' 'thon'
'Python'
```

索引：

```py
word = 'Python'
# 第一个字符
word[0]
# 最后一个字符
word[-1]
# 越界，抛出错误
word[42]
```

切片，包含开始的字符，不包含结束的字符

```py
word[0:2]
word[:2]
# 越界，只取符合的范围
word[:42]
```

Python 字符串是 immutable，不可以修改

```py
# 抛出错误
word[0] = 'J'
```

获取字符串长度

```py
len(word)
```

## Methods



## Format

