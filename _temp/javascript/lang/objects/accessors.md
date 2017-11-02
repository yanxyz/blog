---
permalink: /javascript/lang/objects/accessors/
---

# JavaScript Accessors

除了 data properties 外，还有一种是 accessor properties，包含 getters 和 setters。

```js
const user = {
  // getter
  get name() {
    return this._name
  },

  // setter
  set name(value) {
    this._name = value
  }
}

user.name = 'Yan'
console.log(user.name)
```

不用 function 声明，而是用 get 和 set 声明。Accessors 通常用一个私有属性作为 backend store。JavaScript 没有 private 修饰符，上例 `_name` 用 `_` 表示这是一个私有属性，这是一种命名惯例，不是真正的私有属性。

Object.defineProperty() 也可以指定 accessors

```js
Object.defineProperty(user, 'name', {
  // 这里 get 不是用来声明 getter, 而是 get: function () {} 的简写
  get() {
    return this._name
  },

  set(value) {
    this._name = value
  }
})
```

- [Property getters and setters](http://javascript.info/property-accessors)

