---
permalink: /powershell/env/
---

# PowerShell 环境变量

```powershell
help about_Environment_Variables
```

跟其它变量不一样，环境变量会被 child sessions（比如 jobs）继承。

Environment Provider 创建 Env: drive，通过它获取环境变量。

```powershell
Get-ChildItem Env: | Sort-Object Name
```

创建

```powershell
Get-ChildItem Env: | Sort-Object Name # process
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

删除

```powershell
Remove-Item Env:\TestVariable
```

## .Net

PowerShell cmdlets 对环境变量的修改只对当前 process 有效。

.NET Framework methods 对环境变量的修改有三个级别：

- Process
- User
- Machine

```powershell
[environment]::GetEnvironmentVariable("Path", "User")
[Environment]::SetEnvironmentVariable("TestVariable", "Test value.", "User")
[Environment]::SetEnvironmentVariable("TestVariable", $null, "User")
```
