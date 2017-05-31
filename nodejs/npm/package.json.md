---
permalink: /nodejs/npm/package.json/
---

# npm package.json

```sh
npm help package.json
```

name 和 version 是必须的。

### name

name

- 不能有大写字母


### scripts




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
