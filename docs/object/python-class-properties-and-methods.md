---
title: Python 类属性与方法
---

# 8. 类属性与方法

在 Python 中，类是创建对象的蓝图。类可以拥有属性和方法，它们是类的成员，用于描述对象的状态和行为。

## 8.1 类属性

类属性是属于类的属性，而不是属于类的实例（对象）。所有类的实例共享同一个类属性。

### 8.1.1 定义类属性

类属性在类定义中，但在任何方法之外定义。

```python
class MyClass:
    class_attribute = "我是类属性"

# 访问类属性
print(MyClass.class_attribute)  # 输出: 我是类属性

# 通过实例访问类属性
instance = MyClass()
print(instance.class_attribute)  # 输出: 我是类属性
```

**注意：**

*   修改类属性会影响所有实例。
*   类属性通常用于存储与类相关的常量或默认值。

### 8.1.2 示例：统计实例数量

```python
class Dog:
    count = 0  # 类属性，用于统计 Dog 实例的数量

    def __init__(self, name):
        self.name = name
        Dog.count += 1  # 每次创建实例，类属性 count 加 1

    def bark(self):
        print(f"{self.name} 汪汪叫！")

# 创建 Dog 实例
dog1 = Dog("旺财")
dog2 = Dog("小黑")

# 访问类属性，获取实例数量
print(f"总共有 {Dog.count} 只狗")  # 输出: 总共有 2 只狗
```

## 8.2 类方法

类方法是绑定到类而不是类的实例的方法。它们使用 `cls` 作为第一个参数，`cls` 代表类本身。

### 8.2.1 定义类方法

使用 `@classmethod` 装饰器来定义类方法。

```python
class MyClass:
    class_attribute = "我是类属性"

    @classmethod
    def class_method(cls):
        print("我是类方法")
        print(f"我可以访问类属性：{cls.class_attribute}")

# 调用类方法
MyClass.class_method()
```

**注意：**

*   类方法可以访问和修改类属性。
*   类方法不能访问实例属性。
*   类方法通常用于创建工厂方法或执行与类相关的操作。

### 8.2.2 示例：工厂方法

工厂方法是一种创建对象的模式。类方法可以作为工厂方法，根据不同的参数创建不同的实例。

```python
class Date:
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    def __str__(self):
        return f"{self.year}-{self.month}-{self.day}"

    @classmethod
    def from_string(cls, date_string):
        year, month, day = map(int, date_string.split('-'))
        date = cls(year, month, day)
        return date

# 使用工厂方法创建 Date 实例
date_string = "2023-10-27"
date = Date.from_string(date_string)
print(date)  # 输出: 2023-10-27
```

## 8.3 静态方法

静态方法是既不绑定到类也不绑定到类的实例的方法。它们像普通函数一样，只是存在于类的命名空间中。

### 8.3.1 定义静态方法

使用 `@staticmethod` 装饰器来定义静态方法。

```python
class MyClass:
    @staticmethod
    def static_method():
        print("我是静态方法")

# 调用静态方法
MyClass.static_method()
```

**注意：**

*   静态方法不能访问类属性或实例属性。
*   静态方法通常用于执行与类相关的实用函数。

### 8.3.2 示例：数学计算

```python
class MathUtils:
    @staticmethod
    def add(x, y):
        return x + y

    @staticmethod
    def multiply(x, y):
        return x * y

# 使用静态方法进行数学计算
result1 = MathUtils.add(5, 3)
result2 = MathUtils.multiply(5, 3)

print(f"5 + 3 = {result1}")  # 输出: 5 + 3 = 8
print(f"5 * 3 = {result2}")  # 输出: 5 * 3 = 15
```

## 8.4 总结

| 特性    | 类属性                  | 类方法            | 静态方法         |
|-------|----------------------|----------------|--------------|
| 绑定    | 类                    | 类              | 无            |
| 第一个参数 | 无                    | `cls` (代表类)    | 无            |
| 访问权限  | 可以被类和所有实例访问          | 可以访问和修改类属性     | 不能访问类属性或实例属性 |
| 用途    | 存储与类相关的常量或默认值，统计实例数量 | 工厂方法，执行与类相关的操作 | 执行与类相关的实用函数  |

希望这篇文档能够帮助你理解 Python 中的类属性和方法。
