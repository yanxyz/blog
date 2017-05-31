---
permalink: /powershell/syntax/hashtables/
---

# PowerShell Hash Tables

哈希表（hash table），又名字典（dictionary）或关联数组（associative array）。

创建哈希表，键值对用 `;` 或断行符隔开：

```powershell
Get-Help about_Hash_Tables

$hash = @{ Number = 1; Shape = "Square"; Color = "Blue"}

$hash = @{
    Number = 1
    Shape = "Square"
    Color = "Blue"
}

$hash |
```

PowerShell 哈希表的 Type 是 Hashtable (System.Collections.Hashtable)，key\/value 可以是任意 Type。

哈希表的键的顺序不可知，排序：

```powershell
$hash.GetEnumerator() | Sort-Object -Property key -Descending
```

有序字典（ordered dictionary）的键按添加的顺序排列：

```powershell
$dict = [ordered]@{ Number = 1; Shape = "Square"; Color = "Blue"}
$dict.keys

# 将有序字典转为哈希表，反之不可行
[hashtable]$hash = $dict
```

合并哈希表

```powershell
$hash = @{ Number = 1; Shape = "Square"; Color = "Blue"}
$hash += @{Time = (Get-Date)}
```
