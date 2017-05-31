---
permalink: /javascript/lang/modules/
---

# JavaScript 模块

模块（module）与脚本（script）的区别：

- 模块的顶级域（top level scope）不是全局作用域，在顶级域内声明的变量不是全局变量
- 模块默认使用严格模式

模块以 export 导出变量，以 import 导入变量。

export 和 import 只能用在模块顶层（top level scope）。

## export

- <http://exploringjs.com/es6/ch_modules.html#sec_all-exporting-styles>

export default 两种风格：

```js
export default function foo() {} // no semicolon!
export default expression // variable
```

### Re-exporting

```js
export { default } from 'lib'
```

## import

- <http://exploringjs.com/es6/ch_modules.html#_importing-styles>

import 会提升。

```js
foo()
import { foo } from 'lib'
```

Empty import, 比较适合 shim

```js
import 'lib'
```

## Browser

目前，浏览器开始实现模块功能。

```html
/* inline module */
<script type="module">
  import lib from './lib.js' // 注意不能省略为 'lib.js'
</script>

/* external module */
<script type="module" src="lib.js">
```

module scripts(包括 inline module) 行为同 `defer`

module script 只运行一次，即使包含多次。

- <https://jakearchibald.com/2017/es-modules-in-browsers/>

## 参考

- <http://exploringjs.com/es6/ch_modules.html>
