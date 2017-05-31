# ConEmu

Windows 10 之前的命令提示符：

- 不支持多行复制粘贴
- 不能调整窗口大小

ConEmu 解决了这些缺陷，并提供多标签等功能。

![](https://conemu.github.io/img/ConEmu-Maximus5.png)

## 安装

[下载](https://github.com/Maximus5/ConEmu/releases)

[文档](https://conemu.github.io/)

## 命令补全

ConEmu 不是 shell，tab 补全命令，命令历史等功能是通过插件实现的。

### Clink

cmd.exe 是通过 [Clink](https://mridgers.github.io/clink/) 实现。

安装说明见 `ConEmu\click\Readme.txt`。

安装完成后打开 ConEmu，按下快捷键 `Alt + H`（当前 shell 为 cmd.exe）， 查看新添加的快捷键。

### PSReadLine

PowerShell 是通过 PSReadLine 实现。

Windows 10 已安装 PSReadLine。

## 任务

点击 ConEmu 标签栏上的 `+` 按钮，可以选择任务。选择 `Setup tasks..`，打开任务配置对话框：

![](https://conemu.github.io/img/Settings-Tasks.png)

默认提供了一些任务：cmd, powershell, git bash, visual studio 等，并且具有以管理员权限运行的任务。

### putty

Commands 为：`"\path\to\putty.exe" -load "session_name"`

`-load "session_name"` 为 putty 的参数。

Console 的字体为 putty 决定，而不是 ConEmu。

## Total Commander

如何在当前目录“打开 ConEmu”？

我在 [Total Commander](../totalcmd/index.md) 中这么做：

第一步，编辑 `usercmd.ini`，添加外部命令：

```ini
[em_ConEmuCMD]
cmd=%Commander_Path%\Tools\ConEmu\ConEmu.exe
param=-Single

[em_ConEmuGitBash]
cmd=%Commander_Path%\Tools\ConEmu\ConEmu.exe
param=-Single -run {Git bash}
```

param 指定 [ConEmu 命令行参数](http://conemu.github.io/en/ConEmuArgs.html)

第二步，外部命令可以用在 Start Menu, Button bar 等，也可以绑定快捷键，编辑 `wincmd.ini`

```ini
[Shortcuts]
F12=em_ConEmuCMD
C+F12=em_ConEmuGitBash
```

Total Commander 的 source 目录即为 ConEmu 的当前工作目录。
