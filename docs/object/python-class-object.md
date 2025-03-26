---
title: Python 类的对象
---

# 3. Python 类的对象

在 Python 中，类是创建对象的蓝图或模板。对象是类的实例。可以把类想象成一个饼干模具，而对象就是用这个模具做出来的饼干。

## 3.1 什么是对象？

对象是包含数据（属性）和行为（方法）的实体。例如，如果你有一个 `Car` 类，那么 `my_car = Car()` 创建的 `my_car` 就是一个 `Car` 对象。

## 3.2 如何创建对象？

要创建一个对象，你需要先定义一个类。然后，你可以使用类名后跟括号 `()` 来创建该类的实例（对象）。

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return "Woof!"

# 创建 Dog 类的对象
my_dog = Dog("Buddy", "Golden Retriever")

print(my_dog.name)  # 输出: Buddy
print(my_dog.breed) # 输出: Golden Retriever
print(my_dog.bark())  # 输出: Woof!
```

在上面的例子中：

- `Dog` 是一个类。
- `my_dog = Dog("Buddy", "Golden Retriever")` 创建了一个 `Dog` 类的对象，并将其赋值给变量 `my_dog`。
- `my_dog.name` 访问了对象的 `name` 属性。
- `my_dog.bark()` 调用了对象的 `bark` 方法。

## 3.3 访问对象的属性和方法

你可以使用点号 `.` 来访问对象的属性和方法。

### 3.3.1 访问属性

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

# 创建 Person 类的对象
person1 = Person("Alice", 30)

# 访问对象的属性
print(person1.name)  # 输出: Alice
print(person1.age)   # 输出: 30
```

### 3.3.2 调用方法

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# 创建 Rectangle 类的对象
rect = Rectangle(5, 10)

# 调用对象的方法
print(rect.area())  # 输出: 50
```

## 3.4 多个对象

一个类可以创建多个对象，每个对象都是该类的一个独立实例，拥有自己的属性值。

```python
class Cat:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def meow(self):
        return "Meow!"

# 创建多个 Cat 类的对象
cat1 = Cat("Whiskers", "Gray")
cat2 = Cat("Mittens", "White")

print(cat1.name)  # 输出: Whiskers
print(cat2.name)  # 输出: Mittens

print(cat1.meow()) # 输出: Meow!
print(cat2.meow()) # 输出: Meow!
```

在上面的例子中，`cat1` 和 `cat2` 是 `Cat` 类的两个不同的对象，它们有各自的名字和颜色。

## 3.5 对象的生命周期

对象的生命周期开始于创建时，结束于不再被引用且被垃圾回收机制回收时。

```python
class MyClass:
    def __init__(self):
        print("对象已创建")

    def __del__(self):
        print("对象已销毁")

# 创建对象
obj = MyClass()  # 输出: 对象已创建

# 删除对象引用
del obj  # 输出: 对象已销毁 (可能不会立即执行，取决于垃圾回收机制)
```

`__del__` 方法（也称为析构函数）在对象即将被销毁时调用。但请注意，Python 的垃圾回收机制是自动的，你通常不需要手动删除对象。

## 3.6 总结

- 对象是类的实例。
- 通过类名后跟括号 `()` 来创建对象。
- 使用点号 `.` 来访问对象的属性和方法。
- 一个类可以创建多个对象，每个对象都是独立的。
- 对象的生命周期开始于创建时，结束于垃圾回收时。

希望这个文档能帮助你理解 Python 类对象的概念！如果有任何问题，随时提出。
