---
permalink: /software/vs/commands/
---

# Visual Studio Commands

[Visual Studio Commands](https://docs.microsoft.com/en-us/visualstudio/ide/reference/visual-studio-commands)

在这些地方可以使用 commands

- Command window
- Immediate window
- Find/Command box，添加到工具栏

![](/uploads/vs/find-command-box.png)

用 `>` 表示命令；`^` 转义

```
File.AddExistingProject "path\to\Test.csproj"
```

## Alias

```
alias
alias ns File.NewFile /t:"Snippet Designer\Code Snippet"
alias /delete ns
alias /reset
```

VS2017 的问题是，`alias /reset` 删除所有的 alias，包括预定义的 alias。

[pre-defined Visual Studio command aliases](https://msdn.microsoft.com/en-us/library/c3a0kd3x.aspx)

```
alias ? Debug.Print
alias ?? Debug.QuickWatch
alias AddProj File.AddNewProject
alias alias Tools.Alias
alias autos Debug.Autos
alias bl Debug.Breakpoints
alias bp Debug.ToggleBreakpoint
alias callstack Debug.CallStack
alias ClearBook Edit.ClearBookmarks
alias close File.Close
alias CloseAll Window.CloseAllDocuments
alias cls Edit.ClearAll
alias cmd View.CommandWindow
alias code View.ViewCode
alias d Debug.ListMemory
alias da Debug.ListMemory /Ansi
alias db Debug.ListMemory /Format:OneByte
alias dc Debug.ListMemory /Format:FourBytes /Ansi
alias dd Debug.ListMemory /Format:FourBytes
alias DelBOL Edit.DeleteToBOL
alias DelEOL Edit.DeleteToEOL
alias DelHSp Edit.DeleteHorizontalWhiteSpace
alias designer View.ViewDesigner
alias df Debug.ListMemory /Format:Float
alias disasm Debug.Disassembly
alias dq Debug.ListMemory /Format:EightBytes
alias du Debug.ListMemory /Unicode
alias eval Debug.EvaluateStatement
alias exit File.Exit
alias format Edit.FormatSelection
alias FullScreen View.FullScreen
alias g Debug.Start
alias GotoBrace Edit.GotoBrace
alias GotoLn Edit.GoTo
alias help Help.F1Help
alias immed Tools.ImmediateMode
alias InsertFile Edit.InsertFileAsText
alias k Debug.ListCallStack
alias kb Debug.ListCallStack
alias Lcase Edit.MakeLowercase
alias LineCut Edit.LineCut
alias LineDel Edit.LineDelete
alias ListMembers Edit.ListMembers
alias locals Debug.Locals
alias log Tools.LogCommandWindowOutput
alias memory memory1
alias memory1 Debug.Memory1
alias memory2 Debug.Memory2
alias memory3 Debug.Memory3
alias memory4 Debug.Memory4
alias n Debug.SetRadix
alias nav navigate
alias navigate View.WebBrowser
alias new File.NewFile
alias NewProj File.NewProject
alias NextBook Edit.NextBookmark
alias nf File.NewFile
alias np File.NewProject
alias of File.OpenFile
alias op File.OpenProject
alias open File.OpenFile
alias OutlineDefs Edit.CollapsetoDefinitions
alias p Debug.StepOver
alias ParamInfo Edit.ParameterInfo
alias pr Debug.StepOut
alias PrevBook Edit.PreviousBookmark
alias print File.Print
alias props View.PropertiesWindow
alias q Debug.StopDebugging
alias r Debug.ListRegisters
alias redo Edit.Redo
alias registers Debug.Registers
alias rtc Debug.RunToCursor
alias save File.SaveSelectedItems
alias SaveAll File.SaveAll
alias SaveAs File.SaveSelectedItemsAs
alias shell Tools.Shell
alias StopFind Edit.FindInFiles /stop
alias StopOutlining Edit.CollapsetoDefinitions
alias SwapAnchor Edit.SwapAnchor
alias t Debug.StepInto
alias tabify Edit.TabifySelectedLines
alias TaskList View.TaskList
alias threads Debug.Threads
alias TileH Window.TileHorizontally
alias TileV Window.TileVertically
alias ToggleBook Edit.ToggleBookmark
alias toolbox View.Toolbox
alias u Debug.ListDisassembly
alias Ucase Edit.MakeUppercase
alias undo Edit.Undo
alias Untabify Edit.UntabifySelectedLines
alias watch Debug.Watch
alias WordWrap Edit.ToggleWordWrap
alias | Debug.ListProcesses
alias ~ Debug.ListThreads
alias ~*k Debug.ListCallStack /AllThreads
alias ~*kb Debug.ListCallStack /AllThreads
```
