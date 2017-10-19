# MSYS2

MSYS2(Minimal SYStem 2) 为 Windows 提供 Linux Shell 环境，集成了 Arch Linux 的包管理工具 pacman。

## 安装

下载 [msys2](https://msys2.github.io/) 安装程序。

安装程序会生成三个快捷方式：

- MinGW-w64 Win32 Shell.lnk

  运行 MinGW-w64，编译 x86 程序。

- MinGW-w64 Win64 Shell.lnk

  运行 MinGW-w64，编译 x86/x64 程序。

- MSYS2 Shell.lnk

  运行 MSYS2。

上述 shell 都使用控制台程序 [Mintty](https://mintty.github.io/)。右击 Mintty 的窗口选择 “options" 菜单项，配置字体等。配置文件为 `~/.minttyrc`。

```shell
pacman --version
```

使用国内源，先关闭 MSYS2 Shell。编辑 `/etc/pacman.d` 目录（根目录 `/` 是 msys2 的安装目录） 下面这些文件

```
# mirrorlist.mingw32
Server = http://mirrors.ustc.edu.cn/msys2/mingw/i686

# mirrorlist.mingw64
Server = http://mirrors.ustc.edu.cn/msys2/mingw/x86_64

# mirrorlist.msys
Server = http://mirrors.ustc.edu.cn/msys2/msys/$arch
```

打开 MSYS2 Shell，升级

```shell
pacman-key --init
pacman -Syu
```

## Packman

```shell
# 查看帮助
pacman --help
# 查看 -S 的帮助
pacman -Sh

# 搜索
pacman -Ss make
# 安装
pacman -S msys/make
# 移除
pacman -R make
```

[pacman 使用说明](https://wiki.archlinux.org/index.php/Pacman#Usage)

一些工具：

```shell
pacman -S msys/tree
pacman -S base-devel mingw-w64-x86_64-toolchain
```

## 参考

- [使用MSYS2/MinGW-w64环境编译GNU Emacs](http://chriszheng.science/2015/03/19/Chinese-version-of-Emacs-building-guideline/)
- [为什么从cygwin迁移到msys2](http://segmentfault.com/a/1190000002789600)
- [Qt](https://wiki.qt.io/MSYS2)
