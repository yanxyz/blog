---
permalink: /php/xdebug/
---

# 安装 XDebug

## Windows

打开网页 [XDebug installation wizard](https://xdebug.org/wizard.php)。在 cmd.exe 运行 `php -i | clip`，然后在网页中粘贴。下载 dll，然后放到 php\ext 目录下面。

编辑 php.ini

```
; 取消注释
extension_dir = "ext"

; 添加
[XDebug]
zend_extension = php_xdebug-2.5.4-7.1-vc14.dll
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
```
