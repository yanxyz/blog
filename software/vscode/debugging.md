---
permalink: /software/vscode/debug/
---

# VSCode 调试

调试单个文件，`F5`。此时状态栏为紫色。

![](https://code.visualstudio.com/images/1_9_no_folder_debug.gif)

调试应用，首先建立 workspace（即打开一个目录）, VSCode 需要在 workspace 下新建一个目录 `.vscode`, 以放置配置文件。

![](http://code.visualstudio.com/images/debugging_debugging_hero.png)

点击 B 区域设置（齿轮）按钮，选择预设的配置。

编辑配置，`configurations` 每个元素定义一个调试任务，可以使用的变量
<http://code.visualstudio.com/docs/editor/debugging#_variable-substitution>

调试任务通过 B 区域下拉列表选择。

在编辑区，F9 添加断点，F5 开始调试。此时状态栏变成橘色，提醒现在处于调试中。

##



命令面板输入 'debug '
<https://code.visualstudio.com/updates/v1_10#_ability-to-select-and-start-a-launch-using-keyboard>



## 界面

**WATCH** 面板，watch expressions 上下文菜单

- Add Expression
- Edit Expression

**CALL STACK** 面板，stack frames 上下文菜单

- Toggle skipping this file

**BREAKPOINTS** 面板

- Promise Rejects 对于 Promise unhandled rejection，Node.js 会抛出警告，这可能影响调试。


## column breakpoint

Column breakpoints
<https://code.visualstudio.com/updates/v1_10#_column-breakpoints>

`Shift+F9` 或上下文菜单添加。
