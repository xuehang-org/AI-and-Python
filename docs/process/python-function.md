---
title: Python 函数
---

# 16. Python 函数

函数是编程中一个非常重要的概念，它可以帮助我们将代码组织成可重用的块，让代码更易读、易维护。 简单来说，函数就是一段**可以重复使用的代码块**。

## 16.1 为什么需要函数？

想象一下，如果你要计算多个圆的面积，每次都写一遍计算公式，代码会变得很冗长。 使用函数，你只需要定义一次计算圆面积的函数，然后在需要的时候调用它即可。

函数的主要优点：

*   **代码重用:** 避免重复编写相同的代码。
*   **模块化:** 将复杂的问题分解成更小的、易于管理的模块。
*   **可读性:** 使代码结构更清晰，易于理解。
*   **易于维护:** 修改函数比修改多处重复代码更方便。

## 16.2 函数的定义

在 Python 中，使用 `def` 关键字来定义函数。 函数的基本结构如下：

```python
def 函数名(参数列表):
  """文档字符串 (docstring)，描述函数的功能"""
  函数体
  return 返回值
```

*   **`def` 关键字:**  表示开始定义一个函数。
*   **`函数名`:**  你给函数起的名字，要具有描述性，方便理解函数的功能。
*   **`参数列表`:**  函数可以接受零个或多个参数，参数是函数接收的输入。
*   **`文档字符串 (docstring)`:**  对函数功能的详细描述，用三引号 `""" """` 包围。 这是一个良好的编程习惯，方便其他人理解你的代码。
*   **`函数体`:**  函数要执行的代码块，需要缩进。
*   **`return 返回值`:**  函数可以返回一个值，也可以不返回任何值（`return None` 或省略 `return` 语句）。

**示例：**

```python
def greet(name):
  """向指定的人打招呼"""
  print(f"你好，{name}!")

# 调用函数
greet("张三")  # 输出：你好，张三!
greet("李四")  # 输出：你好，李四!
```

在这个例子中：

*   `def greet(name):` 定义了一个名为 `greet` 的函数，它接受一个参数 `name`。
*   `"""向指定的人打招呼"""` 是文档字符串，描述了函数的功能。
*   `print(f"你好，{name}!")` 是函数体，它会打印一句问候语，其中使用了 f-string 来格式化字符串。

### 16.2.1 函数的调用

定义好的函数需要被调用才能执行。 调用函数很简单，只需使用函数名，并在括号中传入相应的参数（如果函数有参数的话）。

**示例：**

```python
def add(x, y):
  """计算两个数的和"""
  return x + y

# 调用函数并获取返回值
result = add(5, 3)
print(result)  # 输出：8

# 也可以直接在 print 语句中调用函数
print(add(10, 20))  # 输出：30
```

## 16.3 函数的参数

函数可以接收不同类型的参数，包括：

*   **位置参数:**  按照定义的顺序传入参数。
*   **关键字参数:**  通过参数名来指定传入的参数。
*   **默认参数:**  在定义函数时，为参数设置默认值。
*   **可变参数:**  允许传入不定数量的参数。

### 16.3.1 位置参数

位置参数是最常见的参数类型，调用函数时，必须按照函数定义时的顺序传入参数。

**示例：**

```python
def describe_person(name, age, city):
  """描述一个人的信息"""
  print(f"姓名：{name}, 年龄：{age}, 城市：{city}")

# 按照顺序传入参数
describe_person("王五", 30, "上海")  # 输出：姓名：王五, 年龄：30, 城市：上海

# 如果参数顺序错误，结果可能不符合预期
describe_person(30, "上海", "王五")  # 输出：姓名：30, 年龄：上海, 城市：王五 (错误)
```

### 16.3.2 关键字参数

使用关键字参数，可以不按照顺序传入参数，但必须指定参数名。

**示例：**

```python
def describe_person(name, age, city):
  """描述一个人的信息"""
  print(f"姓名：{name}, 年龄：{age}, 城市：{city}")

# 使用关键字参数，可以不按顺序
describe_person(age=25, city="北京", name="赵六")  # 输出：姓名：赵六, 年龄：25, 城市：北京
```

### 16.3.3 默认参数

在定义函数时，可以为参数设置默认值。 如果在调用函数时没有传入该参数，则使用默认值。

**示例：**

```python
def greet(name, greeting="你好"):
  """向指定的人打招呼，可以自定义问候语"""
  print(f"{greeting}，{name}!")

# 使用默认问候语
greet("小明")  # 输出：你好，小明!

# 自定义问候语
greet("小红", "早上好")  # 输出：早上好，小红!
```

**注意：** 默认参数必须放在参数列表的末尾。

### 16.3.4 可变参数

有时候，你可能需要一个函数能够接受任意数量的参数。 Python 提供了两种可变参数：

*   `*args`:  接收任意数量的位置参数，会将这些参数打包成一个元组 (tuple)。
*   `**kwargs`: 接收任意数量的关键字参数，会将这些参数打包成一个字典 (dictionary)。

**示例：`*args`**

```python
def calculate_sum(*numbers):
  """计算任意多个数的和"""
  total = 0
  for num in numbers:
    total += num
  return total

# 传入不同数量的参数
print(calculate_sum(1, 2, 3))  # 输出：6
print(calculate_sum(4, 5, 6, 7))  # 输出：22
print(calculate_sum())  # 输出：0
```

**示例：`**kwargs`**

```python
def describe_profile(**user_info):
  """描述用户档案信息"""
  for key, value in user_info.items():
    print(f"{key}: {value}")

# 传入不同的关键字参数
describe_profile(name="钱七", age=35, city="深圳")
# 输出：
# name: 钱七
# age: 35
# city: 深圳

describe_profile(name="孙八", email="sunba@example.com")
# 输出：
# name: 孙八
# email: sunba@example.com
```

**同时使用 `*args` 和 `**kwargs`：**

```python
def my_function(*args, **kwargs):
    print("位置参数 (args):", args)
    print("关键字参数 (kwargs):", kwargs)

my_function(1, 2, 3, name="Alice", age=30)
# 输出：
# 位置参数 (args): (1, 2, 3)
# 关键字参数 (kwargs): {'name': 'Alice', 'age': 30}
```

## 16.4 函数的返回值

函数可以使用 `return` 语句返回一个值。  返回值可以是任何数据类型，包括数字、字符串、列表、字典等。

*   如果函数没有 `return` 语句，或者 `return` 语句后面没有值，则函数默认返回 `None`。

**示例：**

```python
def multiply(x, y):
  """计算两个数的乘积"""
  return x * y

result = multiply(2, 4)
print(result)  # 输出：8

def do_something():
  """一个没有返回值的函数"""
  print("执行了一些操作")

return_value = do_something()
print(return_value)  # 输出：None
```

## 16.5 变量的作用域

变量的作用域指的是变量在代码中可以被访问的范围。 在函数中定义的变量，默认情况下是局部变量，只能在该函数内部访问。  在函数外部定义的变量是全局变量，可以在程序的任何地方访问。

**示例：**

```python
global_var = 10  # 全局变量

def my_function():
  local_var = 5  # 局部变量
  print(f"在函数内部访问全局变量: {global_var}")
  print(f"在函数内部访问局部变量: {local_var}")

my_function()
print(f"在函数外部访问全局变量: {global_var}")

# 尝试在函数外部访问局部变量会报错
# print(local_var)  # NameError: name 'local_var' is not defined
```

**使用 `global` 关键字修改全局变量：**

如果在函数内部想要修改全局变量，需要使用 `global` 关键字声明。

```python
global_var = 10

def modify_global():
  global global_var  # 声明 global_var 是全局变量
  global_var = 20
  print(f"在函数内部修改全局变量: {global_var}")

modify_global()
print(f"在函数外部访问全局变量: {global_var}")  # 输出：在函数外部访问全局变量: 20
```

## 16.6 匿名函数

除了使用 `def` 关键字定义函数外，Python 还支持使用 `lambda` 关键字创建匿名函数。  匿名函数是一种简洁的、单行的函数，通常用于简单的操作。

**语法：**

```python
lambda 参数列表: 表达式
```

**示例：**

```python
# 定义一个 lambda 函数，计算一个数的平方
square = lambda x: x * x

# 调用 lambda 函数
print(square(5))  # 输出：25

# lambda 函数通常与高阶函数一起使用，例如 map, filter, reduce
numbers = [1, 2, 3, 4, 5]

# 使用 map 函数和 lambda 函数，计算每个数的平方
squared_numbers = map(lambda x: x * x, numbers)
print(list(squared_numbers))  # 输出：[1, 4, 9, 16, 25]
```

## 16.7 总结

函数是 Python 编程中非常重要的组成部分。 掌握函数的定义、调用、参数传递、返回值以及作用域等概念，可以帮助你编写更高效、更易于维护的代码。  希望通过这篇文章，你对 Python 函数有了更深入的理解。 接下来，多多练习，尝试编写各种各样的函数，相信你会很快掌握它的！
