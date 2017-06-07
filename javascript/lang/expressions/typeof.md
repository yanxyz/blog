---
permalink: /javascript/lang/typeof/
---

# JavaScript typeof 操作符

typeof 判断数据类型

```js
typeof 'abc' // 'string'
```

typeof 只适合于判断原始类型。详细见 [types](../types.md)

下面写法：

```js
typeof('abc')
```

看着像是函数调用，实际不是。这里 `()` 不是函数调用操作符，而是表达式括号。不建议这样写。
