---
title: Python 数字
---



# Python 数字

在 Python 中，数字是一种基本的数据类型，用于表示数值。Python 支持多种数字类型，包括整数、浮点数和复数。

## 整数 (int)

整数就是没有小数部分的数字，可以是正数、负数或零。

**示例：**

```python
a = 10
b = -5
c = 0

print(a)  # 输出：10
print(b)  # 输出：-5
print(c)  # 输出：0
print(type(a)) # 输出：<class 'int'>
```

**进制表示：**

*   **十进制：** 我们平时使用的数字都是十进制。
*   **二进制：** 以 `0b` 或 `0B` 开头。
*   **八进制：** 以 `0o` 或 `0O` 开头。
*   **十六进制：** 以 `0x` 或 `0X` 开头。

**示例：**

```python
binary = 0b1010  # 二进制的 10
octal = 0o12     # 八进制的 10
hexadecimal = 0xA   # 十六进制的 10

print(binary)       # 输出：10
print(octal)        # 输出：10
print(hexadecimal)  # 输出：10
```

## 浮点数 (float)

浮点数就是带有小数部分的数字，也称为实数。

**示例：**

```python
pi = 3.14159
price = 99.99
temperature = -27.5

print(pi)          # 输出：3.14159
print(price)       # 输出：99.99
print(temperature) # 输出：-27.5
print(type(pi))  # 输出：<class 'float'>
```

**科学计数法：**

当浮点数很大或很小时，可以使用科学计数法表示。

**示例：**

```python
large_number = 1.23e6  # 1.23 乘以 10 的 6 次方，即 1230000.0
small_number = 6.67e-11 # 6.67 乘以 10 的 -11 次方，即 0.0000000000667

print(large_number)  # 输出：1230000.0
print(small_number)  # 输出：6.67e-11
```

## 复数 (complex)

复数由实部和虚部组成，虚部以 `j` 或 `J` 结尾。

**示例：**

```python
z = 3 + 4j
x = 5 + 9J

print(z)        # 输出：(3+4j)
print(x)        # 输出：(5+9j)
print(z.real)   # 输出：3.0 (实部)
print(z.imag)   # 输出：4.0 (虚部)
print(type(z)) # 输出：<class 'complex'>
```

## 数字运算

Python 支持常见的数字运算，包括加、减、乘、除、取余、乘方等。

**示例：**

```python
a = 10
b = 3

print(a + b)   # 加法：13
print(a - b)   # 减法：7
print(a * b)   # 乘法：30
print(a / b)   # 除法：3.3333333333333335
print(a // b)  # 整除：3 (只保留整数部分)
print(a % b)   # 取余：1 (a 除以 b 的余数)
print(a ** b)  # 乘方：1000 (a 的 b 次方)
```

## 类型转换

可以使用内置函数将数字从一种类型转换为另一种类型。

*   `int()`:  将一个数值或字符串转换为整数。
*   `float()`: 将一个数值或字符串转换为浮点数。
*   `complex()`: 创建一个复数。

**示例：**

```python
x = 5
y = 2.0
z = "7"

print(int(y))       # 输出：2
print(float(x))     # 输出：5.0
print(int(z))       # 输出：7
print(complex(x, y)) # 输出：(5+2j)
```

## 常用数学函数

Python 的 `math` 模块提供了许多有用的数学函数。

**示例：**

```python
import math

x = 16
y = 3.14159

print(math.sqrt(x))     # 平方根：4.0
print(math.ceil(y))     # 向上取整：4
print(math.floor(y))    # 向下取整：3
print(math.pi)          # 圆周率：3.141592653589793
print(math.pow(2, 3))   # 2 的 3 次方：8.0
```

## 总结

*   Python 支持整数 (`int`)、浮点数 (`float`) 和复数 (`complex`) 三种数字类型。
*   可以使用不同的进制表示整数。
*   浮点数可以使用科学计数法表示。
*   Python 提供了丰富的数字运算和类型转换函数。
*   `math` 模块提供了许多常用的数学函数。

希望这个教程能帮助你理解 Python 中的数字类型！多练习，你就能熟练掌握它们。

