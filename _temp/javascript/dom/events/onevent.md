---
permalink: /javascript/dom/events/onevent/
---

# HTML 事件处理器

写在 HTML 内，特性名为事件处理器的名字，值为 JavaScript 代码。

```html
<button onclick="alert('clicked')">点我</button>
```

在 JavaScript 代码可以使用两个特殊的对象 event 与 this,
this 指向 event.target，即事件绑定的元素。

作用域链特殊

document 与此元素的属性可以像本地变量一样访问，
甚至对于表单控件，所属表单的 elements 都可以像本地变量一样访问。
等效于：

```js
function () {
  with(document) {
    with(this.form) {
      with(this) {
        // 特性值
      }
    }
  }
}
```

绑定给 window 的事件处理器写在 `<body>` 上。比如 "onload"。

注意在特性内 `&, ", < >` 等字符需要转义，可以用下面方式。

```html
<script>
  function inspect (event, context) {
    console.log('clicked')
    console.log(event)
    console.log(context)
  }
</script>
<button onclick="inspect(event, this)">点我</button>
```

或许你注意了 inspect 函数必须在元素之前定义。
如果在元素后面定义，会出错。为避免出错，可以：

```html
<button onclick="try{inspect()}catch(e){}">点我</button>
```

而且它让 HTML 与 JavaScript 紧密耦合。
