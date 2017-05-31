# Total Commander

Total Commander（以下简称 TC）是第三方资源管理器，特点：

- 并排双窗口，方便在不同的目录之间复制移动文件。
- 将压缩包视为目录，操作同目录。
- 多种目录文件定位方法。

![](http://www.ghisler.com/screenshots/en/01.gif)

TC 是付费软件，不过不注册没有功能限制，只是打开时有一个对话框。

- [一本关于 Total Commander 的书](http://yuedu.baidu.com/ebook/1ec4abf0f46527d3240ce0ab)

## 安装

[下载](http://www.ghisler.com/download.htm)

便携版，在安装的时候选择将配置放到安装目录。

TC 启动后创建了几个环境变量：

- `%COMMANDER_PATH%` TC 安装目录
- `%COMMANDER_EXE%` TC 启动程序

借助于这几个环境变量，可以将 TC 打造为便携软件平台。

## 配置

点击菜单 "Configuration > options..." 打开配置对话框。

### wincmd.ini

TC 的配置都保存在 `%COMMANDER_PATH%\wincmd.ini` 文件中。

在帮助中搜索 "Settings in the file wincmd.ini "。

```ini
# 将插件都安装到这个目录下
pluginbasedir=%COMMANDER_PATH%\Plugins
```

注意：在编辑配置文件时，先关闭 TC 再编辑配置文件，保存之后启动 TC。这是因为重启 TC 配置文件才会生效，而关闭 TC 时它会写入配置文件，会覆盖正在编辑的配置文件。

## 插件

第三方插件网站
<http://totalcmd.net/>

插件差不多都是免费的，当然 TC 不免费。

- 7zip
- CHMDir
- imagine
- SQLiteViewer

## 用法

### 用户命令

[ConEmu](../conemu/index.md#total-commander)

### 自定义文件类型

TC 可以将满足一定条件的文件指定为一个类型。可以对这个文件类型过滤显示、单独配色，关联程序等。

添加文件类型的地方比较多，这里通过过滤对话框添加。点击菜单 "Show > Custom..." 打开过滤对话框，
点击 "defining..." 按钮打开文件类型定义对话框。

![](/uploads/totalcmd/filetype.png)

### 内部关联

将 TC 定义的某个文件类型关联到一个程序上。

点击菜单 "Files > Internal Associations..." 打开关联对话框。

双击这种文件类型，就可以以关联的程序打开此文件。

### 命令行选项

在帮助中搜索 "Command line parameters"。

为 [Visual Studio](../vs/index.md) 等添加外部工具:

- 路径为 `%COMMANDER_EXE%`。注意系统需要添加这个环境变量
- 参数为 `/O /T /S /L=$FilePath$` 这里 `$FilePath$` 为 WebStorm 的变量，其它程序会有相应的变量。
