---
title: Python 模块
---

# 20. Python 模块

## 20.1 什么是模块？

简单来说，模块就是一个包含 Python 代码的文件。你可以把模块想象成一个工具箱，里面放着各种各样的工具（函数、类、变量等），你可以根据需要在你的程序中导入并使用这些工具。

使用模块的好处：

*   **代码重用：** 避免重复编写相同的代码，提高开发效率。
*   **代码组织：** 将代码按功能划分到不同的模块中，使代码结构更清晰。
*   **命名空间隔离：** 不同模块中的变量名可以相同，避免命名冲突。

## 20.2 模块的类型

Python 中主要有三种类型的模块：

1.  **内置模块：** Python 解释器自带的模块，例如 `math`、`os`、`sys` 等。
2.  **标准库模块：** Python 安装包中包含的模块，例如 `datetime`、`json`、`random` 等。
3.  **第三方模块：** 由其他开发者编写的模块，需要通过 `pip` 安装，例如 `requests`、`numpy`、`pandas` 等。

## 20.3 导入模块

使用 `import` 语句可以导入一个模块。

### 20.3.1 完整导入

```python
import math

# 使用 math 模块中的 sqrt 函数计算平方根
result = math.sqrt(16)
print(result)  # 输出: 4.0
```

这种方式会导入整个模块，你需要使用 `模块名.函数名` 的方式来调用模块中的函数。

### 20.3.2 部分导入

使用 `from ... import ...` 语句可以导入模块中的部分内容。

```python
from math import sqrt, pi

# 直接使用 sqrt 函数和 pi 变量
result = sqrt(25)
print(result)  # 输出: 5.0
print(pi)    # 输出: 3.141592653589793
```

这种方式只会导入你指定的内容，可以直接使用函数名或变量名，无需加上模块名。

### 20.3.3 别名导入

使用 `import ... as ...` 语句可以给模块或模块中的内容起一个别名。

```python
import math as m

# 使用别名 m 调用 math 模块中的函数
result = m.sqrt(9)
print(result)  # 输出: 3.0

from datetime import datetime as dt

# 使用别名 dt 代表 datetime 类
now = dt.now()
print(now)  # 输出当前时间，例如: 2023-10-27 10:30:00.123456
```

这种方式可以简化模块名或函数名，提高代码的可读性。

### 20.3.4 导入所有

使用 `from ... import *` 语句可以导入模块中的所有内容（不推荐）。

```python
from math import *

# 可以直接使用 math 模块中的所有函数和变量
result = cos(0)
print(result)  # 输出: 1.0
```

这种方式虽然方便，但是容易造成命名冲突，降低代码的可读性和可维护性，因此不推荐使用。

## 20.4 查找模块

Python 解释器会按照一定的顺序查找模块：

1.  **当前目录：** 包含当前 Python 脚本的目录。
2.  **`PYTHONPATH` 环境变量：** 包含一系列目录的列表，可以在操作系统中设置。
3.  **Python 安装目录：** 包含 Python 标准库的目录。

可以使用 `sys.path` 变量查看 Python 解释器的模块搜索路径。

```python
import sys

print(sys.path)
```

## 20.5 创建模块

你可以自己编写 Python 文件来创建模块。

例如，创建一个名为 `my_module.py` 的文件，包含以下内容：

```python
# my_module.py

def greet(name):
  """向指定的人打招呼"""
  print(f"你好, {name}!")

def add(x, y):
  """计算两个数的和"""
  return x + y

# 模块中的变量
PI = 3.14159
```

然后在另一个 Python 文件中导入并使用这个模块：

```python
# main.py

import my_module

# 使用 my_module 模块中的函数
my_module.greet("Alice")  # 输出: 你好, Alice!
result = my_module.add(5, 3)
print(result)  # 输出: 8

# 使用 my_module 模块中的变量
print(my_module.PI)  # 输出: 3.14159
```

## 20.6 `__name__` 变量

每个 Python 模块都有一个 `__name__` 变量，它的值取决于模块是如何被使用的。

*   如果模块作为主程序运行，`__name__` 的值为 `"__main__"`。
*   如果模块被其他模块导入，`__name__` 的值为模块名。

这个特性可以用来在模块中编写一些测试代码，只有当模块作为主程序运行时才执行。

```python
# my_module.py

def greet(name):
  print(f"你好, {name}!")

if __name__ == "__main__":
  # 只有当 my_module.py 作为主程序运行时才会执行
  greet("Bob")
  print("my_module.py 正在作为主程序运行")
else:
  print("my_module.py 正在被导入")
```

如果直接运行 `my_module.py`，会输出：

```
你好, Bob!
my_module.py 正在作为主程序运行
```

如果从另一个 Python 文件中导入 `my_module`，会输出：

```
my_module.py 正在被导入
```

## 20.7 包

包是一种组织模块的方式，它是一个包含 `__init__.py` 文件的目录。

*   `__init__.py` 文件可以为空，也可以包含一些初始化代码。
*   包可以嵌套，形成多层级的模块结构。

例如，创建一个名为 `my_package` 的包，包含以下文件：

```
my_package/
├── __init__.py
├── module1.py
└── module2.py
```

`__init__.py` (可以为空):

```python
# my_package/__init__.py
print("my_package 包正在被导入")
```

`module1.py`:

```python
# my_package/module1.py

def func1():
  print("module1 中的 func1 函数")
```

`module2.py`:

```python
# my_package/module2.py

def func2():
  print("module2 中的 func2 函数")
```

然后可以在另一个 Python 文件中导入并使用这个包：

```python
# main.py

import my_package.module1
import my_package.module2

# 使用包中的模块
my_package.module1.func1()  # 输出: module1 中的 func1 函数
my_package.module2.func2()  # 输出: module2 中的 func2 函数

# 或者使用 from ... import ... 语句
from my_package import module1, module2

module1.func1()  # 输出: module1 中的 func1 函数
module2.func2()  # 输出: module2 中的 func2 函数
```

当你导入 `my_package` 包时，`__init__.py` 文件中的代码会被执行。

## 20.8 总结

*   模块是包含 Python 代码的文件，可以提高代码重用性和组织性。
*   使用 `import` 语句可以导入模块，有完整导入、部分导入、别名导入等方式。
*   可以使用 `sys.path` 变量查看 Python 解释器的模块搜索路径。
*   可以自己编写 Python 文件来创建模块。
*   `__name__` 变量可以用来判断模块是作为主程序运行还是被导入。
*   包是一种组织模块的方式，它是一个包含 `__init__.py` 文件的目录。

希望这篇文档能够帮助你更好地理解 Python 模块！
