---
title: Python 简介
---
# 2. Python 简介

## 2.1 什么是 Python？

Python 是一种**高级**、**通用**的编程语言。它以其**易读性**和**简洁的语法**而闻名，这使得 Python 成为初学者入门编程的绝佳选择。

## 2.2 Python 的发展历史

Python 的诞生颇具趣味性，它是由荷兰程序员 **Guido van Rossum（吉多·范罗苏姆）** 在 20 世纪 80 年代末设计的，并于 1991 年首次发布。

Guido 在设计 Python 时，深受 ABC 语言的影响，后者也是一种旨在取代 BASIC 的教学语言。Guido 希望创造一种更易于阅读和使用的语言，让程序员能够更轻松地表达自己的想法。

Python 这个名字的灵感，并非来自蟒蛇，而是 Guido 非常喜欢的英国喜剧团体 **Monty Python（蒙提·派森）**。

Python 的发展历程可以大致分为以下几个阶段：

*   **Python 1.x**：奠定了 Python 的基础，引入了许多核心概念。
*   **Python 2.x**：得到了广泛应用，涌现了大量的库和框架。
*   **Python 3.x**：为了解决 Python 2.x 中存在的一些问题，Guido 对 Python 进行了大刀阔斧的改革，但这也导致了 Python 2.x 和 Python 3.x 之间不兼容。

目前，Python 3.x 是主流版本，并且官方已经停止维护 Python 2.x。

## 2.3 Python 的语言特性

Python 拥有众多优秀的特性，使其在各种应用场景中都能发挥出色：

*   **易于学习和阅读**：Python 的语法简洁明了，接近自然语言，易于理解和学习。
*   **解释型语言**：Python 代码不需要编译，可以直接运行，方便快捷。
*   **动态类型**：在 Python 中，变量的类型是在运行时自动确定的，无需显式声明。
*   **跨平台性**：Python 可以在各种操作系统上运行，如 Windows、macOS、Linux 等。
*   **丰富的库和框架**：Python 拥有庞大的标准库和第三方库，涵盖了各种领域，如 Web 开发、数据科学、人工智能等。

### 2.3.1 示例：Hello, World!

```python
print("Hello, World!")
```

这段代码的功能是在屏幕上输出 "Hello, World!"。是不是非常简单易懂？

### 2.3.2 示例：计算两个数的和

```python
a = 10
b = 20
sum = a + b
print(sum)  # 输出：30
```

这个示例展示了 Python 的基本算术运算。

### 2.3.3 示例：判断一个数是否为偶数

```python
number = 7
if number % 2 == 0:
    print("偶数")
else:
    print("奇数")  # 输出：奇数
```

这个示例展示了 Python 的条件判断语句。

## 2.4 Python 的应用领域

Python 几乎可以应用于任何领域：

*   **Web 开发**：使用 Django、Flask 等框架可以快速构建 Web 应用。
*   **数据科学**：NumPy、Pandas、Matplotlib 等库提供了强大的数据处理、分析和可视化功能。
*   **人工智能**：TensorFlow、PyTorch 等库为机器学习和深度学习提供了支持。
*   **自动化运维**：Python 可以编写脚本来自动化执行系统管理任务。
*   **游戏开发**：Pygame 库可以用于开发 2D 游戏。

## 2.5 总结

Python 是一种功能强大且易于学习的编程语言，它在各个领域都有着广泛的应用。希望通过本文的介绍，你能对 Python 有一个初步的了解，并激发你学习 Python 的兴趣。
