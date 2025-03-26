---
title: Python 类定义
---

# 2. Python 类的定义

在 Python 中，类是面向对象编程的核心概念。它就像一个模板，用于创建具有相同属性和行为的对象。你可以把类想象成一张蓝图，而对象就是根据这张蓝图建造出来的房子。

## 2.1  类的基本结构

一个类的基本结构如下：

```python
class ClassName:
    # 类的属性（变量）
    attribute1 = value1
    attribute2 = value2

    # 类的方法（函数）
    def method1(self, parameter1, parameter2):
        # 方法体
        pass

    def method2(self):
        # 方法体
        pass
```

*   **`class` 关键字：** 用于声明一个类。
*   **`ClassName`：** 类的名称，通常采用驼峰命名法（每个单词首字母大写）。
*   **属性：** 类中定义的变量，用于描述对象的状态。
*   **方法：** 类中定义的函数，用于描述对象的行为。
*   **`self`：**  在类的方法中，`self`  是一个特殊的参数，它指向被调用的对象本身。  你可以把它理解为 "我自己"。

## 2.2  类的属性

类的属性是类中定义的变量，用于存储对象的数据。  属性可以是任何 Python 数据类型，例如整数、浮点数、字符串、列表等。

**示例：**

```python
class Dog:
    # 类的属性
    name = "旺财"
    age = 3
    breed = "中华田园犬"
```

在这个例子中，`Dog` 类有三个属性：`name`、`age` 和 `breed`。  它们分别表示狗的名字、年龄和品种。

## 2.3 类的方法

类的方法是类中定义的函数，用于描述对象的行为。  方法可以接收参数，并且可以访问和修改对象的属性。

**示例：**

```python
class Dog:
    # 类的属性
    name = "旺财"
    age = 3
    breed = "中华田园犬"

    # 类的方法
    def bark(self):
        print("汪汪汪！")

    def describe(self):
        print(f"我叫{self.name}，今年{self.age}岁，是一只{self.breed}。")
```

在这个例子中，`Dog` 类有两个方法：`bark` 和 `describe`。

*   `bark` 方法用于让狗叫，它不接收任何参数。
*   `describe` 方法用于描述狗的信息，它使用 `self` 参数来访问对象的属性。

## 2.4  `__init__` 方法

`__init__`  是一个特殊的方法，被称为构造方法。  它在创建对象时自动调用，用于初始化对象的属性。

**示例：**

```python
class Dog:
    def __init__(self, name, age, breed):
        # 初始化对象的属性
        self.name = name
        self.age = age
        self.breed = breed

    def bark(self):
        print("汪汪汪！")

    def describe(self):
        print(f"我叫{self.name}，今年{self.age}岁，是一只{self.breed}。")
```

在这个例子中，`__init__` 方法接收三个参数：`name`、`age` 和 `breed`。  它使用这些参数来初始化对象的 `name`、`age` 和 `breed` 属性。

**注意：**

*   `__init__` 方法的名称是固定的，必须是 `__init__`。
*   `__init__` 方法的第一个参数必须是 `self`。

## 2.5 创建对象

要创建一个类的对象，可以使用以下语法：

```python
object_name = ClassName(arguments)
```

*   `object_name`：对象的名称。
*   `ClassName`：类的名称。
*   `arguments`：传递给构造方法的参数。

**示例：**

```python
class Dog:
    def __init__(self, name, age, breed):
        self.name = name
        self.age = age
        self.breed = breed

    def bark(self):
        print("汪汪汪！")

    def describe(self):
        print(f"我叫{self.name}，今年{self.age}岁，是一只{self.breed}。")

# 创建 Dog 类的对象
dog1 = Dog("小黑", 5, "拉布拉多")
dog2 = Dog("小白", 2, "比熊")

# 调用对象的方法
dog1.bark()  # 输出：汪汪汪！
dog2.describe() # 输出：我叫小白，今年2岁，是一只比熊。
```

在这个例子中，我们创建了两个 `Dog` 类的对象：`dog1` 和 `dog2`。  我们使用不同的参数来初始化它们的属性。  然后，我们调用了它们的方法来让它们叫和描述自己。

## 2.6 总结

*   类是面向对象编程的基础，用于创建具有相同属性和行为的对象。
*   类由属性（变量）和方法（函数）组成。
*   `self`  参数指向被调用的对象本身。
*   `__init__` 方法是构造方法，用于初始化对象的属性。
*   可以使用 `ClassName()`  来创建对象。

希望这个解释能够帮助你理解 Python 类的定义！  多写代码，多练习，你很快就能掌握它。
