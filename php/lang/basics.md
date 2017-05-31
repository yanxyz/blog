---
permalink: /php/lang/basics/
---

# PHP basics

PHP 语句需要以 `;` 结束。

PHP 下面标识符不区分大小写：

- 函数（方法）名字
- 关键字
- `TRUE`, `FALSE`, `NULL` 等常量

## PHP tags

PHP 解析器只解析 PHP tags 内的代码，之外的代码忽略。

PHP 7 只支持两种 PHP tags

```php
<?php echo 'hello world' ?>
<?= 'hello world' ?> // short echo tag, 等同于上一行代码
```

结束标签 `?>` 有 `;` 的作用，因此最后一个语句可以省略 `;`。

如果代码文件是纯 PHP 代码，建议省略结束标签，可以防止输出不必要的空白。

```php
<?php
echo "Hello world";
```

## Comments

PHP 注释有三种：

```php
<?php
echo 'hello world'; // 单行注释

/*
多行注释
*/
echo 'hello world';

echo 'hello world'; # 另一种单行注释
```
