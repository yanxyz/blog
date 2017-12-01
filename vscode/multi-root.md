# Multi Root Workspaces

菜单 **File > Add Folder to Workspace...** 添加 root folder。

菜单 **File > Save Workspace as...**，保存一个 `*.code-workspace` 文件。这个文件保存着 folder path 以及共享的 workspace settings。用 VSCode 打开这个文件，打开 workspace。

如何移除某个 root folder？在 Explorer 面板中，root folder contextmenu **Remove Folder from Workspace**。

搜索如何限定在某个 root folder 内呢？

## 背后故事

Multi Root Workspaces 是一个复杂的功能，又是基础性设计，添加这个功能之后 API 将有较大变动，影响面比较大。

- [1.16.0 release notes](https://code.visualstudio.com/updates/v1_16#_preview-multi-root-workspaces)
- [1.15.0 release notes](https://code.visualstudio.com/updates/v1_15#_preview-multi-root-workspaces)
- [1.14.0 release notes](https://code.visualstudio.com/updates/v1_14#_preview-multi-root-workspaces)
- [1.13.0 release notes](https://code.visualstudio.com/updates/v1_13#_preview-multi-root-workspaces)
- [Add support for opening multiple project folders in same window](https://github.com/Microsoft/vscode/issues/396#issuecomment-301842430)
