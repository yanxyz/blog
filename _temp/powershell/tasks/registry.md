---
permalink: /powershell/registry/
---

# PowerShell 注册表

Hive 路径

```powershell
Microsoft.PowerShell.Core\Registry::HKEY_CURRENT_USER
Registry::HKEY_CURRENT_USER
Registry::HKCU
HKCU:
```

跟文件系统有点不同，registry keys 是 item path，registry entries 是 item property，即 registry keys 的属性。

```powershell
# 过滤 keys
Get-ChildItem -Path HKCU:\Software -Recurse | Where-Object -FilterScript {($_.SubKeyCount -le 1) -and ($_.ValueCount -eq 4) }

# 全部属性
Get-ItemProperty -Path HKLM:\Software\Microsoft\Windows\CurrentVersion

# 单个属性
Get-ItemProperty -Path HKLM:\Software\Microsoft\Windows\CurrentVersion -Name DevicePath

# 属性值
Get-ItemPropertyValue -Path HKLM:\SOFTWARE\Microsoft\PowerShell\3\PowerShellEngine -Name PowerShellVersion
```

```powershell
set-item

```

## 参考

- [Working with Registry Entries](https://msdn.microsoft.com/en-us/powershell/scripting/getting-started/cookbooks/working-with-registry-entries)
- [Working with Registry Keys](https://msdn.microsoft.com/en-us/powershell/scripting/getting-started/cookbooks/working-with-registry-keys)
