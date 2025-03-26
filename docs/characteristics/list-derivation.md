---
title: Python 列表推导式
---

# Python 列表推导式

## 什么是列表推导式？

列表推导式（List Comprehension）是一种简洁、优雅的创建列表的方式。它允许你用一行代码，基于已有的列表或其他可迭代对象，快速生成新的列表。可以把它看作一个简化的 `for` 循环，并且可以直接生成列表。

## 为什么要用列表推导式？

*   **代码更简洁：** 相比传统的 `for` 循环，列表推导式可以用更少的代码完成相同的任务。
*   **可读性更好：** 在某些情况下，列表推导式可以使代码的逻辑更清晰。
*   **效率更高：** 在某些情况下，列表推导式比 `for` 循环执行速度更快。

## 列表推导式的基本语法

```python
[expression for item in iterable]
```

*   `expression`：对 `item` 进行处理的表达式，处理后的结果会添加到新列表中。
*   `item`：从 `iterable` 中取出的每个元素。
*   `iterable`：可迭代对象，例如列表、元组、字符串、range() 等。

**示例：**

```python
# 使用 for 循环创建一个包含 0-9 平方数的列表
squares = []
for i in range(10):
    squares.append(i**2)
print(squares)  # 输出: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# 使用列表推导式创建一个包含 0-9 平方数的列表
squares = [i**2 for i in range(10)]
print(squares)  # 输出: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

可以看到，列表推导式用一行代码就完成了 `for` 循环才能实现的功能，非常简洁。

## 带有条件的列表推导式

列表推导式还可以添加条件判断，只将符合条件的元素添加到新列表中。

```python
[expression for item in iterable if condition]
```

*   `condition`：条件表达式，只有当 `condition` 为 `True` 时，`expression` 的结果才会被添加到新列表中。

**示例：**

```python
# 使用 for 循环创建一个包含 0-9 中所有偶数的平方数的列表
even_squares = []
for i in range(10):
    if i % 2 == 0:
        even_squares.append(i**2)
print(even_squares)  # 输出: [0, 4, 16, 36, 64]

# 使用列表推导式创建一个包含 0-9 中所有偶数的平方数的列表
even_squares = [i**2 for i in range(10) if i % 2 == 0]
print(even_squares)  # 输出: [0, 4, 16, 36, 64]
```

## 多个 `for` 循环的列表推导式

列表推导式还可以包含多个 `for` 循环，用于处理嵌套的迭代。

```python
[expression for item1 in iterable1 for item2 in iterable2 ...]
```

**示例：**

```python
# 使用 for 循环创建一个包含所有 (x, y) 坐标的列表，其中 x 的范围是 0-2，y 的范围是 0-2
coordinates = []
for x in range(3):
    for y in range(3):
        coordinates.append((x, y))
print(coordinates)
# 输出: [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]

# 使用列表推导式创建一个包含所有 (x, y) 坐标的列表，其中 x 的范围是 0-2，y 的范围是 0-2
coordinates = [(x, y) for x in range(3) for y in range(3)]
print(coordinates)
# 输出: [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
```

## 列表推导式的应用场景

*   **数据清洗：** 过滤掉列表中的无效数据或进行数据转换。
*   **数据转换：** 将列表中的数据转换为另一种格式。
*   **生成新的列表：** 基于现有数据生成新的列表。

**更多示例：**

```python
# 1. 将字符串列表转换为大写
words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
print(upper_words)  # 输出: ['HELLO', 'WORLD', 'PYTHON']

# 2. 从列表中提取所有正数
numbers = [-2, -1, 0, 1, 2, 3]
positive_numbers = [num for num in numbers if num > 0]
print(positive_numbers)  # 输出: [1, 2, 3]

# 3. 生成一个包含 10 以内所有奇数的平方的列表
odd_squares = [x**2 for x in range(10) if x % 2 != 0]
print(odd_squares)  # 输出: [1, 9, 25, 49, 81]

# 4. 使用列表推导式和条件判断，根据成绩返回等级
grades = [85, 92, 78, 65, 98, 72]
# 如果分数大于等于90，等级为'A'，大于等于80等级为'B'，大于等于70等级为'C'，否则为'D'
letter_grades = ['A' if grade >= 90 else 'B' if grade >= 80 else 'C' if grade >= 70 else 'D' for grade in grades]
print(letter_grades)  # 输出: ['B', 'A', 'C', 'D', 'A', 'C']
```

## 注意事项

*   **避免过度使用：** 虽然列表推导式很强大，但过度使用会降低代码的可读性。对于复杂的逻辑，建议使用传统的 `for` 循环。
*   **性能：** 在某些情况下，列表推导式可能比 `for` 循环更快，但在处理大量数据时，需要注意内存占用。

## 总结

列表推导式是 Python 中一个非常实用的特性，可以帮助你编写更简洁、高效的代码。通过掌握列表推导式的基本语法和应用场景，你可以在实际开发中灵活运用它，提高开发效率。

希望这个教程能够帮助你理解和掌握 Python 的列表推导式！多练习，多实践，你很快就能熟练运用它了。