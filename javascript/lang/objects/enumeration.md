---
permalink: /javascript/lang/objects/enumeration/
---

# 遍历对象属性

对象属性：

- type: String, Symbol
- ownership: Own, Prototype chain
- enumerability: Enumerable, Nonenumerable

method | Symbol | Nonenumerable | prototype
------ | ------ | ------------- | ----------
`Object.keys()`     | N | N | N
`Object.values()`   | N | N | N
`Object.entries()`  | N | N | N
`.hasOwnProperty()` | Y | Y | N
`.propertyIsEnumerable`               | Y | Y | N
`Object.getOwnPropertyNames()`        | N | Y | N
`Object.getOwnPropertyDescriptors()`  | N | Y | N
`Reflect.ownKeys()` | Y | Y | N
`for...in`          | N | Y | Y
`in` operator       | Y | Y | Y

## 参考

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties>

