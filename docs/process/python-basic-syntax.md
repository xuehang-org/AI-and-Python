---
title: Python 基础语法
---

# 3. Python 基础语法

欢迎来到 Python 基础语法的学习！ 掌握好基础语法是学习任何编程语言的第一步。本章将介绍 Python 的基本语法，包括变量、数据类型、运算符、注释等。

## 3.1 变量

### 3.1.1 什么是变量？

变量可以看作是存储数据的容器。在 Python 中，你可以给变量赋予各种类型的值，例如数字、文本等等。

### 3.1.2 变量的命名规则

*   变量名只能包含字母、数字和下划线。
*   变量名不能以数字开头。
*   变量名区分大小写（`myVar` 和 `myvar` 是不同的变量）。
*   避免使用 Python 关键字作为变量名（例如 `if`、`else`、`for` 等）。

### 3.1.3 如何创建变量

使用赋值符号 `=` 来创建变量并赋值。

```python
# 创建一个名为 message 的变量，并赋值为 "Hello, Python!"
message = "Hello, Python!"
print(message)  # 输出: Hello, Python!

# 创建一个名为 number 的变量，并赋值为 10
number = 10
print(number)   # 输出: 10
```

### 3.1.4 变量赋值

可以随时改变变量的值。

```python
number = 5
print(number)  # 输出: 5

number = 15
print(number)  # 输出: 15
```

## 3.2 数据类型

Python 有多种内置的数据类型，以下是一些常用的数据类型：

### 3.2.1 整数 (int)

表示整数，例如：`1`, `100`, `-5`。

```python
age = 30
print(age)  # 输出: 30
print(type(age)) # 输出: <class 'int'>
```

### 3.2.2 浮点数 (float)

表示带有小数点的数字，例如：`3.14`, `2.5`, `-0.01`。

```python
price = 9.99
print(price)  # 输出: 9.99
print(type(price)) # 输出: <class 'float'>
```

### 3.2.3 字符串 (str)

表示文本，用单引号 `'` 或双引号 `"` 括起来，例如：`'Hello'`, `"Python"`。

```python
name = "Alice"
print(name)  # 输出: Alice
print(type(name)) # 输出: <class 'str'>

greeting = '你好，世界！'
print(greeting) # 输出: 你好，世界！
```

### 3.2.4 布尔值 (bool)

表示真或假，只有两个值：`True` 或 `False`。

```python
is_student = True
print(is_student)  # 输出: True
print(type(is_student)) # 输出: <class 'bool'>

is_adult = False
print(is_adult) # 输出: False
```

### 3.2.5 列表 (list)

表示一个有序的元素集合，可以包含不同类型的数据。用方括号 `[]` 括起来。

```python
my_list = [1, 2, "apple", 3.14]
print(my_list)  # 输出: [1, 2, 'apple', 3.14]
print(type(my_list)) # 输出: <class 'list'>
```

### 3.2.6 元组 (tuple)

类似于列表，但是元组是不可变的（一旦创建就不能修改）。用圆括号 `()` 括起来。

```python
my_tuple = (1, 2, "banana")
print(my_tuple)  # 输出: (1, 2, 'banana')
print(type(my_tuple)) # 输出: <class 'tuple'>
```

### 3.2.7 字典 (dict)

表示键值对的集合，每个键值对之间用逗号分隔，键和值之间用冒号 `:` 分隔。用花括号 `{}` 括起来。

```python
my_dict = {"name": "Bob", "age": 25}
print(my_dict)  # 输出: {'name': 'Bob', 'age': 25}
print(type(my_dict)) # 输出: <class 'dict'>
```

## 3.3 运算符

Python 支持多种运算符，用于执行不同的操作。

### 3.3.1 算术运算符

| 运算符 |   描述   | 示例       |
|:---:|:------:|:---------|
|  +  |   加法   | `x + y`  |
|  -  |   减法   | `x - y`  |
|  *  |   乘法   | `x * y`  |
|  /  |   除法   | `x / y`  |
|  %  | 取模(余数) | `x % y`  |
| **  |   乘方   | `x ** y` |
| //  |   整除   | `x // y` |

```python
x = 10
y = 3

print(x + y)  # 输出: 13
print(x - y)  # 输出: 7
print(x * y)  # 输出: 30
print(x / y)  # 输出: 3.3333333333333335
print(x % y)  # 输出: 1
print(x ** y) # 输出: 1000
print(x // y) # 输出: 3
```

### 3.3.2 比较运算符

| 运算符 |  描述  | 示例       |
|:---:|:----:|:---------|
| ==  |  等于  | `x == y` |
| !=  | 不等于  | `x != y` |
|  >  |  大于  | `x > y`  |
|  <  |  小于  | `x < y`  |
| >=  | 大于等于 | `x >= y` |
| <=  | 小于等于 | `x <= y` |

```python
x = 5
y = 10

print(x == y) # 输出: False
print(x != y) # 输出: True
print(x > y)  # 输出: False
print(x < y)  # 输出: True
print(x >= y) # 输出: False
print(x <= y) # 输出: True
```

### 3.3.3 逻辑运算符

| 运算符 | 描述 | 示例      |
| :----: | :--: | :-------- |
|  and   |  与  | `x and y` |
|   or   |  或  | `x or y`  |
|  not   |  非  | `not x`   |

```python
x = True
y = False

print(x and y) # 输出: False
print(x or y)  # 输出: True
print(not x)   # 输出: False
```

### 3.3.4 赋值运算符

| 运算符 | 描述     | 示例       |
| :----: | :------- | :--------- |
|   =    | 赋值     | `x = 5`    |
|  +=    | 加法赋值 | `x += 5`   |
|  -=    | 减法赋值 | `x -= 5`   |
|  *=    | 乘法赋值 | `x *= 5`   |
|  /=    | 除法赋值 | `x /= 5`   |
|  %=    | 取模赋值 | `x %= 5`   |
|  //=   | 整除赋值 | `x //= 5`  |
|  **=   | 乘方赋值 | `x **= 5`  |

```python
x = 10

x += 5  # x = x + 5
print(x)  # 输出: 15

x -= 3  # x = x - 3
print(x)  # 输出: 12

x *= 2  # x = x * 2
print(x)  # 输出: 24

x /= 4  # x = x / 4
print(x)  # 输出: 6.0
```

## 3.4 注释

注释是程序中用来解释代码的文本，不会被 Python 解释器执行。

### 3.4.1 单行注释

使用 `#` 符号开始单行注释。

```python
# 这是一个单行注释
print("Hello")  # 这也是一个单行注释
```

### 3.4.2 多行注释

使用三个单引号 `'''` 或三个双引号 `"""` 来创建多行注释。

```python
'''
这是一个多行注释
可以写多行内容
'''

"""
这也是一个多行注释
用于解释代码块的功能
"""
print("World")
```

## 3.5 缩进

Python 使用缩进来表示代码块。通常使用 4 个空格作为缩进。

```python
if True:
    print("This is inside the if block")  # 缩进 4 个空格
    print("Another line inside the if block")
else:
    print("This is inside the else block")
```

**注意：** 错误的缩进会导致 `IndentationError`。

## 3.6 总结

本章介绍了 Python 的基础语法，包括变量、数据类型、运算符和注释。掌握这些基础知识是学习 Python 的关键。在接下来的学习中，我们会逐步深入，学习更高级的特性。
