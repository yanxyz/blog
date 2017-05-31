---
permalink: /software/xampp/apache/
---

# XAMPP Apache

## 虚拟主机

查看 [Apache Virtual Host documentation](http://httpd.apache.org/docs/2.4/vhosts/)，了解基本概念。
这里只关注 Name-based Virtual Hosts。

在 XAMPP 安装目录，apache/conf/httpd.conf 定义了默认的虚拟主机 localhost

```apache
# 虚拟主机 localhost
ServerName localhost:80
DocumentRoot "F:/xampp/htdocs"

# 自定义
Include conf/extra/httpd-vhosts.conf
```

自定义虚拟主机放在 apache/conf/extra/httpd-vhosts.conf 文件中，方便管理。

我将网站放到 `F:/www`，而不是 xampp/htdocs，方便管理。

```apache
<VirtualHost *:80>
    ServerName y.com
    ServerAlias www.y.com
    DocumentRoot "F:/www"
    ErrorLog "F:/www/logs/y-error.log"
    CustomLog "F:/www/logs/y-access.log" combined
    <Directory "F:/www">
        Options Indexes FollowSymLinks Includes ExecCGI
        IndexOptions FancyIndexing FoldersFirst
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

提示：修改 conf 文件之后要重启 Apache 才能生效。

编辑系统 hosts，添加服务器名字。以管理员权限打开编辑器，编辑 `%SystemRoot%\System32\drivers\etc\hosts`：

```
127.0.0.1    y.com   www.y.com
```

这样 <http://y.com> 访问 `F:/www` 目录下的文件。

### 外部访问

同一个局域网内的电脑可以访问本机上的网站。

命令提示符中运行 ipconfig 查看本机的 ip，
比如 192.168.31.100，其它电脑以这个 ip 访问本机，即访问 `F:/www` 目录下的文件。

以 IP 访问的是默认的虚拟主机，其它以名字访问的虚拟主机怎么办？
其它机器修改它的 hosts

```
192.168.31.100    y.com   www.y.com
```

不想让外部访问，在网站目录下添加一个文件 `.htaccess`:

```conf
Require local
```

或者将这行指令添加到虚拟主机配置 Directory 指令内。

## SSL

以 https 访问网站。

完整的步骤：

第一步：制作自签名证书

```
cd apache\bin
makedir.bat
```

在运行过程中注意两处

- Enter PEM pass phrase，输入一个 4 个字符及以上的密码
- Common Name，输入域名，比如 localhost 或 y.com

上面是一个证书一个域名。想要一个证书多个域名，编辑 makedir.bat：

```bat
rem bin\openssl x509 -in server.csr -out server.crt -req -signkey server.key -days 365

echo subjectAltName=DNS:a.com,DNS:*.a.com,DNS:b.com,DNS:*.b.com,DNS:n.com,DNS:*.n.com > cert_extensions
bin\openssl x509 -in server.csr -out server.crt -req -signkey server.key -days 365 -extfile cert_extensions
```

上面同subjectAltName
然后重新运行 makedir.bat。

第二步：安装证书

上面制作的证书位于 apache/conf/conf/ssl.crt/server.crt，双击它导入，证书存储选择“受信任的根证书颁发机构”

![](/uploads/xampp/import-cert.png)

第三步：添加虚拟主机

apache/conf/extra/httpd-ssl.conf 已经定义了一个 SSL 虚拟主机。


## 虚拟机如何访问主机上的网站？

VirtualBox 配置虚拟机，启用 Host-only 网络适配器

![](/uploads/xampp/host-only.png)

主机上，这个网络适配器 IP 默认为 192.168.56.1，虚拟机以这个 IP 访问主机上的网站（默认的虚拟主机）。

修改虚拟机的 hosts：

```
192.168.56.1    y.com   www.y.com
```

这样就可以通过固定的网址访问主机上的网站。


## 如何支持 express.js?

为 express.js 网站添加反向代理

```apache
<VirtualHost *:80>
    ServerName n.com
    ServerAlias www.n.com

    <Location />
        ProxyPass http://localhost:9000/
        ProxyPassReverse http://localhost:9000/
    </Location>

    ErrorLog "logs/node-error.log"
    CustomLog "logs/node-access.log" combined
</VirtualHost>
```

编辑系统 hosts，添加服务器名字 n.com www.n.com。

这样就可以通过 <http://n.com> 访问 express.js 网站。其它机器也可以访问。

