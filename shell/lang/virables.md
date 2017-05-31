---
permalink: /shell/lang/virables/
---

# Shell 变量

定义变量，注意 `=` 左右没有空格。

```sh
name=yan
echo $name
```

变量名以字母开头，随后是字母或数字。

系统变量全大写，自定义变量习惯小写。

## positional parameter

脚本的位置参数。从 1 开始，如 `$1`；大于 9 的要放在 `{}` 内，如 `{10}`；`$0` 是特殊参数，保存着脚本路径。

调用函数时，函数参数临时覆盖它们。

set 命令可以重新赋值。

## Special Parameters

`$@` 和 `$*` 表示所有的位置参数。在双引号内，`$*` 是一个由所有的位置参数以 IFS 第一个字符拼接的字符串。IFS(internal field separator) 是一个字符串列表，默认值为 `<space>`, `<tab>`, `<newline>`。

`$#` 位置参数的总数。

`$?` 上一个命令的退出状态码。

```sh
# true, false 是两个内置命令

true
echo $?
# 0

false
echo $?
# 1
```

`$0` 脚本名字，通常是全路径。

`$$` shell 进程 ID。

- <http://www.acyoo.com/archives/2694.html>
- <http://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html>

## Shell Variables

`$HOME` 当前用户的家目录的路径。

`$PATH` 命令搜索路径。

`$PWD` 当前工作目录。

## 相关命令

readonly 将变量设为只读

```sh
readonly name="yan"
```

declare 设置变量的值和属性

```sh
declare -r name="yan" # 只读
declare +r name # 取消只读属性
```

export 将变量导出给子进程

