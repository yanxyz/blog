---
permalink: /python/py/
---

# Python Launcher for Windows

[Python Launcher for Windows](https://docs.python.org/3/using/windows.html#python-launcher-for-windows)

Python 3.3 为 Windows 引入 Python Launcher（py.exe, pyw.exe）。

查看安装位置

```bat
where py.exe
```

Python Launcher 随 Python 安装，不过卸载 Python 时不会卸载它，它需要单独卸载。

## 启动 Python

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

相同的版本(major.minor)，64-bit 优先于 32-bit。若指定了 "-32" 后缀则只使用 32-bit。

查看 py 的细节：

```bat
set PYLAUNCH_DEBUG=true
py

set PYLAUNCH_DEBUG=
py
```

### py.ini

配置文件 `py.ini` 位置：

- `%LOCALAPPDATA%\py.ini`，优先级高
- 跟 `py.exe` 放一块的 `py.ini`

### PY_PYTHON

环境变量 `PY_PYTHON` 与配置文件是等效的，`PY_PYTHON=3` 等效于

```ini
[defaults]
python=3
```

环境变量要优先于配置文件。

## 运行 Python 脚本

Windows 下运行 Python 脚本有点复杂

脚本 "hello.py"

```py
#! python

import sys
print(sys.version)
print('Hello Python')
```

脚本第一行 `#! python` 为 shebang。

方式一，双击脚本运行，这凭借的是文件关联，可能关联到 python2.exe, python3.exe, py.exe。

方式二，在 cmd （命令提示符）中

```bat
python2.exe hello.py
python3.exe hello.py
py.exe -3 hello.py
py.exe hello.py
hello.py # 实际是依靠文件关联
```

以 python2.exe，python3.exe（包含文件关联的情况），就以指定的版本运行脚本。

`py.exe -3 hello.py` 这种形式也指定了 Python 的版本，因此也以指定的版本运行脚本。

`py.exe hello.py` 这种形式会考虑 shebang。如果脚本没有 shebang, 则以默认的 Python 运行此脚本。

```sh
#! python
#! python2
#! python3
```

Linux 下 shebang 只能是绝对路径，不能使用上面的 shebang。为了跨平台，可以用下面的 shebang

```sh
#!/usr/bin/env python
#!/usr/bin/env python2
#!/usr/bin/env python3
```

以第一个 shebang 为例，它的意思是，使用 `/usr/bin/env` 这个工具搜索 python, 然后由找到的 python 运行这个脚本。Windows 没有这个工具，不过 py.exe 模拟了这个程序。

环境变量 `PY_PYTHON` 的值会影响 shebang

- `PY_PYTHON` 默认值为 2，`python` 和 `python2` 都使用最新的 Python 2；`python3` 使用最新的 Python 3。
- `PY_PYTHON=3`，`python` 和 `python3` 都使用最新的 Python 3。
- `PY_PYTHON=3.1`，`python` 使用 3.1，`python3` 使用最新的 Python 3。`PY_PYTHON` 指定了 major，`python{major}` 考虑 `PY_PYTHON{major}`。
- `PY_PYTHON=3 PY_PYTHON3=3.3`，`python` 和 `python3` 都使用 Python 3.3。
