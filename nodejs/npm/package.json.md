---
permalink: /npm/package.json/
---

# npm package.json

```sh
npm help package.json
```

package.json 是 node.js package meta file。必须指定 name 和 version。

### name

name

- 不能有大写字母


### scripts


将 npm 当作构建工具

-



### license

或者为 [SPDX license id](https://spdx.org/licenses/)

```json
{ "license": "MIT" }

// 多种许可
{ "license": "(MIT OR Apache-2.0)" }
```

或者指定一个 license 文件，该文件应该在 package 根目录下

```json
{ "license" : "SEE LICENSE IN <filename>" }
```

或者为私有，此时最好同时设置 `private: true`

```json
{ "license": "UNLICENSED" }
```

如果 license 错误，在安装时会给出警告。

```sh
npm config
```
