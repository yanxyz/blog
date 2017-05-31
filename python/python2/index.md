# Python2

[Porting Python 2 Code to Python 3](https://docs.python.org/3/howto/pyporting.html)

[Cheat Sheet: Writing Python 2-3 compatible code](http://python-future.org/compatible_idioms.html)


### Python2 utf8 中文乱码

脚本 "utf8-1.py"

```py
#!/usr/bin/env python2

print("hello 你好")
print(u"hello 你好")
```

脚本 "utf8-2.py"

```py
#!/usr/bin/env python2
# -*- coding: utf-8 -*-

print("hello 你好")
print(u"hello 你好")
```
