# 如何支持 express.js?

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

[编辑系统 hosts](vhosts.md#hosts)，添加服务器名字 `n.com www.n.com`。

这样就可以通过 `http://n.com>` 访问 express.js 网站。其它机器也可以访问。
