---
title: Python 集合
---

# Python 集合

## 集合的定义和特性

在 Python 中，集合（Set）是一种**无序**、**不重复**的数据结构。可以把它看作是只包含键，不包含值的字典。

*   **无序性:** 集合中的元素没有固定的顺序，每次访问时元素的顺序可能都不一样。
*   **唯一性:** 集合中的元素必须是唯一的，不允许重复。如果尝试添加重复元素，集合会自动去重。
*   **可变性:** 集合本身是可变的，可以动态地添加或删除元素。
*   **元素类型:** 集合中的元素必须是不可变类型，例如数字、字符串、元组等，不能是列表、字典等可变类型。

集合非常适合用于：

*   **去重:** 快速去除列表或其他序列中的重复元素。
*   **成员关系判断:** 检查某个元素是否存在于集合中。
*   **集合运算:** 进行并集、交集、差集等数学运算。

## 集合的创建

### 1. 使用花括号 `{}`

可以使用花括号 `{}` 直接创建集合，元素之间用逗号 `,` 分隔。

```python
# 创建一个包含整数的集合
my_set = {1, 2, 3, 4, 5}
print(my_set)  # 输出: {1, 2, 3, 4, 5}

# 创建一个包含不同类型元素的集合
my_set = {1, "hello", (3, 4)}
print(my_set)  # 输出: {1, 'hello', (3, 4)}

# 创建空集合不能用 {}, 因为 {} 创建的是空字典
# 应该使用 set()
empty_set = set()
print(type(empty_set)) # 输出：<class 'set'>
```

**注意:** 创建空集合不能使用 `{}`，因为 `{}` 创建的是一个空字典。应该使用 `set()` 函数来创建空集合。

### 2. 使用 `set()` 函数

可以使用 `set()` 函数将列表、元组或字符串转换为集合。

```python
# 将列表转换为集合
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)  # 输出: {1, 2, 3}，重复元素被去除

# 将字符串转换为集合
my_string = "hello"
my_set = set(my_string)
print(my_set)  # 输出: {'h', 'e', 'l', 'o'}，字符顺序不确定
```

## 集合的常用操作

### 1. 添加元素

*   `add(element)`:  将单个元素添加到集合中。
*   `update(iterable)`: 将可迭代对象（如列表、元组、字符串）中的元素添加到集合中。

```python
my_set = {1, 2, 3}

# 添加单个元素
my_set.add(4)
print(my_set)  # 输出: {1, 2, 3, 4}

# 添加多个元素
my_set.update([4, 5, 6])
print(my_set)  # 输出: {1, 2, 3, 4, 5, 6}

my_set.update((7,8))
print(my_set) # 输出：{1, 2, 3, 4, 5, 6, 7, 8}
```

### 2. 删除元素

*   `remove(element)`:  从集合中删除指定元素。如果元素不存在，会抛出 `KeyError` 异常。
*   `discard(element)`: 从集合中删除指定元素。如果元素不存在，不会抛出异常。
*   `pop()`:  随机删除集合中的一个元素，并返回该元素。由于集合是无序的，所以无法确定删除的是哪个元素。
*   `clear()`:  清空集合中的所有元素。

```python
my_set = {1, 2, 3, 4, 5}

# 删除指定元素
my_set.remove(3)
print(my_set)  # 输出: {1, 2, 4, 5}

# 使用 discard 删除元素（推荐）
my_set.discard(6)  # 元素 6 不存在，不会报错
print(my_set)  # 输出: {1, 2, 4, 5}

# 随机删除一个元素
removed_element = my_set.pop()
print(removed_element)  # 输出: 随机一个元素，例如 1
print(my_set)  # 输出: {2, 4, 5}

# 清空集合
my_set.clear()
print(my_set)  # 输出: set()
```

**选择 `remove` 还是 `discard`？**

通常情况下，推荐使用 `discard` 方法，因为它更安全，不会因为元素不存在而导致程序崩溃。

### 3. 查找元素

虽然集合是无序的，但可以使用 `in` 关键字来判断某个元素是否存在于集合中。

```python
my_set = {1, 2, 3, 4, 5}

# 检查元素是否存在
if 3 in my_set:
    print("3 存在于集合中")  # 输出: 3 存在于集合中
else:
    print("3 不存在于集合中")

if 6 in my_set:
    print("6 存在于集合中")
else:
    print("6 不存在于集合中")  # 输出: 6 不存在于集合中
```

### 4. 集合的大小

使用 `len()` 函数可以获取集合中元素的个数。

```python
my_set = {1, 2, 3, 4, 5}
print(len(my_set))  # 输出: 5
```

## 集合的运算

Python 集合支持常见的集合运算，例如并集、交集、差集等。

### 1. 并集（Union）

并集是指两个集合的所有元素的集合（去除重复元素）。

*   使用 `|` 运算符或 `union()` 方法。

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# 使用 | 运算符
union_set = set1 | set2
print(union_set)  # 输出: {1, 2, 3, 4, 5}

# 使用 union() 方法
union_set = set1.union(set2)
print(union_set)  # 输出: {1, 2, 3, 4, 5}
```

### 2. 交集（Intersection）

交集是指两个集合中共同存在的元素的集合。

*   使用 `&` 运算符或 `intersection()` 方法。

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# 使用 & 运算符
intersection_set = set1 & set2
print(intersection_set)  # 输出: {3}

# 使用 intersection() 方法
intersection_set = set1.intersection(set2)
print(intersection_set)  # 输出: {3}
```

### 3. 差集（Difference）

差集是指存在于第一个集合，但不存在于第二个集合中的元素的集合。

*   使用 `-` 运算符或 `difference()` 方法。

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# 使用 - 运算符
difference_set = set1 - set2
print(difference_set)  # 输出: {1, 2}

# 使用 difference() 方法
difference_set = set1.difference(set2)
print(difference_set)  # 输出: {1, 2}
```

### 4. 对称差集（Symmetric Difference）

对称差集是指两个集合中，只存在于其中一个集合，而不同时存在于两个集合中的元素的集合。

*   使用 `^` 运算符或 `symmetric_difference()` 方法。

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# 使用 ^ 运算符
symmetric_difference_set = set1 ^ set2
print(symmetric_difference_set)  # 输出: {1, 2, 4, 5}

# 使用 symmetric_difference() 方法
symmetric_difference_set = set1.symmetric_difference(set2)
print(symmetric_difference_set)  # 输出: {1, 2, 4, 5}
```

### 5.  子集和超集

*   **子集:** 如果一个集合的所有元素都包含在另一个集合中，则该集合是另一个集合的子集。使用 `<=` 运算符或 `issubset()` 方法判断。
*   **超集:** 如果一个集合包含另一个集合的所有元素，则该集合是另一个集合的超集。使用 `>=` 运算符或 `issuperset()` 方法判断。

```python
set1 = {1, 2}
set2 = {1, 2, 3, 4}

# 判断 set1 是否是 set2 的子集
print(set1 <= set2)  # 输出: True
print(set1.issubset(set2)) # 输出：True

# 判断 set2 是否是 set1 的超集
print(set2 >= set1)  # 输出: True
print(set2.issuperset(set1)) # 输出：True
```

## 总结

集合是 Python 中一种非常有用的数据结构，它具有去重、成员关系判断和集合运算等功能。 掌握集合的创建、常用操作和集合运算，可以更高效地解决一些实际问题。
