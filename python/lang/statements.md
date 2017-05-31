---
permalink: /python/lang/statements/
---

# Python Statements

Python 的代码规范，`{` 和 `}` 单独一行。

## if

if 语句可以用单行语句

```py
if x < 0:
    print('x is less than zero')
elif x = 0:
    print('x equals zero')
else:
    print('x is greater than zero')
```

## switch



## for

```cs
static void ForEachStatement(string[] args)
{
    foreach (string s in args)
    {
        Console.WriteLine(s);
    }
}
```

## using

```cs
static void UsingStatement(string[] args)
{
    using (TextWriter w = File.CreateText("test.txt"))
    {
        w.WriteLine("Line one");
        w.WriteLine("Line two");
        w.WriteLine("Line three");
    }
}
```
