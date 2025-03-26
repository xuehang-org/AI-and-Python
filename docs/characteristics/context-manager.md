---
title: Python 上下文管理器
---

# 6. Python 上下文管理器

在编程中，我们经常需要打开和关闭资源，比如文件、网络连接、数据库连接等等。如果忘记关闭，或者在关闭之前发生了错误，就可能导致资源泄漏，程序崩溃等问题。

为了解决这个问题，Python 提供了上下文管理器（Context Manager）的概念。它可以确保在使用资源前后，自动执行一些操作，比如打开和关闭文件，建立和断开连接，加锁和解锁等等。

## 6.1 什么是上下文管理器？

简单来说，上下文管理器就是一个定义了 `__enter__` 和 `__exit__` 方法的 Python 对象。

*   **`__enter__` 方法：** 在进入 `with` 语句块时被调用，通常用于获取资源或执行一些准备工作。它可以返回一个值，这个值会被 `as` 关键字后面的变量接收（如果使用了 `as` 的话）。
*   **`__exit__` 方法：** 在退出 `with` 语句块时被调用，通常用于释放资源或执行一些清理工作。它接收三个参数：`exc_type`（异常类型）, `exc_value`（异常实例）, `traceback`（traceback 对象）。如果 `with` 语句块中没有发生异常，这三个参数都为 `None`。如果发生了异常，并且 `__exit__` 方法返回 `True`，那么这个异常会被忽略；如果返回 `False` (默认情况)，这个异常会被重新抛出。

## 6.2 为什么使用上下文管理器？

*   **简化代码：** 可以避免手动编写 try...finally 语句来释放资源。
*   **提高代码可读性：** 可以更清晰地表达资源的管理逻辑。
*   **保证资源安全：** 可以确保资源在使用完毕后被正确释放，即使发生异常也能保证。

## 6.3 如何使用上下文管理器？

Python 提供了 `with` 语句来使用上下文管理器。`with` 语句的基本语法如下：

```python
with context_expression [as variable]:
    # 代码块
    # 在这个代码块中可以使用资源
# 代码块执行完毕后，会自动执行上下文管理器的 __exit__ 方法
```

*   `context_expression`：一个返回上下文管理器对象的表达式。
*   `variable`：一个变量，用于接收 `__enter__` 方法的返回值（可选）。

## 6.4 示例 1：使用 `open()` 函数打开文件

`open()` 函数就是一个上下文管理器，它可以自动关闭文件。

```python
with open("my_file.txt", "w") as f:
    f.write("Hello, world!")
# 文件会自动关闭，无需手动调用 f.close()
```

在这个例子中：

1.  `open("my_file.txt", "w")` 返回一个文件对象，它是一个上下文管理器。
2.  `__enter__` 方法被调用，打开文件，并返回文件对象。
3.  `as f` 将文件对象赋值给变量 `f`。
4.  `with` 语句块中的代码被执行，向文件中写入内容。
5.  `__exit__` 方法被调用，关闭文件。

## 6.5 示例 2：使用 `threading.Lock` 进行线程同步

`threading.Lock` 也是一个上下文管理器，可以方便地进行线程同步。

```python
import threading

lock = threading.Lock()

def my_function():
    with lock:
        # 在这个代码块中，只有一个线程可以执行
        # 可以安全地访问共享资源
        print("Thread acquired the lock")

# 创建并启动多个线程
threads = []
for i in range(5):
    t = threading.Thread(target=my_function)
    threads.append(t)
    t.start()

# 等待所有线程结束
for t in threads:
    t.join()
```

在这个例子中：

1.  `threading.Lock()` 创建一个锁对象，它是一个上下文管理器。
2.  `__enter__` 方法被调用，尝试获取锁。如果锁已经被其他线程占用，当前线程会阻塞，直到锁被释放。
3.  `with` 语句块中的代码被执行，可以安全地访问共享资源。
4.  `__exit__` 方法被调用，释放锁，允许其他线程获取锁。

## 6.6 如何自定义上下文管理器？

要自定义上下文管理器，你需要创建一个类，并实现 `__enter__` 和 `__exit__` 方法。

### 6.6.1 示例 3：自定义一个简单的计时器

```python
import time

class Timer:
    def __enter__(self):
        self.start_time = time.time()
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        self.end_time = time.time()
        self.elapsed_time = self.end_time - self.start_time
        print(f"Elapsed time: {self.elapsed_time:.4f} seconds")

with Timer():
    # 模拟一些耗时操作
    time.sleep(1)
    print("Done!")
```

在这个例子中：

1.  `Timer` 类实现了 `__enter__` 和 `__exit__` 方法，使其成为一个上下文管理器。
2.  `__enter__` 方法记录开始时间，并返回 `self` (可选，这里为了方便访问 `Timer` 实例的属性)。
3.  `__exit__` 方法记录结束时间，计算并打印经过的时间。

### 6.6.2 示例 4：自定义一个数据库连接管理器

```python
import sqlite3

class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None

    def __enter__(self):
        self.connection = sqlite3.connect(self.db_name)
        return self.connection

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type:
            # 如果发生异常，回滚事务
            self.connection.rollback()
            print("Transaction rolled back")
        else:
            # 如果没有发生异常，提交事务
            self.connection.commit()
            print("Transaction committed")
        self.connection.close()

# 使用自定义的数据库连接管理器
with DatabaseConnection("mydatabase.db") as conn:
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")
    cursor.execute("INSERT INTO users (name) VALUES (?)", ("Alice",))
    cursor.execute("INSERT INTO users (name) VALUES (?)", ("Bob",))
    # 模拟一个异常
    # raise Exception("Something went wrong")

print("Done!")
```

在这个例子中：

1.  `DatabaseConnection` 类实现了 `__enter__` 和 `__exit__` 方法，使其成为一个上下文管理器。
2.  `__enter__` 方法建立数据库连接，并返回连接对象。
3.  `__exit__` 方法根据是否发生异常，决定提交还是回滚事务，并关闭连接。

## 6.7 使用 `contextlib` 模块简化上下文管理器的创建

Python 的 `contextlib` 模块提供了一些工具，可以更方便地创建上下文管理器。

### 6.7.1 `contextlib.contextmanager` 装饰器

可以使用 `@contextlib.contextmanager` 装饰器将一个生成器函数转换为上下文管理器。

```python
import contextlib

@contextlib.contextmanager
def my_context_manager():
    # __enter__ 方法的逻辑
    print("Entering the context")
    yield "some value"  # yield 的值会被 as 关键字后面的变量接收
    # __exit__ 方法的逻辑
    print("Exiting the context")

with my_context_manager() as value:
    print(f"Inside the context, value: {value}")
```

在这个例子中：

1.  `@contextlib.contextmanager` 装饰器将 `my_context_manager` 函数转换为上下文管理器。
2.  在 `yield` 之前的代码相当于 `__enter__` 方法的逻辑。
3.  `yield` 语句返回一个值，这个值会被 `as` 关键字后面的变量接收。
4.  在 `yield` 之后的代码相当于 `__exit__` 方法的逻辑。

#### 6.7.1.1 示例 5：使用 `contextlib.contextmanager` 简化文件操作

```python
import contextlib

@contextlib.contextmanager
def open_file(filename, mode):
    f = open(filename, mode)
    try:
        yield f
    finally:
        f.close()

with open_file("my_file.txt", "w") as f:
    f.write("Hello, world!")
```

这个例子和之前的 `open()` 函数的例子功能相同，但是使用了 `contextlib.contextmanager` 装饰器来简化代码。

## 6.8 总结

上下文管理器是 Python 中一个非常强大的特性，可以帮助你编写更简洁、更安全的代码。无论是处理文件、网络连接、线程同步，还是自定义资源管理逻辑，上下文管理器都能派上用场。

希望这个教程能够帮助你理解和使用 Python 的上下文管理器！