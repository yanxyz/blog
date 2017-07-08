---
permalink: /javascript/network/cookie/
---

# Cookie

Cookie 保存少量数据。

## 格式

Chrome 打开 DevTools，Network 面板查看 header，Application 查看 Cookies

- request header `Cookie`，只有一条
- response header `Set-Cookie`，可以有多条

因为 request header 包含 Cookie，Cookie 不可以太大。

```
Set-Cookie: {name}={value}; Expires={GMT}; Secure; HttpOnly
```

- Secure，要求 https。
- HttpOnly，客户端脚本不可以读取

[PHP: Cookies - Manual](http://php.net/manual/en/features.cookies.php)

```php
setcookie("name", "value", time() + 3600);   // 1h 后过期
setcookie("name", "value", time() - 1);    // 已过期
```

Expires 为 0 或者没有值，Cookie 在 session 结束后（浏览器关闭后）失效。

## 读写

document.cookie 读写 cookies，但不能访问 HttpOnly cookies。

跟 header 类似，读是全部读取，写是只写一条。读写不对称。

```js
document.cookie = ''
```

domain 采用 endsWith 比较，sub.domain.com 页面可以将 domain 设为 domian.com，不能设为 google.com。

Path 是绝对路径，默认是当前页面 pathname 的 parent。
