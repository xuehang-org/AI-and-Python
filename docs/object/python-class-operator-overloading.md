---
title: Python 类运算符重载
---

# Python 类运算符重载

在 Python 中，运算符重载允许你自定义类的实例如何响应 Python 的内置运算符。这意味着你可以使用像 `+`, `-`, `*`, `/` 等运算符来操作你的类对象，就像它们是数字或字符串一样。

## 为什么需要运算符重载？

运算符重载的主要目的是让你的类更直观、更易于使用。例如，如果你有一个表示二维向量的类，你可以重载 `+` 运算符来实现向量的加法。

## 如何重载运算符？

要重载运算符，你需要在类中定义一些特殊的方法，这些方法的名称以双下划线开头和结尾（例如 `__add__`、`__sub__`）。当 Python 解释器遇到相应的运算符时，它会自动调用这些方法。

下面是一些常用的运算符重载方法：

| 运算符      | 方法名称                            | 描述                        |
|----------|---------------------------------|---------------------------|
| `+`      | `__add__(self, other)`          | 加法                        |
| `-`      | `__sub__(self, other)`          | 减法                        |
| `*`      | `__mul__(self, other)`          | 乘法                        |
| `/`      | `__truediv__(self, other)`      | 除法                        |
| `//`     | `__floordiv__(self, other)`     | 地板除（整数除法）                 |
| `%`      | `__mod__(self, other)`          | 取模（求余数）                   |
| `**`     | `__pow__(self, other)`          | 幂运算                       |
| `==`     | `__eq__(self, other)`           | 等于                        |
| `!=`     | `__ne__(self, other)`           | 不等于                       |
| `<`      | `__lt__(self, other)`           | 小于                        |
| `>`      | `__gt__(self, other)`           | 大于                        |
| `<=`     | `__le__(self, other)`           | 小于等于                      |
| `>=`     | `__ge__(self, other)`           | 大于等于                      |
| `+=`     | `__iadd__(self, other)`         | 加法赋值 (例如: a += b)         |
| `-=`     | `__isub__(self, other)`         | 减法赋值 (例如: a -= b)         |
| `*=`     | `__imul__(self, other)`         | 乘法赋值 (例如: a *= b)         |
| `/=`     | `__itruediv__(self, other)`     | 除法赋值 (例如: a /= b)         |
| `//=`    | `__ifloordiv__(self, other)`    | 地板除赋值 (例如: a //= b)       |
| `%=`     | `__imod__(self, other)`         | 取模赋值 (例如: a %= b)         |
| `**=`    | `__ipow__(self, other)`         | 幂运算赋值 (例如: a **= b)       |
| `[]`     | `__getitem__(self, key)`        | 索引访问 (例如: a[key])         |
| `[] =`   | `__setitem__(self, key, value)` | 索引赋值 (例如: a[key] = value) |
| `del []` | `__delitem__(self, key)`        | 删除索引 (例如: del a[key])     |
| `in`     | `__contains__(self, item)`      | 成员测试 (例如: item in a)      |
| `len()`  | `__len__(self)`                 | 返回容器长度                    |
| `iter()` | `__iter__(self)`                | 返回迭代器                     |

## 示例

### 1. 重载加法运算符 `+`

假设我们有一个 `Vector` 类来表示二维向量，我们想要重载 `+` 运算符来实现向量的加法：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        """重载加法运算符"""
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        else:
            raise TypeError("Can only add two Vector objects")

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

# 使用示例
v1 = Vector(1, 2)
v2 = Vector(3, 4)
v3 = v1 + v2  # 调用 __add__ 方法
print(v3)  # 输出: Vector(4, 6)
```

在上面的例子中，我们定义了 `__add__` 方法，它接受两个参数：`self`（表示当前对象）和 `other`（表示要相加的另一个对象）。在方法内部，我们创建了一个新的 `Vector` 对象，其 `x` 和 `y` 分别是两个向量的 `x` 和 `y` 的和。

### 2. 重载乘法运算符 `*`

我们可以重载乘法运算符来实现向量的标量乘法：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __mul__(self, scalar):
        """重载乘法运算符"""
        if isinstance(scalar, (int, float)):
            return Vector(self.x * scalar, self.y * scalar)
        else:
            raise TypeError("Can only multiply with a number")

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

# 使用示例
v1 = Vector(1, 2)
v2 = v1 * 3  # 调用 __mul__ 方法
print(v2)  # 输出: Vector(3, 6)
```

### 3. 重载比较运算符 `==`

我们可以重载比较运算符来比较两个向量是否相等：

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, other):
        """重载等于运算符"""
        if isinstance(other, Vector):
            return self.x == other.x and self.y == other.y
        else:
            return False

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

# 使用示例
v1 = Vector(1, 2)
v2 = Vector(1, 2)
v3 = Vector(3, 4)

print(v1 == v2)  # 输出: True
print(v1 == v3)  # 输出: False
```

### 4. 重载自增运算符 `+=`

```python
class Counter:
    def __init__(self, count=0):
        self.count = count

    def __iadd__(self, increment):
        """重载 += 运算符"""
        if isinstance(increment, int):
            self.count += increment
            return self  # 必须返回 self
        else:
            raise TypeError("Can only increment with an integer")

    def __str__(self):
        return f"Counter({self.count})"

# 使用示例
c = Counter(5)
c += 3  # 调用 __iadd__ 方法
print(c)  # 输出: Counter(8)
```

**注意**： 对于 `+=` 这类赋值运算符，重载方法 `__iadd__` 必须返回 `self`，这样才能正确地更新对象。

### 5. 重载索引运算符 `[]`

```python
class MyList:
    def __init__(self, data):
        self.data = data

    def __getitem__(self, index):
        """重载 [] 运算符，用于获取元素"""
        return self.data[index]

    def __setitem__(self, index, value):
        """重载 [] 运算符，用于设置元素"""
        self.data[index] = value

    def __delitem__(self, index):
        """重载 del [] 运算符，用于删除元素"""
        del self.data[index]

# 使用示例
my_list = MyList([1, 2, 3, 4, 5])

print(my_list[0])  # 输出: 1 (调用 __getitem__)

my_list[0] = 10  # 调用 __setitem__
print(my_list.data)  # 输出: [10, 2, 3, 4, 5]

del my_list[0]  # 调用 __delitem__
print(my_list.data)  # 输出: [2, 3, 4, 5]
```

### 6. 重载 `in` 运算符

```python
class MyList:
    def __init__(self, data):
        self.data = data

    def __contains__(self, item):
        """重载 in 运算符，用于检查元素是否存在"""
        return item in self.data

# 使用示例
my_list = MyList([1, 2, 3, 4, 5])

print(3 in my_list)  # 输出: True (调用 __contains__)
print(6 in my_list)  # 输出: False
```

## 注意事项

-   **不要过度使用运算符重载**： 运算符重载可以使代码更简洁，但也可能导致代码难以理解。只在你认为它能提高代码可读性和易用性时才使用它。
-   **保持一致性**： 重载运算符时，尽量保持其原始语义。例如，不要让 `+` 运算符执行减法操作。
-   **考虑类型**： 在重载运算符时，要确保你的代码能够处理不同类型的输入，并在必要时引发 `TypeError` 异常。
-   **返回新对象**：通常，二元运算符（如 `+`、`-`、`*`）应该返回一个新的对象，而不是修改 `self` 对象本身。而赋值运算符（如 `+=`、`-=`）应该修改 `self` 对象并返回 `self`。

## 总结

运算符重载是 Python 中一个强大的特性，它允许你自定义类的行为，使其更符合你的需求。通过合理地使用运算符重载，你可以编写出更简洁、更易于理解的代码。但是，一定要注意不要过度使用，并保持代码的一致性和可读性。