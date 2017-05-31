---
permalink: /software/vscode/extension/
---

# VSCode 扩展

点击 view bar 中扩展图标，在这里管理插件。

![](https://code.visualstudio.com/images/install-extension_extensions-view.png)

[扩展安装目录](https://code.visualstudio.com/docs/extensions/install-extension#_side-loading)

## Extension Packs

[Packs](https://code.visualstudio.com/Docs/extensionAPI/extension-manifest#_extension-packs) 是将数个扩展打包，方便分享。

Code Yeoman generator 支持创建 Extension Pack。

## 开发扩展

[Overview](https://code.visualstudio.com/docs/extensions/overview)

```shell
npm install -g yo generator-code
yo code
```

建议用 TypeScript，能智能提示 API。

`package.json` 指定扩展的元数据。`.vscodeignore` 指定在打包扩展时忽略的文件。

扩展机制：注册 -> 激活。扩展在第一次激活后才加载。

扩展开发完成后打包

```shell
npm install -g vsce
vsce package
code --install-extension myextension.vsix
```

## API

[进度条](https://code.visualstudio.com/updates/v1_12#_new-apis)

