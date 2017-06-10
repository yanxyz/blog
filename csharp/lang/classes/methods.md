---
permalink: /csharp/lang/methods/
---

# C# Methods

```cs
public void Hello()
{
    Console.WriteLine("Hello World");
}
```

如果方法没有返回值，则声明返回值类型为 void。


## overload

方法重载，方法的名字一样签名不一样。方法签名包括修饰符，方法名字和参数，不包括返回值的类型。

method signature 方法签名，包含方法名，参数（数量及类型），返回值类型，不过方法重载时不包括返回值类型。

方法可以重载，即在同一作用域同名而签名不同的方法视为不同的方法。签名包含方法名，参数数量及其类型，但不包含返回值类型。

## params keyword



## ref out

parameter modifier： out 和 ref

- 在形参和实参都要使用
- 方法签名不能只是 ref 与 out 的区别
- 不能用于 Async methods， Iterator methods

Do not confuse the concept of passing by reference with the concept of reference types.
ref 按引用传递参数（参数的值是一个引用），caller 必须赋值后使用
out 实参可以不初始化，但是形参必须赋值

当参数是值类型时，传递的是参数的副本，对参数的修改不会影响到原来的值。使用 ref 关键字

参数是引用类型时，


类的修饰符都可用到方法中。如果有个方法有修饰符 abstract，则它所在的类也必须添加 abstract。
