---
permalink: /csharp/lang/static/
---

# C# static modifier

static modifier 可以用于 classes, 以及除 constants, indexers, destructors 之外的 class members。

## Static Classes

static classes 所有的成员都必须是 static

## Static Members

constants 已经相当于 static fields。

### Static constructors

Static constructors 初始化 static members，若没有 compiler 会提供一个。

Static constructors 不可以有参数，否则报错。
