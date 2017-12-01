# XAMPP PHP

## phpinfo

[查看 phpinfo](http://localhost/xampp/phpinfo.php)

"Loaded Configuration File" 为 PHP 配置文件位置，默认是 `xampp/php/php.ini`

修改 php.ini 之后要重启 Apache 才能生效。

## 使用其它版本的 PHP

<http://localhost/dashboard/docs/use-different-php-version.html>

## XDebug

下载与 PHP 相适应的 xdebug。

将 phpinfo 粘贴到下面网址，会自动给出安装步骤：
<https://xdebug.org/wizard.php>

重启 Apache, 刷新 phpinfo 页面，搜索是否有 `XDebug`。
