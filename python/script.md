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

Windows 复杂一些，牵涉到文件关联，py.exe 等，[见这里](py.md)。

