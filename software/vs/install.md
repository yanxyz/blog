---
permalink: /software/vs/install/
---

# Visual Studio 安装

Visual Studio Community 可以免费使用，不过也需要注册一个账号，不然试用期过了就不能用了。

## VS2017

[VS2017 改进了安装程序](https://www.visualstudio.com/en-us/news/releasenotes/vs2017-relnotes#a-idwillow-anew-installation-experience)

[下载](https://www.visualstudio.com/downloads/)

## VS2015

[Installing Visual Studio](https://msdn.microsoft.com/en-us/library/e2h7fzkw.aspx)

[下载离线安装 ISO 文件](https://www.visualstudio.com/downloads/)

系统盘至少要准备 10G 的空间。

双击打开 ISO 文件（Windows 10 支持 ISO 文件），双击运行 `vs_community.exe` 开始安装。

![](https://i-msdn.sec.s-msft.com/dynimg/IC839302.jpeg)

选择 "custom"， 把 VC++ 编译器选上。

![](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/29/92/metablogapi/4075.VS2015RTMIDECustomizableSetup_69FEE3F5.png)

安装完成后，打开目录 `%TEMP%`，让当前用户获得此目录的管理权限。不然只能以管理员权限创建项目。
