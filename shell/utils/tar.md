---
permalink: /shell/tar/
---

# 打包与压缩

Linux 的压缩一般只能压缩一个文件，故先用 tar 将多个文件打包成一个文件。

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
<http://stackoverflow.com/questions/3651791/>
