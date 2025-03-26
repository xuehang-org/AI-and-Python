---
title: Python 类的方法重写
---

# 方法重写

在 Python 中，子类可以继承父类的属性和方法。但是，有时子类需要修改父类方法的行为，这时就需要用到**方法重写 (Method Overriding)**。

## 什么是方法重写

方法重写是指在子类中定义一个与父类同名的方法，从而覆盖父类中该方法的实现。当子类对象调用该方法时，会执行子类中的版本，而不是父类中的版本。

## 为什么需要方法重写

- **扩展父类的功能**：子类可以在父类方法的基础上添加新的功能。
- **修改父类的行为**：子类可以完全改变父类方法的实现，以适应子类的特定需求。
- **提高代码的灵活性和可维护性**：允许针对不同的子类提供不同的实现，而无需修改父类的代码。

## 如何进行方法重写

1.  在子类中定义一个与父类同名的方法。
2.  在新方法中编写子类所需的实现。
3.  可以使用 `super()` 函数调用父类的方法，以便在子类方法中重用父类的代码。

## 示例

### 示例 1：简单的重写

```python
class Animal:
    def speak(self):
        print("动物发出声音")

class Dog(Animal):
    def speak(self):
        print("汪汪汪！")

class Cat(Animal):
    def speak(self):
        print("喵喵喵！")

animal = Animal()
dog = Dog()
cat = Cat()

animal.speak()  # 输出：动物发出声音
dog.speak()     # 输出：汪汪汪！
cat.speak()     # 输出：喵喵喵！
```

在这个例子中，`Dog` 类和 `Cat` 类都重写了 `Animal` 类的 `speak()` 方法，分别输出了不同的叫声。

### 示例 2：使用 `super()` 调用父类方法

```python
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def display_info(self):
        print(f"品牌: {self.brand}, 型号: {self.model}")

class Car(Vehicle):
    def __init__(self, brand, model, num_doors):
        super().__init__(brand, model)  # 调用父类的 __init__ 方法
        self.num_doors = num_doors

    def display_info(self):
        super().display_info()  # 调用父类的 display_info 方法
        print(f"车门数: {self.num_doors}")

car = Car("比亚迪", "汉", 4)
car.display_info()
```

在这个例子中，`Car` 类的 `__init__()` 方法和 `display_info()` 方法都使用了 `super()` 函数来调用父类的方法，从而避免了重复编写相同的代码。

### 示例 3：扩展父类功能

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)  # 调用父类的 __init__ 方法
        self.side = side

    def perimeter(self):
        return 4 * self.side

square = Square(5)
print(f"正方形的面积: {square.area()}")       # 输出：正方形的面积: 25
print(f"正方形的周长: {square.perimeter()}")    # 输出：正方形的周长: 20
```

在这个例子中，`Square` 类继承了 `Rectangle` 类，并添加了一个新的方法 `perimeter()` 来计算正方形的周长。

### 示例 4：修改父类行为

```python
class BankAccount:
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"存款 {amount} 元，当前余额: {self.balance} 元")

    def withdraw(self, amount):
        if amount > self.balance:
            print("余额不足！")
        else:
            self.balance -= amount
            print(f"取款 {amount} 元，当前余额: {self.balance} 元")

class SavingsAccount(BankAccount):
    def __init__(self, balance, interest_rate):
        super().__init__(balance)
        self.interest_rate = interest_rate

    def withdraw(self, amount):
        if amount > self.balance:
            print("余额不足！")
        elif amount > self.balance * 0.9:  # 每次最多取 90% 的余额
            print("取款金额超过限制！")
        else:
            self.balance -= amount
            print(f"取款 {amount} 元，当前余额: {self.balance} 元")

savings_account = SavingsAccount(1000, 0.05)
savings_account.deposit(500)
savings_account.withdraw(950)
savings_account.withdraw(500)
```

在这个例子中，`SavingsAccount` 类重写了 `withdraw()` 方法，添加了取款金额的限制，每次最多只能取 90% 的余额。

## 注意事项

-   重写方法时，方法名、参数列表和返回值类型应该与父类方法保持一致。
-   可以使用 `@override` 装饰器（需要安装 `typing_extensions` 库）来显式地声明一个方法正在重写父类的方法，虽然这不是强制的，但可以提高代码的可读性和可维护性。
-   避免过度使用方法重写，应该根据实际需求来判断是否需要重写父类的方法。

## 总结

方法重写是 Python 面向对象编程中的一个重要概念，它允许子类根据自己的需求修改或扩展父类的行为。通过合理地使用方法重写，可以提高代码的灵活性、可维护性和可扩展性。
