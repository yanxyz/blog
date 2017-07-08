---
permalink: /javascript/cors/
---

# CORS

Cross-Origin Resource Sharing (CORS)

## XHR

XHR API 无大的变动。

浏览器添加 Origin header，服务器

有 Origin header 并不意味着 CORS。Chrome 等浏览器也会为同域 POST/PUT/DELETE 添加 origin header。


### withCredentials

CORS 请求默认不发送 cookie，想包含 cookie

xhr

```js
xhr.withCredentials = true
```

response header

```
Access-Control-Allow-Credentials: true
```

### preflight request


