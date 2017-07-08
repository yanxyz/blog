---
permalink: /php/lang/numbers/
---

# PHP 数字

数字分为 integer 和 float 两种。

## integer

integer 八进制以 0 为前缀，如 '0755'。使用 0-7 之外的数字，PHP 7 报错，旧版本忽略剩余数字。

integer 溢出为 float

```php
var_dump(PHP_INT_MAX + 1);
var_dump(PHP_INT_MIN - 1);
```

#### float

NAN

```php
(bool) NAN;   // true
NAN === NAN;  // false
```

