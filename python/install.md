---
permalink: /python/install/
---

# 安装 Python

Python 2 和 Python 3 都安装。有些软件需要 Python 2，比如 npm 安装 native module。日常应使用 Python 3。

## Ubuntu

Ubuntu 已安装了 Python 2 和 Python 3。

```sh
python --version
# Python 2.7.12

python3 --version
# Python 3.5.2
```

## Windows

[下载](https://www.python.org/downloads/windows/)

安装目标：

- 在命令行中输入 `python` 启动 Python3 而不是 Python2
- Python 脚本关联到 Python Launcher 而不是 Python2

需要使用 Python2 时怎么办？明确指定 Python2 的位置。比如 npm 安装 native module：

```sh
npm config set python /path/to/python27/python.exe
```

安装 Python 2

- "Install for all users"，旧版本会将 python.exe/pythonw.exe 放到 "%SystemRoot%"，新版本似乎取消了这种做法。
- 取消选择 Register Extensions
- 取消选择 "Add python.exe to Path"（默认没有选择）

安装 Python 3

![](https://docs.python.org/3/_images/win_installer.png)

- "Install for all users"，这个选项会将 Python Launcher 安装到 `%SystemRoot%`
- 选择 "Add python.exe to Path"（将 python, python/scripts 等目录添加到 Path。）

安装完成后打开命令提示符：

```bat
python --version
```
