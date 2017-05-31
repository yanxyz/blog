---
permalink: /shell/lang/redirection/
---

# Shell Redirection

```
[n]operator word
```

n 是 file descriptors，从 0 开始

- 0 代表 stdin(standard input)
- 1 代表 stdout(standard output)
- 2 代表 stderr(standard error)

n 可以省略，不同的 operator 有不同的默认值。

- ">", n 为 1
- "<", n 为 0

">" 和 ">>" 都是重定向 output；前者是覆盖，后者是追加。

```sh
echo "hello" > hello.txt
echo "world" >> hello.txt
cat hello.txt
```

```
[n]<&m
[n]>&m
```

表示将 n 复制为 m。如果 m 是 '-'，表示关闭 n。

```sh
ls /doesnotexist >output.txt 2>&1  # A
ls /doesnotexist 2>&1 >output.txt  # B
ls /doesnotexist >output.txt 2>&1 >output2.txt  # C
```

一个命令有多个重定向时，从左向右计算重定向。

B，`2>&1` fd 2 复制为 fd 1（reference type 复制的是 reference）；`>output.txt` fd 1 的 reference 改为 output.txt，而 fd 2 的 reference 不变，并不是 output.txt，因此 error 不会写入 output.txt。

- <http://www.unix.com/unix-for-dummies-questions-and-answers/10058-dev-null-2-1-question.html>

## Here-Document

"<<" 和 "<<-" 重定向后续的多行，被重定向的行称为 "here-document"。

```
[n]<<word
    here-document
word
```

- 起始的 word 是任意单词，和 "<<" 之间可以有空白。
- 如果起始的 word 某部分被引用，word 去掉引用，here document 没有 expansion。
- 结尾的 word 位于行首，前面不能有空白。

"<<-" 会删掉 here-document 行首的 tab（不会删除空格）。

下例将多行文字写入文件

```sh
cat << EOF > hello.txt
hello
world
EOF
```

下例 here document 没有 expansion

```sh
word="world"
cat << "EOF"
hello
$word
EOF
```

- [Here Documents](http://tldp.org/LDP/abs/html/here-docs.html)
