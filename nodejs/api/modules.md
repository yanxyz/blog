---
permalink: /nodejs/api/modules/
---

# Node.js modules


对于 scripts，top-level scope 是 global scope。
对于 modules，top-level scope 不是 global scope。

因为目前 modules 还没有普遍实现，Node.js 使用的是 CommonJS modules，modules 文件将包裹在一个函数（module wrapper）内，因此 modules top-level scope 不是 global scope。

