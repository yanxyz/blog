---
permalink: /vbs/lang/arrays/
---

# VBScript 数组

```vbs
Dim colors
colors = Array("red", "green", "blue")
WScript.Echo colors.
```

第二种方式，声明数组下界

```vbs
Dim colors(2) ' 声明数组的下界，而不是长度
colors(0) = "red"
colors(1) = "red"
colors(2) = "red"
```

