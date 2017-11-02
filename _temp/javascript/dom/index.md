# DOM

Document Object Model (DOM)

- [DOM Spec](https://dom.spec.whatwg.org/)

DOM API 有各种语言的实现。在浏览器只关注 JavaScript 的实现。

DOM API 比较杂，建议先看 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) 了解 Node, ParentNode, ChildNode, Element 这几个接口。

[Element 原型链](/uploads/javascript/dom/prototypes/)

IE < 9 DOM 对象不是 JavaScript 对象，存在严重的兼容性的问题。不过，本文不关注兼容性问题。部分兼容性问题见 [FrontEnd](https://github.com/yanxyz/frontEnd/)。

## Node

[nodeType, NodeValue, NodeValue](/uploads/javascript/dom/node/)

对于 element 节点，nodeName 和 tagName 的值一样，对于 HTML 文档，值是大写。对于 XML 文档，区分大小写。


在访问节点时，节点必须存在。

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title></title>
  <script>
    try {
      // document.body 为 null, 因为还没解析到 <body>
      alert(document.body.tagName)
    } catch (err) {
      // pass
    }

    window.onload = function () {
      // 可以访问，因为 load 事件是在页面加载完成后发生
      alert(document.body.tagName)
    }
  </script>
</head>
<body>
<script>
  // 可以访问，因为已经解析到 <body>
  // 结果为 1，因为这时 body.lastChild 是这个 <script>
  alert(document.body.lastChild.nodeType)
</script>
</body>
</html>
```

判断节点是否为空:

```js
if (el.childNodes.length) {}
if (el.firstChild) {}
if (el.lastChild) {}
```

在 DOM 中，如果节点、特性等不存在，值为 null，而不是 undefined。

```js
document.querySelector('.notfound')  // null
el.getAttribute('notfound')  // null
```



### 练习

将最后一个子元素移到第一个子元素前面，即它变成第一个子元素：

```js
el.insertBefore(el.lastElementChild, el.firstElementChild)
```

删除所有的子节点：

```js
while (el.lastChild) {
  el.removeChild(el.lastChild)
}
// 或者
el.innerHTML = ''
```

## Element

Element 树：parentElement, children, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling。

- innerHTML, outerHTML, innerText, outerText
- insertAdjacentHTML(), insertAdjacentElement(), insertAdjacentText()




