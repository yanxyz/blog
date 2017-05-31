---
permalink: /php/lang/strings/
---

# PHP Strings

单引号，只支持两个转义

```php
echo 'It\'s a dog.'
echo 'C:\\Users\\yan'
```

双引号，支持更多的转义，并且可以展开变量

```php
$words = "I love her."
echo "He said \"$words\""
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
- 结束标记要单独一行，前面不能有空白（不可缩进），后面只能是 `;`

Nowdoc 跟单引号类似，注意事项同 heredoc。开始标记必须有单引号。

