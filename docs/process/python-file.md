---
title: Python 文件
---

# 21. Python 文件

在 Python 编程中，文件操作是非常重要的一部分。无论是读取数据、保存结果，还是处理配置文件，都离不开文件操作。

## 21.1 文件是什么？

简单来说，文件就是存储在某种存储介质上的数据的集合。它可以是文本文件、图片、音频、视频等等。在 Python 中，我们可以通过一些内置的函数和方法来操作这些文件。

## 21.2 文件操作的基本步骤

Python 中操作文件的基本步骤可以概括为以下三步：

1.  **打开文件**：使用 `open()` 函数打开一个文件，并指定打开模式（读、写、追加等）。
2.  **读/写文件**：根据打开模式，从文件中读取数据或向文件中写入数据。
3.  **关闭文件**：使用 `close()` 方法关闭文件，释放资源。

## 21.3 `open()` 函数

`open()` 函数是 Python 中用于打开文件的核心函数。它的基本语法如下：

```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
```

其中，最常用的两个参数是：

*   `file`：要打开的文件名（包括路径）。
*   `mode`：打开文件的模式。

### 21.3.1 文件打开模式（mode）

`mode` 参数指定了打开文件的模式。常用的模式如下：

| 模式    | 描述                                                    |
|-------|-------------------------------------------------------|
| `'r'` | 读取模式（默认值）。打开文件用于读取，如果文件不存在则抛出 `FileNotFoundError` 异常。 |
| `'w'` | 写入模式。打开文件用于写入，如果文件已存在则清空文件内容，如果文件不存在则创建新文件。           |
| `'a'` | 追加模式。打开文件用于在文件末尾追加内容，如果文件不存在则创建新文件。                   |
| `'x'` | 排它性创建模式。创建文件用于写入，如果文件已存在则抛出 `FileExistsError` 异常。     |
| `'b'` | 二进制模式。与其他模式组合使用，用于读取或写入二进制文件（例如图片、音频等）。               |
| `'t'` | 文本模式（默认值）。与其他模式组合使用，用于读取或写入文本文件。                      |
| `'+'` | 更新模式。与其他模式组合使用，用于同时读取和写入文件。                           |

**一些模式的组合：**

*   `'rb'`：以二进制模式读取文件。
*   `'wb'`：以二进制模式写入文件。
*   `'rt'`：以文本模式读取文件（默认）。
*   `'wt'`：以文本模式写入文件。
*   `'r+'`：以读写模式打开文件（文件指针在开头）。
*   `'w+'`：以读写模式打开文件（先清空文件）。
*   `'a+'`：以读写模式打开文件（文件指针在结尾）。

### 21.3.2 示例：打开并读取文件

```python
try:
    file = open('my_file.txt', 'r', encoding='utf-8')  # 以只读模式打开文件
    content = file.read()  # 读取文件内容
    print(content)
except FileNotFoundError:
    print("文件未找到！")
finally:
    if 'file' in locals() and file:
        file.close()  # 关闭文件
```

**解释：**

*   我们使用 `try...except...finally` 结构来处理可能出现的异常，例如文件不存在。
*   `encoding='utf-8'` 指定了文件的编码方式，这对于处理包含中文等非 ASCII 字符的文件非常重要。
*   `file.read()` 方法用于读取文件的全部内容，并将其作为一个字符串返回。
*   `file.close()` 方法用于关闭文件，释放资源。**务必记住关闭文件，否则可能会导致数据丢失或资源泄漏。**
*  `if 'file' in locals() and file:` 用于确保在 `file` 变量存在且不为 `None` 的情况下才调用 `file.close()`，避免在文件打开失败时出现错误。

## 21.4 读取文件内容

Python 提供了多种方法来读取文件内容：

*   `read()`：读取文件的全部内容，返回一个字符串。
*   `readline()`：读取文件的一行内容，返回一个字符串。
*   `readlines()`：读取文件的所有行，返回一个包含所有行的列表。

### 21.4.1 示例：使用 `readline()` 逐行读取文件

```python
try:
    file = open('my_file.txt', 'r', encoding='utf-8')
    line = file.readline()
    while line:
        print(line.strip())  # 去除行尾的换行符
        line = file.readline()
except FileNotFoundError:
    print("文件未找到！")
finally:
    if 'file' in locals() and file:
        file.close()
```

**解释：**

*   `file.readline()` 方法每次读取文件的一行，并将文件指针移动到下一行。
*   `line.strip()` 方法用于去除行尾的换行符。

### 21.4.2 示例：使用 `readlines()` 读取所有行

```python
try:
    file = open('my_file.txt', 'r', encoding='utf-8')
    lines = file.readlines()
    for line in lines:
        print(line.strip())
except FileNotFoundError:
    print("文件未找到！")
finally:
    if 'file' in locals() and file:
        file.close()
```

**解释：**

*   `file.readlines()` 方法将文件的所有行读取到一个列表中，每一行作为列表的一个元素。

## 21.5 写入文件内容

Python 提供了 `write()` 和 `writelines()` 方法来向文件中写入内容。

*   `write(string)`：将字符串写入文件。
*   `writelines(list)`：将字符串列表写入文件。

### 21.5.1 示例：使用 `write()` 写入文件

```python
try:
    file = open('my_file.txt', 'w', encoding='utf-8')  # 以写入模式打开文件
    file.write('Hello, world!\n')
    file.write('This is a new line.\n')
    print("内容已写入文件！")
except Exception as e:
    print(f"写入文件时发生错误：{e}")
finally:
    if 'file' in locals() and file:
        file.close()
```

**解释：**

*   以 `'w'` 模式打开文件会清空文件内容，如果文件不存在则创建新文件。
*   `\n` 是换行符，用于在文件中创建新行。

### 21.5.2 示例：使用 `writelines()` 写入文件

```python
try:
    file = open('my_file.txt', 'w', encoding='utf-8')
    lines = ['Line 1\n', 'Line 2\n', 'Line 3\n']
    file.writelines(lines)
    print("内容已写入文件！")
except Exception as e:
    print(f"写入文件时发生错误：{e}")
finally:
    if 'file' in locals() and file:
        file.close()
```

**解释：**

*   `writelines()` 方法接受一个字符串列表作为参数，并将列表中的每个字符串写入文件。

## 21.6 使用 `with` 语句

为了确保文件在使用完毕后能够正确关闭，Python 提供了 `with` 语句。`with` 语句可以在代码块执行完毕后自动关闭文件，即使发生异常也能保证文件被关闭。

### 21.6.1 示例：使用 `with` 语句读取文件

```python
try:
    with open('my_file.txt', 'r', encoding='utf-8') as file:
        content = file.read()
        print(content)
    # 文件在 with 语句块结束后自动关闭
    print("文件已关闭！")
except FileNotFoundError:
    print("文件未找到！")
except Exception as e:
    print(f"发生错误：{e}")
```

**解释：**

*   `with open(...) as file:` 语句打开文件，并将文件对象赋值给变量 `file`。
*   在 `with` 语句块中，我们可以像之前一样使用 `file` 对象进行文件操作。
*   当 `with` 语句块执行完毕后，无论是否发生异常，Python 都会自动调用 `file.close()` 方法关闭文件。

### 21.6.2 示例：使用 `with` 语句写入文件

```python
try:
    with open('my_file.txt', 'w', encoding='utf-8') as file:
        file.write('Hello, world!\n')
        file.write('This is a new line.\n')
    print("内容已写入文件，文件已关闭！")
except Exception as e:
    print(f"写入文件时发生错误：{e}")
```

**使用 `with` 语句是推荐的文件操作方式，因为它更加简洁、安全，并且可以避免忘记关闭文件的问题。**

## 21.7 文件指针

文件指针用于指示当前文件操作的位置。当我们打开一个文件时，文件指针会指向文件的开头。当我们读取或写入文件时，文件指针会相应地移动。

### 21.7.1 `seek()` 方法

`seek(offset, whence)` 方法用于移动文件指针的位置。

*   `offset`：偏移量，表示要移动的字节数。
*   `whence`：起始位置，可以是以下三个值：
    *   `0`：从文件开头开始计算（默认值）。
    *   `1`：从当前位置开始计算。
    *   `2`：从文件末尾开始计算。

### 21.7.2 `tell()` 方法

`tell()` 方法用于返回当前文件指针的位置（从文件开头到当前位置的字节数）。

### 21.7.3 示例：使用 `seek()` 和 `tell()` 方法

```python
try:
    with open('my_file.txt', 'r', encoding='utf-8') as file:
        print(f"当前文件指针位置：{file.tell()}")  # 输出：0

        file.seek(5)  # 将文件指针移动到第 5 个字节的位置
        print(f"当前文件指针位置：{file.tell()}")  # 输出：5

        content = file.read(10)  # 从当前位置读取 10 个字节
        print(f"读取的内容：{content}")
        print(f"当前文件指针位置：{file.tell()}")  # 输出：15
except FileNotFoundError:
    print("文件未找到！")
except Exception as e:
    print(f"发生错误：{e}")
```

**注意：**

*   在使用 `seek()` 方法时，需要注意文件的编码方式。如果文件包含多字节字符（例如中文），则需要确保偏移量是字符的整数倍，否则可能会导致乱码。
*   对于文本文件，建议只使用 `seek(0)` （移动到文件开头）和 `seek(offset, 0)`（从文件开头移动 `offset` 字节）两种方式。

## 21.8 文件和目录操作

Python 的 `os` 和 `os.path` 模块提供了一些用于操作文件和目录的函数。

### 21.8.1 常用函数

*   `os.path.exists(path)`：判断指定路径的文件或目录是否存在。
*   `os.path.isfile(path)`：判断指定路径是否为文件。
*   `os.path.isdir(path)`：判断指定路径是否为目录。
*   `os.path.join(path1, path2, ...)`：将多个路径组合成一个路径。
*   `os.mkdir(path)`：创建目录。
*   `os.makedirs(path)`：创建多层目录。
*   `os.remove(path)`：删除文件。
*   `os.rmdir(path)`：删除目录（只能删除空目录）。
*   `os.rename(old_path, new_path)`：重命名文件或目录。
*   `os.listdir(path)`：列出指定目录下的所有文件和目录。
*   `os.getcwd()`：获取当前工作目录。
*   `os.chdir(path)`：改变当前工作目录。

### 21.8.2 示例

```python
import os

# 判断文件是否存在
file_path = 'my_file.txt'
if os.path.exists(file_path):
    print(f"文件 {file_path} 存在")
else:
    print(f"文件 {file_path} 不存在")

# 判断是否为文件
if os.path.isfile(file_path):
    print(f"{file_path} 是一个文件")
else:
    print(f"{file_path} 不是一个文件")

# 创建目录
dir_path = 'my_directory'
if not os.path.exists(dir_path):
    os.mkdir(dir_path)
    print(f"目录 {dir_path} 创建成功")
else:
    print(f"目录 {dir_path} 已经存在")

# 列出目录下的文件
files = os.listdir('.')  # 列出当前目录下的文件
print(f"当前目录下的文件：{files}")

# 删除文件
# os.remove(file_path) # 删除文件前请务必确认，删除后无法恢复
```

## 21.9 总结

文件操作是 Python 编程中非常重要的一部分。掌握文件操作的基本步骤、文件打开模式、读取和写入文件的方法，以及使用 `with` 语句和 `os` 模块，可以让我们更加高效、安全地处理文件。

希望这个教程对你有所帮助！ 记住多练习，才能更好地掌握这些知识。
