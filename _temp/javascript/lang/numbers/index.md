# JavaScript 数字

JavaScript 只有一个数字类型 number，不区分 integer 和 float。所有的数字都按 IEEE 754 double 标准实现。注意小数计算会有问题：

```js
0.1 + 0.2 === 0.3 // false
```

## literals

- 十进制（decimal），可用数字为 0-9
- 十六进制（hexadecimal），前缀为 `0x`，可用数字为 0-9A-F，如 `0xFF`。
- 二进制数（binary），前缀为 `0b`，可用数字为 0 和 1，如 `0b10`。
- 八进制数（octal），前缀为 `0o`，可用数字为 0-7，常用于 linux 文件权限，如 `0750`（旧八进制）。

前缀不区分大小写。

在严格模式下

- 不可以使用旧八进制（前缀为 `0`, 比如 `0750`）
- 十进制不可以有前缀 `0`（IE 不支持这条限制）

```js
;(function () {
  console.log(078) // 78
  console.log(077) // 63
})()

;(function () {
  'use strict'
  console.log(078) // SyntaxError
  console.log(077) // SyntaxError
})()
```

不同进制之间如何转换？

```js
(10).toString(8) // '12'，十进制转为八进制
(0b10).toString(8) // '2'，二进制转为八进制
parseInt(10, 8)  // 8，八进制转为十进制
```

## 数字常量

数字常量如：

- NaN, 非数字（not a number)
- Infinity 无穷大，-Infinity 负无穷大（这里 "-" ）
- Math.PI

### 0

0, +0, -0 三者严格相等。如何区分 +0 和 -0？

### Infinity

```js
1 / 0 // Infinity
1 / -0 // -Infinity
0 / 0 // NaN
```

### NaN

NaN，Not a Number，非数字。

```js
Number('hi')
parseInt('hi')
```

下面表达式的结果都是 NaN:

```js
Infinity / Infinity
0 / 0
Math.sqrt(-1)
NaN + 1
```

NaN 跟自身不相等：

```js
NaN == NaN // false
NaN === NaN // false
```

怎么判断 NaN 呢？

- `isNaN(value)`，将 value 转换为 number，若转换结果为 NaN 则返回 `true`。
- `Number.isNaN(value)` 不转换 value 类型，若 value 不是 number 则返回 `false`。

```js
isNaN('abc') // true
Number.isNaN('abc') // false
```
