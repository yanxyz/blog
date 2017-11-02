---
permalink: /csharp/lang/methods/
---

## Lambda Expressions

Methods

```cs
public void Hello() => Console.WriteLine("Hello World");
```

Properties

```cs
public string Name => First + " " + Last;  // 只有 getter
```

Indexers

```cs
public Customer this[long id] => store.LookupCustomer(id);  // 只有 getter
```

<https://github.com/dotnet/roslyn/wiki/New-Language-Features-in-C%23-6>
<https://docs.microsoft.com/en-us/dotnet/articles/csharp/lambda-expressions>

## Lambda Functions

