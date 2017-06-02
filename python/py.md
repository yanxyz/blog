---
permalink: /python/py/
---

# Python Launcher for Windows

[Python Launcher for Windows](https://docs.python.org/3/using/windows.html#python-launcher-for-windows)

Python 3.3 为 Windows 引入 Python Launcher（py.exe, pyw.exe）。

查看安装位置

```sh
where.exe py.exe
```

Python Launcher 随 Python 安装，不过卸载 Python 时不会卸载它，它需要单独卸载。

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

启动 Python，进入交互模式

```sh
> py -3
command 为 python3

> py -2.7
command 为 python27

> py
command 为 python
```

启动哪个版本由 command 决定。怎么处理 command 见下文。

## 运行 Python 脚本

方式一，双击脚本运行，看 `.py` 关联到哪个程序：

- 关联到 python.exe，则以它运行脚本。
- 关联到 py.exe，见下文 `py hello.py`。

方式二，在 cmd （命令提示符）中，分为几种情况

```sh
python hello.py
```

在 PATH（先在当前目录中）中查找 python，若找到则以它运行脚本；若没有找到则报错。

```sh
hello.py
```

跟双击脚本一样。


```sh
> py -2 hello.py
"command 为 python2"

> py -3.5 hello.py
"command 为 python3.5"

> py hello.py
command 由脚本 shebang 决定
```

提示：`py -x` 忽略了脚本 shebang。

测试脚本 "hello.py"

```py
#!python

import sys
sys.stdout.write("hello from Python %s\n" % (sys.version,))
```

脚本第一行 `#!python` 为 shebang。Windows 不支持 shebang，不过 Python launcher 提供了支持，支持下面几种形式

```sh
#!/usr/bin/env python
#!/usr/bin/python
#!/usr/local/bin/python
#!python
```

以上 shebang 得到的 command 都是 python。

第一种形式又特殊一点，意思是在 PATH 中搜索 python，若找到则以它运行脚本。若没找到则按 command 为 python 处理。

在 Unix 中 shebang 必须是一个路径，故上面最后一种形式在 Unix 中将报错。

shebang 可以指定版本，比如

```sh
#!/usr/bin/python2.7
"command 为 python2.7"

#!/usr/bin/python3
"command 为 python3"
```

## 处理 command

上文提到启动哪个版本由 command 决定。

Python Launcher 会从注册表中收集所有的 Python 的脚本，然后根据不同的 command 启动相应的版本。下面举例说明。

`python2.7` command 指定了 major.mirror，将启动 Python 2.7；若没有找到则报错。

`python2.7-32` command 同上，不过要求是 32 bit 版本。

`python3` command 只指定了 major，还要看变量 python3 的值。这个变量来自环境变量 `PY_PYTHON` 或配置文件 `py.ini`。

- 如果它不存在，则视为 `python3=3`，从收集到的 Python 3 中找到 mirror 最大的版本，然后启动这个版本；如果没有安装 Python 3 则报错。
- `python3=3.5`，则启动 Python 3.5；若没有找到则报错。

`python` command 有点不同，先查看变量 python 的值

- 如果它不存在，则视为 `python=2`，从收集到的 Python 2 中找到 mirror 最大的版本，然后启动这个版本；
- `python=2.7`，则启动 Python 2.7；
- 如果没有找到相应的版本，则以收集到的 Python 版本中第一个为默认版本，并启动它（我不大确定是不是这样）。

相同的版本(major.minor)，64-bit 优先于 32-bit。若 command 指定了 "-32" 后缀则只使用 32-bit。

## 配置

配置文件 `py.ini` 位置：

- `%LOCALAPPDATA%\py.ini`，优先级高
- 跟 `py.exe` 放一块的 `py.ini`

配置文件的选项来自 `PY_PYTHON` 等环境变量。例如 `PY_PYTHON=3 PY_PYTHON3=3.1` 等效于

```ini
[defaults]
python=3
python3=3.1
```

环境变量要优先于配置文件。

## debug

上面的解说有些复杂，自己动手查看 py 的运行细节：

```bat
REM 开始调试，设为任意的值均可
set PYLAUNCH_DEBUG=1
py

REM 关闭调试
set PYLAUNCH_DEBUG=
```
