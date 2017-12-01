# VSCode 文档

<https://code.visualstudio.com/docs/>

将部分文档放这里，方便查阅。

## Debugging

<!-- https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/editor/debugging.md -->

预定义变量

- **${workspaceFolder}** - the path of the folder opened in VS Code
- **${workspaceFolderBasename}** - the name of the folder opened in VS Code without any slashes (/)
- **${file}** - the current opened file
- **${relativeFile}** - the current opened file relative to `workspaceFolder`
- **${fileBasename}** - the current opened file's basename
- **${fileBasenameNoExtension}** - the current opened file's basename with no file extension
- **${fileDirname}** - the current opened file's dirname
- **${fileExtname}** - the current opened file's extension
- **${cwd}** - the task runner's current working directory on startup
- **${lineNumber}** - the current selected line number in the active file
- environment variables **${env.Name}** syntax (e.g. ${env.PATH})
- **${config:Name}** - example: `${config:editor.fontSize}`
- **${command:CommandID}** - example: `${command:explorer.newFolder}`


### Skipping uninteresting code (node, node2, chrome)

<http://code.visualstudio.com/docs/editor/node-debugging#_skipping-uninteresting-code-node-node2-chrome>

```json
"skipFiles": [
  "<node_internals>/**/*.js",
  "!<node_internals>/events.js"
]
```
