---
permalink: /php/lang/expressions/
---

# PHP 表达式

[操作符优先级](http://php.net/manual/en/language.operators.precedence.php)

字符串连接符为 `.`，这跟其它语言不大一样：

```php
$message = 'Hello' . 'World';
echo $message;
```

逻辑操作符

- `||` 比 `or` 优先
- `&&` 比 `and` 优先
