---
permalink: /python/lang/strings/
---

# Python Strings

字符串，单引号和双引号没有区别。使用 `\\` 转义。

```py
'It\'s a dog.'
"It's a dog."
```

多行字符串可以用 triple quoted strings：`"""..."""` 或 `'''...'''`。为了与 docstring 一致（PEP 257），应使用三个双引号。在 triple-quotes 中行末的 `\` 取消换行，即连续行。

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
home = r'C:\Users\yan'
```

`f`, formatted string literal:

- 替换表达式放在 `{}` 内
- 字面的 `{}` 用 `\{\{\}\}` 表示

```py
name = 'Yan'
f'Hello {name!r}'

f'result: {12.34567:10.4}'
```

## 常见操作

strings 是 sequences 的一种，[sequences 常见操作](sequences.md)

字符串是 immutable，不可以修改

```py
word = 'Python'
word[0] = 'J'  # TypeError
```

### concat

相邻两个 string literals 自动合并为一个，适用于拆分长文本。

```py
message = ('a very long',
           'text')
print(message)
# a very long text
```

字符串可以使用 `+` 和 `*`:

```py
3 * 'a' + 'bc'
# 'aaabc'
```

## Format

**The Python Standard Library > Text Processing Services > string**

Format String Syntax

```py
>>> '{2}, {1}, {0}'.format(*'abc')
'c, b, a'
```

string.Template class

```py
from string import Template
s = Template('hello $name').substitute(name='yan')
print(s)
```
