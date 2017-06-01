---
permalink: /python/script/
---

# Python 脚本

Python 脚本的扩展名为 `.py`。

hello.py

```python
#!/usr/bin/env python
# -*- coding: utf8 -*-

import sys
print('hello ' + sys.version)
```

第一行是 shebang，当直接运行脚本时

```sh
./hello.py
```

将使用 `/usr/bin/env` 这个程序搜索 python, 然后由找到的 python 运行这个脚本。[更多](../shell/script.md)。

第二行指定脚本的编码，Python3 默认以 UTF8 编码读取脚本，不建议使用。

