---
permalink: /php/install/
---

# 安装 php

## Windows

[Windows PHP 下载列表](http://windows.php.net/download#php-7.1)。如果用于 XAMPP 选择 x86 Thread Safe。

解压下载的 zip 包，进入解压目录，将 php.ini-development 复制为 php.ini，打开编辑

```ini
; 取消注释
extension_dir = "ext"
date.timezone = Asia/Hong_Kong
```

将解压目录添加到 Path，在 cmd.exe 中运行

```
php -h
```

## 本地测试

[XAMPP](/software/xampp/index.md) 提供 Apache/PHP/Mysql 套件。

## 服务器

主机商提供的教程

- [LEMP Server on Ubuntu 16.04](https://www.linode.com/docs/web-servers/lemp/lemp-server-on-ubuntu-16-04)
- [LEMP stack in Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04)
