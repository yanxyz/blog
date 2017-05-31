---
permalink: /shell/lang/statements/
---

# Statements


```sh
if true
then
  echo "hello"
fi

if true; then # 写在一行时，用 `;`
  echo "hello"
fi
```

## if

```sh
if [ "$1" = "hello" ]; then
    echo "Hello, how are you ?"
elif [ "$1" = "" ]; then
    echo "You MUST input parameters, ex> {$0 someword}"
else
    echo "The only parameter is 'hello', ex> {$0 hello}"
fi
```

结尾`fi` 即 `if` 的反写。

`[` 是命令 test 的别名。

- [test command](http://pubs.opengroup.org/onlinepubs/9699919799/utilities/test.html)

## case

```sh
read -p "Input your choice: " choice
case $choice in
    "one")
echo "Your choice is ONE"
;;
    "two")
echo "Your choice is TWO"
;;
    "three")
echo "Your choice is THREE"
;;
    *)
echo "Usage $0 {one|two|three}"
;;
esac
```

`esac` 即 `case` 的反写。

## for

```sh
for i in $(seq 1 5)
do
    echo $i
done
```

## while

```sh
while [ "$yn" != "yes" -a "$yn" != "YES" ]
do
    read -p "Please input yes/YES to stop this program: " yn
done
```

## until

```sh
until [ "$yn" == "yes" -o "$yn" == "YES" ]
do
    read -p "Please input yes/YES to stop this program: " yn
done
```
