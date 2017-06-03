---
permalink: /github/pages/
---

# Github Pages

Github Pages 分为三种 [User, Organization, Project Pages](https://help.github.com/articles/user-organization-and-project-pages/)

## 本地测试

GitHub Pages 建立在 [Jekyll](../ruby/jekyll.md) 上。在本地建立 Jekyll GitHub Pages，以便测试。

事先安装 Ruby, Bundler（[安装方法](/ruby/)）。

按照这个页面的说明进行
<https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/>

>  Error: No repo name found. Specify using PAGES_REPO_NWO environment variables, 'repository' in your configuration, or set up an 'origin' git remote pointing to your github.com repository.

创建 `_config.yml`

```yaml
github: [metadata]
theme: jekyll-theme-midnight
```

## themes

<https://pages.github.com/themes/>

## plugins

<https://pages.github.com/versions/>

## 与 GitHub.com 的不同

GitHub.com 不支持 template tag。

### 自动链接

Github pages 自动链接要放到 `<>` 里

```
{% raw %}
<https://pages.github.com/themes/>
{% endraw %}
```

### 语法高亮

GitHub.com [languages](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)。

Github pages 支持的语言比较少，[languages](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers)。
