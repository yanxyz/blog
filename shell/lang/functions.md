---
permalink: /shell/lang/functions/
---

# Shell 函数

定义函数：

```sh
output () {
    echo $1 $2
}

output 123 "abc"
```

没有参数列表，函数的参数类似于传给脚本的命令行参数。

调用函数跟调用命令类似，可以把函数当作自定义的命令。

脚本是从文件开始向下一行行执行，函数定义要在函数调用前面。

当函数和命令同名时，函数优先。下表优先级由高到低：

1. alias
1. keywords, 比如 if
1. functions
1. builtins, 内置命令，比如 cd
1. scripts 和 executable programs

函数调用的 exit status 是函数体最后一个命令的 exit status。


删除函数：

```sh
unset -f output
```

## local

在函数内可以用 local 声明本地变量

```sh
#!/bin/bash

i=1
func () {
    local i=2
    echo $i
}

echo $i # 1
func    # 2
echo $i # 1
```
