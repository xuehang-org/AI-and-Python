---
title: Python 类继承
---

# 5. Python 类继承

继承是面向对象编程中的一个重要概念，它允许我们创建一个新类（子类），该类继承现有类（父类或超类）的属性和方法。通过继承，我们可以避免代码重复，并轻松地扩展和修改现有类的功能。

## 5.1 什么是继承？

想象一下，你已经有了一个描述动物的类。这个类有诸如`name`（名字）、`color`（颜色）和`eat()`（吃）之类的方法。现在你想创建一个描述狗的类。狗也是动物，所以它也有名字、颜色，也能吃东西。与其从头开始编写一个全新的狗类，不如让狗类*继承*动物类的属性和方法。这样，狗类就自动拥有了动物类的所有特性，你只需要添加狗类特有的属性和方法，例如`bark()`（叫）。

这就是继承的本质：**子类继承父类的特性，并可以添加自己的特性。**

## 5.2 继承的语法

在 Python 中，继承的语法非常简单：

```python
class 父类名:
    # 父类的属性和方法
    pass

class 子类名(父类名):
    # 子类自己的属性和方法
    pass
```

在定义子类时，只需在类名后面的括号中指定父类的名称即可。

**示例：**

```python
class Animal:  # 父类
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def eat(self):
        print(f"{self.name} is eating.")

class Dog(Animal):  # 子类，继承 Animal 类
    def bark(self):
        print("Woof!")

# 创建 Dog 类的实例
my_dog = Dog("Buddy", "Brown")
print(my_dog.name)  # 输出: Buddy (继承自 Animal)
print(my_dog.color) # 输出: Brown (继承自 Animal)
my_dog.eat()       # 输出: Buddy is eating. (继承自 Animal)
my_dog.bark()      # 输出: Woof! (Dog 类自己的方法)
```

在这个例子中：

*   `Animal` 是父类，具有 `name`、`color` 属性和 `eat()` 方法。
*   `Dog` 是子类，继承了 `Animal` 类的所有属性和方法，并且还添加了 `bark()` 方法。
*   我们可以像访问 `Dog` 类自己的属性和方法一样，访问从 `Animal` 类继承的属性和方法。

## 5.3 方法重写

子类可以*重写*（override）父类的方法。这意味着子类可以定义一个与父类同名的方法，从而改变该方法的行为。

**示例：**

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        print("Generic animal sound")

class Dog(Animal):
    def make_sound(self):  # 重写父类的方法
        print("Woof!")

class Cat(Animal):
    def make_sound(self):  # 重写父类的方法
        print("Meow!")


animal = Animal("Generic Animal")
dog = Dog("Buddy")
cat = Cat("Whiskers")

animal.make_sound()  # 输出: Generic animal sound
dog.make_sound()     # 输出: Woof!
cat.make_sound()     # 输出: Meow!
```

在这个例子中：

*   `Animal` 类有一个 `make_sound()` 方法，它打印 "Generic animal sound"。
*   `Dog` 和 `Cat` 类都*重写*了 `make_sound()` 方法，分别打印 "Woof!" 和 "Meow!"。
*   当我们调用 `dog.make_sound()` 时，实际上调用的是 `Dog` 类中重写后的 `make_sound()` 方法，而不是 `Animal` 类中的原始方法。

## 5.4 `super()` 函数

当子类重写父类的方法时，有时我们仍然需要在子类的方法中调用父类的方法。这时，可以使用 `super()` 函数。`super()` 函数返回一个表示父类对象的特殊对象，我们可以使用它来调用父类的方法。

**示例：**

```python
class Animal:
    def __init__(self, name):
        self.name = name
        print("Animal __init__ called")

    def make_sound(self):
        print("Generic animal sound")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # 调用父类的 __init__ 方法
        self.breed = breed
        print("Dog __init__ called")

    def make_sound(self):
        super().make_sound()  # 调用父类的 make_sound 方法
        print("Woof!")

my_dog = Dog("Buddy", "Golden Retriever")
my_dog.make_sound()
```

输出结果：

```
Animal __init__ called
Dog __init__ called
Generic animal sound
Woof!
```

在这个例子中：

*   在 `Dog` 类的 `__init__()` 方法中，我们使用 `super().__init__(name)` 调用了 `Animal` 类的 `__init__()` 方法，以初始化 `name` 属性。
*   在 `Dog` 类的 `make_sound()` 方法中，我们使用 `super().make_sound()` 调用了 `Animal` 类的 `make_sound()` 方法，然后再打印 "Woof!"。

使用 `super()` 的好处是：

*   **避免硬编码父类名：** 如果以后父类名发生更改，我们不需要修改子类中的代码。
*   **支持多重继承：** 在多重继承中，`super()` 函数可以正确地调用所有父类的方法。

## 5.5 多重继承

一个类可以继承自多个父类，这称为多重继承。

**示例：**

```python
class Swimmer:
    def swim(self):
        print("Swimming")

class Runner:
    def run(self):
        print("Running")

class Athlete(Swimmer, Runner):  # 多重继承
    pass

athlete = Athlete()
athlete.swim()  # 输出: Swimming
athlete.run()   # 输出: Running
```

在这个例子中，`Athlete` 类同时继承了 `Swimmer` 和 `Runner` 类，因此它既可以游泳，也可以跑步。

**注意：** 多重继承可能会导致一些复杂的问题，例如命名冲突（当多个父类具有相同名称的属性或方法时）。因此，在使用多重继承时要小心谨慎。

## 5.6 总结

继承是面向对象编程中一个强大的工具，它可以帮助我们编写更加模块化、可重用和易于维护的代码。

*   子类继承父类的属性和方法。
*   子类可以重写父类的方法以改变其行为。
*   可以使用 `super()` 函数调用父类的方法。
*   一个类可以继承自多个父类，这称为多重继承。

希望这篇文档能够帮助你理解 Python 中的类继承。