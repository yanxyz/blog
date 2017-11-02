---
permalink: /javascript/lang/async-functions/
---

# JavaScript Async 函数

## 创建

async 函数跟普通函数一样，创建方式

- async 函数声明
- async 函数表达式
- `AsyncFunction` constructor

### async 函数声明

```js
async function test () {
  let r = await Promise.resolve('Done')
  console.log(r)
}

test()
```

- 关键字 `async` 放在函数定义前。
- async 函数内可以使用 `await` 操作符，async 函数运行到 `await` 位置时暂停。
- async 函数返回一个 Promise。

### async 函数表达式

匿名 async 函数

```js
const t = async function () {}
```

可以使用箭头函数形式

```js
const t = async () => {}
```

即时调用函数

```js
;(async () => {
  const message = await 'hello'
  console.log(message)
})()
```

## await

`await` 是一元操作符

- 操作数为 promise, 则等待它 resolve；
- 操作数为其它类型，则隐式传入 `Promise.resolve()`

## 要点

async 函数既然是异步操作，想一想下面的输出

```js
async function f() {
  console.log('a')
  await console.log('b')
  await console.log('c')
  console.log('d')
}
setTimeout(() => console.log('timeout'), 0)
f()
console.log('end')
```

## 参考

- <https://developers.google.com/web/fundamentals/getting-started/primers/async-functions>
