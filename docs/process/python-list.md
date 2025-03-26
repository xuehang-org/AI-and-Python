---
title: Python 列表
---

# 10. Python 列表

列表是 Python 中最常用的数据结构之一。它可以存储一系列有序的元素，这些元素可以是不同的数据类型，例如数字、字符串、甚至其他列表。

## 10.1 什么是列表？

简单来说，列表就是一个可以放很多东西的“篮子”，而且这些东西是有顺序的。

**特点：**

*   **有序性：** 列表中的元素按照特定的顺序排列，可以通过索引访问。
*   **可变性：** 列表创建后，可以添加、删除或修改元素。
*   **多样性：** 列表中的元素可以是不同的数据类型。
*   **可重复性：** 列表允许包含重复的元素。

**示例：**

```python
my_list = [1, 2, "hello", 3.14, [4, 5]]
print(my_list)  # 输出: [1, 2, 'hello', 3.14, [4, 5]]
```

## 10.2 创建列表

创建列表非常简单，可以使用以下两种方式：

*   **使用方括号 `[]`：**  这是最常见的方式。
*   **使用 `list()` 函数：**  可以将其他可迭代对象（如字符串、元组）转换为列表。

**示例：**

```python
# 使用方括号创建空列表
empty_list = []
print(empty_list)  # 输出: []

# 创建包含元素的列表
number_list = [1, 2, 3, 4, 5]
print(number_list)  # 输出: [1, 2, 3, 4, 5]

string_list = ["apple", "banana", "orange"]
print(string_list)  # 输出: ['apple', 'banana', 'orange']

mixed_list = [1, "hello", 3.14]
print(mixed_list)  # 输出: [1, 'hello', 3.14]

# 使用 list() 函数
string = "python"
list_from_string = list(string)
print(list_from_string)  # 输出: ['p', 'y', 't', 'h', 'o', 'n']

tuple_data = (1, 2, 3)
list_from_tuple = list(tuple_data)
print(list_from_tuple) # 输出: [1, 2, 3]
```

## 10.3 访问列表元素

列表是有序的，所以可以通过索引来访问列表中的元素。 索引从 0 开始。

*   `list[index]`：访问指定索引的元素。
*   `list[-index]`：从列表末尾开始访问元素。  `-1` 表示最后一个元素，`-2` 表示倒数第二个元素，以此类推。

**示例：**

```python
my_list = ["apple", "banana", "orange"]

print(my_list[0])  # 输出: apple
print(my_list[1])  # 输出: banana
print(my_list[2])  # 输出: orange

print(my_list[-1]) # 输出: orange
print(my_list[-2]) # 输出: banana
```

**注意：** 索引不能超出列表的范围，否则会引发 `IndexError`。

## 10.4 列表切片 (Slicing)

切片是指从列表中提取一部分元素，创建一个新的列表。

`list[start:end:step]`

*   `start`:  起始索引 (包含)。如果省略，则默认为 0。
*   `end`:  结束索引 (不包含)。如果省略，则默认为列表的长度。
*   `step`:  步长，表示每隔多少个元素取一个。如果省略，则默认为 1。

**示例：**

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(my_list[2:5])   # 输出: [2, 3, 4]  (从索引 2 到 4 的元素)
print(my_list[:3])    # 输出: [0, 1, 2]  (从开始到索引 2 的元素)
print(my_list[5:])    # 输出: [5, 6, 7, 8, 9] (从索引 5 到结尾的元素)
print(my_list[::2])   # 输出: [0, 2, 4, 6, 8] (每隔一个元素取一个)
print(my_list[::-1])  # 输出: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (反转列表)
```

## 10.5 修改列表元素

列表是可变的，这意味着可以修改列表中的元素。

*   `list[index] = new_value`：修改指定索引的元素。
*   可以使用切片修改多个元素

**示例：**

```python
my_list = ["apple", "banana", "orange"]

my_list[1] = "grape"  # 修改索引为 1 的元素
print(my_list)  # 输出: ['apple', 'grape', 'orange']

my_list[0:2] = ["pear", "melon"] # 使用切片修改多个元素
print(my_list) # 输出: ['pear', 'melon', 'orange']
```

## 10.6 列表的常用操作

Python 提供了许多内置的列表方法，可以方便地操作列表。

| 方法                              | 描述                                              |
|---------------------------------|-------------------------------------------------|
| `append(x)`                     | 在列表末尾添加一个元素 `x`。                                |
| `insert(i, x)`                  | 在指定的索引 `i` 处插入元素 `x`。                           |
| `extend(iterable)`              | 将可迭代对象（例如另一个列表）中的所有元素添加到列表末尾。                   |
| `remove(x)`                     | 移除列表中第一个值为 `x` 的元素。如果 `x` 不存在，则引发 `ValueError`。 |
| `pop([i])`                      | 移除并返回列表中指定索引 `i` 的元素。如果省略 `i`，则移除并返回最后一个元素。     |
| `clear()`                       | 移除列表中的所有元素。                                     |
| `index(x[, start[, end]])`      | 返回列表中第一个值为 `x` 的元素的索引。                          |
| `count(x)`                      | 返回列表中值为 `x` 的元素的个数。                             |
| `sort(key=None, reverse=False)` | 对列表进行排序。 `key` 用于指定排序的依据，`reverse` 用于指定升序或降序。   |
| `reverse()`                     | 反转列表中的元素。                                       |
| `copy()`                        | 返回列表的浅拷贝。                                       |

**示例：**

```python
my_list = [1, 2, 3]

# append()
my_list.append(4)
print(my_list)  # 输出: [1, 2, 3, 4]

# insert()
my_list.insert(1, 5)
print(my_list)  # 输出: [1, 5, 2, 3, 4]

# extend()
my_list.extend([6, 7])
print(my_list)  # 输出: [1, 5, 2, 3, 4, 6, 7]

# remove()
my_list.remove(5)
print(my_list)  # 输出: [1, 2, 3, 4, 6, 7]

# pop()
popped_element = my_list.pop(1)
print(my_list)  # 输出: [1, 3, 4, 6, 7]
print(popped_element)  # 输出: 3

# clear()
# my_list.clear()
# print(my_list)  # 输出: []

# index()
index_of_4 = my_list.index(4)
print(index_of_4)  # 输出: 2

# count()
count_of_1 = my_list.count(1)
print(count_of_1)  # 输出: 1

# sort()
my_list = [3, 1, 4, 1, 5, 9, 2, 6]
my_list.sort()
print(my_list)  # 输出: [1, 1, 2, 3, 4, 5, 6, 9]

my_list.sort(reverse=True) # 降序排列
print(my_list) # 输出: [9, 6, 5, 4, 3, 2, 1, 1]


# reverse()
my_list.reverse()
print(my_list)  # 输出: [6, 2, 9, 5, 4, 1, 3]

# copy()
new_list = my_list.copy()
print(new_list)  # 输出: [6, 2, 9, 5, 4, 1, 3]
```

## 10.7 列表推导式 (List Comprehension)

列表推导式是一种简洁的创建列表的方式。  它允许你用更少的代码，基于已有的列表或其他可迭代对象创建新的列表。

**语法：**

`[expression for item in iterable if condition]`

*   `expression`:  对 `item` 进行处理的表达式。
*   `item`:  可迭代对象中的每个元素。
*   `iterable`:  可迭代对象 (例如列表、元组、字符串)。
*   `condition`:  可选的条件，用于过滤元素。

**示例：**

```python
# 创建一个包含 0 到 9 的平方的列表
squares = [x**2 for x in range(10)]
print(squares)  # 输出: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 创建一个包含 0 到 9 的偶数的列表
even_numbers = [x for x in range(10) if x % 2 == 0]
print(even_numbers)  # 输出: [0, 2, 4, 6, 8]

# 将字符串列表中的所有字符串转换为大写
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
print(upper_words)  # 输出: ['HELLO', 'WORLD', 'PYTHON']
```

## 10.8 列表的注意事项

*   **列表是可变的：**  这意味着对列表的修改会影响到原始列表。 如果需要创建一个独立的副本，可以使用 `copy()` 方法或切片。
*   **避免在循环中修改列表的长度：**  这可能会导致意想不到的结果。 如果需要在循环中添加或删除元素，可以考虑使用列表推导式或创建一个新的列表。

## 10.9 总结

列表是 Python 中非常重要且灵活的数据结构。 掌握列表的创建、访问、修改和常用操作，对于编写高效的 Python 代码至关重要。  通过学习列表推导式，可以进一步简化代码，提高开发效率。 希望这篇文档能够帮助你更好地理解和使用 Python 列表！
