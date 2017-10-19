---
permalink: /software/vscode/languages/csharp/
---

# VSCode C\#

只支持 .NET Core。

## .NET Core

安装 [.NET Core SDK](https://www.microsoft.com/net/core#windowscmd)，安装完成后在终端中运行

```sh
dotnet --version
dotnet -h
```

第一个程序 Hello World

```sh
mkdir helloworld && cd helloworld
dotnet new console
dotnet restore
dotnet run
```

## Microsoft C# extension

教程：[Instructions for setting up the .NET Core debugger](https://github.com/OmniSharp/omnisharp-vscode/blob/master/debugger.md)

VSCode 打开上面 helloworld

- 添加 [.vscode/tasks.json](https://raw.githubusercontent.com/wiki/OmniSharp/omnisharp-vscode/ExampleCode/tasks.json)
- 添加 .vscode/launch.json，打开 Program.cs 文件，`F5`, 选择 .NET Core，编辑 launch.json, 修改 "program" 的值。上面已经编译过项目（`dotnet run`），看看编译文件放到哪。比如

```json
"program": "${workspaceRoot}/bin/Debug/netcoreapp1.1/helloworld.dll",
```

[c# - dotnet build specify main method](https://stackoverflow.com/questions/43365254/dotnet-build-specify-main-method)

[Get started with VS Code using C# and .NET Core on Windows](https://channel9.msdn.com/Blogs/dotnet/Get-started-with-VS-Code-using-CSharp-and-NET-Core)

[Creating a .NET Core Console application in just 5 minutes](https://blogs.msdn.microsoft.com/luisdem/2016/06/01/creating-a-net-core-application-in-just-5-minutes/)
