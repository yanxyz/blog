---
permalink: /python/lang/sequences/
---

# Python Sequence Types

三种基础的 sequence Types：lists, tuples, range

types  | class | literal | mutable
----   | ----- | ------- | ------
lists  | list  | []      | yes
tuples | tuple | ()      | no
ranges | range |         | no


## Tuples


## Ranges

## 常见操作

以 list 为例

```py
a = ['a', 'b', 'c']
len(a)  # 3
```

索引为负数时表示从后往前

```py
a[0]   # 'a'
a[-1]  # 'c'
a[100] # IndexError
```

是否包含

```py
if 'b' in a:
    pass

if 'd' not in a:
    pass
```

### Slice

切片 `[start:end]`

- 包含 start, 不包含 end，返回的序列的 size 为 `end - start` 。因此当 `start = end` 时结果为空。
- 当 `start > end` 时返回空的序列。
- 当 `end > size` 时，按 `end = size` 处理。
- start 缺省值为 0，end 缺省值为序列 size，因此 `[:]` 返回 sequence 的副本（shadow copy）

```py
a[1:2]   # ['b']
a[1:]    # ['b', 'c']
a[:-1]   # ['a', 'b']
a[:]     # ['a', 'b', 'c']
```

给切片赋值表示替换

```py
a[1:2] = [1, 2, 3] # a 变成 ['a', 1, 2, 3, 'c']
a[:] = [] # 清空 a
```

### Looping

```py
a = ['a', 'b', 'c']

for v in a:
    print(v)

for i, v in enumerate(a):
    print(i, v)

# 同时遍历多个序列
b = [1, 2]
for x, y in zip(a, b):
    print(x, y)
```

### Concat

```py
a = ['a', 'b', 'c']
b = [1, 2]
a + b
# ['a', 'b', 'c', 1, 2]
```
