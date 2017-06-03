---
permalink: /python/py/
---

# Python Launcher for Windows

[Python Launcher for Windows](https://docs.python.org/3/using/windows.html#python-launcher-for-windows)

Python 3.3 为 Windows 引入 Python Launcher

- py.exe, console 程序，启动 python.exe, 关联到 `*.py` 文件。
- pyw.exe, GUI 程序，启动 pythonw.exe, 关联到 `*.pyw` 文件。

查看安装位置

```sh
where.exe py.exe
```

Python Launcher 随 Python 安装（目前它没有独立安装程序），不过卸载 Python 时不会卸载它，它需要单独卸载。

查看帮助

```sh
> py -h

Launcher arguments:

-2     : Launch the latest Python 2.x version
-3     : Launch the latest Python 3.x version
-X.Y   : Launch the specified Python version
-X.Y-32: Launch the specified 32bit Python version
```

## 启动 Python

启动 Python，进入交互模式。

提示：py.exe 从注册表中搜集所有安装的版本，根据不同的情况确定将要启动的版本。

例 1：

```sh
py -2.7
```

指定了 major.minor，则启动 Python 2.7；若没找到则报错。

例 2：

```sh
py -2.7-32
```

同例 1，只是要求 32bit 版本。在默认情况下（不指定后缀 `-32`）64bit 版本优先。

例 3：

```sh
py -3
```

只指定了 major，要查看变量 `python3` 的值（由环境变量 `PY_PYTHON3` 或配置文件 `py.ini` 指定）

- 假设 `python3=3`（默认值），从安装的 Python 3.x 中查找 minor 最大的版本，然后启动这个版本；若没有安装 Python 3 则报错。
- 假设 `python3=3.5`，则启动 Python 3.5；若没有找到则报错。

例 4：

```sh
py
```

没有指定 version，要查看变量 `python` 的值（由环境变量 `PY_PYTHON` 或配置文件 `py.ini` 指定）

- 假设 `python=3`，从安装的 Python 3.x 中找到 minor 最大的版本，然后启动这个版本。
- 假设 `python=2.7`，则启动 Python 2.7。
- 如果没有找到要求的版本，先尝试 Python 2（即按 `python=2` 处理），再尝试 Python 3。Python 3.6 做了修改，优先尝试 Python 3（shebang 仍然优先尝试 Python 2）。

## 运行 Python 脚本

测试脚本 "hello.py"

```py
#!python

import sys
sys.stdout.write("hello from Python %s\n" % (sys.version,))
```

脚本第一行 `#!python` 为 shebang。Unix 支持 shebang 而 Windows 不支持，py.exe 支持 shebang，这样脚本可以在不同的平台下运行。py.ex 只支持下面几种形式

```sh
/usr/bin/env python*
/usr/bin/python*
/usr/local/bin/python*
python*
```

第一种形式特殊一点，意思是在 PATH 中搜索 `python*`，若找到则以它运行脚本。若没找到则提取命令 `python*`，进入下一步处理。

最后一种形式，我在 Ubuntu 中测试报错，其它发行版可能没有问题。建议只使用第一种形式。

示例

```sh
#!/usr/bin/env python
#!/usr/bin/env python3
#!/usr/bin/python2.7
#!python
#!python2
#!python3.5
```

运行 Python 脚本

```sh
py -2 hello.py
py -3.5 hello.py
```

py.exe 指定了 version，则忽略脚本 shebang，启动哪个版本见上面“启动 Python”。

```sh
py hello.py
```

与上例的区别是，从 shebang 中提取命令，命令指定了 version，之后处理一样。

- `/usr/bin/env python*` 这种形式特殊一点，上文已讲过。
- 如果命令是 python（即没有指定 version），如果没有找到想要的版本，优先尝试 python2，这跟启动 Python 不同。

如果脚本没有 shebang，跟 py.exe 不指定参数启动 Python 类似，Python 3.6 优先尝试 Python 3。

## 配置

配置文件 `py.ini` 位置：

- `%LOCALAPPDATA%\py.ini`，这是 User 级别
- 跟 `py.exe` 放一块的 `py.ini`，这是 Global 级别，优先级低于 User 级别

配置文件的选项来自 `PY_PYTHON` 等环境变量。例如 `PY_PYTHON=3 PY_PYTHON3=3.1` 等效于

```ini
[defaults]
python=3
python3=3.1
```

环境变量要优先于配置文件。

### 自定义命令

```ini
[commands]
vpython=c:\bin\vpython.exe -foo
```

脚本 `doit.py` shebang

```py
#! vpython
```

运行脚本

```bat
py doit.py
REM 即
c:\bin\vpython.exe -foo doit.py
```

## debug

上面的解说有些复杂，自己动手查看 py 的运行细节：

```bat
REM 开始调试，设为任意的值均可
set PYLAUNCH_DEBUG=1
py

REM 关闭调试
set PYLAUNCH_DEBUG=
```
