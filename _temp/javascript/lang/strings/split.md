---
permalink: /javascript/lang/strings/split/
---

# JavaScript String split

分割字符串

`str.split(separator, limit?)`

- `separator` `String | RegExp`
- `limit` `Number`
- 返回一个数组

```js
var str = 'abc'
str.split('a') // ["","bc"]
str.split('b') // ["a","c"]
str.split('c') // ["ab",""]
str.split('abc') // ["",""]
```

`split('a')`，str 在 `a` 前后分割，分成三部分 `['','a','bc']`，然后去掉 'a'。不去掉 'a'：

```js
str.split(/(a)/) // ["","a","bc"]
```

当 separator 是正则表达式时，结果数组中包含捕获组。

`split('abc')` 不去掉 'abc'

```js
str.split(/(abc)/) // ["","abc",""]
```

再来看几个特殊情况

```js
str.split() // ["abc"]
str.split('') // ["a","b","c"]
```

- 没有参数或参数为 undefined，返回数组为 `[str]`。
- 参数为空字符串时，效果是将字符串分割为一串单个字符。

参数不是 `String | RegExp | undefined` 时，自动转为 String。

```js
'null'.split(null) // ['', '']
'123'.split(1) // ['', '23']
```

切割空字符串

```js
''.split() // ['']
''.split('') // []，大概是唯一返回空数组的例子
```

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

