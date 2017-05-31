---
permalink: /javascript/lang/operators/arithmetic/
---

# JavaScript 算术操作符

## 递增递减

递增

- `++` 在 operand 前面是前递增，在返回值之前递增
- `++` 在 operand 后面是后递增，在返回值之后递增

递减同理。

```js
var x = 3
console.log(++x) //
console.log(x++) //

x = 3
var y = ++x + x
console.log(y) //

x = 3
var z = x++ + x
console.log(z) //
```

`//` 后面分别是什么？

## Exponentiation

指数操作符 `**`

```js
3 ** 2 // 9
Math.pow(3, 2)
```

指数操作符是右结合

```js
2 ** 3 ** 2 // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

base(左操作数) 前面不能使用一元操作符，`++` 和 `--` 除外。

```js
-2 ** 3 // Error
```

`-` 是用于 `2` 还是 `2 ** 3` 的结果？使用括号消除这个歧义。

```js
(-2) ** 3
-(2 ** 3)
```

