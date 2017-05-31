---
permalink: /shell/lang/commands/
---

# Commands

命令有这几种

- simple command 简单命令
- pipeline
- command list 命令列表
- compound command 复合命令
- Function definition [函数](functions.md)

## Simple Commands

```
[variable assignments] [redirections] [command]
```

如果 command 是 built-in（包含在 shell 程序内）, variable assignments 影响当前进程，即变量存在于当前进程；command 在当前进程中执行。

如果 command 不是 built-in，variable assignments 不影响当前进程，即变量导入到 command 执行环境，command 执行之后，这些变量也不会存在于当前进程；command 是在子进程中执行，脚本之前定义的变量只有使用 export 才能用于子进程。

怎么知道 command 是不是 built-in？

```sh
type echo
# echo is a shell builtin

type /bin/echo
# /bin/echo is /bin/echo
```

上例也提示了，许多 built-in 有对应的 program，功能差不多，但是本质不同。

```sh
name="yan"
/bin/echo $name
```

## pipeline

```
[!] command1 [ | command2 ...]
```

管道 `|`，command1 的输出是 command2 的输入

`|&` 是 `2>&1 |` 的简写。

每个 command 在自己的 subshell 中运行，pipeline 的 exit status 是最后一个 command 的 exit status。

‘;’, ‘&’, ‘&&’, ‘||’ 将多个 pipelines 连接起来称为 list。

## Command lists

command list 由 and-or list，`;`, `&` 组成；而 and-or list 由 pipelines, `&&`, `||` 组成。

`;` 和 `<newline>` 效果一样，之前的命令独立执行。常见的地方是流程控制语句。

```sh
command1; command2    # 串行执行，上一个命令执行完再执行下一个命令
command1 & command2 & # 并行执行，每个命令在 subshell 中异步执行命令。
command1 && command2  # 上一个命令执行成功（退出状态码为 0）再执行下一个命令
command1 || command2  # 上一个命令执行失败（退出状态码不为 0）再执行下一个命令
```

上面命令列表的退出状态码除第二个是 0 外，其它的是命令列表中最后一个执行的命令的退出状态码。

## Compound Commands

Compound Commands 指 if, for 等流程控制语句，见 [语句](statements.md)

Grouping Commands

```
( list )
```

list 中的命令在 subshell 中运行。

```
{ list }
```

list 中的命令在当前 shell 中运行。注意 `{}` 与 list 之间要有空白。
