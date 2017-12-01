# Internet Explorer

Internet Explorer（简称 IE）。

IE   | 发布时间 | Layout engine | 平台支持
---  | -------- | ------------- | --------
IE11 | 2013/11  | Trident 7.0   | 最低要求 Win7 sp1, Win 8.1 和 Win10 内置。Win 8 不能安装。
IE10 | 2012/10  | Trident 6.0   | 最低要求 Win7 sp1, Win 8 内置。
IE9  | 2011/03  | Trident 5.0   | 最低要求 Vista sp2。
IE8  | 2009/03  | Trident 4.0   | 最低要求 XP sp2，Win7 内置。
IE7  | 2006/10  | Trident       | 最低要求 XP sp2，Vista 内置。
IE6  | 2001/08  | Trident       | 最低要求 Win98，XP 内置。

注：整理自维基百科。表中的发布时间是单独发行版本的大概时间，并不准确。

## 资料

- [IE Command-Line Options](https://msdn.microsoft.com/en-us/library/hh826025.aspx)

## 兼容性

IE 的更新由系统更新完成。跨版本升级对系统版本有要求，见上表。相比其它浏览器，IE 的这种升级方式导致它的问题不能迅速解决，从而落后得越来越快。

- [IE compatibility changes by version](https://msdn.microsoft.com/en-us/library/dn467846.aspx)

### IE11

- 删除了一些旧 API, 比如 attachEvent。
- F12 工具使用新的界面。去掉浏览器模式。

- [Compatibility changes in IE11](https://msdn.microsoft.com/en-us/library/bg182625.aspx)
- [IE11 Changes](https://blogs.msdn.microsoft.com/ieinternals/2013/09/24/ie11-changes/)

### IE10

- 不再支持条件注释。
- 支持严格模式。
- 支持 XMLHttpRequest 跨域。

- [Internet Explorer 10 Consumer Preview Minor Changes List](https://blogs.msdn.microsoft.com/ieinternals/2012/03/01/internet-explorer-10-consumer-preview-minor-changes-list/)

### IE9

- 支持 HTML5 标签。
- 使用新的 JavaScript 引擎 Chakra，支持 ECMAScript 5。
- 支持标准事件 API，如 addEventListener。
- DOM 对象是 JavaScript 对象。

- [IE9 Final RTW Minor Changes List](https://blogs.msdn.microsoft.com/ieinternals/2011/03/19/ie9-final-rtw-minor-changes-list/)
- [IE9 userAgent](https://msdn.microsoft.com/en-us/library/ff986085.aspx)

### IE8

- 引入 F12 工具。
- 引入兼容性视图，在 F12 中可以切换浏览器模式和文档模式。
- 支持 JSON。
- 通过 XDomainRequest 跨域。
- InPrivate 浏览

### IE7

- 使用标签浏览模式。
- 原生 XMLHttpRequest 对象。
- 支持 alpha 透明 PNG 图片。
- 支持 position: fixed。

### IE6

[IE6 市场占有率](http://ie6countdown.com/)

用过 IE6 的人已不年轻了……
