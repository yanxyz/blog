---
permalink: /python/lint/
---

### pycodestyle

之前称为 pep8。检查 code style。

<http://pymbook.readthedocs.io/en/latest/pep8.html>

### pydocstyle

之前称为 pep257。检查 doc string code style。

<http://dolphm.com/pep257-good-python-docstrings-by-example/>

### PyFlakes

<https://github.com/PyCQA/pyflakes#readme>

检查语法错误，不检查 code style。

不 import 脚本，独立检查脚本，速度快，不过局限性也大。

### flake8

Flake8 is a wrapper around these tools:

- PyFlakes
- pycodestyle
- Ned Batchelder’s McCabe script

### Pylint

检查 code style。

### Pylama

pycodestyle, pydocstyle, PyFlakes, Pylint 等集成工具。

### prospector

pycodestyle, pydocstyle, PyFlakes, Pylint 等集成工具。

### Mypy

<https://github.com/python/mypy>

Mypy is an optional static type checker for Python.

```py
def greeting(name: str) -> str:
    return 'Hello ' + name
```
