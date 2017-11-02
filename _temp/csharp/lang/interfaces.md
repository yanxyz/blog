---
permalink: /csharp/lang/interfaces/
---

# C# Interfaces

<https://docs.microsoft.com/en-us/dotnet/articles/csharp/tour-of-csharp/interfaces>

interface 定义一个约定，然后由 class/struct 具体实现。

interface 的成员：

- properties
- methods
- events
- indexers

接口类似于只包含抽象方法的抽象类。不过接口不是类。不能实例化，只可继承，并且接口的成员必须实现。

interface 不能实例化，它需要 class/struct 去实现它。

interface 可以多继承，如下面的 `IComboBox`:

```cs
interface IControl
{
    void Paint();
}
interface ITextBox: IControl
{
    void SetText(string text);
}
interface IListBox: IControl
{
    void SetItems(string[] items);
}
interface IComboBox: ITextBox, IListBox {}
```

代码规范：

- interface 名字以大写字母 I 开始
- base class 在前，interface 在后


