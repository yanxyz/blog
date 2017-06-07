# JavaScript 表达式

- [操作符优先级](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## 目录

- [算术操作符](arithmetic.md)
- [plus](plus.md)
- [比较](comparisons.md)
- [typeof](typeof.md)
- [spread 和 rest 操作符](spread-rest.md)
- [delete](delete.md)


## 逗号操作符

从左到右计算 operands，返回最后一个 operands 的值。

最常见的地方是 for loop

```js
var arr = ['a', 'b', 'c']
for (var i = 0, len = arr.length; i < len; i++) {
  console.log(i)
}
```
