---
title: Python 装饰器
---

# Python 装饰器

装饰器是 Python 中一个非常强大的特性，它允许你修改或增强函数或方法的行为，而无需修改其原始代码。  你可以把它想象成一个包装礼物🎁的过程：你有一个礼物（函数），你想给它加上一些额外的装饰（功能），但你不想改变礼物本身。

## 为什么需要装饰器？

*   **代码复用：**  避免在多个函数中重复编写相同的代码。
*   **增加功能：**  在不修改原函数代码的情况下，增加额外的功能，例如日志记录、性能测试、权限验证等。
*   **提高可读性：**  使代码更加简洁、易懂。

## 装饰器入门

先来看一个简单的例子：

```python
def say_hello():
  print("Hello!")

say_hello()  # 输出: Hello!
```

现在，我们想在 `say_hello` 函数执行前后分别输出一些信息，但不想修改 `say_hello` 函数本身。  这时，就可以使用装饰器了！

```python
def my_decorator(func):
  def wrapper():
    print("Before calling the function.")
    func()
    print("After calling the function.")
  return wrapper

@my_decorator
def say_hello():
  print("Hello!")

say_hello()
```

输出结果：

```
Before calling the function.
Hello!
After calling the function.
```

**解释一下：**

1.  `my_decorator` 是一个装饰器函数，它接收一个函数 `func` 作为参数。
2.  `wrapper` 是一个内部函数，它包装了原始函数 `func`。  在 `wrapper` 函数中，我们可以在调用 `func` 之前和之后添加一些额外的代码。
3.  `my_decorator` 函数返回 `wrapper` 函数。
4.  `@my_decorator`  是装饰器语法，它相当于 `say_hello = my_decorator(say_hello)`。  也就是说，我们把 `say_hello` 函数传递给 `my_decorator` 函数，并将返回的 `wrapper` 函数赋值给 `say_hello`。  这样，当我们调用 `say_hello` 时，实际上调用的是 `wrapper` 函数。

## 装饰器的基本结构

一个典型的装饰器通常包含以下几个部分：

*   **装饰器函数：**  接收一个函数作为参数，并返回一个新的函数。
*   **包装函数 (wrapper):**  在装饰器函数内部定义的函数，用于包装原始函数，并在调用原始函数之前或之后添加额外的功能。
*   **`@` 语法糖:**  用于将装饰器应用到函数上，简化代码。

## 装饰带参数的函数

如果被装饰的函数有参数，那么装饰器也需要处理这些参数。

```python
def my_decorator(func):
  def wrapper(*args, **kwargs):
    print("Before calling the function with arguments.")
    result = func(*args, **kwargs)
    print("After calling the function with arguments.")
    return result
  return wrapper

@my_decorator
def greet(name):
  print(f"Hello, {name}!")
  return f"Greeting to {name} done!"

return_value = greet("Alice")
print(return_value)
```

输出结果：

```
Before calling the function with arguments.
Hello, Alice!
After calling the function with arguments.
Greeting to Alice done!
```

**解释一下：**

*   `*args` 和 `**kwargs` 用于接收任意数量的位置参数和关键字参数。
*   在 `wrapper` 函数中，我们将 `*args` 和 `**kwargs` 传递给原始函数 `func`，确保原始函数能够接收到正确的参数。
*   同时我们也保留了原始函数的返回值，并将其返回。

## 带有装饰器参数

有时候，我们希望装饰器本身也能够接收参数，以便更加灵活地控制装饰器的行为。

```python
def repeat(num_times):
  def my_decorator(func):
    def wrapper(*args, **kwargs):
      for _ in range(num_times):
        result = func(*args, **kwargs)
      return result
    return wrapper
  return my_decorator

@repeat(num_times=3)
def say_hello(name):
  print(f"Hello, {name}!")
  return f"Hello {name} repeated."

return_value = say_hello("Bob")
print(return_value)
```

输出结果：

```
Hello, Bob!
Hello, Bob!
Hello, Bob!
Hello Bob repeated.
```

**解释一下：**

1.  `repeat` 函数接收一个参数 `num_times`，它返回一个装饰器函数 `my_decorator`。
2.  `my_decorator` 函数接收一个函数 `func` 作为参数，并返回一个包装函数 `wrapper`。
3.  在 `wrapper` 函数中，我们循环调用原始函数 `func` `num_times` 次。
4.  `@repeat(num_times=3)`  将 `repeat(num_times=3)` 的返回值（即 `my_decorator` 函数）应用到 `say_hello` 函数上。

## 多个装饰器

一个函数可以同时应用多个装饰器。  装饰器的执行顺序是从下往上。

```python
def bold(func):
  def wrapper(*args, **kwargs):
    return "<b>" + func(*args, **kwargs) + "</b>"
  return wrapper

def italic(func):
  def wrapper(*args, **kwargs):
    return "<i>" + func(*args, **kwargs) + "</i>"
  return wrapper

@bold
@italic
def get_message(name):
  return f"Hello, {name}!"

message = get_message("Charlie")
print(message)
```

输出结果：

```
<b><i>Hello, Charlie!</i></b>
```

**解释一下：**

1.  首先，`italic` 装饰器被应用到 `get_message` 函数上，返回一个新的函数。
2.  然后，`bold` 装饰器被应用到 `italic` 装饰器返回的函数上，返回最终的函数。
3.  当我们调用 `get_message` 函数时，实际上依次调用了 `italic` 装饰器的 `wrapper` 函数和 `bold` 装饰器的 `wrapper` 函数。

## 装饰器的常见应用场景

*   **日志记录：**  记录函数执行的时间、参数、返回值等信息。
*   **性能测试：**  测试函数的执行时间。
*   **权限验证：**  验证用户是否有权限访问某个函数。
*   **缓存：**  缓存函数的返回值，避免重复计算。
*   **重试：**  在函数执行失败时，自动重试。

## 例子：使用装饰器进行日志记录

```python
import time

def log(func):
  def wrapper(*args, **kwargs):
    start_time = time.time()
    result = func(*args, **kwargs)
    end_time = time.time()
    print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds to execute.")
    return result
  return wrapper

@log
def my_function(x, y):
  time.sleep(1)  # 模拟耗时操作
  return x + y

result = my_function(1, 2)
print(result)
```

输出结果：

```
Function my_function took 1.0007 seconds to execute.
3
```

## 总结

装饰器是 Python 中一个非常强大的特性，它可以帮助我们修改或增强函数或方法的行为，而无需修改其原始代码。  通过掌握装饰器的基本结构和常见应用场景，你可以编写更加简洁、易懂、可维护的代码。

希望这个教程能够帮助你理解 Python 装饰器！  多写代码、多实践，你一定会掌握它的！