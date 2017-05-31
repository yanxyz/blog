---
permalink: /powershell/script/
---

# PowerShell 脚本

```powershell
help about_Scripts
help about_InlineScript
```

PowerShell 脚本是纯文本文件，扩展名为 `.ps1`。

Windows 下双击 PowerShell 脚本可以运行脚本。在运行时，可能报错，提示“此系统上禁止运行脚本”。下面修改运行策略，让当前用户可以运行本地未签名的脚本。修改的设置将保存到注册表中，因此只用运行一次。详细信息可查看这个 cmdlet 的在线帮助。

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Get-ExecutionPolicy -List
```

PowerShell 脚本也可以在命令行由 `PowerShell` 运行。查看 PowerShell 命令行参数

```sh
PowerShell -?
```

## 开发工具

Windows 下有专门开发 PowerShell 脚本的工具 Windows PowerShell ISE。

不过，VSCode 也提供了较好的开发体验。
