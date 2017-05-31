---
permalink: /python/lang/modules/
---

# Python 模块

Python 模块是一个 Python 脚本，其它脚本 import 它之后便可以使用它里面的定义（常量，函数，classes等）。

## import

以 `m.f` 的形式导入

```py
import fibo
```

以 `f` 的形式导入

```py
from fibo import fib, fib2
from fibo import *
```

模块的搜索过程，先搜索内置模块，再在 `sys.path` 中搜索。

##

__name__
