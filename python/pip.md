---
permalink: /python/pip/
---

# pip

pip 是一种 Python 包安装器。

[文档](https://pip.pypa.io/)


## 安装

<https://pip.pypa.io/en/stable/installing/>

自 Python 2.7.9/3.4 开始默认安装 pip。不过需要升级：

```cmd
python -m pip install -U pip
```

## 配置

配置文件位置：
<https://pip.pypa.io/en/stable/user_guide/#configuration>

Windows 下配置文件为 `%APPDATA%\pip\pip.ini`。

配置选项的名字来自命令行选项。

注意：pip 以系统编码读取此文件，简体中文系统编码为 GBK。如果有中文注释，编码应改为 GBK。

镜像
<https://www.pypi-mirrors.org/>

豆瓣的镜像还可以，中科大的镜像不完整。

```ini
[global]
respect-virtualenv = true
index-url = https://pypi.doubanio.com/simple
cache-dir = D:\Cache\pip\cache
log = D:\Cache\pip\pip.log
```
