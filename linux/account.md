---
permalink: /linux/account/
---

# Linux 账户


## 管理账户

`useradd yan`
创建账户

`passwd yan`
修改账户密码

`id yan`
查看账户信息

`groups yan`
查看账户所属的组

`groupadd developers`
创建用户组

`useradd -g developers yan`
将用户 yan 添加到主用户组

`useradd -G developers yan`
将用户 yan 添加到副用户组

`useradd -G admins,ftp,www,developers yan`
将用户 yan 添加到多个副用户组

`usermod -a -G ftp yan`
将已有账户添加到副用户组

`usermod -g www yan`
修改已有账户的主用户组

http://www.cyberciti.biz/faq/howto-linux-add-user-to-group/

## su

http://www.linfo.org/su.html

su (short for substitute user)

`whoami`
查看当前用户

`su -`
即 `su - root`
切换到 root（包含环境变量）

`su - yan`
切换到 yan（包含环境变量）
