---
permalink: /software/vscode/docs/
---

# VSCode 文档

<https://code.visualstudio.com/docs/>

将部分文档放这里，方便查阅。

## Debugging

<https://raw.githubusercontent.com/Microsoft/vscode-docs/master/docs/editor/debugging.md>

VS Code supports variable substitution inside strings in `launch.json` and has the following predefined variables:

- **${workspaceRoot}** the path of the folder opened in VS Code
- **${workspaceRootFolderName}** the name of the folder opened in VS Code without any solidus (/)
- **${file}** the current opened file
- **${relativeFile}** the current opened file relative to `workspaceRoot`
- **${fileBasename}** the current opened file's basename
- **${fileBasenameNoExtension}** the current opened file's basename with no file extension
- **${fileDirname}** the current opened file's dirname
- **${fileExtname}** the current opened file's extension
- **${cwd}** the task runner's current working directory on startup

special variables:

- environment variables **${env.Name}** syntax (e.g. ${env.PATH})
- VS Code settings **${config.NAME}** syntax (for example: `${config.editor.fontSize}`)
- debug extensions additional command variables **${command.NAME}**


### Skipping uninteresting code (node, node2, chrome)

<http://code.visualstudio.com/docs/editor/node-debugging#_skipping-uninteresting-code-node-node2-chrome>

```json
"skipFiles": [
  "<node_internals>/**/*.js",
  "!<node_internals>/events.js"
]
```
