---
permalink: /javascript/dom/events/addeventlistener/
---

# addEventListener

- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

一种 event type 可以绑定多个 event listeners。

一个 event listener 多次绑定，只有第一次生效。

## removeEventListener

- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

addEventListener 绑定的 event listeners 只能由 removeEventListener 删除。

参数要跟传给 addEventListener 的参数一致，否则无效。不能解绑匿名事件处理器。

```js
var btn = document.querySelector('#btn')
var handler = function () {
  console.log(this.id)
}
btn.addEventListener('click', handler)
btn.removeEventListener('click', handler)
```
