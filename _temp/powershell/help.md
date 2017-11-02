---
permalink: /powershell/help/
---

# PowerShell 帮助

帮助命令有两个 `Get-Help` 与 `help`。二者功能差不多，区别是 `Get-Help` 一次性输出全部的帮助；`help` 以 linux less 的形式显示帮助。

注意：PowerShell 6 `help` 有问题，每行只显示一个字符。

```powershell
Get-Help Get-Alias
Get-Alias -?
```

本地帮助并不完整。查看某个 cmdlet 在线帮助：

```powershell
Get-Help Get-Help -ShowWindow
Get-Help Get-Help -online
```

更新帮助，需要以管理员权限运行

```powershell
# 指定下载英文帮助，因为有些 cmdlets 没有中文帮助
Update-Help -UICulture en-US
```
