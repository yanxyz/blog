---
permalink: /csharp/lang/types/
---

# C# Types

<https://docs.microsoft.com/en-us/dotnet/articles/csharp/tour-of-csharp/types-and-variables>

所有的 types 都继承自 System.object，这种结构称为 Common Type System (CTS)：

![](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/types/media/valuetypescts.png)

Value Types

[Built-In Types Table](https://docs.microsoft.com/en-us/dotnet/articles/csharp/language-reference/keywords/built-in-types-table)

获取 Type

```cs
var a = 3;
Console.WriteLine(a.GetType());  // System.Int32
Console.WriteLine(typeof(a));    // Error
Console.WriteLine(typeof(int));  // System.Int32
```
