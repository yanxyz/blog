# JavaScript Strings

JavaScript 字符串单引号和双引号没有区别。为了方便操作 HTML 通常用单引号——HTML 的 attribute 使用双引号。

```js
var html = '<a href="https://github.com/yanxyz">My Github</a>'
```

使用 `\\` 转义，[列表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)。对普通字符转义结果仍然为普通字符。

```js
'\n' === 'n' // false
'\a' === 'a' // true
```

## Template Strings

模板字符串，一是可以使用插值，二是写多行字符串很方便

```js
var name = "Ivan Yan"
var str = `hello
${name}
`
```

## 方法

- [slice, substring, substr](slice.md) 提取子串

这些方法的参数可以是正则表达式

- [match, search](match.md)
- [split](split.md)
- [replace](replace.md)
