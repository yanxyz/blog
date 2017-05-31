---
permalink: /vbs/lang/error/
---

# VBScript 错误

```vbs
Err.Raise 6   ' Raise an overflow error.
MsgBox "Error # " & CStr(Err.Number) & " " & Err.Description
Err.Clear   ' Clear the error.
```
