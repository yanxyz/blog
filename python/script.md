---
permalink: /python/script/
---

# Python 脚本

Python 脚本的扩展名为 `.py`。

如何运行 Python 脚本？测试脚本 hello.py

```python
#!/usr/bin/env python3
# -*- coding: utf8 -*-

import sys
print('hello ' + sys.version)
```

第一行是 shebang，意思是使用 `/usr/bin/env` 这个工具搜索 `python`, 然后由找到的 `python` 运行这个脚本。

第二行指定脚本的编码，Python 3 默认以 UTF8 编码读取脚本，不建议使用。

## Ubuntu

运行 Python 脚本跟运行 Shell 脚本类似，[见这里](../shell/script.md)。

```sh
chmod +x ./hello.py
./hello.py

python hello.py
python3 hello.py
```

运行结果是？

## Windows

双击脚本运行，看 `.py` 文件关联到哪个程序：

- 关联到 python.exe，则以它运行脚本。
- 关联到 py.exe，见下文 `py hello.py`。

查看文件关联

```powershell
assoc .py
.py=Python.File

ftype Python.File
Python.File="C:\Windows\py.exe" "%1" %*
```

### console

在 cmd.exe（命令提示符）中，分为几种情况

```sh
python hello.py
```

在 PATH 中查找 `python`，若找到则以它运行脚本；若没有找到则报错。

```sh
hello.py
```

跟双击脚本一样。

```sh
py hello.py
```

py.exe 是 Python launcher, 它启动相应的 Python 版本并运行脚本, [见这里](py.md)。
