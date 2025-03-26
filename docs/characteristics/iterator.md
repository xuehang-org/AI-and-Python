---
title: Python 迭代器
---

# 4. Python 迭代器

在 Python 中，迭代器是一种可以逐个访问集合元素的对象。它提供了一种统一的访问集合数据的接口，无需关心集合内部的实现细节。

## 4.1 什么是迭代器

简单来说，迭代器就像一个可以按顺序“生成”值的机器。每次你向它要一个值，它就给你一个，直到所有值都给完为止。

**特点：**

*   **可以记住遍历的位置：** 迭代器会保存当前访问的元素，下次请求时会返回下一个元素。
*   **只能向前访问：** 迭代器只能按顺序一个一个地访问元素，不能后退或跳跃。
*   **节省内存：** 迭代器不会一次性加载所有元素到内存，而是按需生成，这在处理大型数据集时非常有用。

## 4.2 可迭代对象

要理解迭代器，首先要了解可迭代对象（Iterable）。可迭代对象是指可以使用 `for` 循环进行遍历的对象。

**常见的可迭代对象包括：**

*   列表（list）
*   元组（tuple）
*   字符串（str）
*   字典（dict）
*   集合（set）

**如何判断一个对象是否是可迭代的？**

可以使用 `isinstance()` 函数和 `collections.abc.Iterable` 类来判断：

```python
from collections.abc import Iterable

my_list = [1, 2, 3]
my_string = "hello"

print(isinstance(my_list, Iterable))  # 输出：True
print(isinstance(my_string, Iterable)) # 输出：True
print(isinstance(123, Iterable))      # 输出：False (整数不可迭代)
```

## 4.3 迭代器协议

一个对象要成为迭代器，需要实现迭代器协议，即实现两个方法：

*   `__iter__()`：返回迭代器对象自身。
*   `__next__()`：返回迭代器的下一个元素。如果没有更多元素，则引发 `StopIteration` 异常。

## 4.4 创建迭代器

可以使用 `iter()` 函数从可迭代对象创建迭代器。

**示例：**

```python
my_list = [1, 2, 3]
my_iterator = iter(my_list)

print(next(my_iterator))  # 输出：1
print(next(my_iterator))  # 输出：2
print(next(my_iterator))  # 输出：3

# 再次调用 next() 会引发 StopIteration 异常
# print(next(my_iterator))  # 报错：StopIteration
```

**手动实现一个迭代器：**

```python
class MyIterator:
    def __init__(self, data):
        self.data = data
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index < len(self.data):
            value = self.data[self.index]
            self.index += 1
            return value
        else:
            raise StopIteration

# 使用自定义迭代器
my_list = [4, 5, 6]
my_iterator = MyIterator(my_list)

for item in my_iterator:
    print(item)
```

## 4.5 迭代器的优势

*   **节省内存：** 迭代器不会一次性加载所有数据，而是按需生成，适合处理大数据集。
*   **代码简洁：** 使用迭代器可以简化循环代码，使其更易读。
*   **通用性：** 迭代器提供了一种统一的访问集合数据的接口，可以用于各种类型的可迭代对象。

## 4.6 迭代器的应用

*   **读取大型文件：** 逐行读取文件内容，避免一次性加载整个文件到内存。
*   **生成无限序列：** 可以创建生成无限序列的迭代器，例如斐波那契数列。
*   **数据流处理：**  在数据流处理中，可以使用迭代器逐个处理数据，提高效率。

## 4.7 示例

**1. 读取大型文件：**

```python
def read_large_file(file_path):
    with open(file_path, 'r') as f:
        for line in f:
            yield line.strip()  # 使用 yield 创建生成器 (生成器也是一种迭代器)

# 使用迭代器读取文件
for line in read_large_file('my_large_file.txt'):
    print(line)
```

**2. 生成斐波那契数列：**

```python
class Fibonacci:
    def __init__(self, max_value):
        self.max_value = max_value
        self.a = 0
        self.b = 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.a > self.max_value:
            raise StopIteration
        value = self.a
        self.a, self.b = self.b, self.a + self.b
        return value

# 使用迭代器生成斐波那契数列
fib = Fibonacci(10)
for num in fib:
    print(num) # 输出 0 1 1 2 3 5 8
```

## 4.8 总结

迭代器是一种强大的工具，可以让你更有效地处理集合数据。掌握迭代器的概念和使用方法，可以编写出更简洁、更高效的 Python 代码。记住，关键是理解 `__iter__()` 和 `__next__()` 方法，以及 `StopIteration` 异常。

希望这个文档对你有所帮助！如果你有任何问题，随时提问。
