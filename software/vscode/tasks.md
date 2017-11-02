# VSCode tasks

[tasks](https://code.visualstudio.com/Docs/editor/tasks)

任务由 `.vscode/tasks.json` 文件指定。

菜单 **Tasks > Configure Task** 创建 tasks.json。

`"isBuildCommand": true` 标记 build 命令，可以用 `Ctrl+Shift+B (Run Build Task)` 执行这个任务。

结束在后台运行的任务，在命令面板 (`F1`) 中选择 'Tasks: Terminate Running Task' 命令。

[tasks 使用 extensions](https://code.visualstudio.com/updates/v1_11#_tasks)

task.json

```
"version": "2.0.0"
"runner": "terminal", // 在 内置 terminate 中运行
```
