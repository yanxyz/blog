---
permalink: /shell/lang/quoting/
---

# Shell Quoting

Shell quoting 用于取消字符的特殊意思，有三种：

```sh
echo '#' "#" \#
```

单引号不能包含单引号，即使使用 `\`。

## 双引号

在双引号内，这几个字符有特殊意思

```
$  `  \
```

在双引号内 `$` 表示 expansions。最常见的是展开变量

```sh
name=yan
echo "hello $name"
echo "hello ${name}"
# hello yan

echo "Now: $(date)"
```

在双引号内 `` ` `` 表示 [command substitution](expansions.md)

```sh
echo "Now: `date`"
```

在双引号内 `\` 在下面字符前面表示转义

```
$   `   "   \   <newline>
```

```sh
echo \'\n\$\"
# 'n$"
echo "\'\n\$\""
# \'\n$"
```

在双引号内 `$@` 和 `$*` 这两个特殊参数表现不同，[见这里](virables.md)。

## 转义符

转义符 `\` 保留它后面字符的字面意思。`\` 也是 quoting，在看文档时要注意 quoted 包含 `\` 这种情况。

一个特例是，`\` 用在行末（`<newline>` 之前）表示续行，在解析时 `\` 和 `<newline>` 被删除

```sh
echo "hello \
world"
```
