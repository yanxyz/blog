# Ruby

了解如何建立 Ruby 运行环境，为运行 [Jekyll](jekyll.md) 和 SASS 做准备。

## Install

### Windows

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

## Gem

Gem 是 Ruby 的包管理器。

[使用国内的 RubyGems 镜像。](https://gems.ruby-china.org/)

Gem 配置文件为 `~/.gemrc`（用户级别），为 YAML 格式。

[Gem 命令](http://guides.rubygems.org/command-reference/)

```bash
gem --help
gem help commands
gem list
gem install json
gem uninstall json
```

## Bundler

Bundler 冻结 Ruby project 的 gem，以得到一致的开发环境。

安装：

```bash
gem install bundler
bundle --version
```

[Bundler 命令](http://bundler.io/man/bundle-install.1.html)

```bash
gem --help
gem help commands
gem list
gem install json
gem uninstall json
```
