---
permalink: /csharp/lang/properties/
---

# C# Properties

property 使用一个 field 作为 backing store，包含两个 accessors

- get 用于取值
- set 用于赋值，set 中变量 value 是指定值

```cs
class Person
{
    // field
    private string name;

    // property
    public string Name
    {
        get
        {
            return name;
        }
        set
        {
            name = value;
        }
    }
}
```

## Auto-Implemented Properties

上面声明的 property 可以简写为：

```cs
public string Name { get; set; }
```

这时 compiler 会创建一个私有的匿名 field。

## Property initializer

property 在声明时可以初始化：

```cs
public string Name { get; set; } = "Ivan Yan";
```

这里 compiler 直接初始化 field，不经过 setter。

## Accessibility

```cs
public string Name { get; set; }
```

可读可写。

```cs
public string Name { get; }
```

外部只读。只有在 constuctor 内初始化。

```cs
public string Name { get; private set; }
```

外部只读。不能用 object initializer。
