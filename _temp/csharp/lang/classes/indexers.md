---
permalink: /csharp/lang/indexers/
---

# C# Indexers

indexer 让 class/struct 像 array 一样访问。

indexer 的形式像 property：

```cs
// 指定名字
[System.Runtime.CompilerServices.IndexerName("Days")]
// [type index], index 可以是 int, string 等
public int this[string day]
{
    get
    {
        return (GetDay(day));
    }
}
```

indexer 可以重载，它的签名为形参个数与类型。

## Interface Indexers
