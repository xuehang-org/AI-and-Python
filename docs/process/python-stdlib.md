---
title: Python 标准库
---

# 23. Python 标准库

Python 的标准库就像一个巨大的工具箱，里面包含了各种各样的模块，每个模块都提供了一系列预先编写好的函数和类，可以帮助你解决各种常见的编程问题，而无需从头开始编写代码。

## 23.1 为什么使用标准库？

*   **开箱即用：** 标准库随 Python 解释器一起安装，无需额外下载和安装。
*   **功能丰富：** 涵盖了文件操作、网络编程、文本处理、数据处理、加密等等方面。
*   **质量保证：** 经过充分测试和优化，稳定可靠。
*   **学习资源丰富：** 官方文档详细，社区活跃，容易找到解决方案。

## 23.2 常用标准库模块概览

下面介绍一些常用的标准库模块，并给出简单的示例：

### 23.2.1 `os`

`os` 模块提供了与操作系统交互的功能，例如文件和目录操作、环境变量等。

```python
import os

# 获取当前工作目录
current_dir = os.getcwd()
print(f"当前工作目录: {current_dir}")

# 创建目录
# os.mkdir("my_new_directory") #如果存在会报错

#判断目录是否存在
if not os.path.exists("my_new_directory"):
    os.mkdir("my_new_directory")
else:
    print("目录已经存在")

# 列出目录中的文件和子目录
files = os.listdir(current_dir)
print(f"当前目录下的文件和目录: {files}")

# 删除目录
# os.rmdir("my_new_directory")  # 只能删除空目录

# 重命名文件或目录
# os.rename("old_name.txt", "new_name.txt")
```

### 23.2.2 `sys`

`sys` 模块提供了访问和控制 Python 运行时环境的功能，例如命令行参数、标准输入输出等。

```python
import sys

# 获取命令行参数
print(f"命令行参数: {sys.argv}")

# 退出程序
# sys.exit(0)

# 获取 Python 解释器版本
print(f"Python 版本: {sys.version}")
```

### 23.2.3 `math`

`math` 模块提供了各种数学函数，例如三角函数、指数函数、对数函数等。

```python
import math

# 计算平方根
x = 16
sqrt_x = math.sqrt(x)
print(f"{x} 的平方根: {sqrt_x}")

# 计算正弦值
angle = math.pi / 2  # 90 度
sin_angle = math.sin(angle)
print(f"sin(90 度): {sin_angle}")

# 向上取整
num = 3.14
ceil_num = math.ceil(num)
print(f"{num} 向上取整: {ceil_num}")
```

### 23.2.4 `random`

`random` 模块提供了生成随机数的功能。

```python
import random

# 生成 0 到 1 之间的随机浮点数
random_float = random.random()
print(f"随机浮点数: {random_float}")

# 生成指定范围内的随机整数
random_int = random.randint(1, 10)  # 包含 1 和 10
print(f"1 到 10 之间的随机整数: {random_int}")

# 从列表中随机选择一个元素
my_list = ["apple", "banana", "cherry"]
random_element = random.choice(my_list)
print(f"随机选择的元素: {random_element}")

# 将列表随机排序
random.shuffle(my_list)
print(f"随机排序后的列表: {my_list}")
```

### 23.2.5 `datetime`

`datetime` 模块提供了处理日期和时间的功能。

```python
import datetime

# 获取当前日期和时间
now = datetime.datetime.now()
print(f"当前日期和时间: {now}")

# 创建一个日期对象
my_date = datetime.date(2023, 10, 26)
print(f"我的日期: {my_date}")

# 格式化日期和时间
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
print(f"格式化后的日期和时间: {formatted_date}")

#日期计算
new_date = now + datetime.timedelta(days=1)
print(f"明天的日期: {new_date}")
```

### 23.2.6 `json`

`json` 模块提供了 JSON 数据的编码和解码功能，用于在 Python 对象和 JSON 字符串之间进行转换。

```python
import json

# Python 字典
data = {
    "name": "张三",
    "age": 30,
    "city": "北京"
}

# 将 Python 对象编码为 JSON 字符串
json_string = json.dumps(data, ensure_ascii=False, indent=4)  # ensure_ascii=False 解决中文乱码，indent=4 格式化输出
print(f"JSON 字符串:\n{json_string}")

# 将 JSON 字符串解码为 Python 对象
loaded_data = json.loads(json_string)
print(f"Python 对象: {loaded_data}")

# 从文件中读取 JSON 数据
# with open("data.json", "r", encoding="utf-8") as f:
#     data = json.load(f)
#     print(data)

# 将 JSON 数据写入文件
# with open("data.json", "w", encoding="utf-8") as f:
#     json.dump(data, f, ensure_ascii=False, indent=4)
```

### 23.2.7 `urllib`

`urllib` 模块用于进行网络请求，可以获取网页内容、下载文件等。

```python
import urllib.request

# 发送 GET 请求
try:
    with urllib.request.urlopen("https://www.baidu.com") as response:
        html = response.read().decode("utf-8")
        #print(f"网页内容:\n{html[:200]}...")  # 打印前 200 个字符
except urllib.error.URLError as e:
    print(f"发生错误: {e}")
```

### 23.2.8 `re`

`re` 模块提供了正则表达式操作，用于字符串的匹配、查找、替换等。

```python
import re

text = "Hello, my email is abc@example.com and my phone number is 123-456-7890."

# 查找邮箱地址
email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
email = re.search(email_pattern, text)
if email:
    print(f"邮箱地址: {email.group()}")

# 查找电话号码
phone_pattern = r"\d{3}-\d{3}-\d{4}"
phone = re.search(phone_pattern, text)
if phone:
    print(f"电话号码: {phone.group()}")

# 替换字符串
new_text = re.sub(email_pattern, "[email protected]", text)
print(f"替换后的文本: {new_text}")
```

### 23.2.9 `collections`

`collections` 模块提供了一些额外的数据结构，例如 `Counter` (计数器), `deque` (双端队列), `defaultdict` (默认字典)等。

```python
from collections import Counter, deque, defaultdict

# Counter: 统计元素出现次数
my_list = ["a", "b", "a", "c", "b", "b"]
count = Counter(my_list)
print(f"元素计数: {count}")  # Counter({'b': 3, 'a': 2, 'c': 1})

# deque: 双端队列，可以在两端高效地添加和删除元素
d = deque([1, 2, 3])
d.append(4)
d.appendleft(0)
print(f"双端队列: {d}") # deque([0, 1, 2, 3, 4])
d.pop()
d.popleft()
print(f"双端队列: {d}") # deque([1, 2, 3])


# defaultdict: 默认字典，当访问不存在的键时，返回一个默认值
my_dict = defaultdict(int)  # 默认值为 0
my_dict["a"] += 1
print(f"默认字典: {my_dict['a']}, {my_dict['b']}")  # 1, 0
```

### 23.2.10 `typing`

`typing` 模块用于类型提示，可以提高代码的可读性和可维护性。(python 3.5+)

```python
from typing import List, Dict

def greet(name: str) -> str:
    return f"Hello, {name}"

def process_data(data: List[int]) -> Dict[str, int]:
    result = {"sum": sum(data), "count": len(data)}
    return result

print(greet("Alice"))
print(process_data([1, 2, 3, 4, 5]))
```

## 23.3 如何学习更多标准库模块？

*   **官方文档：** Python 官方文档是学习标准库的最佳资源，包含了详细的模块介绍、函数说明和示例代码。[https://docs.python.org/3/library/](https://docs.python.org/3/library/)
*   **在线教程：** 网上有很多 Python 标准库的教程和博客文章，可以参考学习。
*   **实践：** 尝试使用标准库解决实际问题，在实践中学习和掌握。

## 23.4 总结

Python 标准库是 Python 编程的重要组成部分，掌握标准库可以大大提高开发效率。希望本文能帮助你入门 Python 标准库，祝你学习愉快！
