---
permalink: /powershell/lang/basic/
---

# PowerShell Basic

标识符不区分大小写。

保留字用引号包裹之后可以用作参数的名字。

```powershell
about_Language_Keywords
about_Reserved_Words
```

语句不需要 ";" 作为结束符，只有当把多个语句放到一行时才需要。

## 注释

```powershell
about_Language_Keywords
about_Reserved_Words
```

```powershell
# 单行注释

<#
多行注释
#>

Get-Content -Path <#configuration file#> $$profile
```
