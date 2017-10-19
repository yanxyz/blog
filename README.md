# Note

<http://note.yanxyz.net/>

**不建议 fork**。当改动比较大时，我会 [force push](forcepush.sh)，这样将丢掉 commits 历史——我不关心这个，`fork` 没有意义。

## 本地预览

[准备工作](https://yanxyz.github.io/github-pages-theme-primer/preview/)

```sh
curl -o assets/css/primer.style.css https://yanxyz.github.io/javascript/assets/css/style.css
bundle exec jekyll serve --config _config.yml,_config-preview.yml
```

## 许可

本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</a>进行许可。
