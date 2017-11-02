---
permalink: /javascript/network/xhr/
---

# XHR

- [API](https://xhr.spec.whatwg.org/#idl-index)

```js


```

.open(method, url)，参数 async 为 false 表示同步请求，window 环境未来将不再支持，只能用在 workers 环境中。

在设置 header 时注意 xhr 的 state

- setRequestHeader(name, value) 必须在 opened 时调用。
- overrideMimeType(mime), responseType 必须在 loading 之前调用。

status 为 0，有多种原因

- xhr state 为 OPENED
- timeout


### events

onreadystatechange handler 需要检查 readyState 的值。

现在应当用 onload 替换 onreadystatechange。

error event 是 fetch failed 时触发，注意跟 server 500 区分。

## 问题


