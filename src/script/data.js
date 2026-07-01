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
        '查询（query）',
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
          "如果不使用字典自带的映射关系而去手动建立映射，代码如下："],
        [null, null, null, `text="happy everyday bro"
d=dict()
for i in text:
    if i not in d:
        d[i]=1
    else:
        d[i]+=1
print(d)`, null,`a="adssadsasdasda"
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
    ]
  },
  javascript: {
    array: [],
  },
  csharp: {},
}
