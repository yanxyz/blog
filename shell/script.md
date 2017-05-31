---
permalink: /shell/script/
---

# shell 脚本

shell 脚本扩展名通常是 `.sh`。例如脚本 hello.sh:

```sh
#!/bin/sh

echo "hello shell"
```

脚本第一行 `#!/bin/sh` 称为 shebang，用来指定由什么程序来运行这个脚本。

```sh
$ chmod +x hello.sh # 添加执行权限
$ ./hello.sh        # A
$ bash ./hello.sh   # B
```

A 直接运行脚本，需要添加执行权限；
B 以 bash 运行脚本，不需要添加执行权限，忽略 shebang。

Ubuntu `/bin/sh` 链接 dash。

```sh
$ ls -l /bin/sh
lrwxrwxrwx 1 root root /bin/sh -> dash
```

所以 A 是以 dash 运行脚本。

dash 比 bash 轻量，符合 posix 标准。
<https://wiki.ubuntu.com/DashAsBinSh>

如果 A 省略 `./`：

```sh
$ hello.sh
```

意思是在 PATH 中查找 `hello.sh`，就跟命令一样。这跟 Windows cmd.exe 不一样，cmd.exe 首先在当前目录查找，然后再在 PATH 中查找。
