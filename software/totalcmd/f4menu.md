---
permalink: /software/totalcmd/f4menu/
---

# F4Menu

### F4Menu

文件只能关联到一个程序上。F4Menu 可以选择不同的程序打开文件：

![](/uploads/totalcmd/f4menu.png)

下载 [F4Menu 0.55](http://download.pchome.net/system/file/fileman/detail-3266.html), 0.59 在我这有问题。

解压下载的压缩包，让 F4Menu.exe 放到 `%COMMANDER_PATH\Tools\F4Menu` 目录下。

打开配置对话框，在 "Edit\View" 标签页将 Editor 设置为 `%COMMANDER_PATH%\Tools\F4Menu\F4Menu.exe`。在 "Misc" 标签页将快捷键 F1 指定给 "cm\_editor"。

在文件上按快捷键 F4 打开程序选择菜单，点击 settings 添加程序。

```ini
[Program0]
Name=Sublime Text
Path=%COMMANDER_PATH%\..\SublimeText\sublime_text.exe
Icon=%COMMANDER_PATH%\..\SublimeText\sublime_text.exe,0
```

这里利用了环境变量 `%COMMANDER_PATH%`。可以像这样放置便携软件。

三种模式：

- F1 以默认程序打开文件
- F4 打开程序选择菜单
- "Win + F4" 以关联程序打开文件，没有则以默认程序打开文件

这样便携软件就不用操心如何关联文件了。
