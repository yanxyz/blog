---
permalink: /git/tag/
---

# Git tag

查看 tags

```sh
git tag
git tag -l "v1.5*"
git show v1.5
```

创建 tag

```sh
git tag -a v1.5 -m "version 1.5" # 当前 commit
git tag -a v1.5 9fceb02 # 旧 commit
```

推送到远程服务器

```sh
git push origin v1.5
git push origin --tags # 推送所有的 tags
```

删除远程 tag

```sh
git push origin :v1.5
git push origin --delete tag v1.5
```

签出 tag，不能实际签出，以分支的形式签出

```sh
git checkout -b version1.5 v1.5
```

## 资料

- [Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
