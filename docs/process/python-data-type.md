---
title: Python 基本数据类型
---
# 4. Python 基本数据类型

在 Python 中，所有的数据都有类型。了解不同的数据类型对于编写有效的 Python 代码至关重要。Python 提供了几种内置的基本数据类型，我们将逐一介绍。

## 4.1 数字类型 (Numeric Types)

Python 中的数字类型用于存储数值。主要有以下几种：

### 4.1.1 整数 (int)

整数是没有小数部分的数字，可以是正数、负数或零。

**示例：**

```python
age = 30
temperature = -5
count = 0

print(type(age))        # 输出: <class 'int'>
print(type(temperature))  # 输出: <class 'int'>
print(type(count))      # 输出: <class 'int'>
```

### 4.1.2 浮点数 (float)

浮点数是带有小数部分的数字。

**示例：**

```python
price = 99.99
pi = 3.14159
height = 1.75

print(type(price))   # 输出: <class 'float'>
print(type(pi))      # 输出: <class 'float'>
print(type(height))  # 输出: <class 'float'>
```

### 4.1.3 复数 (complex)

复数由实部和虚部组成，虚部以 `j` 或 `J` 结尾。

**示例：**

```python
z = 3 + 4j
print(z.real)  # 输出: 3.0 (实部)
print(z.imag)  # 输出: 4.0 (虚部)
print(type(z))  # 输出: <class 'complex'>
```

## 4.2 字符串类型 (String Type)

字符串是由字符组成的序列，用于表示文本信息。在 Python 中，字符串是不可变的。

**示例：**

```python
name = "Alice"
message = 'Hello, World!'
multiline_string = """
This is a multiline string.
It can span multiple lines.
"""

print(type(name))             # 输出: <class 'str'>
print(type(message))          # 输出: <class 'str'>
print(type(multiline_string)) # 输出: <class 'str'>
```

### 4.2.1 字符串操作

- **连接字符串：**

```python
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print(full_name)  # 输出: John Doe
```

- **访问字符串中的字符：**

```python
text = "Python"
print(text[0])  # 输出: P
print(text[1])  # 输出: y
```

- **字符串切片：**

```python
text = "Python"
print(text[2:5])  # 输出: tho
```

## 4.3 布尔类型 (Boolean Type)

布尔类型只有两个值：`True`（真）和 `False`（假）。通常用于逻辑判断。

**示例：**

```python
is_active = True
is_admin = False

print(type(is_active))  # 输出: <class 'bool'>
print(type(is_admin))   # 输出: <class 'bool'>
```

### 4.3.1 布尔运算

- **与 (and)：**

```python
result = True and False  # False
print(result)
```

- **或 (or)：**

```python
result = True or False   # True
print(result)
```

- **非 (not)：**

```python
result = not True       # False
print(result)
```

## 4.4 列表类型 (List Type)

列表是一个有序的集合，可以包含不同类型的元素。列表是可变的。

**示例：**

```python
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]
mixed_list = [1, "Hello", True, 3.14]

print(type(numbers))   # 输出: <class 'list'>
print(type(names))     # 输出: <class 'list'>
print(type(mixed_list) # 输出: <class 'list'>
```

### 4.4.1 列表操作

- **访问列表中的元素：**

```python
numbers = [10, 20, 30]
print(numbers[0])  # 输出: 10
print(numbers[1])  # 输出: 20
```

- **修改列表中的元素：**

```python
numbers = [10, 20, 30]
numbers[0] = 15
print(numbers)  # 输出: [15, 20, 30]
```

- **添加元素到列表：**

```python
numbers = [10, 20, 30]
numbers.append(40)
print(numbers)  # 输出: [10, 20, 30, 40]
```

## 4.5 元组类型 (Tuple Type)

元组与列表类似，也是一个有序的集合。不同之处在于，元组是不可变的。

**示例：**

```python
point = (10, 20)
colors = ("red", "green", "blue")

print(type(point))  # 输出: <class 'tuple'>
print(type(colors)) # 输出: <class 'tuple'>
```

### 4.5.1 元组操作

- **访问元组中的元素：**

```python
point = (10, 20)
print(point[0])  # 输出: 10
print(point[1])  # 输出: 20
```

**注意：** 元组是不可变的，因此不能修改元组中的元素。

## 4.6 集合类型 (Set Type)

集合是一个无序且不包含重复元素的集合。

**示例：**

```python
numbers = {1, 2, 3, 4, 5}
names = {"Alice", "Bob", "Charlie"}

print(type(numbers))  # 输出: <class 'set'>
print(type(names))    # 输出: <class 'set'>
```

### 4.6.1 集合操作

- **添加元素到集合：**

```python
numbers = {1, 2, 3}
numbers.add(4)
print(numbers)  # 输出: {1, 2, 3, 4}
```

- **删除集合中的元素：**

```python
numbers = {1, 2, 3}
numbers.remove(1)
print(numbers)  # 输出: {2, 3}
```

## 4.7 字典类型 (Dictionary Type)

字典是一种键值对的集合，其中每个键都唯一。

**示例：**

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(type(person))  # 输出: <class 'dict'>
```

### 4.7.1 字典操作

- **访问字典中的值：**

```python
person = {"name": "Alice", "age": 30}
print(person["name"])  # 输出: Alice
print(person["age"])   # 输出: 30
```

- **修改字典中的值：**

```python
person = {"name": "Alice", "age": 30}
person["age"] = 35
print(person)  # 输出: {'name': 'Alice', 'age': 35}
```

- **添加键值对到字典：**

```python
person = {"name": "Alice"}
person["age"] = 30
print(person)  # 输出: {'name': 'Alice', 'age': 30}
```

## 4.8 总结

以上就是 Python 中常用的基本数据类型。理解这些数据类型及其特点，能帮助你更好地编写 Python 程序。希望这篇文档对你有所帮助！