---
permalink: /javascript/lang/equality/
---

# 相等

相等判断逻辑：

- loose equality `==`
- strict equality `===`
- SameValueZero
- SameValue

## loose equality

`==` 当类型不一样时先转换类型。

## strict equality

`===` 不会转换类型，如果类型不一致结果为 `false`。

- NaN 不等于 NaN
- +0 等于 -0

用于：

- `Array.prototype.indexOf()`, `Array.prototype.lastIndexOf()` 等方法，它们不能查找 NaN。

## SameValue

- NaN 等于 NaN
- +0 不等于 -0

用于：

`Object.is()`

## SameValueZero

- NaN 等于 NaN
- +0 等于 -0

用于：

- Map
- Set
- `Array.prototype.includes()` 等方法。

## 参考

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness>
