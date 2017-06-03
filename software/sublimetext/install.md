---
permalink: /software/sublimetext/install/
---

# 安装 Sublime Text

Sublime Text 支持多平台。

[下载](https://www.sublimetext.com/3)

[开发版](https://www.sublimetext.com/3dev) 功能新一些，不过只有付费用户才可以使用。

## Ubuntu

[官方 repositories](https://www.sublimetext.com/docs/3/linux_repositories.html)

```sh
curl -sS https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
# apt/stable/ 是 stable version, apt/dev/ 是 dev version
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt update && sudo apt install sublime-text
subl # 启动
```

启动 Sublime Text 之后, 将光标移到屏幕顶端可以看到菜单栏。

[设为默认编辑器](http://askubuntu.com/a/606733/519717)
