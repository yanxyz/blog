---
permalink: /git/commit/
---

# Git commit

#### --message

`--message` 指定提交消息，不然 git 会打开编辑器，等待输入提交消息。

多个 `--message` 会合并为一个多段落消息。

```sh
git commit -am 'Fix a type'
```

`-a` 自动添加修改过的文件，不包含新建文件，新建文件要用 add 添加。

#### --amend

`--amend` 替换上次提交。不要修改公共提交。

修改上次提交的消息（ 前提是 index 没有快照）

```sh
git commit --amend
```

补交文件

```sh
git add .
git commit --amend --no-edit
```

`--no-edit` 意思是不修改提交信息。


###

`git add -A`
添加当前目录下 changes

`git rm --cached <file>`
从 index 中删除文件。
