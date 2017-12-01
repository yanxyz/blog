[原文档](http://nginx.org/en/docs/http/ngx_http_core_module.html#location)

```
Syntax: location [ = | ~ | ~* | ^~ ] uri { ... }
        location @name { ... }
Default:  —
Context:  server, location
```

根据请求 URI 指定配置。

先规范 URI: 解码 `%XX` 文本，转换相对路径 `.` 与 `..`，将多个斜杠合并为一个等等。

地址（location）由前缀字符串或正则表达式指定。正则表达式以修饰符 `~*` 开始的不区分大小写，以修饰符 `~` 开始的区分大小写。为了找到匹配请求 URI 的地址，nginx 先检查所有的前缀字符串地址，选择匹配当中最长的，并记住它。然后检查正则表式，按它们的先后位置逐个检查，遇到第一个匹配后停止，使用它的配置。如果没有找到匹配的正则表达式，则使用之前记住的前缀字符串地址的配置。

location 块可以嵌套，例外的情况会在下面提到。

对于不区分大小写的操作系统，比如 Mac OS X 和 Cygwin，匹配前缀字符串时不区分大小写(0.7.7)。不过，comparison is limited to one-byte locales.（译注：这句不大明白。）

正则表达式可以包含捕获(0.7.40)，捕获分组可以用到后面的其它指令中。

如果最长的匹配的前缀字符串地址有修饰符 `^~`，则不检查正则表达式。

使用修饰符 `=` 则地址确切地匹配请求 URI。如果找到确切的匹配，则停止查找。例如，如果经常请求 `/`，那么指定 `location = /` 会提高请求处理速度，因为查找在第一个对比之后便停止了。这样的 location 不能嵌套。

版本 0.7.1 - 0.8.41，匹配的前缀字符串地区没有修改符 `=` 或 `^~` ，查找也会停止，不检查正则表达式。

下面举例说明：

```nginx
location = / {
    [ configuration A ]
}

location / {
    [ configuration B ]
}

location /documents/ {
    [ configuration C ]
}

location ^~ /images/ {
    [ configuration D ]
}

location ~* \.(gif|jpg|jpeg)$ {
    [ configuration E ]
}
```

请求 `/` 使用配置 A， `/index.html` 使用配置 B，`/documents/document.html` 使用配置 C，`/images/1.gif` 使用配置 D，`/documents/1.jpg` 使用配置 E。

`@` 前缀定义了一个具名地址。这样的地址不用来检查正则表达式，而用于重定向。它们不能嵌套。

如果前缀字符串地址以斜杠结尾，并且请求由 `proxy_pass`, `fastcgi_pass`, `uwsgi_pass`, `scgi_pass`, 或 `memcached_pass` 处理，则按上面说的处理。如果不以斜杠结尾，则重定向（301）到新地址，在原请求 URI 后面加上斜杠。不想这样的话，可以指定确切的匹配：

```nginx
location /user/ {
    proxy_pass http://user.example.com;
}

location = /user {
    proxy_pass http://login.example.com;
}
```
