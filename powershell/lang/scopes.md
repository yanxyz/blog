---
permalink: /powershell/lang/scopes/
---

# PowerShell 作用域

```powershell
help about_Scopes
```

variables, aliases, functions 有作用域。

scope modifiers

- Global 是根作用域，任何地方都可以访问。automatic variables，preference variables 以及 profiles 当中的 variables, aliases, functions 位于 Global 作用域。
- Local
- Script
- Using 远程命令中的本地变量，about_Remote_Variables。

Script 是默认的 scope modifiers，改变默认

```powershell
$global:a = "one"
new-variable -scope global -name a -value "One"
new-alias -scope global -name np -value Notepad.exe

function global:Hello { write-host "Hello, World" }
```

一些 cmdlets 有 Scope 参数

```powershell
get-help * -parameter scope
```

获取相关作用域中的 variables, aliases

```powershell
Get-Variable -scope local
Get-Alias -scope global
```

functions 用 Get-Item 查找，不过不能使用 scope 参数。

`.` 引入其它脚本的 variables, aliases, functions; `&` 是调用其它脚本，不会引入。

```powershell
. test.ps1
& test.ps1
```

variables(New-Variable, Set-Variable) 和 aliases(New-Alias, Set-Alias) 可以使用 Option 参数，这个参数其中一个值为 private。


