# Notepad++

Notepad++ 可以作为记事本（`notepad.exe`）的替换

- 记事本在保存 UTF8 文件时会自动添加 BOM，这会导致 PHP 等出现问题。
- Notepad++ 文件编码识别比较准确，不像 Sublime Text 等编辑器不能识别 GBK。
- Notepad++ 支持对 HTML 等代码的高亮，对于普通用户简单够用。

## 安装

Notepad++ 只支持 Windows。

[下载](https://notepad-plus-plus.org/)。

## 配置

点击菜单 "Settings > Preferences..." 打开配置对话框。配置显示行号，Tab 格式，默认编码和换行符，文件关联等。

点击菜单 "Settings > Style Configurator..." 打开主题对话框，选择主题，设置字体等。

## 快捷键

点击菜单 "Settings > Shortcut Mapper..." 修改快捷键。不能搜索，特别麻烦。

快捷键配置文件为 shortcuts.xml，注意解压升级不要覆盖。

```xml
<InternalCommands>
    <Shortcut id="42022" Ctrl="yes" Alt="no" Shift="no" Key="191" />
    <Shortcut id="41008" Ctrl="yes" Alt="no" Shift="yes" Key="83" />
    <Shortcut id="41007" Ctrl="yes" Alt="yes" Shift="no" Key="83" />
</InternalCommands>
```

## 用法

点击菜单 "Encoding" 选择文件编码。

状态栏上相关区域（文件语言，插入符位置，换行符等）双击可以。

### 多点编辑

[Multi-editing](https://notepad-plus-plus.org/features/multi-editing.html)

## 插件

点击菜单 "Plugins > Plugins Manager" 打开插件管理对话框。

- compare 比较文件
- Customize Toolbar 自定义工具栏

## FAQ

### 将 ini 文件的注释符号改为 “#”

打开文件 langs.xml，找到下面一行：

```xml
<Language name="ini" ext="ini inf reg url" commentLine=";" />
```

修改为:

```xml
<Language name="ini" ext="ini inf reg url" commentLine="#" />
```

不建议修改，PHP ini parser 只支持 `;`。
