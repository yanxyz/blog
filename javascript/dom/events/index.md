# DOM 事件

- [on-event](./onevent.md)
- [addEventListener](./addEventListener.md)


## event handler

当事件发生时将调用事件处理器（event handler 或 event listener）。

事件处理器是一个函数，名字为 'on' + 事件名，例如 "onclick"。
接受一个参数：事件对象。




### DOM0 事件处理器

DOM Level 0 是 DOM 标准化之前浏览器的事实标准。

事件处理器接受一个参数：事件对象。
事件处理器的 this 指向绑定元素。

```js
var btn = document.getElementById('btn')
btn.onclick = function (e) {
  console.log(e.type) // "click"
  console.log(this.value) // btn.value
}
```

同一元素同一事件只能绑定一个事件处理器。后面的绑定覆盖前面的。

删除事件处理器：

```js
btn.onclick = null;
```



## 事件对象

事件处理器的参数，包含事件的一些信息。

事件处理器的 this 始终等于 event.currentTarget。它与 event.target 的区别是，
前者是事件的绑定者，后者是事件触发者。

```js
// 单击 body 内的 button
document.body.onclick = function (event) {
  console.log(this === event.currentTarget) // true
  console.log(this === event.target) // false，此时是 button
}
```

常见的事件目标有 window, document, element, XMLHttpRequest


-


- preventDefault()

  阻止默认行为。

- stopPropagation()

  阻止这个事件冒泡或捕获。

- add



except for mouseover events, where the return value has to be true to cancel the event). With beforeunload events, the value is instead used to determine the message to show the user.



this 始终等于 event.currentTarget，event.target 是事件目标。如果是绑定到事件目标上，这三者值一样。如果是绑定到冒泡或捕获阶段中的元素上，两者值不一样。



## 事件流

DOM 事件流分为三个阶段：捕获，击中，冒泡。击中是冒泡的一部分。
虽然规范说捕获不包括击中，不过浏览器都认为包含。

### 冒泡

当一种事件绑定了多个事件处理器，某个事件处理器里面阻止了冒泡，并不会阻止其它事件处理器冒泡。


jQuery has it’s own event-handling layer. It wraps over the handler, and if the handler returns false, then both bubbling is stopped and the default action is prevented.
That differs from normal browser behavior, sometimes causing confusion.
Normally, the browser only cancels the default action, but the event continues to bubble. That’s the difference.


奇怪从主页找不进去
DOM 3 events
http://www.w3.org/TR/DOM-Level-3-Events/


https://developer.mozilla.org/en-US/docs/Web/API/Event

用dom0， dom2 方法绑定事件，哪个事件优先

event.eventPhase






## 用户界面事件 UI Event

[Spec](https://w3c.github.io/uievents)

- [鼠标事件 Mouse Event](./mouse)
- [键盘事件 Keyboard Event](./keyboard)
- [滚轮事件 Wheel Event](./wheel)
- [焦点事件 Focus Event](./focus)

## 自定义事件 Custom Event

- [焦点事件 Focus Event](./focus)

[Spec](https://w3c.github.io/uievents)

###

focus, 不冒泡。



focusin 同 focus，不过会冒泡。

blur 同 blurin，不过会冒泡。

