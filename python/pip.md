---
permalink: /python/pip/
---

# pip

pip 是 Python 的包安装器。

[文档](https://pip.pypa.io/)

## 安装

[安装教程](https://pip.pypa.io/en/stable/installing/)

Python 2.7.9/3.4 开始默认安装 pip。升级：

```sh
python -m pip install -U pip
```

## 配置

[配置文件位置](https://pip.pypa.io/en/stable/user_guide/#configuration)

Windows 下配置文件为 `%APPDATA%\pip\pip.ini`。

配置选项的名字来自 pip 命令行选项。

注意：pip 以系统编码读取此文件，简体中文系统编码为 GBK。如果有中文注释，编码应改为 GBK。

[镜像](https://www.pypi-mirrors.org/)

豆瓣的镜像还可以，中科大的镜像不完整。

pip.ini

```ini
[global]
respect-virtualenv = true
index-url = https://pypi.doubanio.com/simple
cache-dir = D:\Cache\pip\cache
log = D:\Cache\pip\pip.log
```
