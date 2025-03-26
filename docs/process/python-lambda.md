---
title: Python 匿名函数
---


# 18. Python 匿名函数

## 18.1 什么是匿名函数？

在 Python 中，匿名函数是指没有名字的函数。它们通常用于执行简单的、一次性的任务，而不需要像普通函数那样正式地定义。匿名函数也称为 Lambda 函数，因为它们是通过 `lambda` 关键字创建的。

## 18.2 为什么使用匿名函数？

- **简洁性：** 匿名函数可以在一行代码中定义，使代码更简洁易读。
- **灵活性：** 它们可以作为参数传递给其他函数，实现更灵活的功能。
- **避免命名冲突：** 对于只使用一次的简单函数，避免了命名冲突的问题。

## 18.3 如何创建匿名函数？

使用 `lambda` 关键字创建匿名函数的基本语法如下：

```python
lambda arguments: expression
```

- `lambda`：关键字，用于定义匿名函数。
- `arguments`：函数的参数列表，可以有零个或多个参数，用逗号分隔。
- `expression`：函数体，是一个简单的表达式，其结果会被返回。

**注意：**
- 匿名函数只能包含一个表达式，不能包含复杂的语句（如 `if`、`for`、`while` 等）。
- 匿名函数会自动返回表达式的结果，不需要 `return` 语句。

## 18.4 匿名函数示例

### 18.4.1 简单的加法函数

```python
# 普通函数
def add(x, y):
  return x + y

print(add(5, 3))  # 输出: 8

# 匿名函数
add = lambda x, y: x + y
print(add(5, 3))  # 输出: 8
```

在这个例子中，我们定义了一个简单的加法函数。使用 `lambda` 关键字，我们可以用一行代码完成相同的任务。

### 18.4.2 计算平方

```python
# 普通函数
def square(x):
  return x * x

print(square(5))  # 输出: 25

# 匿名函数
square = lambda x: x * x
print(square(5))  # 输出: 25
```

这个例子展示了如何使用匿名函数计算一个数的平方。

### 18.4.3 无参数的匿名函数

```python
# 普通函数
def say_hello():
  return "Hello"

print(say_hello())  # 输出: Hello

# 匿名函数
say_hello = lambda: "Hello"
print(say_hello())  # 输出: Hello
```

匿名函数也可以没有参数，就像这个例子一样。

## 18.5 匿名函数的高级用法

匿名函数通常与 `map()`、`filter()` 和 `reduce()` 等高阶函数结合使用，以实现更强大的功能。

### 18.5.1 `map()` 函数

`map()` 函数接受一个函数和一个可迭代对象作为参数，将函数应用于可迭代对象中的每个元素，并返回一个包含结果的迭代器。

```python
numbers = [1, 2, 3, 4, 5]

# 使用 map() 和匿名函数计算每个数的平方
squared_numbers = map(lambda x: x * x, numbers)
print(list(squared_numbers))  # 输出: [1, 4, 9, 16, 25]
```

在这个例子中，我们使用 `map()` 函数和匿名函数计算列表中每个数的平方。

### 18.5.2 `filter()` 函数

`filter()` 函数接受一个函数和一个可迭代对象作为参数，根据函数的结果过滤可迭代对象中的元素，并返回一个包含过滤后元素的迭代器。

```python
numbers = [1, 2, 3, 4, 5, 6]

# 使用 filter() 和匿名函数过滤出偶数
even_numbers = filter(lambda x: x % 2 == 0, numbers)
print(list(even_numbers))  # 输出: [2, 4, 6]
```

这个例子展示了如何使用 `filter()` 函数和匿名函数从列表中过滤出偶数。

### 18.5.3 `reduce()` 函数

`reduce()` 函数接受一个函数和一个可迭代对象作为参数，将函数应用于可迭代对象中的元素，将其归约为单个值。需要从 `functools` 模块导入。

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# 使用 reduce() 和匿名函数计算列表中所有元素的和
sum_of_numbers = reduce(lambda x, y: x + y, numbers)
print(sum_of_numbers)  # 输出: 15
```

在这个例子中，我们使用 `reduce()` 函数和匿名函数计算列表中所有元素的和。

### 18.5.4 在排序中使用匿名函数

匿名函数可以作为 `sort()` 方法或 `sorted()` 函数的 `key` 参数，用于自定义排序规则。

```python
students = [
  {'name': 'Alice', 'score': 85},
  {'name': 'Bob', 'score': 92},
  {'name': 'Charlie', 'score': 78}
]

# 使用 sorted() 和匿名函数按分数排序
sorted_students = sorted(students, key=lambda student: student['score'])
print(sorted_students)
# 输出:
# [{'name': 'Charlie', 'score': 78}, {'name': 'Alice', 'score': 85}, {'name': 'Bob', 'score': 92}]
```

这个例子展示了如何使用匿名函数根据学生的成绩对学生列表进行排序。

## 18.6 总结

匿名函数是 Python 中一种简洁而强大的工具，它们可以用于执行简单的、一次性的任务，并且可以与高阶函数结合使用，实现更灵活的功能。

希望这篇文档能帮助你更好地理解和使用 Python 匿名函数！
