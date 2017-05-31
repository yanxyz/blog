---
permalink: /linux/commands/
---

# Linux 常用命令

`man cp`
查看帮助

CTRL-c
中止当前命令。

`clear`
清空 console

## 文件系统

`pwd`
print working directory，显示当前目录

### cd

Change Directory

`cd /home/yan/downloads`
切换当前目录到指定目录

`cd`
等于 `cd ~`，即切换到 $HOME。

`cd -`
切换到上次所在的目录

### ls

`ls`
以名字的方式列出当前目录

`ls name`
列出文件或目录信息

`ls -al`
以详细信息的方式列出当前目录所有内容，包含隐藏的内容

### mkdir

`mkdir a`
创建目录。如果目录存在则抛出错误。

`mkdir -p a/b/c`
创建多级目录，如果中间目录不存在则先创建它。如果目录存在则什么也不做。

### mkdir

`mkdir a`
创建目录。如果目录存在则抛出错误。

`mkdir -p a/b/c`
创建多级目录，如果中间目录不存在则先创建它。如果目录存在则什么也不做。

### cp

`cp file1 file2`
将文件 file1 复制为文件 file 2

```sh
cp file1 file2 dir
cp -t dir file1 file2
```
将多个文件 file1, file2 复制到目录 dir 中

`cp -r dir1 dir2`
若目录 dir2 不存在，将目录 dir1 复制为目录 dir2；
若存在，则将目录 dir1 复制到目录 dir2 中。

-i 询问是否覆盖
-f 强制覆盖
-r 递归复制
-u 只复制更新的或不存在的文件

### mv

`mv file1 file2`
将文件 file1 重命名为 file2

`mv file1 dir1`
将单个文件 file1 移动到目录  dir1 中。

`mv file1 file2 dir1`
将多个文件 file1, file2 移动到目录  dir1 中

`mv dir1 dir2`
若目录 dir2 不存在，则将 dir1 移动为 dir2；若 dir2 存在，则将 dir1 移动到 dir2 中。

### touch

`touch file`
创建文件，文件若存在则只是更新。

### 查看文件

`cat file`
显示文件内容，适用于内容比较少的文件

`less file`
man 默认的查看方法。空格下一屏，q 退出。

`head file`
查看文件的前 10 行，即 head -10 file

`tail file`
查看文件的最后 10 行，即 tail -10 file

`tail -F file`
查看文件的最后 10 行，若有更新则更新显示

### rm

`rm file`
删除文件 file。如果 file 是目录则抛出错误。

`rm -r dir`
删除目录及它的子目录。

### rmdir

`rmdir a`
删除目录，目录必需为空。

### find

`find -type f -name "*.js" | xargs git rm --cached`
将当前目录下 js 文件从 git 缓存中删除


### ln

hard link 链接文件和源文件使用同一个 inode。 删除源文件，链接文件仍有效。

```sh
ln lnk file
ls -i lnk file
```

soft link， 链接文件的 inode 是源文件的文件名。 删除源文件，链接文件无效。


'soft link' 'symbolic link'  'symlink'

```sh
ln -s ~/lnk ~/file
ls -i lnk file
```

必须是全路径。


## 打包与压缩

linux 的压缩一般只能压缩一个文件，故先用 tar 将多个文件打包成一个文件。

tar

- c 打包 create
- x 解包 extract
- d 查看包内文件
- v 显示文件名
- f 指定包的名字。注意 f 的后面一定是包的名字。

压缩程序

- j 使用 bzip2
- z 使用 gzip


`.tar.gz`

```sh
tar -czf test.tar.gz test
tar -xzf test.tar.gz
```

`.tar.bz2`

```sh
tar -cjf test.tar.bz2 test
tar -xjf test.tar.bz2
```

不要在当前目录打包，比如 tar -cf . ，这样会包含一个 . 目录。正确做法是 cd .. 再打包。
http://stackoverflow.com/questions/3651791/


## 系统

`halt`
关机，同 `shutdown -h now`

`reboot`
立即重启，同 `shutdown -r now`

`shutdown -r 5`
5 分钟之后重启

`uname -a`
显示 kernel 的信息

`cat /proc/cpuinfo`
cpu

`cat /proc/meminfo`
内存
