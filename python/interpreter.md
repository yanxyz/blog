---
permalink: /python/interpreter/
---

# Python Interpreter

Python Interpreter，或者称为 Python shell。

```sh
python --help
```

启动简易服务器

- python2: `python -m SimpleHTTPServer 3000`
- python3: `python -m http.server 3000`


## 交互模式

进入交互模式

Unix:

```sh
python
python3
```

Windows:

```sh
# Python Launcher for Windows
py
py -2
py -3

# PATH 中的 python.exe
python
```

退出交互模式:

- 输入 end-of-file 字符（Unix `Control-D`, Windows `Control-Z`）, 回车
- 输入 `quit()`

可以尝试 [IPython](./tools/ipython.md)， 它是增强型 Python shell，提供高亮等功能。


