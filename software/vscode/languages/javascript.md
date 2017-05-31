---
permalink: /software/vscode/languages/javascript/
---

# VSCode JavaScript

支持格式化代码（右键菜单 "Format Document"）

## ESlint

安装扩展

`F1` 打开命令面板，输入 `eslint`:

![](/uploads/vscode/eslint.png)

- Fix all auto-fixable problems，比如添加或者去掉分号

## Debugging

<https://code.visualstudio.com/updates/v1_9#_node-debugging>

### protocol

在调试时 `DeprecationWarning: node --debug is deprecated. Please use node --inspect instead.`

修改 launch.json:

```
"type":"node",
"protocol": "inspector"
```

- https://github.com/Microsoft/vscode/issues/21883
- https://code.visualstudio.com/updates/v1_10#_node2-transitioning

Node.js 8.x "protocol" 默认为 "auto"。

### 访问加载的脚本

Debug: Open Loaded Script action (Ctrl+F4)
<https://code.visualstudio.com/updates/v1_11#_access-loaded-scripts>


## type 检查

[Type checking for JavaScript files](https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files)


## tips

script 的内容视为 HTML

- type="text/html"
- type="text/x-kendo-template"
- type="text/ng-template"
