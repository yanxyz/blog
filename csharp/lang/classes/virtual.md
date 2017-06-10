---
permalink: /csharp/lang/virtual/
---

# C# virtual modifier

virtual 用来实现多态（polymorphism）
<https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/classes-and-structs/polymorphism>

```cs
class Shape
{
    public virtual void Draw() { Console.WriteLine("Performing drawing"); }
}

class Circle : Shape
{
    public override void Draw() { Console.WriteLine("Drawing a circle"); }
}

Shape s = new Circle();           // #1
s.Draw();  // "Drawing a circle"  // #2
```

多态两方面：

- #1 derived class 的 object 被当作 base class 的 object。上例中 s 的 type 由 Circle 转为 Shape。

- #2 发现 base class 中此 method 为 virtual method，则在继承链中查找 overide method，最终调用的是 derived classe 中的 overide method。

简单总结为：变身为 A，调用在 B。

virtual 可以用于 methods, properties, events，indexers 声明中，不能用于 fields。

derived class 的 members 用 override 改写 base class 的 virtual members，为其添加新的实现。

[abstract](./abstract.md) 是隐式的 virtual。

[sealed](./sealed) 可以阻止 override virtual members。
