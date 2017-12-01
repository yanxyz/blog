# 安装 Ruby

## Windows

### Ruby >= 2.4

下载 [RubyInstaller2](https://github.com/oneclick/rubyinstaller2/releases)。
安装向导最后一步提示安装 msys2。
msys2 的作用是为 Ruby Package（Gem）提供编译环境。

#### 使用已有 msys2

RubyInstaller2 在查找 msys2 时只查找默认安装位置，msys2 x64 为 `C:\msys64`。
如果 msys2 安装在其它位置，可以创建一个链接

```dos
mklink /j C:\msys64 path\to\msys2
```

然后运行下面命令完善 msys2

```sh
ridk install
```

[msys2 用法](/note/msys/)

[ridk help](https://github.com/oneclick/rubyinstaller2#the-ridk-command)

### Ruby <= 2.3

下载 [RubyInstaller 和 Development Kit](https://rubyinstaller.org/downloads/)

先运行 RubyInstaller 安装 Ruby，安装完成后打开命令提示符运行：

```sh
ruby --version
```

能看到版本信息则说明安装无误。

再安装 Development Kit，它的作用是为 Ruby Package（Gem）提供编译环境，[安装教程](https://github.com/oneclick/rubyinstaller/wiki/Development-Kit#installation-instructions)

在 Development Kit 安装目录运行

```bat
ruby dk.rb init
ruby dk.rb review
ruby dk.rb install
```

测试

```dos
gem install json --platform=ruby
ruby -rubygems -e "require 'json'; puts JSON.load('[42]').inspect"
```

## Ubuntu

可以用 [RVM](https://rvm.io/) 管理多个 Ruby 版本。
