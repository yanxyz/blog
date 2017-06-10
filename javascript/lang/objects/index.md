---
permalink: /javascript/lang/objects/
---

# JavaScript 对象

## 创建对象

```js
var o = {} // literal
var o = new Object() // constructor
```

Object constructor

- 没有参数时，或者参数为 undefined, null 时，返回一个新的 object
- 传入参数时，会把参数转为 object，然后返回这个 object

```js
var o = new Object('abc')
typeof o // 'Object'
```

ES6 增强了 Object literal

```js
var o = {
  [Symbol()]: 0,
  a: 1,

  // method
  m() {
    console.log('method')
  },

  // generator
  *n() {
    yield 'hi'
  }

  // getter
  get name() {
    return this._name
  },
  // setter
  set name(value) {
    this._name = value
  }
}
```

## 接下来

- [遍历对象属性](./loop.md)
