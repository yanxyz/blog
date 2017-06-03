---
permalink: /powershell/dir/
---

# PowerShell 目录

```powershell
Get-Command *item
```

## New-Item

```powershell
New-Item -ItemType Directory a
```
创建目录。

```powershell
New-Item -ItemType Directory a\b\c
```
创建多级目录。

```powershell
mkdir a\b\c
```
使用别名。

```powershell
mkdir a,b,c
```
创建多个目录。

创建目录时：

- 如果创建目录成功则返回这个目录（`System.IO.DirectoryInfo`）。
- 如果目录已经存在则抛出错误。
- 如果是创建多级目录则返回最后创建的目录。
- 如果是创建多个目录则返回一个数组。

如果不对返回对象加以处理的话（比如赋值），则输出到 console。

```powershell
mkdir a | Out-Null
mkdir a *> $null
```
取消输出到 console。

## Copy-Item

```powershell
Copy-Item .\a -Destination .\b -Recurse
```

复制目录：

- 若 Destination 不存在则复制到它的位置（即创建 Destination ）。
- 若 Destination 存在则复制到它下面，若 Destination 下有同名目录则抛出错误（若指定选项 `-Force` 则强制覆盖）。
- 若不指定选项 `-Recurse` 则只复制目录本身，不复制目录下的文件和子目录
- 若不指定选项 `-Recurse`
- 没有返回对象，除非指定选项 `-PassThru`。

## Move-Item

```powershell
Move-Item -Path .\a -Destination .\b
```

移动目录

- 若 Destination 不存在则移动到它的位置（即创建 Destination ）。
- 若 Destination 存在则移动到它下面，若 Destination 下有同名目录则抛出错误。
- 没有返回对象，除非指定选项 `-PassThru`。

## Remove-Item

```powershell
Remove-Item .\a
```

删除目录

- 若不是空目录则要求确认。若指定选项 `-Force` 则不需要确认，删除目录及其内容（文件及子目录）。
- 是直接删除，不是删除到回收站。
- 没有返回对象

## Rename-Item

```powershell
Rename-Item .\a -NewName .\b
```

重命名

- NewName 若是路径则要与原目录在同一目录下
- 没有返回对象，除非指定选项 `-PassThru`。

## Get-Item

```powershell
Get-Item $HOME
```

获取指定目录。若目录不存在则抛出错误。

## Get-ChildItem

```powershell
Get-ChildItem -Recurse -Depth 2
Get-ChildItem C:\WINDOWS\System32 -Filter *.txt -Recurse | Select-Object FullName
```

## 目录属性

```powershell
Get-Command *ItemProperty*
```

```powershell
Get-ItemProperty test | Format-List
```

`Get-ItemPropertyValue` 获取某个属性的值：

```powershell
Get-ItemPropertyValue test -Mode
```

## Clear-RecycleBin

```powershell
Clear-RecycleBin
```

清空回收站，需要确认。

## FAQ

### 判断是否为目录？

```powershell
(Get-Item $home) -is [System.IO.DirectoryInfo]
```

### 判断目录是否为空？

<https://www.petri.com/testing-empty-folders-with-powershell>

