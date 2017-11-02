---
permalink: /javascript/dom/node/
---

# DOM 节点

## Traversal

Node Traversal:

- childNodes
- firstChild
- lastChild
- parentNode
- prevSiblings
- nextSiblings

Element Traversal:

- children
- childElementCount
- firstElementChild
- lastElementChild
- parentElement
- prevElementSiblings
- nextElementSiblings

### Msic

- .closest()

## Query

- getElementById()
- getElementsByTagName()
- getElementsByName()
- getElementsByClassName()
- querySelector()
- querySelectorAll()

`node.getElementById(elementId)`

返回第一个 id 为 elementId 的 element，若没有则返回 null。

说第一个，是因为 id 可能重名，虽然 id 要求唯一。

`getElementsByClassName(names)`

- `names` 可以是多个 class names，以空格隔开，表示 `.name1.name2`
- 返回 live HTMLCollection

HTMLCollection 是一个类数组

`querySelector(selectors)`

- `selectors`
- 返回 element

`querySelectorAll(selectors)`

- 返回 static NodeList

### Misc

- .match()

## Manipulation

### Create

- document.createElement()
- document.createTextNode()
- document.createComment()
- document.createDocumentFragment()

### Insert

- parentNode.appendChild()
- parentNode.append()
- parentNode.prepend()
- parentNode.insertBefore()
- node.before()
- node.after()

- element.insertAdjacentElement(position, element)
- element.insertAdjacentText(position, text)
- element.insertAdjacentHTML(position, html)

### Remove

- removeChild()
- remove()

### replace

- parentNode.replaceChild()
- node.replaceWith()

### Clone

- node.cloneNode()

## Msic

- element.innerHTMl
- element.innerText
