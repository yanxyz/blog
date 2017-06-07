TODO: 对文档做笔记

```
literal {field_name!conversion:format_spec} text
```

在 `{}` 内的是 replacement fields，在它外面的是 literal text。literal text 用 `{{}}` 转义 `{}`。

field_name 可以是 keyword argument

```py
'a {name} b {age}'
```

也可以是 positional argument，并且可以省略，不过必须全部省略

```py
'a {} b {}'
'a {0} b {1}'
'a {0} b {1.name}'  # argument attribute
```

conversion flags 表示对 argument 调用相应的函数

```py
'{0!s}'     # str()
'{name!r}'  # repr()
'{!a}'      # ascii()
```
