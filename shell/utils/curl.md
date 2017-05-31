---
permalink: /shell/curl/
---

# curl

curl 除了用来下载文件外，也可以作为网络开发工具。

## 安装

git-bash (Git for Windows) 已包含。

## 用法

```sh
curl --help > curl.help.txt
```

下载文件

```sh
curl -o filename url
curl -O url  # 使用服务器指定的名字
curl -LO url # 跟随重定向
```

测试网络服务

- [Github API Docs](https://developer.github.com/v3/)

```sh
curl -i https://api.github.com/users/octocat/orgs
curl -i -u username -d '{"scopes":["public_repo"]}' https://api.github.com/authorizations
curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
