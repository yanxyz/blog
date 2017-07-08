---
permalink: /php/lang/types/
---

# PHP types

PHP 是动态类型语言，变量的类型由运行时决定。

查看变量的类型

```php
$var = 'hello world';
var_dump($var);
echo gettype($var);
```

判断变量的类型，is_type 函数，如 is_int()。

转换变量的类型，cast 或 settype()。

#### boolean

boolean 有两个值：true, false。这两个常量不区分大小写。

假值，注意

- string，'0'
- array, 空数组

#### null

null 有一个值：null。这个常量不区分大小写。

