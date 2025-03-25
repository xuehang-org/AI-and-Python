---
title: Python 错误和异常
---

# Python 错误和异常

在编写 Python 代码的过程中，错误和异常是不可避免的。理解并学会处理它们是成为一名优秀的 Python 程序员的关键一步。

## 1. 错误 (Errors)

错误通常指的是代码中的语法问题或者逻辑问题，导致程序无法正常执行。

### 1.1 语法错误 (Syntax Errors)

语法错误是最常见的错误类型，通常发生在代码不符合 Python 语法规则时。Python 解释器会在执行代码前检查语法，如果发现错误，会立即停止执行并给出错误提示。

**示例：**

```python
# 缺少冒号
if True
    print("Hello")

# 错误提示：
# File "<stdin>", line 2
#     print("Hello")
#        ^
# SyntaxError: expected ':'
```

**如何解决：**

仔细检查代码，确保所有的语法都符合 Python 的规范。例如，`if`、`for`、`while` 等语句后面都要有冒号。

### 1.2 逻辑错误 (Logical Errors)

逻辑错误指的是代码的语法没有问题，但是程序的行为不符合预期。这种错误通常比较难发现，需要仔细地分析代码的逻辑。

**示例：**

```python
def calculate_average(numbers):
    """计算列表中所有数字的平均值"""
    total = 0
    for number in numbers:
        total = 1 #错误的地方
    return total / len(numbers)

numbers = [1, 2, 3, 4, 5]
average = calculate_average(numbers)
print(f"平均值是: {average}")  # 输出：平均值是: 0.2
```

**如何解决：**

1.  **仔细阅读代码：** 确保你的代码逻辑符合你的预期。
2.  **使用调试器：** Python 调试器 (如 `pdb`) 可以帮助你逐行执行代码，观察变量的值，从而找到错误所在。
3.  **打印中间结果：** 在关键的地方打印变量的值，看看是否符合预期。
4.  **编写单元测试：** 编写测试用例，确保你的函数在各种情况下都能正常工作。

## 2. 异常 (Exceptions)

异常是指在程序运行过程中发生的错误。与语法错误不同，异常是在程序运行时才会被检测到。当 Python 检测到一个异常时，它会尝试找到一个合适的异常处理程序来处理这个异常。如果没有找到，程序就会终止并打印错误信息。

### 2.1 常见的异常类型

Python 内置了很多异常类型，以下是一些常见的异常类型：

*   `TypeError`: 类型错误，例如将字符串和数字相加。
*   `NameError`: 变量名错误，例如使用未定义的变量。
*   `IndexError`: 索引错误，例如访问列表中不存在的索引。
*   `KeyError`: 键错误，例如访问字典中不存在的键。
*   `ValueError`: 值错误，例如将字符串转换为整数时，字符串的内容不是数字。
*   `FileNotFoundError`: 文件未找到错误，例如尝试打开一个不存在的文件。
*   `ZeroDivisionError`: 除零错误，例如尝试将一个数除以零。

**示例：**

```python
# TypeError
result = "hello" + 5

# NameError
print(undefined_variable)

# IndexError
my_list = [1, 2, 3]
print(my_list[5])

# KeyError
my_dict = {"a": 1, "b": 2}
print(my_dict["c"])

# ValueError
int("abc")

# FileNotFoundError
with open("nonexistent_file.txt", "r") as f:
    content = f.read()

# ZeroDivisionError
result = 10 / 0
```

### 2.2 异常处理：`try...except` 语句

Python 提供了 `try...except` 语句来处理异常。`try` 块包含可能引发异常的代码，`except` 块包含处理异常的代码。

**基本语法：**

```python
try:
    # 可能引发异常的代码
except ExceptionType:
    # 处理 ExceptionType 类型的异常
```

**示例：**

```python
try:
    num = int(input("请输入一个整数："))
    result = 10 / num
    print(f"结果是：{result}")
except ValueError:
    print("输入错误：请输入一个有效的整数。")
except ZeroDivisionError:
    print("错误：除数不能为零。")
```

**多重 `except` 块：**

你可以使用多个 `except` 块来处理不同类型的异常。

**`else` 块：**

`else` 块中的代码只有在 `try` 块中没有发生异常时才会被执行。

**`finally` 块：**

`finally` 块中的代码无论是否发生异常都会被执行，通常用于释放资源，例如关闭文件。

**示例：**

```python
try:
    f = open("myfile.txt", "r")
    content = f.read()
    print(content)
except FileNotFoundError:
    print("文件未找到。")
except Exception as e:
    print(f"发生了一个错误：{e}")
else:
    print("文件读取成功。")
finally:
    if 'f' in locals() and f:
        f.close()
    print("程序执行完毕。")
```

### 2.3 抛出异常：`raise` 语句

你可以使用 `raise` 语句手动抛出一个异常。这在某些情况下非常有用，例如当你需要根据某些条件来中断程序的执行时。

**示例：**

```python
def check_age(age):
    if age < 0:
        raise ValueError("年龄不能为负数。")
    elif age > 150:
        raise ValueError("年龄不合理。")
    else:
        print("年龄有效。")

try:
    age = int(input("请输入你的年龄："))
    check_age(age)
except ValueError as e:
    print(f"输入错误：{e}")
```

### 2.4 自定义异常

你可以通过创建一个新的类来定义自己的异常类型。自定义异常应该继承自 `Exception` 类或其子类。

**示例：**

```python
class InsufficientFundsError(Exception):
    """余额不足异常"""
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError("余额不足，无法提款。")
    else:
        balance -= amount
        print(f"成功提款 {amount} 元，当前余额为 {balance} 元。")
        return balance

balance = 100
try:
    balance = withdraw(balance, 200)
except InsufficientFundsError as e:
    print(f"提款失败：{e}")
```

## 3. 总结

*   **错误 (Errors)** 分为语法错误和逻辑错误，语法错误在代码执行前被检测到，逻辑错误需要仔细分析代码逻辑来发现。
*   **异常 (Exceptions)** 是在程序运行时发生的错误，可以使用 `try...except` 语句来处理。
*   `try` 块包含可能引发异常的代码，`except` 块包含处理异常的代码。
*   可以使用多个 `except` 块来处理不同类型的异常。
*   `else` 块中的代码只有在 `try` 块中没有发生异常时才会被执行。
*   `finally` 块中的代码无论是否发生异常都会被执行。
*   可以使用 `raise` 语句手动抛出一个异常。
*   可以通过创建一个新的类来定义自己的异常类型。

希望这个教程能够帮助你更好地理解 Python 中的错误和异常处理。 记住，实践是最好的老师，多写代码，多尝试，你就会越来越熟练。