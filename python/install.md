---
permalink: /python/install/
---

# 安装 Python

Python 2 和 Python 3 都需要安装。有些软件需要 Python 2，比如 npm 安装 native module。自用的话若没特别的限制应使用 Python 3。

## Ubuntu

Ubuntu 已安装了 Python 2 和 Python 3。

```sh
python --version
# Python 2.7.12

python3 --version
# Python 3.5.2
```

## Windows

下载

- [官网](https://www.python.org/downloads/windows/)
- [淘宝镜像](https://npm.taobao.org/mirrors/python/)

安装目标：

- 在命令行中输入 `python` 启动 Python 3 而不是 Python 2
- Python 脚本关联到 Python Launcher 而不是 Python 2

需要使用 Python 2 时怎么办？可以明确指定 Python 2 的位置，比如 npm

```sh
npm config set python \path\to\python27\python.exe
```

安装 Python 2

- 取消选择 Register Extensions
- 取消选择 "Add Python.exe to Path"（默认没有选择）

安装 Python 3

![](https://docs.python.org/3/_images/win_installer.png)

- 选择 "Add Python to Path"

安装完成后在命令行中运行：

```sh
python --version
# Python 3.6.0
```

Python 3.3+，`*.py` 文件实际关联到 Python laucher。修复文件关联，先卸载  Python laucher，再重新安装 Python。
