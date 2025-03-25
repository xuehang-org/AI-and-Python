---
title: Python 类定义
---
# 类定义

在 Python 中，类是面向对象编程的核心概念。简单来说，类就像一个模板或者蓝图，用于创建具有相似属性和行为的对象。

## 1. 什么是类？

*   **类（Class）：** 是一种抽象的概念，它定义了一类对象的共同特征（属性）和行为（方法）。
*   **对象（Object）：** 是类的实例。你可以把类想象成一个饼干模具，而对象就是用这个模具做出来的饼干。

## 2. 如何定义类？

在 Python 中，使用 `class` 关键字来定义一个类。

**语法：**

```python
class 类名:
    # 类体：包含属性和方法
    属性 = 初始值  # 属性（也叫成员变量）
    def 方法名(self, 参数列表):  # 方法（也叫成员函数）
        # 方法体
        pass
```

**解释：**

*   `class`：关键字，用于声明一个类。
*   `类名`：类的名称，通常采用驼峰命名法（例如：`MyClass`）。
*   `属性`：类中定义的变量，用于描述对象的特征。
*   `方法`：类中定义的函数，用于描述对象的行为。
*   `self`：是 Python 类中方法必须有的第一个参数，它代表类的实例（对象）本身。你可以把它理解为“我自己”或者“这个对象”。

## 3. 示例：定义一个简单的 `Dog` 类

```python
class Dog:
    """
    这是一个狗的类
    """
    # 属性
    name = "旺财"
    age = 3

    # 方法
    def bark(self):
        """
        小狗叫
        """
        print("汪汪汪！")

    def introduce(self):
        """
        自我介绍
        """
        print(f"大家好！我叫{self.name}，今年{self.age}岁了。")

# 创建 Dog 类的实例（对象）
my_dog = Dog()

# 访问对象的属性
print(my_dog.name)  # 输出: 旺财
print(my_dog.age)   # 输出: 3

# 调用对象的方法
my_dog.bark()       # 输出: 汪汪汪！
my_dog.introduce()  # 输出: 大家好！我叫旺财，今年3岁了。
```

**代码解释：**

1.  **定义类：** `class Dog:` 定义了一个名为 `Dog` 的类。
2.  **属性：**
    *   `name = "旺财"` 定义了一个名为 `name` 的属性，初始值为 "旺财"。
    *   `age = 3` 定义了一个名为 `age` 的属性，初始值为 3。
3.  **方法：**
    *   `def bark(self):` 定义了一个名为 `bark` 的方法，用于模拟狗的叫声。
    *   `def introduce(self):` 定义了一个名为 `introduce` 的方法，用于介绍狗的信息。
4.  **创建对象：** `my_dog = Dog()` 创建了一个 `Dog` 类的实例，并将其赋值给变量 `my_dog`。
5.  **访问属性：** 使用 `my_dog.name` 和 `my_dog.age` 可以访问对象的属性。
6.  **调用方法：** 使用 `my_dog.bark()` 和 `my_dog.introduce()` 可以调用对象的方法。

## 4. 构造方法 `__init__`

`__init__` 是一个特殊的方法，被称为构造方法或者初始化方法。它在创建对象时自动调用，用于初始化对象的属性。

**示例：使用 `__init__` 方法初始化 `Dog` 类的属性**

```python
class Dog:
    def __init__(self, name, age):
        """
        构造方法，用于初始化 Dog 类的属性
        """
        self.name = name
        self.age = age

    def bark(self):
        print("汪汪汪！")

    def introduce(self):
        print(f"大家好！我叫{self.name}，今年{self.age}岁了。")

# 创建 Dog 类的实例，并传入参数
my_dog = Dog("小黑", 5)
your_dog = Dog("大黄", 2)

# 访问对象的属性
print(my_dog.name)  # 输出: 小黑
print(my_dog.age)   # 输出: 5
print(your_dog.name) # 输出: 大黄
print(your_dog.age)  # 输出: 2

# 调用对象的方法
my_dog.introduce()  # 输出: 大家好！我叫小黑，今年5岁了。
your_dog.introduce() # 输出: 大家好！我叫大黄，今年2岁了。
```

**代码解释：**

1.  **`__init__` 方法：**
    *   `def __init__(self, name, age):` 定义了一个构造方法，它接受 `name` 和 `age` 两个参数。
    *   `self.name = name` 将传入的 `name` 值赋给对象的 `name` 属性。
    *   `self.age = age` 将传入的 `age` 值赋给对象的 `age` 属性。
2.  **创建对象并传入参数：**
    *   `my_dog = Dog("小黑", 5)` 创建了一个 `Dog` 类的实例，并将 "小黑" 和 5 作为参数传递给 `__init__` 方法，用于初始化 `my_dog` 对象的属性。
    *   `your_dog = Dog("大黄", 2)` 创建了另一个 `Dog` 类的实例，并将 "大黄" 和 2 作为参数传递给 `__init__` 方法，用于初始化 `your_dog` 对象的属性。

## 5. 总结

*   类是对象的蓝图，用于定义对象的属性和行为。
*   使用 `class` 关键字定义类。
*   属性是类中定义的变量，用于描述对象的特征。
*   方法是类中定义的函数，用于描述对象的行为。
*   `self` 是方法中的第一个参数，代表类的实例（对象）本身。
*   `__init__` 是构造方法，用于在创建对象时初始化对象的属性。

希望这个解释和示例能够帮助你理解 Python 中的类定义！ 记住，多写代码，多练习，才能真正掌握这些概念。
