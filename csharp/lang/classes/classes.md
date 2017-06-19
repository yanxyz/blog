---
permalink: /csharp/lang/classes/classes/
---

# C# Classes

```cs
public class Point
{
    public int x, y;
    public Point(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}
```

## Members

classes 有这些 Members：

- Fields
- Constants
- [Properties](properties.md)
- [Methods](methods.md)
- [Events](events.md)
- [Indexers](indexers.md)
- [Constructors](constructors.md)
- Destructors
- Operators
- Nested Types

除了 Constructors 和 Destructors，derived classes 继承其它 Members。private members 也被继承，只是 derived classes 不能访问。

## Fields

Fields 通常为 private，然后由 properties，methods, Indexers 修改。

Fields 使用 readonly modifier 之后只能在声明或 constructor 中赋值。

## Constants

```cs
class Calendar
{
    public const int months = 12, weeks = 52, days = 365;
}

int birthstones = Calendar.months;
```

常量用 `const` 声明，在声明时必须初始化，只能使用 built-in types。

常量不能重新赋值，也不能用按引用传递给方法。

常量相当于 static fields。

## Operators

重载操作符。

[Overloadable Operators](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/statements-expressions-operators/overloadable-operators)

用户定义的 operators 必须是 public。

## Destructors

```cs
class Car
{
    ~Car()  // destructor
    {
        // cleanup statements...
    }
}
```

- 只能有一个
- 没有参数，也没有 access modifiers
- 不能调用。自动执行，执行完后还会调用 `base.Finalize()`

## Nested Types

定义在 class 内的 type 称为 nested type。

```
public class Container
 {
     public class Nested
     {
         private Container parent;

         public Nested()
         {
         }
         public Nested(Container parent)
         {
             this.parent = parent;
         }
     }
 }
```

- [Extension Methods](./extension-methods.md)]
- [Implicitly Typed Local Variables](./implicitly-typed-local-variables.md)]
