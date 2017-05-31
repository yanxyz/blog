---
permalink: /linux/fs/
---

# linux 文件系统

## 文件权限

- 4 read(r)
- 2 write(w)
- 1 execute(x)

`chmod 775 file`
将文件的权限改为 775

`chmod -r 600 folder`
将目录的权限改为 600

<http://www.yolinux.com/TUTORIALS/LinuxTutorialManagingGroups.html>

## hidden files

隐藏文件，文件名以 `.` （dot）开始。

ls，files explorer 等默认不显示隐藏文件。

配置文件常常是隐藏的，用户级别的配置文件通常放在 $HOME。

```sh
ls -a ~
```

Ubuntu files explorer 显示隐藏文件：菜单 "View > Show Hidden Files"(Ctrl + H)
