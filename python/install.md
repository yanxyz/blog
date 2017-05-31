---
permalink: /python/install/
---

# 安装 Python

Python2 和 Python3 都安装。有些软件需要 Python2，比如 npm 安装 native module。学习应使用 Python3。

## Linux

Ubuntu 已安装了 Python2 和 Python3。

```sh
$ which python
/usr/bin/python

$ ls -l /usr/bin/python
l... /usr/bin/python -> python2.7

$ which python3
/usr/bin/python3

$ ls -l /usr/bin/python3
l... /usr/bin/python3 -> python3.5
```

## Windows

[Using Python on Windows](https://docs.python.org/3/using/windows.html)

从官网下载安装程序
<https://www.python.org/downloads/>

安装目标：

- 在命令行中输入 `python` 启动 Python3 而不是 Python2
- Python 脚本关联到 Python Launcher 而不是 Python2

需要使用 Python2 时怎么办？明确指定 Python2 的位置。比如 npm 安装 native module：

```sh
npm config set python /path/to/python27/python.exe
```

安装 Python2 时

- "Install for all users"，旧版本会将 python.exe/pythonw.exe 放到 "%SystemRoot%"，新版本似乎取消了这种做法。
- 取消选择 Register Extensions
- 取消选择 "Add python.exe to Path"（默认没有选择）

安装 Python3 时

![](https://docs.python.org/3/_images/win_installer.png)

- "Install for all users"，这个选项会将 Python Launcher 安装到 `%SystemRoot%`
- 选择 "Add python.exe to Path"（将 python, python/scripts 等目录添加到 Path。）

安装完成后打开命令提示符：

```bat
python --version
python --help
```

## Python Launcher for Windows

[Python Launcher for Windows](https://docs.python.org/3/using/windows.html#python-launcher-for-windows)

Python 启动器（py.exe, pyw.exe）的安装位置：

- 选择 "Install for all users" 时在 `%SystemRoot%` 下。
- 取消选择 "Install for all users" 时，默认在 `%LOCALAPPDATA\Programs\Python\Launcher` 下，并且将这个目录添加到 User PATH 中。

### 启动 python

在命令行中通过 py 启动 python:

```bat
> py -h

Launcher arguments:

-2     : Launch the latest Python 2.x version
-3     : Launch the latest Python 3.x version
-X.Y   : Launch the specified Python version
-X.Y-32: Launch the specified 32bit Python version
```

若不指定 Launcher arguments，则启动默认版本。默认版本为所有安装版本中最新的版本。也可以通过配置文件 `py.ini` 指定默认版本。

查看 py 的细节：

```bat
set PYLAUNCH_DEBUG=true
py

set PYLAUNCH_DEBUG=
py
```

### py.ini

配置文件 `py.ini` 位置：

- `%LOCALAPPDATA%\py.ini`，优先级最高
- 跟 `py.exe` 放一块的 `py.ini`

环境变量 `PY_PYTHON` 与配置文件是等效的，`PY_PYTHON=3` 等效于

```ini
[defaults]
python=3
```

### 运行 Python 脚本

脚本 "hello.py"

```py
#! python

import sys
print(sys.version)
print('Hello Python')
```

在命令行中通过 py 运行它:

```sh
py hello.py
```

脚本第一行 `#! python` 称为 shebang，决定使用哪个 Python。

shebang      | action
-------      | ------
`#! python`  | 以最新的 Python 2.x 运行此脚本
`#! python2` | 以最新的 Python 2.x 运行此脚本
`#! python3` | 以最新的 Python 3.x 运行此脚本
没有指定     | 以默认的 Python 运行此脚本

环境变量 `PY_PYTHON` 默认值为 2，在 shebang 中 `python` 和 `python2` 都是以最新的 Python 2.x 运行。这跟 py 启动 python 不一样。这么做是为了与 Linux 一致，Linux 下 python 指向 python2。如果设置为 `PY_PYTHON=3`，则在 shebang 中 `python` 和 `python3` 以最新的 Python 3.x 运行。

为了跨平台，使用 linux shell shebang：

shebang                  | 在 PATH 中搜索 | 没有找到
-------                  | -------------- | --------
`#!/usr/bin/env python`  | python         | 以最新的 Python 2.x 运行
`#!/usr/bin/env python2` | python2        | 以最新的 Python 2.x 运行
`#!/usr/bin/env python3` | python3        | 以最新的 Python 3.x 运行

以 `#!/usr/bin/env python` 为例，Windows 没有 `/usr/bin/env`，不过 Python 模拟了这个程序，会在 Path 中搜索 python（`pythonX.X/python.exe`），是调用 python2 还是调用 python3，就看先找到谁。如果没有找到，则与没有 `/usr/bin/env` 的 shebang 相同。

如果 py 以指定版本运行则忽略脚本的 shebang。

```sh
py -3 hello.py
```

不管 hello.py 的 shebang 是什么，都是调用 python3。

### 文件关联

因为 Python 脚本关联到 Python Launcher，双击运行脚本原理同上。

### 卸载

Python Launcher 需要单独卸载，卸载 Python 时不会卸载它。
