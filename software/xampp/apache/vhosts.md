# 虚拟主机

基本概念见 [Apache Virtual Host documentation](http://httpd.apache.org/docs/2.4/vhosts/)，本文只关注 Name-based Virtual Hosts。

本文提到的文件地址都是相对于 xampp 安装目录。
本文用 vhost 代指虚拟主机。

apache/conf/httpd.conf 定义了默认的 vhost localhost

```apache
# localhost
ServerName localhost:80
DocumentRoot "F:/xampp/htdocs"

# 导入自定义 vhosts
Include conf/extra/httpd-vhosts.conf
```

在 apache/conf/extra/httpd-vhosts.conf 文件中添加 vhosts

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

## 编辑系统 hosts {#hosts}

编辑 `%SystemRoot%\System32\drivers\etc\hosts` 文件（需要管理员权限）：

```
127.0.0.1    y.com   www.y.com
```

这样 `http://y.com` 访问 `F:/www` 目录下的文件。

## 虚拟主机如何支持 https？ {#ssl}

如何以 `https://y.com` 访问网站？

#### 第一步：制作自签名证书

```
cd apache
makedir.bat
```

向导

- Enter PEM pass phrase，输入密码，至少 4 个字符
- Common Name，输入域名，比如 localhost（这里填写 y.com）
- 其它输入项用默认值即可，直接按 Enter 键

上面是一个证书一个域名。如何一个证书多个域名？

```bat
echo subjectAltName=DNS:y.com,DNS:*.y.com > cert_extensions
```

编辑 makedir.bat

```bat
bin\openssl x509 -in server.csr -out server.crt -req -signkey server.key -days 365 -extfile cert_extensions
```

重新运行 makedir.bat。

#### 第二步：安装证书

上面制作的证书文件为 apache/conf/ssl.crt/server.crt，
双击它导入证书，证书存储选择“受信任的根证书颁发机构”

![](../../images/import-cert.png)

[Certmgr.exe (Certificate Manager Tool) - Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/tools/certmgr-exe-certificate-manager-tool)

#### 第三步：添加 vhost

apache/conf/extra/httpd-ssl.conf 配置了 SSL，在添加 vhosts 时可以省略这些配置。
这个文件还定义了一个 SSL vhost。

在 apache/conf/extra/httpd-vhosts.conf 文件中添加 vhosts。
配置同上，只是改一下 port

```apache
<VirtualHost *:443>
  # 同上
</VirtualHost>
```

### 问题

curl 拒绝访问从自签名 https url。使用选项 `-k/--insecure` 告诉 curl 不验证。
