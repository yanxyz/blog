# VirtualBox

我通常是通过虚拟机 VirtualBox 测试 IE。

## 安装

[下载](https://www.virtualbox.org/wiki/Downloads)

VirtualBox Extension Pack 提供 USB 2.0，USB 3.0 等功能。VirtualBox 自身只提供 USB 1.0。

## 虚拟机

- [XP](xp.md)
- [Ubuntu](ubuntu.md)

### 共享剪贴板

虚拟机内 `Host + Home` 打开菜单栏，点击菜单**设备 > 共享剪贴板**

## 共享文件夹

在“共享文件夹”配置，添加主机上的一个文件夹。通过它，可以在主机与虚拟机之间传递文件。

![](/uploads/virtualbox/storage.png)

- “固定分配”
- “自动挂载”

## FAQ

### 虚拟机如何访问主机上的服务器？

在“网络”配置，添加新的网卡。

”桥接网卡“的作用是，主机与虚拟机在同一个局域网内，访问主机在局域网的 ip 即可。

”Host-Only"的作用是，虚拟机把主机当网关，通过 192.168.56.1 访问主机，虚拟机的 ip 默认以 192.168.56.100 开始。

在主机上我用 `xampp` 建了几个虚拟网站，比如 `y.com`，在虚拟机内怎么访问呢？在虚拟机 hosts 添加一个记录：

```
y.com 192.168.56.1
```

这样在主机与虚拟机上都可以用 http://y.com 访问这个虚拟网站。

注意主机的防火墙设置。win7主机网络连接里面会出现一个 “ 未识别的网络”（Unidentified network）。可以参考[此文](http://brianreiter.org/2010/09/18/fix-virtualbox-host-only-network-adapter-creates-a-virtual-public-network-connection-that-causes-windows-to-disable-services/)解决。

### 怎么将虚拟机转移到其它电脑上

将虚拟机所在目录复制过去，点击菜单**控制 > 注册**。
