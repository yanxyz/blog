---
permalink: /powershell/env/
---

# PowerShell 环境变量

```powershell
help about_Environment_Variables
```

跟其它变量不一样，环境变量会被 child sessions（比如 jobs）继承。

通过 Environment Provider 获取环境变量。

```powershell
Get-ChildItem Env: | Sort-Object Name
```

修改

```powershell
$Env:path = $env:path + ";c:\temp"
Set-Item -Path Env:Path -Value ($Env:Path + ";C:\Temp")
```

保存到 profile

```powershell
Add-Content -Path $Profile.CurrentUserAllHosts -Value '$Env:Path = $Env:Path + ";C:\Temp"'
```
