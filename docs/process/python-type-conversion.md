---
title: Python 数据类型转换
---

# 5 Python 数据类型转换

在 Python 编程中，经常需要在不同的数据类型之间进行转换。例如，你可能需要将一个字符串转换为整数，或者将一个浮点数转换为字符串。Python 提供了一些内置的函数来实现这些转换。

## 5.1 为什么需要数据类型转换？

不同的数据类型有不同的特性和用途。例如：

*   **整数 (int)**: 用于表示整数，可以进行算术运算。
*   **浮点数 (float)**: 用于表示带小数点的数字，也可以进行算术运算。
*   **字符串 (str)**: 用于表示文本，可以进行拼接等操作。

有时候，你需要将数据从一种类型转换为另一种类型，才能进行特定的操作。

## 5.2 常用转换函数

以下是一些常用的数据类型转换函数：

*   `int()`: 将一个值转换为整数。
*   `float()`: 将一个值转换为浮点数。
*   `str()`: 将一个值转换为字符串。
*   `bool()`: 将一个值转换为布尔值。
*   `list()`: 将一个可迭代对象转换为列表。
*   `tuple()`: 将一个可迭代对象转换为元组。
*   `set()`: 将一个可迭代对象转换为集合。
*   `dict()`: 创建一个字典。

## 5.3 示例

### 5.3.1 转换为整数 `int()`

`int()` 函数可以将一个数字或字符串转换为整数。

```python
# 将浮点数转换为整数
num_float = 3.14
num_int = int(num_float)
print(num_int)  # 输出: 3 (注意：会截断小数部分)

# 将字符串转换为整数
num_str = "123"
num_int = int(num_str)
print(num_int)  # 输出: 123

# 注意：如果字符串不能转换为整数，会报错
# num_str = "abc"
# num_int = int(num_str)  # ValueError: invalid literal for int() with base 10: 'abc'

# 进制转换
num_str = "10"
num_int = int(num_str, 2) # 将二进制字符串转换为十进制整数
print(num_int)  # 输出: 2
```

### 5.3.2 转换为浮点数 `float()`

`float()` 函数可以将一个数字或字符串转换为浮点数。

```python
# 将整数转换为浮点数
num_int = 10
num_float = float(num_int)
print(num_float)  # 输出: 10.0

# 将字符串转换为浮点数
num_str = "3.14"
num_float = float(num_str)
print(num_float)  # 输出: 3.14

# 注意：如果字符串不能转换为浮点数，会报错
# num_str = "abc"
# num_float = float(num_str)  # ValueError: could not convert string to float: 'abc'
```

### 5.3.3 转换为字符串 `str()`

`str()` 函数可以将任何类型的值转换为字符串。

```python
# 将整数转换为字符串
num_int = 10
num_str = str(num_int)
print(num_str)  # 输出: "10"
print(type(num_str))  # 输出: <class 'str'>

# 将浮点数转换为字符串
num_float = 3.14
num_str = str(num_float)
print(num_str)  # 输出: "3.14"

# 将列表转换为字符串
my_list = [1, 2, 3]
list_str = str(my_list)
print(list_str)  # 输出: "[1, 2, 3]"
print(type(list_str))
```

### 5.3.4 转换为布尔值 `bool()`

`bool()` 函数可以将一个值转换为布尔值（`True` 或 `False`）。

*   以下值会被转换为 `False`:
    *   `0` (整数)
    *   `0.0` (浮点数)
    *   `""` (空字符串)
    *   `[]` (空列表)
    *   `{}` (空字典)
    *   `()` (空元组)
    *   `None`
*   其他值会被转换为 `True`。

```python
print(bool(0))  # 输出: False
print(bool(1))  # 输出: True
print(bool(3.14))  # 输出: True
print(bool(""))  # 输出: False
print(bool("abc"))  # 输出: True
print(bool([]))  # 输出: False
print(bool([1, 2]))  # 输出: True
print(bool(None)) # 输出: False
```

### 5.3.5 转换为列表 `list()`

`list()` 函数可以将可迭代对象（例如字符串、元组、集合）转换为列表。

```python
# 将字符串转换为列表
my_str = "hello"
my_list = list(my_str)
print(my_list)  # 输出: ['h', 'e', 'l', 'l', 'o']

# 将元组转换为列表
my_tuple = (1, 2, 3)
my_list = list(my_tuple)
print(my_list)  # 输出: [1, 2, 3]

# 将集合转换为列表
my_set = {1, 2, 3}
my_list = list(my_set)
print(my_list)  # 输出: [1, 2, 3] (注意：集合是无序的，所以转换后的列表顺序可能不同)
```

### 5.3.6 转换为元组 `tuple()`

`tuple()` 函数可以将可迭代对象（例如字符串、列表、集合）转换为元组。

```python
# 将字符串转换为元组
my_str = "hello"
my_tuple = tuple(my_str)
print(my_tuple)  # 输出: ('h', 'e', 'l', 'l', 'o')

# 将列表转换为元组
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)  # 输出: (1, 2, 3)

# 将集合转换为元组
my_set = {1, 2, 3}
my_tuple = tuple(my_set)
print(my_tuple)  # 输出: (1, 2, 3) (注意：集合是无序的，所以转换后的元组顺序可能不同)
```

### 5.3.7 转换为集合 `set()`

`set()` 函数可以将可迭代对象（例如字符串、列表、元组）转换为集合。集合的特点是无序且元素唯一。

```python
# 将字符串转换为集合
my_str = "hello"
my_set = set(my_str)
print(my_set)  # 输出: {'h', 'e', 'l', 'o'} (注意：重复的 'l' 只保留一个)

# 将列表转换为集合
my_list = [1, 2, 2, 3]
my_set = set(my_list)
print(my_set)  # 输出: {1, 2, 3} (注意：重复的 '2' 只保留一个)

# 将元组转换为集合
my_tuple = (1, 2, 2, 3)
my_set = set(my_tuple)
print(my_set)  # 输出: {1, 2, 3} (注意：重复的 '2' 只保留一个)
```

### 5.3.8 转换为字典 `dict()`

`dict()` 函数可以根据键值对来创建字典。

```python
# 使用键值对列表创建字典
my_list = [('a', 1), ('b', 2), ('c', 3)]
my_dict = dict(my_list)
print(my_dict)  # 输出: {'a': 1, 'b': 2, 'c': 3}

# 使用 zip 函数和两个列表创建字典
keys = ['a', 'b', 'c']
values = [1, 2, 3]
my_dict = dict(zip(keys, values))
print(my_dict)  # 输出: {'a': 1, 'b': 2, 'c': 3}
```

## 5.4 总结

数据类型转换是 Python 编程中非常基础且重要的操作。掌握这些转换函数，可以让你更灵活地处理不同类型的数据。希望这些示例能帮助你更好地理解数据类型转换！