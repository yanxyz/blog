---
permalink: /javascript/dom/attr/
---

# DOM 节点

标签默认的特性（Attribute）会同步给元素的属性（property）。

``` js
// <body id="blog">
document.body.id  // "blog"
document.getAttribute('id')  // "blog"
```

特性和属性的名字一样，除了：特性 class 对应属性 className, 特性 for 对应属性 htmlFor。因为这两个名字是 JavaScript 的关键字。

特性和属性一般是双向同步，即修改了属性，特性也会变化。也有一些特性只是单向同步到属性：

``` html
<input type="text" value="Ivan Yan" />
<input type="checkbox" checked />
<option value="" selected=""></option>
```

上面 value, checked, selected 都是单向同步。

自定义的特性不会同步到属性。

``` js
// <body city="Shenzhen">
document.body.city  // null
document.getAttribute('city')  // Shenzhen
```

标签的特性是 HTML 概念，名字不区分大小写，因为 HTML 不区分大小写。元素的属性是 JavaScript 概念，名字区分大小写，因为 JavaScript 区分大小写。当添加多个特性，它们名字相同只是大小写不一样时，会怎样呢？

``` js
document.body.setAttribute('ABC', 11)
document.body.setAttribute('Abc', 22)
// 特性名字不区分大小写，值取后来者。浏览器通常是将名字转为小写
document.body.getAttribute('abc')  // "22"
document.body.getAttribute('aBC')  // "22"
// 自定义特性不会同步到属性
document.body.abc  // undefined
document.body.ABC  // undefined
```
