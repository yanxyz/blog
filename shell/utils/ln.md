---
permalink: /shell/ln/
---

# ln

本文讲的是 Linux 链接。Windows 链接不大一样，见 [mklink](/cmd/utils/mklink.md)。

```sh
ln [OPTION]... [-T] TARGET LINK_NAME
```

[The difference between hard and soft links](http://linuxgazette.net/105/pitcher.html)

## hard link

hard link，链接文件和源文件使用同一个 inode。删除源文件，链接文件仍有效。

```sh
ln target hardlink
ls -i target hardlink
```

可以看到两个文件的 inode 一样。

target 只能是文件。

## soft link

soft link(symbolic link, symlink) 是一个新文件，它的 inode 保存的是 target 的路径。删除源文件，链接文件无效。

```sh
#!/bin/sh

cd /tmp
rm myfile link*
touch myfile

ln -s /tmp/myfile /tmp/link1
ls -l link1
# lrwxrwxrwx link1 -> /tmp/myfile

ln -s myfile link2
ls -l link2
# lrwxrwxrwx link2 -> myfile

ln -rs /tmp/myfile /tmp/link3
ls -l link3
# lrwxrwxrwx link3 -> myfile
```

target 也可以是目录。

link 的内容为 target 的路径，绝对路径或者相对路径（相对于 link）。上例 link2 和 link3 保存的都是相对路径。不使用 `-r`，link 的内容即 target 参数；使用 `-r`，将计算 target 相对于 link 的路径。

当 target 移动或删除之后，link 将找不到 target。
