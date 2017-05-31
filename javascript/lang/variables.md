---
permalink: /javascript/lang/variables/
---

# JavaScript 变量

变量声明语句: var, let, const

## var

以 `var` 声明的变量

声明提前（hosited）

```js
function func() {
  // 声明提前，不会出现 ReferenceError；初始化不会提前
  console.log(tmp) // undefined
  var tmp = 123
  console.log(tmp) // 123
}

// 相当于
function func() {
  var tmp
  console.log(tmp) // undefined
  tmp = 123
  console.log(tmp) // 123
}
```

没有块作用域（块语句没有作用域）

```js
function func() {
  if (true) {
    var tmp = 123
  }
  console.log(tmp) // 123
}
```

在同一作用域内可以重复声明。

在顶级域内以 `var` 声明的变量，同时也是全局对象的一个属性。

```js
var b = 2
window.b // 2
```

## let const

let, const 声明变量

声明不会提前

```js
function func() {
  console.log(i) // ReferenceError
  const tmp = 123
  console.log(tmp)
}
```

有块作用域

```js
function func() {
  if (true) {
    const tmp = 123
  }
  console.log(tmp) // ReferenceError: tmp is not defined
}
```

在同一作用域内不可以重复声明。

在顶级域内以 let 或 const 声明的变量，不是全局对象的属性。

```js
let c = 3
window.c // undefined
```

### const

const 声明常量，在声明的时候必须初始化。按惯例，常量名字的格式为 `CONST_NAME`。

当常量的值为 object type 时，虽然不可以改变值（引用），但是可以修改属性。

```js
const o = {}
o.name = 'Ivan Yan'

const arr = []
arr.push(1)
```

### TDZ

上面说了，let 和 const 声明不会提前

```js
function func() { // TDZ starts
  console.log(tmp) // ReferenceError
  const tmp = 123 // TDZ ends
  console.log(tmp)
}
```

TDZ (temporal dead zone)，从进入作用域到变量声明，这个运行过程当中不可以访问变量。

声明的同时初始化，初始化算在 TDZ 内

```js
function func() { // TDZ starts
  const tmp = console.log(tmp) // TDZ ends，ReferenceError
  console.log(tmp)
}
```

TDZ 与时间相关，与位置无关

```js
function func() { // TDZ starts
  function output() {
    console.log(tmp)
  }
  const tmp = 123 // TDZ ends
  output() // 123
}
```

对于在 TDZ 内的变量，`typeof` 抛出 `ReferenceError`

```js
function func() { // TDZ starts
  console.log(typeof foo) // undefined，`foo` 是未声明的变量，不在 TDZ 内
  console.log(typeof tmp) // ReferenceError，`tmp` 不是未声明的变量，在 TDZ 内
  const tmp = 123 // TDZ ends
}
```

## 未声明赋值

在非严格模式下，变量如果没有声明赋值（undeclared assignments），则创建全局对象的一个属性：

```js
a = 1
window.a // 1
delete a // true
```

严格模式下，变量要先声明才能使用。

## loop

const 的问题

```js
// i++ 导致 TypeError: Assignment to constant variable.
for (const i=0; i<3; i++) {
  console.log(i)
}
```

如果不修改变量的值，const 但用无妨

```js
for (const x of 'abc') {
  console.log(x)
}
```

在讲到闭包时，常常列举下面例子

```js
var arr = []
for (var i = 0; i < 3; i++) {
  arr.push(() => i)
}
arr.map(x => x()) // ？
```

let, const 在每次循环时重新绑定

```js
var arr = []
for (let i = 0; i < 3; i++) {
  arr.push(() => i)
}
arr.map(x => x()) // ？
```


## 参考

- <http://exploringjs.com/es6/ch_variables.html>
- <http://stackoverflow.com/questions/4862193/difference-between-variable-declaration-syntaxes-in-javascript-including-global>
