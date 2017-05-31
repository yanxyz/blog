---
permalink: /css/float/
---

# CSS float

浮动可以实现文字环绕的效果，也是常用的布局方法。

## float

[float property](https://ynotes.github.io/css2/visuren.html#floats)

元素浮动之后，会脱离 normal flow，其它 block box 视它不存在；与它并排的 line box 变短，为它让出空间，形成文字环绕的效果。

浮动元素不会跟毗邻的元素合并边距（marge collapse）。

任何元素都可以浮动，不过以下情况元素会忽略 float

- absolutely positioned
- flex item

float 元素 display 计算值为 block，因此不必对它重复声明 `display: block`。

## clear

[clear property](https://ynotes.github.io/css2/visuren.html#flow-control)

clear 取消文字环绕。

只有 block 元素可以使用 clear。

- 非浮动的 block 元素的 top border 在 float 的 margin box 的下面。
- 浮动的元素的 top margin 在 float 的 margin box 的下面。

## clearfix

元素浮动之后，会脱离 normal flow，也就不能撑起父元素的高度。怎么办？

方法一，父元素创建 BFC（block formating context）

```css
overflow: hidden; /* 不是 visible */
```

方法二，浮动元素后面的元素使用 clear。

```html
<div style="clear: both"></div>
```

这种办法不灵活。也有的人批评，这不符合语义。

用伪类

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

### 参考

- <http://cssmojo.com/the-very-latest-clearfix-reloaded/>
- <http://nicolasgallagher.com/micro-clearfix-hack/>
