---
permalink: /shell/lang/expansions/
---

# Shell Word Expansions

单词展开的顺序

1. tilde expansions
1. parameter expansions
1. command substitutions
1. arithmetic expansions
1. quote removals

## tilde expansions

```sh
echo ~yan
```

如果存在用户 yan，则展开为 yan 的 HOME。

## Parameter Expansion

```sh
${expression}
```

简单情况可以省略 `{}`，下面情况除外

- 位置参数 `${10}`
- 明确变量名字

```sh
name=yan
echo $name
echo ${name}
```


```sh
echo a{d,c,b}e
# ade ace abe
```

<http://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html>


## Command substitution

有两种方式：

```sh
$(command)
`command` # 旧方式，不建议使用
```

在 subshell 运行 command，并将它的 output 替换这个表达式。

```sh
tar -cZf /var/backup-$(date +%Y%m%d).tgz /home/yan
```

## Arithmetic expansion

```sh
$(( expression ))
```

如果 expression 无效，则不会替换并输出一条错误。

```sh
echo 1 + 1
# 1 + 1
echo $((1 + 1))
# 2
```

## quote removals

展开的最后一步是删除引用。

`echo "hello world"` 输出不包含 ""。

如果展开的结果为空，则删除它，除非单词在单引号或双引号内。

```sh
if [ "$name" = yan ] # $name 要放到引号内
then
  echo "hello"
fi
```
