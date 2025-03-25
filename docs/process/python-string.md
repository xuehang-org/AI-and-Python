---
title: Python 字符串
---


# Python 字符串

字符串是 Python 中最常用的数据类型之一。简单来说，字符串就是一系列字符的序列。你可以把字符串想象成一串用线穿起来的珠子，每个珠子就是一个字符。

## 字符串的创建

在 Python 中，创建字符串非常简单，你可以使用单引号 `' '` 或双引号 `" "` 把字符序列括起来。

```python
string1 = 'Hello'
string2 = "World"

print(string1)  # 输出: Hello
print(string2)  # 输出: World
```

还可以使用三引号 `''' '''` 或 `""" """` 来创建多行字符串。

```python
string3 = '''
This is a
multi-line string.
'''

string4 = """
This is also a
multi-line string.
"""

print(string3)
# 输出:
# This is a
# multi-line string.

print(string4)
# 输出:
# This is also a
# multi-line string.
```

## 字符串的访问

字符串中的每个字符都有一个索引，索引从 `0` 开始。你可以使用索引来访问字符串中的单个字符。

```python
string = "Python"

print(string[0])  # 输出: P
print(string[1])  # 输出: y
print(string[5])  # 输出: n
```

你也可以使用负数索引，负数索引从 `-1` 开始，表示字符串的最后一个字符。

```python
string = "Python"

print(string[-1])  # 输出: n
print(string[-2])  # 输出: o
```

### 字符串切片

除了访问单个字符，你还可以使用切片（slice）来获取字符串的一部分。切片的语法是 `[start:end:step]`。

*   `start`：起始索引（包含）。
*   `end`：结束索引（不包含）。
*   `step`：步长，默认为 1。

```python
string = "Hello Python"

print(string[0:5])   # 输出: Hello (从索引 0 到 4 的字符)
print(string[6:])    # 输出: Python (从索引 6 到字符串结尾)
print(string[:5])    # 输出: Hello (从索引 0 到 4 的字符)
print(string[:])     # 输出: Hello Python (整个字符串)
print(string[::2])   # 输出: HloPto (每隔一个字符取一个)
print(string[::-1])  # 输出: nohtyP olleH (反转字符串)
```

## 字符串的常用操作

Python 提供了许多内置方法来操作字符串。

### 字符串的长度

使用 `len()` 函数可以获取字符串的长度（包含多少个字符）。

```python
string = "Hello"
length = len(string)

print(length)  # 输出: 5
```

### 字符串的连接

可以使用 `+` 运算符将两个字符串连接起来。

```python
string1 = "Hello"
string2 = "World"
result = string1 + " " + string2

print(result)  # 输出: Hello World
```

### 字符串的重复

可以使用 `*` 运算符将字符串重复多次。

```python
string = "Hello"
result = string * 3

print(result)  # 输出: HelloHelloHello
```

### 字符串的大小写转换

*   `upper()`：将字符串转换为大写。
*   `lower()`：将字符串转换为小写。

```python
string = "Hello Python"

print(string.upper())  # 输出: HELLO PYTHON
print(string.lower())  # 输出: hello python
```

### 字符串的去除空格

*   `strip()`：去除字符串开头和结尾的空格。
*   `lstrip()`：去除字符串开头的空格。
*   `rstrip()`：去除字符串结尾的空格。

```python
string = "   Hello Python   "

print(string.strip())   # 输出: Hello Python
print(string.lstrip())  # 输出: Hello Python
print(string.rstrip())  # 输出: Hello Python
```

### 字符串的查找

*   `find()`：查找子字符串在字符串中第一次出现的位置，如果找不到则返回 -1。
*   `index()`：查找子字符串在字符串中第一次出现的位置，如果找不到则抛出异常。
*   `startswith()`：检查字符串是否以指定子字符串开头。
*   `endswith()`：检查字符串是否以指定子字符串结尾。

```python
string = "Hello Python"

print(string.find("Python"))    # 输出: 6
print(string.find("World"))     # 输出: -1

# print(string.index("World"))   # 抛出异常

print(string.startswith("Hello"))  # 输出: True
print(string.endswith("Python"))   # 输出: True
```

### 字符串的替换

`replace()`：将字符串中的指定子字符串替换为另一个子字符串。

```python
string = "Hello Python"
new_string = string.replace("Python", "World")

print(new_string)  # 输出: Hello World
```

### 字符串的分割

`split()`：将字符串按照指定分隔符分割成多个子字符串，返回一个列表。

```python
string = "Hello,World,Python"
result = string.split(",")

print(result)  # 输出: ['Hello', 'World', 'Python']
```

### 字符串的格式化

字符串格式化是一种将变量的值插入到字符串中的方法。  Python 提供了多种字符串格式化的方式。

#### 1. 百分号 (%) 格式化

这是 Python 中最古老的字符串格式化方法。

```python
name = "Alice"
age = 30
print("My name is %s and I am %d years old." % (name, age))
# 输出: My name is Alice and I am 30 years old.
```

*   `%s`：字符串
*   `%d`：整数
*   `%f`：浮点数

#### 2. `str.format()` 方法

这是一种更现代、更灵活的字符串格式化方法。

```python
name = "Alice"
age = 30
print("My name is {} and I am {} years old.".format(name, age))
# 输出: My name is Alice and I am 30 years old.

# 也可以使用索引
print("My name is {0} and I am {1} years old. {0} is a good name.".format(name, age))
# 输出: My name is Alice and I am 30 years old. Alice is a good name.

# 也可以使用关键字参数
print("My name is {name} and I am {age} years old.".format(name="Bob", age=25))
# 输出: My name is Bob and I am 25 years old.
```

#### 3. f-strings (formatted string literals)

这是 Python 3.6 引入的一种非常简洁的字符串格式化方法。

```python
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")
# 输出: My name is Alice and I am 30 years old.

# 可以在 f-strings 中使用表达式
print(f"2 + 3 = {2 + 3}")  # 输出: 2 + 3 = 5
```

f-strings 的优点是简洁易读，并且性能通常比其他格式化方法更好。

## 字符串是不可变的

需要注意的是，Python 中的字符串是不可变的。这意味着一旦创建了一个字符串，就不能修改它的内容。所有字符串操作实际上都是创建了一个新的字符串。

```python
string = "Hello"
# string[0] = 'J'  # 错误: 'str' object does not support item assignment

string = string.replace("H", "J")  # 创建了一个新的字符串

print(string)  # 输出: Jello
```

## 总结

*   字符串是字符的序列，可以使用单引号、双引号或三引号创建。
*   可以使用索引和切片访问字符串中的字符。
*   Python 提供了丰富的字符串操作方法，例如连接、重复、大小写转换、去除空格、查找、替换、分割等。
*   字符串格式化可以将变量的值插入到字符串中。
*   字符串是不可变的。

希望这个教程能够帮助你理解 Python 字符串的基本概念和常用操作。 掌握好字符串的处理，可以让你在编写 Python 程序时更加得心应手。

