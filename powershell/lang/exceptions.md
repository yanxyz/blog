---
permalink: /powershell/lang/variables/
---

# PowerShell 异常

```powershell
help about_Errors
```

当发生错误时，先将错误保存到变量 `$Error`，然后交给相关的 Catch/Finally，如果没有找到 Catch/Finally，则将错误输出到 error stream。

## Try..Catch..Finally

```powershell
help about_Try_Catch_Finally
```

- Catch 和 Finally 至少要有一个
- 可以有多个 Catch
- Catch 可以指定一个或多个 error types；没有指定表示任意 error。


```powershell
try {
    $wc = new-object System.Net.WebClient
    $wc.DownloadFile("http://www.contoso.com/MyDoc.doc")
}
catch [System.Net.WebException],[System.IO.IOException]  {
    "Unable to download MyDoc.doc from http://www.contoso.com."
}
catch {
    "An error occurred that could not be resolved."
}
finally {
    "Finish"
}
```

如果 Try 发生错误，则查找与 error type 匹配的 Catch 然后运行。error type 匹配依据继承规则，子类  Catch 应放到父类 Catch 之前，不然子类 Catch 没有机会运行。

Finally 始终运行，不管 Try 是否发生错误。

## Trap

```powershell
help about_Trap
```

在发生错误时，如果没有其它方式处理错误，PowerShell 将检查是否有相应的 trap，若有则运行 trap。

在 trap 语句中 `$_` 引用当前 error。

```powershell
function TrapTest {
    trap {"Error found: $_"}
    nonsenseString
}
```

trap 可以指定 error types。如果有多个 trap，则只运行 error type 最具体的 trap。

```powershell
trap {"Other terminating error trapped" }
trap [System.Management.Automation.CommandNotFoundException]
    {"Command error trapped"}
nonsenseString
```

Trap 语句可以使用 Break 和 Continue keywords

