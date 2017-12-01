# launch.json

```js
{
  "version": "0.2.0",
  "configurations": [
    {
      // VSCode 提供 node debugger；其它调试可以通过扩展提供，比如 python
      // 菜单 Debug -> Install Additional Debuggers...
      "type": "node",
      // launch 或 attach
      "request": "launch",
      // 名字添加到 debug 面板下拉菜单
      "name": "Launch Program",
      // 将要启动的程序
      "program": "${workspaceFolder}/app.js",
      // 程序参数
      "args": [],
      "cwd": "${workspaceFolder}",
      "env": {
        "NODE_ENV": "test"
      }
      // 为特定平台指定配置
      // windows, linux, osx
      "windows": {
        "args": []
      }
    }
  ]
}
```



### 实例

- [VSCode 项目](https://github.com/Microsoft/vscode/blob/master/.vscode/launch.json)


## settings.config

[Global Launch Configuration](https://code.visualstudio.com/docs/editor/debugging#_global-launch-configuration)

```js
"launch": {
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}"
    }
  ]
}
```

如果 workspace 有 launch.json，则忽略上面配置。
