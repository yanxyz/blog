---
permalink: /csharp/lang/inheritance/
---

# C# Inheritance

class B 继承 class A，B 称为 derived class，A 称为 base class。

```cs
class A {}
class B : A {}
```

B 继承 A 除 constructors, destructors 之外的成员。

![](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/classes-and-structs/media/class_inheritance.png)

只能直接继承一个 class。一个接一个的继承，形成一条继承链，比如 C:B:A，C 会继承 B 和 A 的成员。

## Constructors

derived class constructors 通过 `base` 调用 base class constructors。
constructors 的参数可以传给 `base`。
如果没有 base, 默认以 `base()` 调用 base class default constructor。

```cs
class A {}

class B : A {
    public B(int i) {}  // 即 public B(int i) : base() {}
}

class C : B
{
    public C(int i) {}  // 即 public C(int i) : base() {}
}

static void Main() {
    var b1 = new B();     // Error
    var b2 = new B(100);  // Ok
    var c1 = new C();     // Error
    var c2 = new C(100);  // Error
}
```

- b1，因为 B 没有 B() 构造器
- b2，base() 调用 A 的 A() 构造器，A 没有构造器，compiler 自动生成一个
- c1, 因为 C 没有 C() 构造器
- c2, 因为 base() 调用 B 的 B() 构造器，而它不存在

## new

如果 derived class B 的成员 M 与 base class A 的成员 M 名字和签名相同，将有一条 warining：B.M 遮蔽了 A.M；如果这是你想要的，用 new 关键字明确表示。

```cs
// A.M
public void M() {}

// B.M 使用 new
public new void M() {}

// Main method
var a = new A();
a.M();  // 调用 A.M

var b = new B();
b.M();  // 调用 B.M

A ab = new B();
ab.M(); // 调用 A.M
```

new 是遮蔽（hide），而 override 是扩展（extend）。

```cs
// A.M 使用 virtual
public virtual void M() {}

// B.M 使用 override
public override void M() {}

// Main method
var a = new A();
a.M();  // 调用 A.M

var b = new B();
b.M();  // 调用 B.M

A ab = new B();
ab.M(); // 调用 B.M，这跟 new 不同
```

## base


