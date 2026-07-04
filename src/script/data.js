import { buildViewBlocks } from './tool'

export const knowledgeData = {
  python: {
    list: [
      buildViewBlocks(
        '创建（create）',
        ['<p class="rem1">如果你需要创建一个具有内容的列表你可以这么做',
          '<p class="rem1">当然如果你想创建一个空列表也是可以的',
          '<p class="rem1">除此之外，如果你写过Java/c语系的语言,那么你需要注意python的列表和其他语言的数组有很大不同，python的列表是<span class="bold">不定长度，不定类型的</span>',],
        [`list1=[1,2,3,4]`,
          `#第一种
list1=[]
#第二种
list2=list()`,
        ],
        'create',
      ),
      buildViewBlocks(
        '读取（read）',
        [
          '<p class="rem1">python本身的列表读取方式有点奇怪，如果你需要读取整个列表你可以直接使用print，打印整个列表',
          "<p class='rem1'>同时你也可以使用索引的方式来访问元素,我们使用索引（从0开始,到对象长度-1结束）"
        ],
        [
          `list1=[1,2,3,4]
print(list1)
#结果是[1,2,3,4]`,
          `a=[1,2,3,4]
print(a[0])
#结果为1`
        ],
        'read',
      ),
      buildViewBlocks('更新（update）',
        ['<span id="add" class="bold" style="font-size:20px">添加的方法:(append,extend,列表运算）<span>',
          "append:", "<p class='rem1'>在列表的最后一位加入单个元素，可以是任何类型,但是并不建议使用append来向目标列表添加列表</p>", "<p class='rem1'>但是如果使用append方式传入的参数是列表就会出现以下情况",
          "extend:", "<p class='rem1'>在列表的最后一位加入列表，如果不是会报错</p>",
          "insert:", "<p class='rem1'>如果你想在特定位置插入元素你就可以这么做</p>",
          "列表运算:", "<p class='rem1'>列表运算有两种运算方式，即列表加法，列表乘法</p>", "<p class='rem1'>列表加法", "<p class='rem1'>列表乘法",
          "<span id='slice'class='bold' style='font-size:20px'>切片方法：</span>",
          '<p class="rem1">所谓切片就是形如：特定对象[开头：结尾：步长]这样的写法</p>',
          "<p class='rem1'>同时特别的，由于列表是是可变类型，你甚至可以给切片赋值", "<p class='rem1'>比如使用赋值来添加元素", "<p class='rem1'>或者通过这种方式来删除元素"],
        [null, null,
          `list1 = [1,2,3,4]
list1.append(3)
print(list1)
#结果为[1,2,3,4,3]
`, `list1=[1,2,3,4]
list1.append([1,2])
print(list1)
#结果就是这样[1,2,3,4,[1,2]]`, null, `list1=[1,2,3,4]
list1.extend([3])#打印结果为[1,2,3,4,3]`, null,
          `#.insert(index,obeject)这里index表示列表的索引(从0开始)，
#object表示要加入的对象，insert方法相当于一个可选位置的append方法
a=[1,2,3,4,4,5,6]
a.insert(1,2)
print(a)
#结果为[1, 2, 2, 3, 4, 4, 5, 6]`, null, null,
          `list1=[1,2,3,4]
list2=[2,3,4]
print(list1+list2)
#结果是[1,2,3,4,2,3,4]`,
          `list1=[1]
print(list1*3)
#结果为[1,1,1]`,
          null, `a=[1,2,3,4]
print(a[1:2])#[2]
print(a[::-1])#[4,3,2,1]
print(a[1:])#[2,3,4]
print(a[:3])#[1,2,3]`,
          null,
          `list1=[1,2,3,4]
list1[1:2]=[1,2,3]
print(list1)
#结果为[1, 1, 2, 3, 3, 4]`,
          `list1=[1,2,3,4]
list1[1:2]=[]
print(list1)
#结果是[1,3,4]`], "update"),
      buildViewBlocks('删除（delete）',
        ["pop()",
          "remove()",
          'del()',
          "clear()"],
        [`a=[1,2,3,4,5]
a.pop(1)
print(a)
#结果为[1,3,4,5]`, `a=[1,2,3,4,5]
a.remove(1)
print(a)#结果为[2,3,4,5]`, `a=[1,2,3,4]
del a[0]
print(a)#结果为[2,3,4]`, `a=[1,2,3,4,5]
a.clear()
print(a)#结果为[]`], "delete"),
      buildViewBlocks("其他操作",
        [
          'max,min:', '<p class="rem1">返回这个列表中的最大/小值。',
          'sum:', "<p class='rem1'>返回这个列表的总和",
          "sort,sorted", "<p class='rem1'>两个都是排序，区别在于sort没有返回值(print只能打出None，并且sort是方法)，会修改原列表，sorted有返回值(可以直接写print(sorted(a))，它是一个函数)，不会修改原列表。默认都是升序(从小到大)，如果想要降序，sort(reverse=True)，sorted(object，reversed=True)即可",
          "len", "<p class='rem1'>返回列表的长度(有几位返回几位)。具体的写法就是：len(对象)",
          "修改的写法", "<p class='rem1'>a[index]=value:", "<p class='rem1'>index表示索引，value表示值：",
          "list()", "<p class='rem1'>可以将其他类型转换为list类型"
        ], [null, `print(max([1,2,3,4,5]))#结果为5
print(min([1,2,3,4,5]))#结果为1`,
        null, `print(sum([1,2,3,4,5]))#结果为15`,
        null, `a=[91,29,23,64,56]
print(a.sort())#结果为：None(因为这个方法没有返回值，会直接修改原表)
print(a)#结果为：[23, 29, 56, 64, 91]
print(a.sort(reverse=True))#结果为None
print(a)#结果为：[91, 64, 56, 29, 23]
a=[91,29,23,64,56]
print(sorted(a))#结果为：[23, 29, 56, 64, 91]
print(a)#结果为：[91, 29, 23, 64, 56]
print(sorted(a, reverse=True))#结果为：[91, 64, 56, 29, 23]
print(a)#结果为：[91, 29, 23, 64, 56]`, null, `print(len([1,2,3,4,5,6]))#结果为：6`,
        null, null, `a=[1,2,3,4]
a[0]=12
print(a)#[12,2,3,4]`], "function")],
    dict: [
      buildViewBlocks("创建（create）", ["<p class='bold'>字典的形式遵从变量={键：值}", "这其中键必需是不可变的序列，不可以是可变类型，并且键是不可重复"], [null, `d={"1":"first"}`], "create"),
      buildViewBlocks(
        '读取（read）',
        [
          "d[key]:",
          "<p class='rem1'>如果需要直接访问其中某些特定的键盘",
          "d.get(key, default)",
          "<p class='rem1'>如果你不确定其中是否有这个键,如果不确定就是返回default（可以自己定义，默认是None）",
          "d.keys()",
          "<p class='rem1'>如果需要获取所有的键时你可以使用此方法",
          "d.values()",
          "<p class='rem1'>如果需要获取所有的值时你可以使用此方法",
          "d.items()",
          "<p class='rem1'>如果需要获得所有的键值对你可以使用此方法",
          "d.setdefault(key, default)",
          "<p class='rem1'>如果访问不存在，直接创建值"
        ],
        [null,
          `d = {"name": "Alice", "age": 25}
print(d["name"])    # Alice
# 键不存在会报 KeyError`,
          null,
          `d = {"name": "Alice", "age": 25}
print(d.get("score"))       # None
print(d.get("score", 0))    # 0
# 键不存在返回默认值，不报错`,
          null,
          `d = {"name": "Alice", "age": 25}
print(d.keys())   # dict_keys(['name', 'age'])`,
          null,
          `d = {"name": "Alice", "age": 25}
print(d.values()) # dict_values(['Alice', 25])`,
          null,
          `d = {"name": "Alice", "age": 25}
print(d.items())  # dict_items([('name', 'Alice'), ('age', 25)])`,
          null,
          `d = {"name": "Alice"}
# setdefault 查询+默认值插入
d.setdefault("age", 25)   # age 不存在，插入 25
print(d)                  # {'name': 'Alice', 'age': 25}`
        ],
        "read"
      ),
      buildViewBlocks(
        '修改（update）',
        [
          "d[key] = new_value",
          "d.update({key: new_value})"
        ],
        [
          `d = {"name": "Alice", "age": 25}
d["age"] = 26
d["name"] = "Bob"
print(d)
# 结果: {'name': 'Bob', 'age': 26}`,

          `d = {"name": "Alice", "age": 25}
d.update({"name": "Bob", "age": 26})
print(d)
# 结果: {'name': 'Bob', 'age': 26}`
        ],
        "dict_update"
      ),
      buildViewBlocks(
        '删除（delete）',
        [
          "del d[key]",
          "d.pop(key, default)",
          "d.popitem()",
          "d.clear()"
        ],
        [
          `d = {"name": "Alice", "age": 25, "city": "Hangzhou"}
del d["city"]
print(d)
# 结果: {'name': 'Alice', 'age': 25}`,

          `d = {"name": "Alice", "age": 25, "city": "Hangzhou"}
age = d.pop("age")
print(age)    # 25
print(d)      # {'name': 'Alice', 'city': 'Hangzhou'}

# 安全删除（不存在返回默认值）
score = d.pop("score", None)
print(score)  # None`,

          `d = {"name": "Alice", "age": 25, "city": "Hangzhou"}
last = d.popitem()
print(last)   # ('city', 'Hangzhou')
print(d)      # {'name': 'Alice', 'age': 25}`,

          `d = {"name": "Alice", "age": 25, "city": "Hangzhou"}
d.clear()
print(d)      # {}`
        ],
        "delete"
      ), buildViewBlocks("字典的优势",
        ["字典对于其他数据类型有什么优势呢？",
          "首先是它的写入速度要比列表快很多",
          "其次是它可以很明显的表示映射关系这对代码的可读性是很好的",
          "我们可以做一个对比如果我们使用字典的方式来统计字符串是这样的",
          '之所以选择字典来存储就是因为字典独特的键值对特性。可以省去我们手动建立字符和数量的关系。',
          "你也可以使用get方法来优化这个过程",
          "如果不使用字典自带的映射关系而去手动建立映射，代码如下："],
        [null, null, null, `text="happy everyday bro"
d=dict()
for i in text:
    if i not in d:
        d[i]=1
    else:
        d[i]+=1
print(d)`, null,
          `d=dict()
for i in text:
    d[i]=d.get(i,0)+1
print(d)`, `a="adssadsasdasda"
key=[]
values=[]
for value in a:
    if value not in key:
        key.append(value)
for i in range(len(key)):
    count=0
    for j in a:
        if j==key[i]:
           count+=1
    values.append(count)
print(dict(zip(key,values)))`])
    ],
    set: [
      buildViewBlocks("创建（create）", ["这里明确的声明,集合类型不可以使用{}来创建空集合!!!"], [`S={1,2,3,4,5}#变量={内容}`]),
      buildViewBlocks("读取（read）", ["set类型没有特殊的读取方式,只能通过for循环读取"], [`s = {1, 2, 3}
for item in s:
  print(item)`]),
      buildViewBlocks("修改（update）", ["可以使用add来添加单个元素", "如果需要添加多个可以使用update"], [`s = {1, 2, 3}
s.add(4)          # {1, 2, 3, 4} `, `s = {1, 2, 3}
s.update([5, 6, 7])# {1, 2, 3, 4, 5, 6, 7}
s = {1, 2, 3}
s.update({8, 9}, [10])#{1, 2, 3, 8, 9, 10}  `]),
      buildViewBlocks("删除（delete）", ["remove()：删除指定元素，不存在则报错KeyError", " discard()：删除指定元素，不存在也不报错", "pop()：随机删除并返回一个元素", "clear()：清空集合", "del：删除整个集合"],
        [`s.remove(3)      # {1, 2, 4, 5}
# s.remove(10)   # KeyError: 10`, `s.discard(4)     # {1, 2, 5}
s.discard(10)    # 不会报错`, `removed = s.pop()  # 返回被删除的元素`, `s.clear()          # set()`, `del s #无法访问这个变量,因为它已经del销毁`]),
      buildViewBlocks("集合运算",
        ["并集", "交集", "差集", "对称差集", "子集判断", "超集判断", "是否不相交", "原地修改"],
        [
          `A = {1, 2, 3}
B = {3, 4, 5}
print(A | B)           # 运算符
print(A.union(B))      # 方法调用
# 输出：{1, 2, 3, 4, 5}`,

          `A = {1, 2, 3}
B = {3, 4, 5}
print(A & B)                # 运算符
print(A.intersection(B))    # 方法调用
# 输出：{3}`,

          `A = {1, 2, 3}
B = {3, 4, 5}
print(A - B)           # A中有B中没有的
print(A.difference(B))
# 输出：{1, 2}

print(B - A)           # B中有A中没有的
# 输出：{4, 5}`,

          `A = {1, 2, 3}
B = {3, 4, 5}
print(A ^ B)                    # 运算符
print(A.symmetric_difference(B)) # 方法调用
# 输出：{1, 2, 4, 5}`,

          `A = {1, 2, 3}
B = {1, 2, 3, 4, 5}
C = {1, 2, 3}

print(A.issubset(B))   # True
print(A <= B)          # True (运算符)
print(C.issubset(A))   # True
print(A < C)           # False (真子集)`,

          `A = {1, 2, 3, 4, 5}
B = {1, 2, 3}

print(A.issuperset(B))  # True
print(A >= B)           # True (运算符)
print(A > B)            # True (真超集)`,

          `A = {1, 2, 3}
B = {3, 4, 5}
C = {4, 5, 6}

print(A.isdisjoint(B))  # False (有共同元素3)
print(A.isdisjoint(C))  # True (无共同元素)`,

          `# 原地修改（会改变原集合）
A = {1, 2, 3}
B = {3, 4, 5}

A.update(B)      # 并集，A变为{1,2,3,4,5}
A.intersection_update(B)  # 交集
A.difference_update(B)    # 差集
A.symmetric_difference_update(B)  # 对称差集
# 或使用：|= , &= , -= , ^=`
        ]
      )
    ],
    string: [
      buildViewBlocks("创建（create）",
        ["字符串可以使用单引号、双引号、三引号创建"],
        [`s1 = 'hello'         # 单引号
s2 = "world"         # 双引号
s3 = '''多行
字符串'''            # 三引号
s4 = str(123)        # 类型转换：'123'`]
      ),

      buildViewBlocks("读取（read）",
        ["字符串支持索引访问和切片"],
        [`s = "Hello World"
print(s[0])          # H (索引访问)
print(s[-1])         # d (负索引)
print(s[0:5])        # Hello (切片)
print(s[::2])        # HloWrd (步长)`,
          `# 字符串遍历
for char in s:
    print(char)      # 逐个字符输出`]
      ),

      buildViewBlocks("修改（update）",
        ["<p class='rem1'>字符串是不可变类型！所有修改都是创建新字符串，原字符串不变</p>"],
        [`s = "hello"
s2 = s.upper()       # "HELLO" (原s不变)
s3 = s.replace('h', 'H')  # "Hello"
s4 = s + " world"    # "hello world"
s5 = s * 3           # "hellohellohello"
# 注意：不能 s[0] = 'H' (会报错！)`],
        "update"
      ),

      buildViewBlocks("删除（delete）",
        ["字符串元素不能单独删除，但可以删除整个字符串变量"],
        [`s = "Hello World"
# 不能删除单个字符
# del s[0]  # 会报错

del s  # 删除整个字符串变量
# print(s)  # NameError: name 's' is not defined`],
        "delete"
      ),

      buildViewBlocks("字符串方法",
        ["大小写转换", "检查大小写", "查找", "替换", "检查开头/结尾", "分割", "连接", "去除空白"],
        [
          `# 大小写转换
text = "hello World"
print(text.upper())        # HELLO WORLD (全大写)
print(text.lower())        # hello world (全小写)
print(text.capitalize())   # Hello world (首字母大写)
print(text.title())        # Hello World (每个单词首字母大写)
print(text.swapcase())     # HELLO wORLD (大小写互换)`,

          `# 检查大小写
print("HELLO".isupper())   # True
print("hello".islower())   # True
print("Hello World".istitle())  # True
print("123".isdigit())     # True (是否全数字)
print("abc".isalpha())     # True (是否全字母)
print("abc123".isalnum())  # True (是否字母数字)`,

          `# 查找
text = "hello world, welcome to the world of Python"
print(text.find("world"))     # 6 (返回索引，找不到返回-1)
print(text.index("world"))    # 6 (返回索引，找不到报错)
print(text.rfind("world"))    # 21 (从右边开始找)
print(text.count("world"))    # 2 (出现次数)
print("world" in text)        # True (成员运算符)`,

          `# 替换
text = "hello world, welcome to the world of Python"
print(text.replace("world", "Earth"))  # hello Earth, welcome to the Earth of Python
print(text.replace("world", "Earth", 1))  # 只替换第一个`,

          `# 检查开头和结尾
text = "hello world, welcome to the world of Python"
print(text.startswith("hello"))  # True
print(text.endswith("Python"))   # True
print(text.startswith("world", 6))  # 从索引6开始检查`,

          `# 分割（split）
word = "a b c d e f g"
print(word.split())       # ['a', 'b', 'c', 'd', 'e', 'f', 'g'] (默认空格)
text = "a,b,c,d,e"
print(text.split(','))    # ['a', 'b', 'c', 'd', 'e'] (指定分割符)
print(text.split(',', 2)) # ['a', 'b', 'c,d,e'] (限制分割次数)
# 分割成三部分
print("a:b:c".split(':', 1))  # ['a', 'b:c']`,

          `# 连接（join）
words = ['Hello', 'World', 'Python']
print(' '.join(words))    # Hello World Python
print('-'.join(words))    # Hello-World-Python
print(''.join(words))     # HelloWorldPython`,

          `# 去除空白
text = "  hello world  "
print(text.strip())       # "hello world" (去除两端)
print(text.lstrip())      # "hello world  " (去除左端)
print(text.rstrip())      # "  hello world" (去除右端)
text2 = "---hello---"
print(text2.strip('-'))   # "hello" (去除指定字符)`
        ]
      ),

      buildViewBlocks("字符串格式化",
        ["三种格式化方式：%格式化、format()、f-string", "1. % 格式化（旧式）", '2. format() 方法（推荐）', "3. f-string（Python 3.6+，最推荐）"],
        [null,
          `name = "Alice"
age = 25
print("My name is %s, I'm %d years old" % (name, age))
# My name is Alice, I'm 25 years old`,
          `print("My name is {}, I'm {} years old".format(name, age))
print("My name is {1}, I'm {0} years old".format(age, name))
print("My name is {name}, I'm {age} years old".format(name=name, age=age))`,
          `print(f"My name is {name}, I'm {age} years old")
print(f"我叫{name}，今年{age}岁")
print(f"3 + 5 = {3 + 5}")  # 可以执行表达式
print(f"{name.upper()}")   # ALICE (可以调用方法)`
        ]
      )
    ],
    tuple: [
      buildViewBlocks("创建（create）",
        ["元组使用小括号创建，元素用逗号分隔"],
        [`t1 = (1, 2, 3)           # 整数元组
t2 = ('a', 'b', 'c')     # 字符串元组
t3 = (1, 'a', 3.14)      # 混合类型
t4 = (1,)                # 单元素元组（必须加逗号）
t5 = tuple([1, 2, 3])    # 从列表转换
print(type(t1))          # <class 'tuple'>`]
      ),

      buildViewBlocks("读取（read）",
        ["元组支持索引访问和切片，与字符串类似"],
        [`t = (10, 20, 30, 40, 50)
print(t[0])            # 10 (索引)
print(t[-1])           # 50 (负索引)
print(t[1:4])          # (20, 30, 40) (切片)
print(t[::2])          # (10, 30, 50) (步长)

# 遍历元组
for item in t:
    print(item)        # 逐个输出`]
      ),

      buildViewBlocks("修改（update）",
        ["<p class='rem1'>元组是不可变类型！不能修改元素，但若元素是可变类型，则该可变元素内部可修改</p>"],
        [`# 元组本身不可变
t = (1, 2, 3)
# t[0] = 100   # 报错：TypeError

# 但如果元素是可变类型（如列表），则可修改该元素内部
t2 = ([1, 2, 3, 4], 1)
t2[0][0] = 500
print(t2)            # ([500, 2, 3, 4], 1)

# 拼接生成新元组
t3 = (1, 2) + (3, 4)  # (1, 2, 3, 4)
t4 = (1, 2) * 3       # (1, 2, 1, 2, 1, 2)`],
        "update"
      ),

      buildViewBlocks("删除（delete）",
        ["元组元素不能单独删除，但可以删除整个元组变量"],
        [`t = (1, 2, 3)
# del t[0]   # 报错：TypeError

del t        # 删除整个元组
# print(t)   # NameError: name 't' is not defined`],
        "delete"
      ),

      buildViewBlocks("元组常用操作",
        ["长度、最大值、最小值、成员判断、解包", "这里提出的解包可以理解为一种快速绑定变量,你可以在这其中使用元组,列表,来进行快速赋值,甚至也可以用a,b=b,a来快速交换"],
        [`t = (5, 2, 8, 1, 9)
print(len(t))          # 5 (长度)
print(max(t))          # 9 (最大值)
print(min(t))          # 1 (最小值)
print(2 in t)          # True (成员判断)
print(10 not in t)     # True

# 解包（unpacking）
a, b, c = (1, 2, 3)    # a=1, b=2, c=3
print(a, b, c)

# 与 enumerate 配合
for i, val in enumerate(t):
    print(f"索引{i}: {val}")`]
      ),],
    int: [
      buildViewBlocks("创建（create）",
      ["整数直接赋值即可创建，也可以用 int() 转换"],
      [`a = 10
b = -5
c = 0
d = int("123")   # 字符串转整数：123
e = int(3.14)    # 浮点转整数：3（截断）
print(type(a))   # <class 'int'>`]
    ),

    buildViewBlocks("运算（operation）",
      ["整数支持加减乘除、取模、整除、乘方等运算"],
      [`a, b = 5, 2
print(a + b)    # 7  (加)
print(a - b)    # 3  (减)
print(a * b)    # 10 (乘)
print(a / b)    # 2.5 (除，结果为浮点数)
print(a % b)    # 1  (取模/余数)
print(a // b)   # 2  (整除，向下取整)
print(a ** b)   # 25 (乘方，5的2次方)

# 注意：不能直接用 ** 模拟开方（会有精度问题）
# 建议使用 math.sqrt() 或 pow()
import math
print(math.sqrt(4))   # 2.0 (精确开方)`]
    ),

    buildViewBlocks("进制转换",
      ["整数可以表示为二进制、八进制、十六进制"],
      [`# 不同进制表示
print(0b1010)    # 10 (二进制)
print(0o12)      # 10 (八进制)
print(0xA)       # 10 (十六进制)

# 转换为字符串
print(bin(10))   # 0b1010
print(oct(10))   # 0o12
print(hex(10))   # 0xa`]
    )],
    float: [
      buildViewBlocks("创建（create）",
      ["浮点数包含小数点，也可以用科学计数法"],
      [`f1 = 3.14
f2 = -0.5
f3 = 1.2e3    # 1200.0 (科学计数法)
f4 = float("3.14")  # 3.14
f5 = float(5)       # 5.0 (整数转浮点)
print(type(f1))     # <class 'float'>`]
    ),

    buildViewBlocks("运算（operation）",
      ["浮点数支持与整数相同的运算，但需注意精度问题"],
      [`a, b = 5.0, 2.0
print(a + b)    # 7.0
print(a - b)    # 3.0
print(a * b)    # 10.0
print(a / b)    # 2.5
print(a % b)    # 1.0
print(a // b)   # 2.0
print(a ** b)   # 25.0

# ⚠️ 精度问题
print(0.1 + 0.2)        # 0.30000000000000004 (不精确)
print(round(0.1 + 0.2, 1))  # 0.3 (使用 round 四舍五入)

# 使用 decimal 模块解决精度问题
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3`]
    ),

    buildViewBlocks("特殊值",
      ["浮点数有特殊的无穷大和 NaN"],
      [`print(float('inf'))   # inf (正无穷)
print(float('-inf'))  # -inf (负无穷)
print(float('nan'))   # nan (Not a Number)

import math
print(math.isinf(float('inf')))   # True
print(math.isnan(float('nan')))   # True`]
    ),],
    complex: [
      buildViewBlocks("创建（create）",
      ["复数由实部和虚部组成，使用 j 表示虚部"],
      [`c1 = 3 + 4j
c2 = complex(2, 3)    # 2 + 3j
c3 = complex(5)       # 5 + 0j
c4 = complex("1+2j")  # 1 + 2j
print(type(c1))       # <class 'complex'>
print(c1.real)        # 3.0 (实部)
print(c1.imag)        # 4.0 (虚部)`]
    ),

    buildViewBlocks("运算（operation）",
      ["复数支持加减乘除等运算"],
      [`a = 1 + 2j
b = 3 + 4j
print(a + b)    # (4+6j)
print(a - b)    # (-2-2j)
print(a * b)    # (-5+10j)   (1*3 - 2*4 + (1*4+2*3)j)
print(a / b)    # (0.44+0.08j)
print(a.conjugate())  # (1-2j) (共轭复数)
print(abs(a))   # 2.236... (模长，即 sqrt(1^2 + 2^2))`]
    ),],
    boolean: [
      buildViewBlocks("应用场景",
        ["布尔类型常用于条件判断和循环控制"],
        [`# 示例：输出100以内的素数
for i in range(2, 101):
    flag = True
    for j in range(2, int(i ** 0.5) + 1):
        if i % j == 0:
            flag = False
            break
    if flag:
        print(i, end=' ')   # 输出所有素数

# 也可以直接在 if 中使用表达式
age = 18
if age >= 18:
    print("成年人")
else:
    print("未成年人")`]
      )
    ],
    dataProcess: [
      buildViewBlocks("算术运算符",
        ["Python支持7种算术运算符", "由于前文已经讨论过，这个会讲解其简写形式",
          "加法 (+)", "减法 (-)", "乘法 (*)", " 除法 (/)", "求模/取余 (%)", "整除 (//)", "幂运算 (**)", "运算符优先级：** > * > / > // > %"],
        [null, null,
          `a = 10
a += 2          # 等价于 a = a + 2
print(a)        # 12`,
          `a = 10
a -= 1          # 等价于 a = a - 1
print(a)        # 9`,

          `a = 10
a *= 2          # 等价于 a = a * 2
print(a)        # 20`,

          `a = 10
a /= 2          # 等价于 a = a / 2
print(a)        # 10.0 (结果总是浮点数)`,

          `a = 10
a %= 4          # 等价于 a = a % 4
print(a)        # 2

# 负数取余（Python向下取整）
print(10 % -3)  # -2 (10 / -3 = -3.33, 向下取整 -4, 余数 = 10 - (-3)*(-4) = -2)
print(-10 % 3)  # 2 (-10 / 3 = -3.33, 向下取整 -4, 余数 = -10 - 3*(-4) = 2)`,

          `a = 10
a //= 3         # 等价于 a = a // 3
print(a)        # 3

# 负数的整除（向下取整）
print(10 // -3) # -4 (不是 -3！)`,

          `a = 10
a **= 2         # 等价于 a = a ** 2
print(a)        # 100

print(2 ** 3)   # 8 (2的3次方)
print(9 ** 0.5) # 3.0 (开平方)`
        ]
      ),
      buildViewBlocks("位运算符",
        ["<h3>什么位运算？</h3>",
          "按位与 (&) - 对应位都为1则1", "按位或 (|) - 对应位有一个为1则1",
          "按位异或 (^) - 对应位相同则0，不同则1", "按位取反 (~) - 0变1，1变0（补码形式)", "# 左移 (<<) - 向左移动n位，右侧补0", "右移 (>>) - 向右移动n位，左侧补符号位"],
        [null, 
          `a, b = 60, 13        # a=0011 1100, b=0000 1101
result = a & b       # 0000 1100 = 12
print(f"{a} & {b} = {result}")  # 60 & 13 = 12`,
          `a, b = 60, 13        # a=0011 1100, b=0000 1101
result = a | b       # 0011 1101 = 61
print(f"{a} | {b} = {result}")  # 60 | 13 = 61`,
          `a, b = 60, 13        # a=0011 1100, b=0000 1101
result = a ^ b       # 0011 0001 = 49
print(f"{a} ^ {b} = {result}")  # 60 ^ 13 = 49`,
          `a = 60               # 0011 1100
result = ~a          # 补码表示：-61
print(f"~{a} = {result}")  # ~60 = -61`,
          `a = 60               # 0011 1100
result = a << 2      # 1111 0000 = 240 (相当于乘以2^n)
print(f"{a} << 2 = {result}")  # 60 << 2 = 240`,
          `a = 60               # 0011 1100
result = a >> 2      # 0000 1111 = 15 (相当于整除2^n)
print(f"{a} >> 2 = {result}")  # 60 >> 2 = 15`
        ]
      ),
      buildViewBlocks("关系运算符",
        ["用于比较两个值，返回布尔值（True/False）", "大于 (>)", "小于 (<)",
          "大于等于 (>=)", "小于等于 (<=)", "等于 (==) - 比较值是否相等", "不等于 (!=)"],
        [null,
          `print(5 > 3)         # True
print(5 > 5)         # False`,
          `print(5 < 3)         # False
print(5 < 5)         # False`,
          `print(5 >= 5)        # True
print(5 >= 3)        # True`,
          `print(5 <= 5)        # True
print(5 <= 3)        # False`,
          `print(5 == 5)        # True
print(5 == 3)        # False`,
          `print(5 != 3)        # True
print(5 != 5)        # False`
        ]
      ),
      buildViewBlocks("身份运算符",
        ["比较两个对象的内存地址是否相同", "使用 is / is not"],
        [null,
          `a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is c)        # True (指向同一内存)
print(a is b)        # False (不同对象，不同内存)
print(a == b)        # True (值相同)

print(id(a))         # 内存地址 (如 2157562930816)
print(id(b))         # 不同地址
print(id(c))         # 与a相同`
        ]
      ),
      buildViewBlocks("成员运算符",
        ["判断元素是否在序列（字符串、列表、元组等）中", "使用 in / not in"],
        [null,
          `# 列表成员判断
print(2 in [1, 3, 4, 5])      # False
print(2 in [1, 2, 3, 4, 5])   # True
print(2 not in [1, 3, 4, 5])  # True

# 字符串成员判断
print('e' in 'hello')         # True
print('a' not in 'hello')     # True

# 字典成员判断（检查键）
print('name' in {'name': 'Alice', 'age': 25})  # True`
        ]
      ),
      buildViewBlocks("逻辑运算符",
        ["and（与）：全真则真", "or（或）：有真则真", "not（非）：真返假，假返真", "短路求值：返回实际操作的值"],
        [
          `# and（与）：两边都为 True 才返回 True
print(True and True)    # True
print(True and False)   # False
print(False and False)  # False

# 数字运算示例
print(3 and 5)          # 5 (两边都为真，返回最后一个)
print(0 and 5)          # 0 (假则返回假)
print(3 and 0)          # 0 (遇到假返回0)`,

          `# or（或）：只要一边为 True 就返回 True
print(True or False)    # True
print(False or True)    # True
print(False or False)   # False

# 数字运算示例
print(3 or 5)           # 3 (遇到真就返回，不再往后)
print(0 or 5)           # 5 (假则继续，返回最后一个)
print(0 or 0 or 5)      # 5 (连续假，返回最后一个真)
print(0 or 0 or 0)      # 0 (全假，返回最后一个)`,

          `# not（非）：取反
print(not True)         # False
print(not False)        # True
print(not 0)            # True (0 被转为 False)
print(not 3)            # False (3 被转为 True)
print(not [])           # True (空列表为 False)
print(not [1, 2])       # False (非空列表为 True)`,

          `# 布尔转换规则总结
# bool(非空) = True，bool(空) = False
print(bool([]))         # False (空列表)
print(bool([1, 2]))     # True (非空列表)
print(bool(0))          # False (数字0)
print(bool(3))          # True (非零数字)
print(bool(""))         # False (空字符串)
print(bool("abc"))      # True (非空字符串)

# bool 是 int 的子类
print(True == 1)        # True
print(False == 0)       # True`
        ]
      ),
      buildViewBlocks("赋值运算符",
        ["将右边表达式的值赋给左边变量", "复合赋值运算符简化代码"],
        [null,
          `# 基本赋值
x = 10
print(x)             # 10

# 链式赋值
a = b = c = 10
print(a, b, c)       # 10 10 10

# 增量赋值（复合赋值）
x = 10
x += 5               # x = x + 5 → 15
x -= 3               # x = x - 3 → 12
x *= 2               # x = x * 2 → 24
x /= 4               # x = x / 4 → 6.0
x %= 3               # x = x % 3 → 0.0
x = 10
x //= 3              # x = x // 3 → 3
x **= 2              # x = x ** 2 → 9

print(x)             # 9`
        ]
      ),
      buildViewBlocks("数据类型转换",
        ["Python 内置类型之间的相互转换", "转整数 int()", " 转浮点数 float()",
          "转字符串 str()", "转布尔 bool()", "转列表 list()", "转元组 tuple()",
          "# 转集合 set()", "转字典 dict()", "进制转换", "转换事例"],
        [null,
          `print(int(3.14))        # 3 (浮点转整数，截断)
print(int("123"))       # 123 (字符串转整数)
print(int(True))        # 1 (布尔转整数)
print(int(False))       # 0
print(int("0b1010", 2)) # 10 (二进制字符串转整数)
print(int("0o12", 8))   # 10 (八进制字符串转整数)
print(int("0xA", 16))   # 10 (十六进制字符串转整数)`,
          `print(float(10))        # 10.0 (整数转浮点)
print(float("3.14"))    # 3.14 (字符串转浮点)
print(float(True))      # 1.0 (布尔转浮点)
print(float("inf"))     # inf (无穷大)
print(float("NaN"))     # nan (非数字)`,
          `print(str(123))         # "123" (整数转字符串)
print(str(3.14))        # "3.14" (浮点转字符串)
print(str(True))        # "True" (布尔转字符串)
print(str([1, 2, 3]))   # "[1, 2, 3]" (列表转字符串)
print(str({'a': 1}))    # "{'a': 1}" (字典转字符串)
print(str(None))        # "None"`,
          `print(bool(1))          # True (非零整数)
print(bool(0))          # False (零)
print(bool(3.14))       # True (非零浮点)
print(bool(0.0))        # False (零)
print(bool("hello"))    # True (非空字符串)
print(bool(""))         # False (空字符串)
print(bool([1, 2]))     # True (非空列表)
print(bool([]))         # False (空列表)
print(bool({}))         # False (空字典)
print(bool(None))       # False`,
          `print(list("hello"))           # ['h', 'e', 'l', 'l', 'o'] (字符串转列表)
print(list((1, 2, 3)))         # [1, 2, 3] (元组转列表)
print(list({1, 2, 3}))         # [1, 2, 3] (集合转列表)
print(list({'a': 1, 'b': 2}))  # ['a', 'b'] (字典转列表，取键)
print(list(range(5)))          # [0, 1, 2, 3, 4] (range转列表)`,
          `print(tuple([1, 2, 3]))        # (1, 2, 3) (列表转元组)
print(tuple("hello"))          # ('h', 'e', 'l', 'l', 'o') (字符串转元组)
print(tuple({1, 2, 3}))        # (1, 2, 3) (集合转元组)
print(tuple({'a': 1, 'b': 2})) # ('a', 'b') (字典转元组，取键)`,
          `print(set([1, 2, 2, 3]))       # {1, 2, 3} (列表转集合，去重)
print(set("hello"))            # {'e', 'h', 'l', 'o'} (字符串转集合，去重)
print(set((1, 2, 2, 3)))       # {1, 2, 3} (元组转集合，去重)
print(set({'a': 1, 'b': 2}))   # {'a', 'b'} (字典转集合，取键)`,

          `# 从键值对列表创建
print(dict([('a', 1), ('b', 2)]))  # {'a': 1, 'b': 2}

# 从键值对元组创建
print(dict((('a', 1), ('b', 2))))  # {'a': 1, 'b': 2}

# 从键值对集合创建
print(dict({('a', 1), ('b', 2)}))  # {'a': 1, 'b': 2}

# 使用 zip 从两个列表创建
keys = ['a', 'b', 'c']
values = [1, 2, 3]
print(dict(zip(keys, values)))     # {'a': 1, 'b': 2, 'c': 3}

# 从字典创建字典（复制）
print(dict({'a': 1, 'b': 2}))      # {'a': 1, 'b': 2}`,

          `print(bin(10))          # '0b1010' (十进制转二进制)
print(oct(10))          # '0o12' (十进制转八进制)
print(hex(10))          # '0xa' (十进制转十六进制)
print(int('0b1010', 2)) # 10 (二进制字符串转十进制)
print(int('0o12', 8))   # 10 (八进制字符串转十进制)
print(int('0xa', 16))   # 10 (十六进制字符串转十进制)`,

          `# 列表去重
lst = [1, 2, 2, 3, 3, 3]
unique = list(set(lst))    # [1, 2, 3]

# 字符串转列表（按字符分割）
print(list("hello"))       # ['h', 'e', 'l', 'l', 'o']

# 字符串转列表（按分隔符）
print("a,b,c".split(','))  # ['a', 'b', 'c']

# 列表转字符串
print(''.join(['a', 'b', 'c']))  # 'abc'
print('-'.join(['a', 'b', 'c'])) # 'a-b-c'

# 转换判断
print(isinstance(3, int))  # True (判断类型)
print(type(3.14) is float) # True`
        ]
      )
    ],

  },
  javascript: {
    array: [],
  },
  csharp: {},
}
