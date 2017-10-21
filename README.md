# Note

<http://note.yanxyz.net/>

**不建议 fork**。当改动比较大时，我会 [force push](forcepush.sh)，这样将丢掉 commits 历史——我不关心这个，`fork` 没有意义。

## 本地预览

[准备工作](https://yanxyz.github.io/github-pages-theme-primer/preview/)

```sh
curl -o assets/css/default.css https://yanxyz.github.io/note/assets/css/style.css
bundle exec jekyll serve --config _config.yml,_config-preview.yml
```
