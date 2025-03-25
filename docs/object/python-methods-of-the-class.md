---
title: Python 类的方法
---

## 类的方法

类的方法是定义在类中的函数，它们与类的实例（对象）相关联。类的方法可以访问和修改类的状态，也可以调用其他的类方法或实例方法。

### 1. 实例方法 (Instance Methods)

实例方法是最常见的类方法。它们必须至少有一个参数，通常被命名为 `self`。`self` 代表类的实例本身，通过它可以访问实例的属性和其他方法。

**定义:**

```python
class MyClass:
    def instance_method(self, arg1, arg2):
        # 方法体
        pass
```

**调用:**

```python
obj = MyClass()
obj.instance_method(val1, val2)
```

**示例:**

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        """狗叫的方法"""
        print("Woof!")

    def display_info(self):
        """展示狗狗信息"""
        print(f"Name: {self.name}, Breed: {self.breed}")

# 创建 Dog 类的实例
my_dog = Dog("Buddy", "Golden Retriever")

# 调用实例方法
my_dog.bark()  # 输出: Woof!
my_dog.display_info()  # 输出: Name: Buddy, Breed: Golden Retriever
```

**解释:**

*   `__init__` 是一个特殊的实例方法，称为构造方法，用于初始化实例的属性。
*   `bark` 和 `display_info` 是普通的实例方法，可以通过实例对象来调用。
*   `self` 参数让方法能够访问和操作实例的属性（如 `self.name` 和 `self.breed`）。

### 2. 类方法 (Class Methods)

类方法使用 `@classmethod` 装饰器来定义。它们接收一个名为 `cls` 的参数，代表类本身。类方法主要用于访问或修改类的属性，或者创建类的不同实例。

**定义:**

```python
class MyClass:
    @classmethod
    def class_method(cls, arg1, arg2):
        # 方法体
        pass
```

**调用:**

```python
MyClass.class_method(val1, val2)  # 通过类名调用
```

**示例:**

```python
class Circle:
    pi = 3.14159  # 类属性，圆周率

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return Circle.pi * self.radius * self.radius

    @classmethod
    def set_precision(cls, precision):
        """设置圆周率的精度"""
        cls.pi = precision

# 原始精度
my_circle = Circle(5)
print(my_circle.area())  # 输出: 78.53975

# 修改精度
Circle.set_precision(3.14)
print(my_circle.area())  # 输出: 78.5
```

**解释:**

*   `set_precision` 是一个类方法，它可以修改类属性 `pi` 的值。
*   通过 `cls.pi` 访问和修改类属性。
*   类方法通常用于与类本身相关的操作，而不是与类的特定实例相关。

### 3. 静态方法 (Static Methods)

静态方法使用 `@staticmethod` 装饰器来定义。它们既不接收 `self` 参数，也不接收 `cls` 参数。静态方法本质上是定义在类中的普通函数，与类本身和类的实例都没有直接的关联。

**定义:**

```python
class MyClass:
    @staticmethod
    def static_method(arg1, arg2):
        # 方法体
        pass
```

**调用:**

```python
MyClass.static_method(val1, val2)  # 通过类名调用
obj = MyClass()
obj.static_method(val1, val2)      # 也可以通过实例调用
```

**示例:**

```python
class MathUtils:
    @staticmethod
    def add(x, y):
        """静态方法，实现加法"""
        return x + y

    @staticmethod
    def multiply(x, y):
        """静态方法，实现乘法"""
        return x * y

# 调用静态方法
result1 = MathUtils.add(5, 3)
result2 = MathUtils.multiply(5, 3)

print(result1)  # 输出: 8
print(result2)  # 输出: 15
```

**解释:**

*   `add` 和 `multiply` 是静态方法，它们执行简单的数学运算，与 `MathUtils` 类本身没有直接关系。
*   静态方法通常用于将一些与类相关的实用函数组织在一起。

### 总结

| 方法类型   | 装饰器         | 接收参数 | 作用                                                         | 调用方式         |
| -------- | ------------- | ------ | ------------------------------------------------------------ | -------------- |
| 实例方法   | 无             | `self` | 访问和修改实例属性，执行与实例相关的操作                               | `instance.method()` |
| 类方法    | `@classmethod` | `cls`  | 访问和修改类属性，创建类的不同实例                               | `Class.method()`  |
| 静态方法   | `@staticmethod` | 无     | 组织与类相关的实用函数，与类本身和实例都无直接关联                           | `Class.method()`  |

**选择方法类型的依据：**

*   如果方法需要访问或修改实例的状态，则使用实例方法。
*   如果方法需要访问或修改类的状态，或者创建类的不同实例，则使用类方法。
*   如果方法与类或实例的状态无关，只是为了组织代码，则使用静态方法。

希望这个详细的解释和示例能够帮助你理解 Python 中类的方法！