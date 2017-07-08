---
permalink: /php/lang/strings/
---

# PHP Strings

单引号，只支持两个转义, `\'`, `\\`。

```php
echo 'It\'s a dog.';
```

双引号，支持更多的转义，更重要的是可以展开变量，有两种

```php
$name = 'yan';
echo "hi, $name";

echo "User-Agent: {$_SERVER['HTTP_USER_AGENT']}";
```

Heredoc 跟双引号类似

```php
$words = "I love her."
echo <<<EOT
He said "$words"
EOT;
```

注意：

- 标记 `EOT` 为自定义，开始标记可以有双引号，结束标记和开始标记一致
- 结束标记必须单独一行，前面不能有空白（不可缩进），后面只能是 `;`

Nowdoc 跟单引号类似，注意事项同 heredoc。开始标记必须有单引号。

## 常见操作

[PHP: String Functions - Manual](http://php.net/manual/en/ref.strings.php)

PHP 方法名字比较混乱。

### 字符

```php
$str = 'hello world';
echo $str[-1];
```

### 拼接

`.` 操作符

```php
echo 'hello' . 'world';
```
