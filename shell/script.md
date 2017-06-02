---
permalink: /shell/script/
---

# shell 脚本

shell 脚本扩展名通常是 `.sh`。

如何运行脚本呢？例如脚本 hello.sh

```sh
#!/bin/sh

echo "hello shell"
```

脚本第一行 `#!/bin/sh` 称为 shebang，用来指定由什么程序来运行此脚本。

第一种运行方式，直接运行

```sh
./hello.sh
```

看着简单，实际有一些门道。

首先，要给脚本添加执行权限

```sh
chmod +x hello.sh
```

然后，shell 读取 shebang。`#!/bin/sh` 表示以 `/bin/sh` 运行此脚本。而 `/bin/sh` 通常是一个链接，在 Ubuntu 下它链接到 dash

```sh
ls -l /bin/sh
# lrwxrwxrwx root root /bin/sh -> dash
```

因此实际以 dash 运行此脚本。dash 比 bash 轻量，符合 posix 标准，[两者比较](https://wiki.ubuntu.com/DashAsBinSh)。

shebang 一般使用绝对路径，若没找到则报错。相对路径是相对于 $PWD，没有多大意义。如果不指定路径则报错

```sh
#!sh
```

- [Why not use pathless shebangs?](https://unix.stackexchange.com/questions/77512/why-not-use-pathless-shebangs)

Python 脚本的 shebang 通常是

```sh
#!/usr/bin/env python
```

意思是使用 `/usr/bin/env` 查找 `python`（在 PATH 中查找），然后以找到的 `python` 运行脚本。

第二种运行方式，以指定的 shell 运行

```sh
sh ./hello.sh    # 以 sh 运行脚本，上面说了 sh 是一个链接
bash ./hello.sh  # 以 dash 运行脚本
```

- 不需要为脚本添加执行权限
- 忽略脚本 shebang

最后一个问题，想一想下面两者的区别

```sh
./hello.sh  # A
hello.sh    # B
```

B 的结果

```
hello.sh: command not found
```

B 的意思是在 PATH 中查找 `hello.sh` 这个命令，但是没有找到。

Linux shell 跟 Windows cmd 不一样，cmd 首先在当前目录查找，然后再在 PATH 中查找。
