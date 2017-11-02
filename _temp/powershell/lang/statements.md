---
permalink: /powershell/lang/statements/
---

# PowerShell 语句

## if

```powershell
help about_If
```

if 必须接 ScriptBlock，即 {} 不能省略

```powershell
if ($a -gt 2) {
    Write-Host "The value $a is greater than 2."
} elseif ($a -eq 2) {
    Write-Host "The value $a is equal to 2."
} else {
    Write-Host "The value $a is less than 2 or was not created or initialized."
}
```

## switch

```powershell
help about_Switch
```

```powershell
switch (2) {
    1 {"It is one."; break}
    2 {"It is two."; break}
    default {"It is unknown."}
}
```


## for

```powershell
help about_For
```

## while

```powershell
help about_While
```

## do

```powershell
help about_Do
```

do...while

do...until

## Return

```powershell
help about_Return
```

Return 退出 function, script, script block。
