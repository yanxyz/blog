---
permalink: /php/lang/statements/
---

# PHP Statements

流程控制结构的语句块除了常见的 `{}` 外，也可以用 `:`。

## if

if 只有一个语句时，可以省略 {}。

elseif 跟 else if 的区别，如果语句块使用 `:`，只能用 elseif。

```php
$n = 0;

if ($n < 0):
    echo -1;
elseif ($n === 0):
    echo 0;
else:
    echo 1;
endif;
```

## switch

switch/case 使用宽松比较。

在 switch 内，continue 表现同 break。若 switch 在 loop 内，使用 `continue 2` 达到正常的 continue 效果。

```php
for ($i = 0; $i < 3; $i++) {
    switch ($i) {
        case 0:
        case 1:
            continue 2;
    }

    echo "$i";
}
```

