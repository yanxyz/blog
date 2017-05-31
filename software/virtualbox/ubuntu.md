---
permalink: /software/virtualbox/ubuntu/
---

# VirtualBox Ubuntu

Host: Windows 10; Guest: Ubuntu

## 创建 Ubuntu 虚拟机

[下载 Ubuntu](http://releases.ubuntu.com/)

- 这里选择 Ubuntu Desktop，下载完成后再下载 SHA256SUMS 验证。
- 主机 CPU 不支持虚拟化，虚拟电脑只能使用 32 位。可以用 SecurAble 检测。

### 新建虚拟机

打开菜单“管理 -> 全局设置..."，将“默认虚拟电脑位置”改到非系统盘上。

点击主界面“新建”按钮，按新建向导进行即可。虚拟硬盘大小 20G 左右。

进入 “存储” 配置：

- 点击主界面“设置”按钮，选择“存储”页面
- 点击主界面右面板中的 “存储”

点击光盘图标加载 Ubuntu ISO

![](/uploads/virtualbox/storage.png)

点击主界面“启动”按钮，启动虚拟电脑。

### 安装 Ubuntu

<https://www.ubuntu.com/download/desktop/install-ubuntu-desktop>

- 因为是虚拟电脑，磁盘分区按默认即可。
- location（决定时区等）可以用 Hong Kong。

安装完成后，进入 Ubuntu。

如果没有网络，退出 Ubuntu，进入“网络”配置，将控制芯片换一下，再启动 Ubuntu，看看是否正常。

### 安装增强功能

增强功能提供共享文件夹，自动调整窗口大小，双向复制等功能。

主界面点击菜单“管理 -> 热键 -> 虚拟电脑" 查看“主机组合键” Host 键，默认为 Right Ctrl。

启动 Ubuntu, `Host + Home` 打开菜单栏，选择“设备 -> 安装增强功能”，会自动打开增强功能安装界面。
如果不能，则进入已挂载的增强功能光盘（VBoxGuestAdditions.iso），在此文件运行 terminal：

```shell
sudo ./VBoxLinuxAdditions.run
```

更新系统：

```shell
sudo apt-get update
sudo apt-get upgrade
```

退出 Ubuntu, 此时可以考虑对虚拟机做个快照。

## 共享文件夹

在“共享文件夹”配置，添加主机上的一个文件夹。通过它，可以在主机与虚拟机之间传递文件。

![](/uploads/virtualbox/storage.png)

- “固定分配”
- “自动挂载”

在 Ubuntu 中这个目录位于 `/media/sf_<share_folder_name>`，这个目录的权限是：

```
drwxrwx---  1 root vboxsf
```

无权限访问，将当前用户添加到 vboxsf 用户组：

```shell
sudo adduser <user> vboxsf
```

退出登录再登录。


