---
permalink: /shell/make/
---

# make

make 是 GNU 的编译工具，[manual](https://www.gnu.org/software/make/manual/make.html)。

有些前端项目使用 make 来构建项目，比如

- [Koa](https://github.com/koajs/koa)

## 安装

## Windows

[Msys2 shell](../../software/msys2/index.md) 可以直接安装

```sh
pacman -S make
make -v
```

git-bash (Git for Windows) 需要手动安装

1. 下载 [x64](http://mirrors.ustc.edu.cn/msys2/msys/x86_64/make-4.2.1-1-x86_64.pkg.tar.xz)
1. 将软件包解压到 Git 安装目录下面的 "usr" 目录

## 用法

```sh
make -h
make
make clean
```

`make [-f Makefile] [target] `

- 如果没有指定 Makefile，则使用当前目录下的 Makefile。
- 如果没有指定 target, 则使用 Makefile 第一个 target。

## Makefile

Makefile 是 make 的配置文件，指定一系列规则，每个规则的格式是：

```Makefile
<target>: [prerequisites...]
	[commands]
```

意思是：首先检查 prerequisites 这些文件是否有更新（不存在则要生成），如果其中之一有更新则运行 commands 重新生成 target 文件。

```Makefile
<target>:
	[commands]
```

没有 prerequisites，意思是：首先检查 target 文件是否存在，如果不存在则运行 commands 生成 target 文件。

commands 需要缩进，缩进只能用 tab 不能用空格
<http://stackoverflow.com/questions/16931770/makefile4-missing-separator-stop>

Makefile 示例：

```Makefile
# 这是注释

hello:
	@echo "hello"

var:
	@export foo=bar; \
	echo "foo=[$$foo]"

files = "*.txt"
test:
	@echo "$(files)"

clean:
	@rm *.txt

.PHONY: test clean
```

在运行 target 的每行命令时先打印此行命令，`@` 取消打印。

target 的每行命令是在单独的 shell 中运行，上一行的变量不能传给下一行。怎么办？在行末放一个 `\` 表示续行（`\\n` 被转义），这样这几行实际是一行。注意后续行不能加 `@`。另外，传给 shell 的变量用两个 `$`。

命令列表，如果某行代码出错（exit code 不为 0）则中止执行。

`$(var)` 引用定义的变量。

`.PHONY:` 声明假的 target，不会检查它是否存在，始终运行它的命令。在上例中，如果目录下有一个 `clean` 文件，则不会运行 clean target 的命令。通常将 `.PHONY:` 放在 Makefile 的最后。

target 如果重名，则后面的覆盖前面的，并给出警告。

更多可参考
<https://gist.github.com/isaacs/62a2d1825d04437c6f08>

## Highlight

github，代码块 Makefile，文件扩展名 `.mak`
https://github.com/github/linguist/blob/master/lib/linguist/languages.yml#L2398

Sublime Text 文件扩展名 `.mak`
https://github.com/sublimehq/Packages/blob/master/Makefile/Makefile.sublime-syntax#L6
