---
title: Python 内置函数
---

# Python 内置函数

Python 提供了许多内置函数，这意味着你无需导入任何模块就可以直接使用它们。这些函数覆盖了各种常见的编程任务，掌握它们能大大提高你的开发效率。

## 1. 数学运算

### `abs()`

`abs()` 函数返回一个数的绝对值。

```python
print(abs(-10))  # 输出: 10
print(abs(3.14)) # 输出: 3.14
```

### `pow()`

`pow()` 函数返回一个数的幂。它接受两个或三个参数：`pow(x, y[, z])`，返回 x 的 y 次方。如果提供了 z，则返回结果再对 z 取模。

```python
print(pow(2, 3))    # 输出: 8 (2的3次方)
print(pow(2, 3, 5)) # 输出: 3 (2的3次方对5取模)
```

### `round()`

`round()` 函数对浮点数进行四舍五入。你可以指定精度（保留的小数位数）。

```python
print(round(3.14159, 2)) # 输出: 3.14 (保留两位小数)
print(round(3.7))       # 输出: 4 (默认四舍五入到整数)
```

### `max()` 和 `min()`

`max()` 返回给定参数中的最大值，`min()` 返回最小值。它们可以接受多个参数，也可以接受一个可迭代对象。

```python
print(max(1, 5, 2, 8))       # 输出: 8
print(min(1, 5, 2, 8))       # 输出: 1
print(max([1, 5, 2, 8]))    # 输出: 8 (使用列表)
print(min((1, 5, 2, 8)))    # 输出: 1 (使用元组)
```

### `sum()`

`sum()` 函数对可迭代对象中的数值求和。

```python
print(sum([1, 2, 3, 4]))   # 输出: 10
print(sum((1, 2, 3, 4), 5)) # 输出: 15 (起始值为5)
```

## 2. 类型转换

### `int()`

`int()` 函数将一个值转换为整数。

```python
print(int(3.14))   # 输出: 3 (截断小数部分)
print(int("10"))    # 输出: 10 (字符串转整数)
```

### `float()`

`float()` 函数将一个值转换为浮点数。

```python
print(float(10))   # 输出: 10.0
print(float("3.14")) # 输出: 3.14 (字符串转浮点数)
```

### `str()`

`str()` 函数将一个值转换为字符串。

```python
print(str(10))     # 输出: "10"
print(str(3.14))   # 输出: "3.14"
```

### `bool()`

`bool()` 函数将一个值转换为布尔值（True 或 False）。

```python
print(bool(0))     # 输出: False
print(bool(1))     # 输出: True
print(bool(""))    # 输出: False (空字符串)
print(bool("hello")) # 输出: True (非空字符串)
print(bool([]))     # 输出: False (空列表)
print(bool([1,2]))  # 输出: True (非空列表)
```

### `list()`, `tuple()`, `set()`

这些函数分别用于将一个可迭代对象转换为列表、元组和集合。

```python
print(list("hello"))  # 输出: ['h', 'e', 'l', 'l', 'o']
print(tuple([1, 2, 3])) # 输出: (1, 2, 3)
print(set([1, 2, 2, 3])) # 输出: {1, 2, 3} (集合会自动去重)
```

## 3. 字符串处理

### `len()`

`len()` 函数返回字符串、列表、元组等对象的长度（包含的元素个数）。

```python
print(len("hello"))  # 输出: 5
print(len([1, 2, 3])) # 输出: 3
```

### `ord()` 和 `chr()`

`ord()` 函数返回一个字符的 Unicode 码点（整数），`chr()` 函数则相反，将一个 Unicode 码点转换为字符。

```python
print(ord('A'))   # 输出: 65
print(chr(65))   # 输出: 'A'
print(ord('中'))   # 输出: 20013
print(chr(20013))  # 输出: '中'
```

## 4. 对象操作

### `type()`

`type()` 函数返回一个对象的类型。

```python
print(type(10))       # 输出: <class 'int'>
print(type("hello"))  # 输出: <class 'str'>
print(type([1, 2]))   # 输出: <class 'list'>
```

### `isinstance()`

`isinstance()` 函数检查一个对象是否是指定类型或其子类的实例。

```python
print(isinstance(10, int))      # 输出: True
print(isinstance("hello", str)) # 输出: True
print(isinstance([1,2], list))   # 输出: True
print(isinstance([1,2], (list, tuple))) # 输出: True (可以是多个类型之一)
```

### `id()`

`id()` 函数返回一个对象的唯一标识符（在内存中的地址）。

```python
x = 10
print(id(x))  # 输出: 一个整数，表示 x 的内存地址
```

## 5. 输入输出

### `print()`

`print()` 函数用于将信息输出到控制台。

```python
print("Hello, world!") # 输出: Hello, world!
print(1, 2, 3, sep=", ") # 输出: 1, 2, 3 (指定分隔符)
print("hello", end="!\n")  # 输出: hello! (指定结尾字符)
```

### `input()`

`input()` 函数用于从控制台读取用户输入。它返回一个字符串。

```python
name = input("请输入你的名字：")
print("你好，" + name + "!")
```

## 6. 迭代器和序列

### `range()`

`range()` 函数创建一个整数序列。

```python
for i in range(5):
    print(i)  # 输出: 0 1 2 3 4

for i in range(2, 7):
    print(i)  # 输出: 2 3 4 5 6

for i in range(0, 10, 2):
    print(i)  # 输出: 0 2 4 6 8 (步长为2)
```

### `enumerate()`

`enumerate()` 函数将一个可迭代对象转换为一个枚举对象，每次迭代返回索引和对应的元素。

```python
my_list = ["apple", "banana", "cherry"]
for index, value in enumerate(my_list):
    print(index, value)
# 输出:
# 0 apple
# 1 banana
# 2 cherry
```

### `zip()`

`zip()` 函数将多个可迭代对象“打包”成一个元组序列。

```python
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 28]
for name, age in zip(names, ages):
    print(name, age)
# 输出:
# Alice 25
# Bob 30
# Charlie 28
```

## 7. 其他常用函数

### `help()`

`help()` 函数用于查看函数或模块的帮助文档。

```python
help(len)  # 显示 len() 函数的帮助文档
```

### `dir()`

`dir()` 函数返回一个对象的所有属性和方法名。

```python
print(dir(list))  # 显示 list 类型的所有属性和方法
```

## 总结

掌握这些内置函数，能让你在编写 Python 代码时更加得心应手。记住，多练习、多使用才是掌握它们的最好方法！
