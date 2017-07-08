---
permalink: /php/lang/arrays/
---

# PHP 数组

PHP 数组实际是一个 ordered map。

创建数组

```php
$arr = Array(
  key1 => value1,
  key2 => value2,
);
```

`Array()` 可以替换为 `[]`。

数组的 key 是 integer 或 string，使用其它类型会转换类型。

```php
$a = [
  '8' => 'a'
];
```

key 可以省略，会转为相应的 integer。

```php
$arr = [
  1 => 'a',
  'b',
  'c'
];
```

修改数组元素，如果数组不存在则创建数组

```php
$arr[1] = 'b';
$arr[] = 'd'; // 添加元素
```


## foreach

foreach 遍历数组
