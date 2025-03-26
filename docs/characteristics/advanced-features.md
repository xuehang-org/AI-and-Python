---
title: Python 高级特性
---

# Python 高级特性

Python 是一种功能强大的编程语言，它提供了许多高级特性，可以帮助我们编写更简洁、更高效的代码。 本章将介绍一些常用的 Python 高级特性，包括：

-   [列表推导式](#列表推导式)
-   [生成器](#生成器)
-   [迭代器](#迭代器)
-   [装饰器](#装饰器)
-   [上下文管理器](#上下文管理器)

## 列表推导式

列表推导式（List Comprehension）是一种简洁的创建列表的方式。它允许你用一行代码生成一个新的列表，而不需要使用循环。

**语法:**

```python
[expression for item in iterable if condition]
```

*   `expression`: 你想要添加到新列表中的元素。
*   `item`: 可迭代对象（例如，列表、元组、字符串）中的每个元素。
*   `iterable`: 可迭代对象。
*   `condition` (可选): 一个过滤条件，只有满足条件的元素才会被添加到新列表中。

**示例 1: 创建一个包含 0 到 9 平方的列表**

```python
squares = [x**2 for x in range(10)]
print(squares)  # 输出: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

**示例 2: 创建一个包含 0 到 9 中偶数平方的列表**

```python
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # 输出: [0, 4, 16, 36, 64]
```

**示例 3: 将字符串列表转换为大写**

```python
words = ['hello', 'world', 'python']
upper_words = [word.upper() for word in words]
print(upper_words)  # 输出: ['HELLO', 'WORLD', 'PYTHON']
```

**优点:**

*   **简洁:**  可以用一行代码代替循环。
*   **可读性好:**  语法接近自然语言，易于理解。
*   **效率较高:**  通常比循环更快，因为 Python 内部对列表推导式做了优化。

## 生成器

生成器（Generator）是一种特殊的迭代器，它可以动态地生成值，而不是一次性地将所有值存储在内存中。  这在处理大量数据时非常有用，因为它可以节省内存。

**创建生成器:**

1.  **生成器函数:** 使用 `yield` 关键字的函数。
2.  **生成器表达式:** 类似于列表推导式，但使用圆括号 `()`。

**示例 1: 生成器函数**

```python
def my_generator(n):
    for i in range(n):
        yield i

# 创建一个生成器对象
gen = my_generator(5)

# 迭代生成器
for value in gen:
    print(value)  # 输出: 0 1 2 3 4
```

**解释:**

*   `my_generator(n)` 是一个生成器函数。
*   当调用 `my_generator(5)` 时，它返回一个生成器对象 `gen`。
*   每次使用 `yield` 关键字时，函数会暂停执行，并将 `i` 的值返回。
*   下次迭代时，函数会从上次暂停的地方继续执行。
*   当函数执行完毕时，生成器会停止生成值。

**示例 2: 生成器表达式**

```python
squares = (x**2 for x in range(5))

for value in squares:
    print(value)  # 输出: 0 1 4 9 16
```

**优点:**

*   **节省内存:**  生成器只在需要时生成值，不会一次性将所有值存储在内存中。
*   **延迟计算:**  生成器可以延迟计算，只有在需要时才计算值。
*   **可迭代:**  生成器是迭代器，可以使用 `for` 循环进行迭代。

## 迭代器

迭代器（Iterator）是一个可以记住遍历的位置的对象。  它从集合的第一个元素开始访问，直到所有元素被访问完毕。

**迭代器协议:**

*   迭代器对象必须实现 `__iter__()` 和 `__next__()` 方法。
*   `__iter__()` 方法返回迭代器对象自身。
*   `__next__()` 方法返回下一个元素。  如果没有更多元素，则引发 `StopIteration` 异常。

**示例:**

```python
class MyIterator:
    def __init__(self, data):
        self.data = data
        self.index = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.index >= len(self.data):
            raise StopIteration
        value = self.data[self.index]
        self.index += 1
        return value

# 创建一个迭代器对象
my_list = [1, 2, 3]
my_iterator = MyIterator(my_list)

# 迭代迭代器
for value in my_iterator:
    print(value)  # 输出: 1 2 3
```

**解释:**

*   `MyIterator` 类实现了迭代器协议。
*   `__iter__()` 方法返回迭代器对象自身。
*   `__next__()` 方法返回下一个元素，并在没有更多元素时引发 `StopIteration` 异常。

**Python 内置迭代器:**

*   列表、元组、字符串、字典、集合等都是可迭代对象。
*   可以使用 `iter()` 函数将可迭代对象转换为迭代器。
*   可以使用 `next()` 函数获取迭代器的下一个元素。

```python
my_list = [1, 2, 3]
my_iterator = iter(my_list)

print(next(my_iterator))  # 输出: 1
print(next(my_iterator))  # 输出: 2
print(next(my_iterator))  # 输出: 3
# print(next(my_iterator))  # 报错: StopIteration
```

## 装饰器

装饰器（Decorator）是一种用于修改函数或类行为的特殊语法。  它本质上是一个函数，接受一个函数作为输入，并返回一个新的函数。

**语法:**

```python
@decorator_function
def my_function():
    # 函数体
    pass
```

**示例 1:  一个简单的装饰器**

```python
def my_decorator(func):
    def wrapper():
        print("在函数执行之前做一些事情")
        func()
        print("在函数执行之后做一些事情")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# 输出:
# 在函数执行之前做一些事情
# Hello!
# 在函数执行之后做一些事情
```

**解释:**

*   `my_decorator` 是一个装饰器函数，它接受一个函数 `func` 作为输入。
*   `wrapper` 函数是内部函数，它在 `func` 函数执行前后执行一些操作。
*   `@my_decorator` 语法将 `say_hello` 函数传递给 `my_decorator` 函数，并将返回的 `wrapper` 函数赋值给 `say_hello`。
*   当我们调用 `say_hello()` 时，实际上调用的是 `wrapper()` 函数。

**示例 2:  带参数的装饰器**

```python
def repeat(num_times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(num_times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# 输出:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!
```

**解释:**

*   `repeat` 是一个带参数的装饰器工厂函数，它接受一个参数 `num_times`。
*   `decorator` 函数是内部函数，它接受一个函数 `func` 作为输入。
*   `wrapper` 函数是内部函数，它重复执行 `func` 函数 `num_times` 次。
*   `@repeat(num_times=3)` 语法首先调用 `repeat(num_times=3)`，返回 `decorator` 函数，然后将 `greet` 函数传递给 `decorator` 函数，并将返回的 `wrapper` 函数赋值给 `greet`。

**优点:**

*   **代码重用:**  可以将通用的功能（例如，日志记录、性能测试、权限验证）封装在装饰器中，并在多个函数中使用。
*   **可读性好:**  使用装饰器可以使代码更简洁、更易于理解。
*   **解耦:**  装饰器可以将功能与函数分离，使代码更模块化。

## 上下文管理器

上下文管理器（Context Manager）是一种用于管理资源的对象。  它确保在使用资源前后执行特定的操作，例如，打开和关闭文件、获取和释放锁。

**语法:**

```python
with context_manager as variable:
    # 在上下文中执行的代码
    pass
```

**示例 1:  使用 `with` 语句打开文件**

```python
with open("my_file.txt", "w") as f:
    f.write("Hello, world!")

# 文件会自动关闭，即使发生异常
```

**解释:**

*   `open("my_file.txt", "w")` 返回一个文件对象，它是一个上下文管理器。
*   `with` 语句会自动调用文件对象的 `__enter__()` 和 `__exit__()` 方法。
*   `__enter__()` 方法返回文件对象自身，并将其赋值给变量 `f`。
*   在 `with` 语句块中，我们可以使用 `f` 变量来操作文件。
*   当 `with` 语句块执行完毕时，无论是否发生异常，`__exit__()` 方法都会被调用，以确保文件被关闭。

**示例 2:  自定义上下文管理器**

```python
class MyContextManager:
    def __enter__(self):
        print("进入上下文")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("退出上下文")
        if exc_type:
            print(f"发生异常: {exc_type}, {exc_val}, {exc_tb}")

    def do_something(self):
        print("在上下文中执行一些操作")

with MyContextManager() as cm:
    cm.do_something()
# 输出:
# 进入上下文
# 在上下文中执行一些操作
# 退出上下文
```

**解释:**

*   `MyContextManager` 类实现了上下文管理器协议。
*   `__enter__()` 方法在进入上下文时被调用，并返回上下文管理器对象自身。
*   `__exit__()` 方法在退出上下文时被调用，无论是否发生异常。  它接受三个参数：异常类型、异常值和回溯信息。
*   在 `with` 语句块中，我们可以使用 `cm` 变量来调用 `MyContextManager` 对象的方法。

**优点:**

*   **资源管理:**  确保资源在使用后被正确释放。
*   **异常处理:**  可以处理在上下文中发生的异常。
*   **代码简洁:**  使代码更易于阅读和维护。

希望这些示例能够帮助你理解 Python 的高级特性。  通过掌握这些特性，你可以编写更简洁、更高效的代码。

