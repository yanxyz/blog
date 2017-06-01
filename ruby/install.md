---
permalink: /ruby/install/
---

# 安装 ruby

## Windows

[下载 RubyInstaller 和 Development Kit](https://rubyinstaller.org/downloads/)

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
