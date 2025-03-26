---
title: Python 类的多继承
---

# 6. Python 类的多继承

## 6.1 什么是多继承？

简单来说，多继承就是一个类可以同时继承多个父类，从而拥有多个父类的属性和方法。

想象一下，你既有你爸爸的基因，又有你妈妈的基因，那你既像爸爸，又像妈妈，这就是多继承的概念。

## 6.2 为什么要用多继承？

多继承可以让你更灵活地组合不同的功能。如果一个类需要同时具备多个类的特性，使用多继承可以避免代码重复，提高代码的复用性。

举个例子，假设我们有一个 `Bird` 类和一个 `Plane` 类：

```python
class Bird:
    def fly(self):
        print("鸟儿在飞翔...")

class Plane:
    def fly(self):
        print("飞机在飞行...")
```

如果我们想创建一个既能像鸟一样飞，又能像飞机一样飞的 `FlyingCar` 类，就可以使用多继承：

```python
class FlyingCar(Bird, Plane):
    pass

my_flying_car = FlyingCar()
my_flying_car.fly()  # 输出: 鸟儿在飞翔...
```

可以看到，`FlyingCar` 类同时继承了 `Bird` 类和 `Plane` 类，所以它既有 `Bird` 类的 `fly` 方法，也有 `Plane` 类的 `fly` 方法。

**注意：**  默认调用的是位于继承列表最前面的父类方法,也就是`Bird`类的`fly`方法。

## 6.3 多继承的语法

Python 中多继承的语法非常简单，只需要在定义类的时候，在括号里写上所有父类的名字，用逗号隔开即可：

```python
class 子类(父类1, 父类2, 父类3, ...):
    # 类的内容
    pass
```

## 6.4 多继承的例子

为了更好地理解多继承，我们再来看一个例子：

```python
class Animal:
    def eat(self):
        print("动物在吃东西...")

class Runnable:
    def run(self):
        print("可以奔跑...")

class Flyable:
    def fly(self):
        print("可以飞行...")

class Dog(Animal, Runnable): # 继承自动物和可跑的特性
    pass

class Airplane(Flyable, ): # 继承自可以飞的特性
    def __init__(self):
        self.name = "波音747"
    pass

class FlyingDog(Animal, Runnable, Flyable): # 继承自动物,可跑,可飞的特性
    pass

my_dog = Dog()
my_dog.eat()  # 输出: 动物在吃东西...
my_dog.run()  # 输出: 可以奔跑...

my_airplane = Airplane()
my_airplane.fly() # 输出: 可以飞行...
print(my_airplane.name) # 输出: 波音747

my_flying_dog = FlyingDog()
my_flying_dog.eat() # 输出: 动物在吃东西...
my_flying_dog.run() # 输出: 可以奔跑...
my_flying_dog.fly() # 输出: 可以飞行...
```

在这个例子中，`Dog` 类继承了 `Animal` 类和 `Runnable` 类，所以它既有 `eat` 方法，又有 `run` 方法。`FlyingDog` 类继承了 `Animal`、`Runnable` 和 `Flyable` 类，所以它既有 `eat` 方法，又有 `run` 方法，还有 `fly` 方法。

## 6.5 MRO 方法解析顺序

当一个类继承了多个父类，并且多个父类有同名方法时，Python 如何决定调用哪个方法呢？ 这就涉及到 MRO (Method Resolution Order) 方法解析顺序。

MRO 决定了 Python 在查找方法时的顺序。  Python 使用 C3 线性化算法来计算 MRO。  简单来说，MRO 的顺序是：

1.  类自身
2.  父类列表中的第一个父类
3.  父类列表中的第二个父类
4.  ...
5.  object 类 (所有类的最终父类)

你可以使用 `类名.__mro__` 或 `类名.mro()`  来查看一个类的 MRO。

例如：

```python
class A:
    def hello(self):
        print("Hello from A")

class B:
    def hello(self):
        print("Hello from B")

class C(A, B):
    pass

print(C.__mro__)
# 输出: (<class '__main__.C'>, <class '__main__.A'>, <class '__main__.B'>, <class 'object'>)

my_c = C()
my_c.hello()  # 输出: Hello from A
```

在这个例子中，`C` 类继承了 `A` 类和 `B` 类，并且 `A` 类和 `B` 类都有 `hello` 方法。  根据 MRO，Python 首先在 `C` 类中查找 `hello` 方法，如果没有找到，就去 `A` 类中查找，找到了就调用 `A` 类的 `hello` 方法。

## 6.6 多继承的注意事项

虽然多继承很强大，但也需要谨慎使用，因为它可能会导致一些问题：

1.  **命名冲突 (Name Conflicts):**  如果多个父类有同名的属性或方法，子类在调用时可能会产生混淆。  这时你需要显式地指定调用哪个父类的属性或方法。
2.  **菱形继承 (Diamond Problem):**  当一个类继承的多个父类，最终都继承自同一个父类时，可能会出现菱形继承问题。  这会导致代码的复杂性增加，难以维护。

为了避免这些问题，可以考虑使用以下方法：

*   **Mixins:**  Mixins 是一种特殊的类，它通常只包含一些小的、可重用的功能。  可以将多个 Mixins 类组合起来，为一个类添加多个功能。
*   **组合 (Composition):**  不使用继承，而是将其他类的实例作为自己的属性。  这样可以避免继承带来的复杂性，并且更加灵活。

## 6.7 总结

多继承是一种强大的特性，可以让你更灵活地组合不同的功能。  但是，多继承也可能会导致一些问题，需要谨慎使用。  在设计类的时候，要仔细考虑是否真的需要使用多继承，以及如何避免多继承带来的问题。

希望这个讲解能够帮助你理解 Python 类的多继承！
