---
title: Python 循环语句
---

# Python 循环语句

循环语句是编程中非常重要的一个概念。它允许我们重复执行一段代码，直到满足某个条件为止。Python 提供了两种主要的循环语句：`for` 循环和 `while` 循环。

## 1. `for` 循环

`for` 循环用于遍历一个序列（例如列表、元组、字符串）或其他可迭代对象。

### 1.1 基本语法

```python
for 变量 in 序列:
    # 循环体
    # 要执行的代码
```

- `变量`：在每次循环中，`变量` 会被赋值为序列中的下一个元素。
- `序列`：可以是列表、元组、字符串等可迭代对象。
- `循环体`：是要重复执行的代码块。

### 1.2 示例

#### 示例 1：遍历列表

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

输出：

```
apple
banana
cherry
```

#### 示例 2：遍历字符串

```python
message = "Hello"
for char in message:
    print(char)
```

输出：

```
H
e
l
l
o
```

#### 示例 3：使用 `range()` 函数

`range()` 函数可以生成一个整数序列，常用于 `for` 循环中。

```python
for i in range(5):  # 生成 0, 1, 2, 3, 4
    print(i)
```

输出：

```
0
1
2
3
4
```

`range()` 函数还可以指定起始值和步长：

```python
for i in range(2, 10, 2):  # 从 2 开始，到 10 结束（不包括 10），步长为 2
    print(i)
```

输出：

```
2
4
6
8
```

### 1.3 `break` 语句

`break` 语句用于提前终止循环。

```python
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    if number == 3:
        break  # 当 number 等于 3 时，跳出循环
    print(number)
```

输出：

```
1
2
```

### 1.4 `continue` 语句

`continue` 语句用于跳过当前循环的剩余部分，直接进入下一次循环。

```python
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    if number == 3:
        continue  # 当 number 等于 3 时，跳过本次循环的剩余部分
    print(number)
```

输出：

```
1
2
4
5
```

### 1.5 `for...else` 语句

`for` 循环可以有一个 `else` 子句，它在循环正常结束时执行（即不是通过 `break` 语句跳出的）。

```python
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    if number == 6:
        print("找到 6 了")
        break
else:
    print("没有找到 6")
```

输出：

```
没有找到 6
```

如果将 `numbers` 改为 `[1, 2, 3, 4, 6]`，则输出：

```
找到 6 了
```

## 2. `while` 循环

`while` 循环在条件为真时重复执行一段代码。

### 2.1 基本语法

```python
while 条件:
    # 循环体
    # 要执行的代码
```

- `条件`：是一个布尔表达式，当条件为 `True` 时，循环继续执行；当条件为 `False` 时，循环终止。
- `循环体`：是要重复执行的代码块。

### 2.2 示例

#### 示例 1：简单 `while` 循环

```python
count = 0
while count < 5:
    print(count)
    count += 1  # 每次循环增加 count 的值
```

输出：

```
0
1
2
3
4
```

#### 示例 2：使用 `break` 语句

```python
count = 0
while True:  # 无限循环
    print(count)
    count += 1
    if count >= 5:
        break  # 当 count 大于等于 5 时，跳出循环
```

输出：

```
0
1
2
3
4
```

#### 示例 3：使用 `continue` 语句

```python
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:  # 如果 count 是偶数
        continue  # 跳过本次循环的剩余部分
    print(count)
```

输出：

```
1
3
5
7
9
```

### 2.3 `while...else` 语句

`while` 循环也可以有一个 `else` 子句，它在循环正常结束时执行（即不是通过 `break` 语句跳出的）。

```python
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("循环结束")
```

输出：

```
0
1
2
3
4
循环结束
```

如果循环是通过 `break` 语句跳出的，则 `else` 子句不会执行：

```python
count = 0
while count < 5:
    print(count)
    count += 1
    if count == 3:
        break
else:
    print("循环结束")
```

输出：

```
0
1
2
```

## 3. 循环嵌套

循环嵌套是指在一个循环内部包含另一个循环。

### 3.1 示例

```python
for i in range(3):
    for j in range(2):
        print(f"i = {i}, j = {j}")
```

输出：

```
i = 0, j = 0
i = 0, j = 1
i = 1, j = 0
i = 1, j = 1
i = 2, j = 0
i = 2, j = 1
```

## 4. 总结

- `for` 循环用于遍历序列或其他可迭代对象。
- `while` 循环在条件为真时重复执行代码。
- `break` 语句用于提前终止循环。
- `continue` 语句用于跳过当前循环的剩余部分。
- 循环可以嵌套。
- `for` 和 `while` 循环都可以有 `else` 子句，在循环正常结束时执行。

希望这篇文档能够帮助你理解 Python 的循环语句。通过多写代码、多练习，你就能熟练掌握它们！
