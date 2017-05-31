---
permalink: /powershell/file/
---

# PowerShell 文件

## Item

```powershell
Get-Command *item
```

### New-Item

```
New-Item a.txt
```

创建文件

- 如果创建文件成功则返回这个文件（`System.IO.DirectoryInfo`）。
- 如果文件已经存在则抛出错误。

```
New-Item a.txt -Value "hello"
```

创建文件并写入内容。

创建文件的方法有很多:

- New-Item，编码为 UTF8。
- Redirection，编码为 Unicode(UTF16 LE，包含 BOM)。
- Out-File，可以指定编码，默认编码为 Unicode(UTF16 LE，包含 BOM)。
- Set-Content，可以指定编码，默认编码为 ANSI(中文系统为 GBK)。

<https://docs.google.com/spreadsheets/d/1QnD8AQnNkgcdwgrJyt8Z8DC3me85m_HgaY3LoCbi1us/>

提示：如果脚本包含中文（即使是注释），脚本编码应使用 GBK 或 UTF8 BOM，不然会出现乱码或解析错误。

### Copy-Item

```powershell
Copy-Item a.txt -Destination b.txt
```

复制文件：

- 若 Destination 不存在则复制到它的位置（即创建 Destination ）。
- 若 Destination 存在
    - 若 Destination 是文件则抛出错误。
    - 若 Destination 是目录则复制到它下面，若 Destination 下有同名文件则抛出错误。
    - 若指定选项 `-Force` 则强制覆盖。
- 没有返回对象，除非指定选项 `-PassThru`。


```powershell
Copy-Item "index.md" "dist"  # A
Copy-Item "index.md" "dist\" # B
```

若 Destination 不存在：
A 中 `dist` 视为文件，`index.md` 复制为 "dist"。
B 中 `dist\` 视为目录, 这个目录不存在，抛出错误。

### Move-Item

```powershell
Move-Item a.txt -Destination b.txt
```

移动文件

- 若 Destination 不存在则移动到它的位置（即创建 Destination ）。
- 若 Destination 存在
    - 若 Destination 是文件则抛出错误。
    - 若 Destination 是目录则复制到它下面，若 Destination 下有同名文件则抛出错误。
- 没有返回对象，除非指定选项 `-PassThru`。


### Remove-Item

```powershell
Rename-Item a.txt -NewName a.txt~
```

`Remove-Item file`
删除文件

`Remove-Item file1, file2`
删除多个文件

```powershell
Get-ChildItem * -Include *.csv -Recurse | Remove-Item
```

## Rename-Item

```powershell
Rename-Item a.txt -NewName a.txt~
```

重命名

- NewName 如果是路径则要在同一目录下
- 没有返回对象，除非指定选项 `-PassThru`。

```powershell
Get-ChildItem *.txt | Rename-Item -NewName { $_.name -Replace '\.txt','.log' }
```

将目录下所有的 txt 文件改为 log 文件。`-Replace` 操作符第一个参数是正则表达式，`\.` 为转义。

## Get-Item

获取文件对象。若文件不存在则抛出错误。

```powershell
$a = Get-Item a.txt
$a.GetType().FullName        # System.IO.FileInfo
$a -is [System.IO.FileInfo]  # True，是文件

$a | Get-Member
$a.Name            # 文件名字
$a.DirectoryName   # 文件所在目录的路径
```

## Get-ChildItem

对于文件，Get-ChildItem 同 Get-Item。

### Invoke-Item

```powershell
Invoke-Item a.txt
```

用关联程序打开文件。

## Content

```powershell
Get-Command *content
```

### Get-Content

读取文件的内容

### Set-Content

```powershell
# 获取目录 test 指定的属性
Get-ItemPropertyValue test -Name
```

## ItemProperty

```powershell
Get-Command *itemprop*
```

`Get-ItemProperty file | Format-List`
查看文件全部属性

`Get-ItemPropertyValue file -Mode`
获取文件某个属性的值

## New-TemporaryFile

创建临时文件
