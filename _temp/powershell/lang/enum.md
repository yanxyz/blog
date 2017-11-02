---
permalink: /powershell/lang/enum/
---

# PowerShell Enumerations

```powershell
help about_Enum
```

enum 关键字用来声明 enumeration。

enumeration 是一个集合，元素为 `label = integer`, integer 默认从 0 开始。不同的 label 可以有相同的 integer，表示同义词。

```powershell
enum MediaTypes {
    unknown
    mp3
    picture = 20
    jpg
    jpeg = 21
    png
}

[enum]::GetNames([MediaTypes])
```

enumeration 也可以是 bit flags 集合

