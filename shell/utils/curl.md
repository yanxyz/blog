---
permalink: /shell/curl/
---

# curl

curl 是下载工具，也可以作为 web 开发工具。

## 安装

git-bash (Git for Windows) 已包含。

## 用法

帮助

```sh
curl --help # 帮助很长
curl --help | grep -- -s, # 搜索选项
```

下载文件

```sh
curl -o filename url
curl -sSLO url

# 一次下载多个文件
curl --remote-name-all \
    url1 \
    url2

curl -x proxyserver url
```

测试 web API

- [Github API Docs](https://developer.github.com/v3/)

```sh
curl -i https://api.github.com/users/octocat/orgs
curl -i -u username -d '{"scopes":["public_repo"]}' https://api.github.com/authorizations
curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```

发送表单

```sh
# -X, --request
# -F, --form
curl -X POST -F 'username=yan' -F 'password=123456' url
```

发送 JSON

```sh
# -H, --header
# -d, --data
curl -X POST -H 'Content-Type: application/json' -d '{"username":"yan","password":"123456"}' url
```

上传文件

```sh
curl -X POST -F 'image=picture.jpg' url
```
