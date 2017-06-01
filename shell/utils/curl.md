---
permalink: /shell/curl/
---

# curl

curl 除了用来下载文件外，也可以作为网络开发工具。

## 安装

git-bash (Git for Windows) 已包含。

## 用法

帮助

```sh
curl --help
curl --help | grep -- -s,
```

下载文件

```sh
curl -o filename url
curl -sSLO url
```

测试网络服务

- [Github API Docs](https://developer.github.com/v3/)

```sh
curl -i https://api.github.com/users/octocat/orgs
curl -i -u username -d '{"scopes":["public_repo"]}' https://api.github.com/authorizations
curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
