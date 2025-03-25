---
title: Python 字典
---

# Python 字典

字典是 Python 中非常重要和常用的数据结构。它允许你以键值对 (key-value pairs) 的形式存储数据。 想象一下，你有一个电话簿，可以通过名字（键）快速查找到对应的电话号码（值）。字典的作用与之类似。

## 1. 什么是字典？

*   **键 (Key):**  字典中的每个元素都有一个唯一的键，用于标识该元素。键通常是字符串、数字或元组等不可变类型。
*   **值 (Value):**  与键关联的数据。值可以是任何 Python 数据类型，包括数字、字符串、列表、甚至其他的字典。
*   **键值对 (Key-Value Pair):**  键和值组合在一起构成一个键值对，也称为一个条目 (entry)。

## 2. 字典的特点

*   **无序性:** 字典中的元素没有固定的顺序。这意味着你不能依赖于元素在字典中的位置。
*   **可变性:** 字典是可变的，这意味着你可以添加、删除和修改字典中的元素。
*   **唯一键:**  字典中的键必须是唯一的。如果尝试使用相同的键添加多个值，后面的值会覆盖前面的值。

## 3. 创建字典

### 3.1 使用花括号 `{}`

这是创建字典最常见的方式：

```python
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(my_dict)  # 输出: {'name': 'Alice', 'age': 30, 'city': 'New York'}
```

**解释:**

*   我们使用花括号 `{}` 将键值对括起来。
*   每个键值对由键、冒号 `:` 和值组成。
*   键值对之间使用逗号 `,` 分隔。

### 3.2 使用 `dict()` 函数

`dict()` 函数也可以用来创建字典。它可以接受不同的参数形式：

*   **从键值对列表创建:**

```python
my_dict = dict([("name", "Bob"), ("age", 25), ("city", "London")])
print(my_dict)  # 输出: {'name': 'Bob', 'age': 25, 'city': 'London'}
```

*   **从关键字参数创建:**

```python
my_dict = dict(name="Charlie", age=35, city="Paris")
print(my_dict)  # 输出: {'name': 'Charlie', 'age': 35, 'city': 'Paris'}
```

### 3.3 创建空字典

```python
empty_dict = {}  # 使用花括号
empty_dict2 = dict() # 使用 dict() 函数

print(empty_dict)  # 输出: {}
print(empty_dict2) # 输出: {}
```

## 4. 访问字典中的值

要访问字典中的值，可以使用键作为索引：

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

name = my_dict["name"]
age = my_dict["age"]

print(name)  # 输出: Alice
print(age)   # 输出: 30
```

**注意:**

*   如果尝试访问字典中不存在的键，会引发 `KeyError` 异常。

### 4.1 使用 `get()` 方法

为了避免 `KeyError` 异常，可以使用 `get()` 方法。`get()` 方法接受一个键作为参数，并返回与该键关联的值。如果键不存在，则返回 `None` (默认) 或指定的默认值。

```python
my_dict = {"name": "Alice", "age": 30}

city = my_dict.get("city")  # 键 "city" 不存在，返回 None
print(city)  # 输出: None

country = my_dict.get("country", "Unknown")  # 键 "country" 不存在，返回 "Unknown"
print(country)  # 输出: Unknown

name = my_dict.get("name") # 键 "name" 存在，返回 "Alice"
print(name) # 输出: Alice
```

## 5. 修改字典

字典是可变的，所以可以修改已存在的键的值，或者添加新的键值对。

### 5.1 修改值

```python
my_dict = {"name": "Alice", "age": 30}

my_dict["age"] = 31  # 修改 "age" 键的值

print(my_dict)  # 输出: {'name': 'Alice', 'age': 31}
```

### 5.2 添加键值对

```python
my_dict = {"name": "Alice", "age": 30}

my_dict["city"] = "New York"  # 添加 "city" 键值对

print(my_dict)  # 输出: {'name': 'Alice', 'age': 30, 'city': 'New York'}
```

## 6. 删除字典中的元素

### 6.1 使用 `del` 语句

`del` 语句可以用来删除字典中的键值对。

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

del my_dict["city"]  # 删除 "city" 键值对

print(my_dict)  # 输出: {'name': 'Alice', 'age': 30}
```

### 6.2 使用 `pop()` 方法

`pop()` 方法删除指定键的键值对，并返回被删除的值。

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

age = my_dict.pop("age")  # 删除 "age" 键值对，并返回 30

print(age)       # 输出: 30
print(my_dict)  # 输出: {'name': 'Alice', 'city': 'New York'}
```

### 6.3 使用 `popitem()` 方法

`popitem()` 方法删除字典中的**最后一个**键值对，并返回被删除的键值对 (以元组形式)。  **注意：** 在 Python 3.7+ 版本中，字典会记住插入顺序，所以 `popitem()` 会删除最后插入的元素。 在旧版本中，由于字典是无序的，所以删除的是随机元素。

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

item = my_dict.popitem()

print(item)      # 输出: ('city', 'New York')  (顺序可能不同，取决于 Python 版本)
print(my_dict)  # 输出: {'name': 'Alice', 'age': 30}
```

### 6.4 使用 `clear()` 方法

`clear()` 方法删除字典中的所有元素，使字典为空。

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

my_dict.clear()

print(my_dict)  # 输出: {}
```

## 7. 字典的常用方法

| 方法        | 描述                                                                 | 示例                                                                        |
| ----------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `keys()`    | 返回一个包含字典所有键的视图对象 (view object)。                        | `my_dict.keys()`  返回类似 `dict_keys(['name', 'age', 'city'])` 的对象。  |
| `values()`  | 返回一个包含字典所有值的视图对象。                                    | `my_dict.values()` 返回类似 `dict_values(['Alice', 30, 'New York'])` 的对象。|
| `items()`   | 返回一个包含字典所有键值对 (以元组形式) 的视图对象。                       | `my_dict.items()` 返回类似 `dict_items([('name', 'Alice'), ('age', 30), ('city', 'New York')])` 的对象。 |
| `copy()`    | 返回字典的浅拷贝。                                                     | `new_dict = my_dict.copy()`                                                 |
| `update()`  | 使用另一个字典的键值对更新当前字典。                                   | `my_dict.update({"country": "USA", "zip": "10001"})`                      |
| `setdefault(key, default)` | 如果键存在，则返回其值。如果键不存在，则插入具有默认值的键。 | `age = my_dict.setdefault("age", 25)`  如果 age 存在则返回 age，不存在则将 age 设置为 25 并返回 25。 |

**示例:**

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

# keys()
keys = my_dict.keys()
print(keys)      # 输出: dict_keys(['name', 'age', 'city'])
print(list(keys)) # 输出: ['name', 'age', 'city'] (转换为列表)

# values()
values = my_dict.values()
print(values)    # 输出: dict_values(['Alice', 30, 'New York'])
print(list(values)) # 输出: ['Alice', 30, 'New York'] (转换为列表)

# items()
items = my_dict.items()
print(items)     # 输出: dict_items([('name', 'Alice'), ('age', 30), ('city', 'New York')])
print(list(items))# 输出: [('name', 'Alice'), ('age', 30), ('city', 'New York')] (转换为列表)

# copy()
new_dict = my_dict.copy()
print(new_dict)  # 输出: {'name': 'Alice', 'age': 30, 'city': 'New York'}

# update()
my_dict.update({"country": "USA", "zip": "10001"})
print(my_dict)  # 输出: {'name': 'Alice', 'age': 30, 'city': 'New York', 'country': 'USA', 'zip': '10001'}

# setdefault()
age = my_dict.setdefault("age", 25) # key 存在
print(age)  # 输出：30
gender = my_dict.setdefault("gender", "Female") # key 不存在，设置默认值 "Female"
print(gender) # 输出：Female
print(my_dict) # 输出：{'name': 'Alice', 'age': 30, 'city': 'New York', 'country': 'USA', 'zip': '10001', 'gender': 'Female'}
```

## 8. 字典的遍历

可以使用循环来遍历字典中的键、值或键值对。

### 8.1 遍历键

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

for key in my_dict:  # 默认遍历键
    print(key)
```

或者使用 `keys()` 方法:

```python
for key in my_dict.keys():
    print(key)
```

输出:

```
name
age
city
```

### 8.2 遍历值

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

for value in my_dict.values():
    print(value)
```

输出:

```
Alice
30
New York
```

### 8.3 遍历键值对

```python
my_dict = {"name": "Alice", "age": 30, "city": "New York"}

for key, value in my_dict.items():
    print(f"Key: {key}, Value: {value}")
```

输出:

```
Key: name, Value: Alice
Key: age, Value: 30
Key: city, Value: New York
```

## 9. 字典推导式 (Dictionary Comprehension)

字典推导式是一种简洁的创建字典的方法。 它类似于列表推导式。

**示例:**

```python
# 创建一个字典，键为数字，值为数字的平方
squares = {x: x**2 for x in range(5)}
print(squares)  # 输出: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# 使用条件过滤
numbers = [1, 2, 3, 4, 5, 6]
even_squares = {x: x**2 for x in numbers if x % 2 == 0}
print(even_squares)  # 输出: {2: 4, 4: 16, 6: 36}
```

## 10. 字典的应用场景

*   **配置信息:**  存储应用程序的配置信息，如数据库连接设置、API 密钥等。
*   **数据映射:**  将一种数据转换为另一种数据，例如，将城市名称映射到城市代码。
*   **缓存:**  缓存计算结果，以避免重复计算。
*   **统计:**  统计单词出现的次数，或者统计其他数据的频率。
*   **表示对象:**  用字典来表示现实世界中的对象，例如，用字典来表示一个学生，包含姓名、年龄、年级等信息。

## 11. 总结

字典是 Python 中非常强大和灵活的数据结构，它允许你以键值对的形式存储和访问数据。 掌握字典的创建、访问、修改、删除和遍历等操作，对于编写高效的 Python 代码至关重要。

希望本教程能够帮助你理解 Python 字典。多多练习，你就能熟练掌握它！
