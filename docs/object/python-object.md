---
title: Python 面向对象
---

# 1. Python 面向对象编程

面向对象编程 (Object-Oriented Programming，简称 OOP) 是一种非常流行的编程思想。它把程序中的数据和操作数据的方法组合成一个称为**对象**的单元。 这样，程序设计就更接近于我们现实世界的思考方式。

## 1.1 什么是对象？

你可以把对象想象成一个“东西”，它有自己的**属性**（特征）和**方法**（能做什么）。

*   **属性**：描述对象的状态。 比如，一辆汽车的颜色、品牌、型号等。
*   **方法**：描述对象的行为。 比如，汽车可以启动、停止、加速、刹车等。

**举个例子：**

假设我们有一个“小猫”对象。

*   **属性**： 名字、颜色、年龄、品种
*   **方法**： 叫、跑、跳、睡觉

## 1.2 类：对象的蓝图

类是创建对象的“蓝图”或“模板”。 它定义了对象应该具有哪些属性和方法。 可以用类来创建多个具有相同属性和方法的对象。

**你可以这样理解：**

类就像一个饼干模具，而对象就是用这个模具做出来的饼干。 所有的饼干都来自同一个模具，所以它们有相似的形状，但每个饼干又都是独一无二的。

### 1.2.1 定义类

在 Python 中，使用 `class` 关键字来定义一个类。

```python
class Cat:
    """
    这是一个猫类
    """
    # 属性（也称为成员变量）
    name = "Tom"
    color = "white"
    age = 2

    # 方法（也称为成员函数）
    def say(self):
        print("喵喵喵")

    def run(self):
        print("小猫快跑")
```

**代码解释：**

*   `class Cat:`  定义了一个名为 `Cat` 的类。
*   `"""这是一个猫类"""`  是类的文档字符串（docstring），用于描述类的作用。
*   `name = "Tom"`  `color = "white"` `age = 2` 定义了三个属性，分别是名字、颜色和年龄。
*   `def say(self):` 和 `def run(self):`  定义了两个方法，分别是叫和跑。
*   `self`  是一个特殊的参数，它指向对象本身。在方法内部，可以使用 `self` 来访问对象的属性和调用对象的方法。

### 1.2.2 创建对象

有了类之后，就可以创建对象了。 创建对象的过程也称为**实例化**。

```python
# 创建一个 Cat 类的对象
my_cat = Cat()

# 访问对象的属性
print(my_cat.name)  # 输出: Tom
print(my_cat.color) # 输出: white
print(my_cat.age)   # 输出: 2

# 调用对象的方法
my_cat.say()  # 输出: 喵喵喵
my_cat.run()  # 输出: 小猫快跑
```

**代码解释：**

*   `my_cat = Cat()`  创建了一个 `Cat` 类的对象，并将其赋值给变量 `my_cat`。
*   `my_cat.name`  访问 `my_cat` 对象的 `name` 属性。
*   `my_cat.say()`  调用 `my_cat` 对象的 `say()` 方法。

### 1.2.3 `__init__` 方法：构造函数

`__init__` 方法是一个特殊的方法，也称为**构造函数**。 它在创建对象时自动调用，用于初始化对象的属性。

```python
class Cat:
    def __init__(self, name, color, age):
        """
        构造函数，用于初始化 Cat 对象的属性
        """
        self.name = name
        self.color = color
        self.age = age

    def say(self):
        print(f"我是 {self.name}， 喵喵喵")

# 创建 Cat 对象，并传入参数
my_cat = Cat("咪咪", "橘色", 3)

# 访问对象的属性
print(my_cat.name)  # 输出: 咪咪
print(my_cat.color) # 输出: 橘色
print(my_cat.age)   # 输出: 3

# 调用对象的方法
my_cat.say()  # 输出: 我是 咪咪， 喵喵喵
```

**代码解释：**

*   `def __init__(self, name, color, age):`  定义了构造函数，它有三个参数：`self`、`name`、`color` 和 `age`。
*   `self.name = name`  将传入的 `name` 参数赋值给对象的 `name` 属性。
*   创建对象时，需要传入 `name`、`color` 和 `age` 三个参数。
*   在 `say()` 方法中，使用 `self.name` 访问对象的 `name` 属性。

### 1.2.4 练习

定义一个 `Dog` 类，包含属性：`name` (名字), `breed` (品种), `age` (年龄)。
包含方法：`bark` (叫), `wag_tail` (摇尾巴)。

```python
class Dog:
    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age

    def bark(self):
        print("汪汪汪！")

    def wag_tail(self):
        print("尾巴摇起来啦！")

# 创建 Dog 对象
my_dog = Dog("旺财", "中华田园犬", 5)

# 访问属性
print(my_dog.name)   # 输出: 旺财
print(my_dog.breed)  # 输出: 中华田园犬
print(my_dog.age)    # 输出: 5

# 调用方法
my_dog.bark()      # 输出: 汪汪汪！
my_dog.wag_tail() # 输出: 尾巴摇起来啦！
```

## 1.3. 面向对象的三大特性

面向对象编程有三大特性：封装、继承和多态。

### 1.3.1 封装

封装是指将对象的属性和方法捆绑在一起，形成一个独立的单元。 这样可以隐藏对象的内部实现细节，只对外提供公共接口。

**好处：**

*   **信息隐藏：**  保护对象内部的数据，防止外部随意修改。
*   **代码复用：**  将常用的功能封装成方法，方便在其他地方调用。
*   **降低复杂性：**  将复杂的系统分解成多个独立的模块，方便开发和维护。

**例如：**

```python
class BankAccount:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.__balance = balance  # 使用 __ 开头表示私有属性

    def deposit(self, amount):
        self.__balance += amount
        print(f"成功存入 {amount} 元， 余额为 {self.__balance} 元")

    def withdraw(self, amount):
        if amount > self.__balance:
            print("余额不足")
        else:
            self.__balance -= amount
            print(f"成功取出 {amount} 元， 余额为 {self.__balance} 元")

    def get_balance(self):
        return self.__balance

# 创建 BankAccount 对象
my_account = BankAccount("1234567890", 1000)

# 存钱
my_account.deposit(500)  # 输出: 成功存入 500 元， 余额为 1500 元

# 取钱
my_account.withdraw(200)  # 输出: 成功取出 200 元， 余额为 1300 元

# 获取余额
print(my_account.get_balance())  # 输出: 1300

# 尝试直接访问私有属性（不推荐）
# print(my_account.__balance)  # 会报错：AttributeError: 'BankAccount' object has no attribute '__balance'
```

**代码解释：**

*   `__balance`  是一个私有属性，只能在类的内部访问。
*   `deposit()`、`withdraw()` 和 `get_balance()`  是公共方法，用于操作 `__balance` 属性。
*   外部代码只能通过公共方法来访问和修改对象的属性，而不能直接访问私有属性。

### 1.3.2 继承

继承是指一个类可以继承另一个类的属性和方法。 被继承的类称为**父类**或**基类**， 继承的类称为**子类**或**派生类**。

**好处：**

*   **代码复用：**  子类可以继承父类的属性和方法，避免重复编写代码。
*   **扩展功能：**  子类可以在父类的基础上添加新的属性和方法，扩展类的功能。
*   **提高代码可维护性：**  通过继承，可以建立类之间的层次关系，方便代码的组织和维护。

**例如：**

```python
# 父类
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} 正在吃东西")

# 子类
class Cat(Animal):
    def __init__(self, name, color):
        # 调用父类的构造函数
        super().__init__(name)
        self.color = color

    def say(self):
        print(f"我是 {self.name}， 喵喵喵")

# 子类
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def bark(self):
        print(f"我是 {self.name}， 汪汪汪")

# 创建 Cat 对象
my_cat = Cat("咪咪", "橘色")
my_cat.eat()  # 输出: 咪咪 正在吃东西
my_cat.say()  # 输出: 我是 咪咪， 喵喵喵

# 创建 Dog 对象
my_dog = Dog("旺财", "中华田园犬")
my_dog.eat()  # 输出: 旺财 正在吃东西
my_dog.bark()  # 输出: 我是 旺财， 汪汪汪
```

**代码解释：**

*   `class Cat(Animal):`  表示 `Cat` 类继承自 `Animal` 类。
*   `super().__init__(name)`  调用父类的构造函数，初始化 `name` 属性。
*   `Cat` 类和 `Dog` 类都继承了 `Animal` 类的 `eat()` 方法。
*   `Cat` 类有自己的 `say()` 方法， `Dog` 类有自己的 `bark()` 方法。

### 1.3.3 多态

多态是指不同的对象可以对同一个方法做出不同的响应。

**好处：**

*   **灵活性：**  可以根据对象的类型来调用不同的方法，提高代码的灵活性。
*   **可扩展性：**  可以方便地添加新的对象类型，而不需要修改现有的代码。

**例如：**

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print("动物叫声")

class Cat(Animal):
    def speak(self):
        print("喵喵喵")

class Dog(Animal):
    def speak(self):
        print("汪汪汪")

# 创建对象
animal = Animal("动物")
cat = Cat("咪咪")
dog = Dog("旺财")

# 调用 speak() 方法
animal.speak()  # 输出: 动物叫声
cat.speak()     # 输出: 喵喵喵
dog.speak()     # 输出: 汪汪汪

#  多态的体现
def animal_sound(animal):
    animal.speak()

animal_sound(animal)
animal_sound(cat)
animal_sound(dog)
```

**代码解释：**

*   `Cat` 类和 `Dog` 类都重写了 `Animal` 类的 `speak()` 方法。
*   当调用 `animal.speak()` 时，会调用 `Animal` 类的 `speak()` 方法。
*   当调用 `cat.speak()` 时，会调用 `Cat` 类的 `speak()` 方法。
*   当调用 `dog.speak()` 时，会调用 `Dog` 类的 `speak()` 方法。

## 1.4 总结

面向对象编程是一种强大的编程思想，它可以帮助我们更好地组织和管理代码，提高代码的可读性、可维护性和可复用性。 掌握面向对象编程的三大特性（封装、继承和多态），可以让我们写出更加优雅和高效的 Python 代码。
