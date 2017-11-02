---
permalink: /javascript/lang/strings/slice/
---

# JavaScript 提取子串

`slice(start, end)`

- start, end 可以是任意的值，负值表示从后向前的位置。
- start > end 时结果为空字符串
- end 可以省略，这时值为 string.length
- 子串不包括 end 位置的字符

```
string    0123456789abcdef
slice                ^>>>>>>$
````

`substring(start, end)`

- start, end 可以是任意的值，负值变为 0，大于 string.length 变为 string.length
- start > end 时两者交换
- 其它同 slice

`substr(start, length)`

- start 可以是任意的值，负值表示从后向前的位置。IE < 9 负值变为 0。
- length 指定提取长度，不过子串的长度为实际得到的长度。
    - length 可以是任意的值。
    - length <= 0 结果为空字符串
    - length 可以省略，这时值为 `+∞`。
