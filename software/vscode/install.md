# 安装 VSCode

Windows, Linux, Mac 三个平台都支持。

[下载](https://code.visualstudio.com)

## Windows

安装程序将 code 添加到 PATH 中，可以在命令行中运行 code

```sh
code -h
```

VSCode insiders 用的是 `code-insiders.cmd`, 这个名字在命令行中不大方便，换一个名字。
打开 [PowerShell console](/powershell/console/) 运行

```powershell
cd "C:\Program Files\Microsoft VS Code Insiders\bin"
# 在系统目录中操作需要管理员权限
# 因为只用 VSCode insiders，所以干脆命名为 code
cp code-insiders.cmd code.cmd
code -h
```

## Portable

借助下面选项，可以实现一定程度上的便携版本：

- `--user-data-dir`
- `--extensions-dir`
