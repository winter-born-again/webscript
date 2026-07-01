<template>
  <div class="title">
    <el-dropdown placement="bottom-start" @command="selectvalue">
      <el-button class="black" @dblclick="goStudy">webscript</el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="Python">Python</el-dropdown-item>
          <el-dropdown-item command="JavaScript">JavaScript</el-dropdown-item>
          <el-dropdown-item command="Csharp"> Csharp</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div>
    <div v-if="$route.path === '/Python'" class="introduce">
      <appSider>
        <h2>Python</h2>
        <div>
          python是一门
          <el-button type="info" @click="showPopup(0)">解释性</el-button>
          的通用编程语言。
          <popUp :data="popupData[0]" :ref="(el) => (popupRefs[0] = el)"> </popUp>
          在今天我们使用python的理由很多,比如
          <el-button type="info" @click="showPopup(1)">快速原型</el-button>
          <popUp :data="popupData[1]" :ref="(el) => (popupRefs[1] = el)"></popUp>
          ,第三方库优秀,各方面的应用也很多,最为突出的是一下三个方向
        </div>
        <ul>
          <li v-for="index in [2, 3, 4, 5]" :key="index">
            <el-button type="info" @click="showPopup(index)">
              <component :is="popupData[index].title "></component>
            </el-button>
            <popUp :data="popupData[index]" :ref="(el) => (popupRefs[index] = el)" />
          </li>
        </ul>
        <div id="container">
          <h2 class="color">内容</h2>
          <p>本产品出发理念为学懂学会，依照“先建立直觉，再深入细节”的原则进行开发</p>
          <p>除了基础的语法，还配有可直接运行的代码演示（所有代码均可一键复制）</p>
          <p>知识结构涵盖变量、数据类型、运算符、流程控制、函数、面向对象及基础算法</p>
          <p>针对列表、字典、字符串等核心类型，提供增删改查、遍历、排序等完整操作示例</p>
          <p>结合生活化比喻与分步图解，降低理解门槛，帮助初学者建立系统性的知识框架</p>
          <p>同时标注常见易错点（如浮点数精度、负数取模、可变类型陷阱），减少实战踩坑</p>
        </div>
        <div>
          <h2><component :is="popupData[popupData.length - 1].title"></component></h2>
          <p v-for="(value, index) in popupData[popupData.length - 1].section" :key="index">
            {{ value }}
          </p>
        </div>
        <h3>作者有话说</h3>
        <p>本产品将会使用对比的方式来进行多语言阐述，如果您有跨语言的打算，也许能够帮到你</p>
        <p>如果我的创意有帮助到您，我十分荣幸，感谢您的使用</p>
      </appSider>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
}

.el-button {
  color: rgb(167, 167, 167);
  background: #1e2022;
  border: 0;
  font-size: 30px;
}

.introduce h2 {
  padding: 10px 10px 10px 0;
}

.introduce .el-button {
  padding: 0 5px;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
}

h2+*,
div>p {
  text-indent: 2rem;
}
/* .color{
  background-color: #a8ceff;
} */
</style>

<script setup>
import { provide, ref } from 'vue'
import { buildViewBlocks } from '@/script/tool'
import { useRouter } from 'vue-router'
const currentLanguage = ref('Python')
provide('language', currentLanguage)
const router =useRouter()
const selectvalue = (command) => {
  currentLanguage.value = command
  router.push(`/${command}`)
  console.log('当前语言:', command)
}
const goStudy =()=>{
  router.push({
    name:"thinkStudy",
    query:{id:"python"}
  })
}
const popupData = [
  buildViewBlocks('解释型语言', [
    '这意味着python的代码在一般情况下都需要python环境才能得以运行,也就是python解释器',
    '但是这也出现了一个问题,解释型语言只有在运行时才会报错,在少量的代码情况下这个不便利性是不可知,但是当代码一多,在一定程度上是会干扰程序编写的',
    '不过反过来看,这也带来了交互式编程的优势——你可以在命令行或Jupyter中逐行执行代码,即时看到结果,这在数据探索和调试时非常高效',
  ]),
  buildViewBlocks(
    '快速原型',
    [
      '由于python有许多语法便利性,就是我们常说的语法简单,快捷,语法糖繁多,所以在快速开发产品时要比Java,Javascript,Typescript,PHP等语言快捷',
      '比如我们可以使用循环的方式生成一个0-10的列表',
      '也可以使用列表推导式来快速完成',
      '不仅如此,Python有着庞大的第三方库生态——你想实现的功能,几乎都能找到现成的库,直接pip install即可,无需从零造轮子',
    ],
    [
      null,
      `nums=[]
for i in range(0,11):
    nums.append(i)
print(nums)`,
      `print([i for i in range(0,11)])`,
    ],
  ),
  buildViewBlocks('人工智能', [
    'Python在AI领域的统治地位几乎无可撼动，主要分为两大板块：',
    '• 机器学习与深度学习：TensorFlow、PyTorch、Scikit-learn 等框架让神经网络的搭建像搭积木一样简单',
    '• 计算机视觉：OpenCV 提供了丰富的图像处理和视觉算法接口，从人脸识别到目标检测都能轻松上手',
    '此外,NLP(自然语言处理)方面也有Hugging Face Transformers等强大工具库',
  ]),
  buildViewBlocks('Web开发', [
    '由于python有丰富的第三方库,比如Django、Flask、FastAPI,并且语法简洁,所以在后端也有一席之地',
    'Django适合大型项目——自带ORM、Admin后台、认证系统,开箱即用',
    'Flask轻量灵活,适合小型服务和微服务',
    'FastAPI性能极高,支持异步,且自动生成API文档,是现代API开发的热门选择',
  ]),
  buildViewBlocks(
    '算法开发',
    [
      '这里不得不提到一个名词,心智开销,由于python本身的语法自由度，哪怕在一些算法上python本身的速度会产生性能压力,在很多时候在行动上还是会选择python作为算法开发的首选语言,因为可以全心在算法的开发上,不需要在意语法的特性,比如相对的来说用c++写算法的就很少,因为c++需要考虑的语法太复杂了',
      '另一个方面讲,很多时候算法开发都依赖于一些第三方库,因为这些库底层都是用c/c++实现的，所以算法整体的速度也不慢,而且在python中调用往往是更简单的,只需要import就好了,不需要考虑别的问题',
      '同时几乎所有前沿算法都是以python作为实现语言的',
      '举个比较粗浅的例子：一个名为冒泡排序的算法，我使用python实现是这样的',
      '而用c#实现是这样的',
    ],
    [
      null,
      null,
      null,
      `import random

def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

arr = [random.randint(0, 99) for _ in range(10)]

print("排序前:", arr)
bubble_sort(arr)
print("排序后:", arr)`,
      [
        'C#',
        `using System;

class Program
{
    static void BubbleSort(int[] arr)
    {
        int n = arr.Length;
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - 1 - i; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    static void Main()
    {
        Random rand = new Random();
        int[] arr = new int[10];
        for (int i = 0; i < arr.Length; i++)
        {
            arr[i] = rand.Next(0, 100);
        }

        Console.WriteLine("排序前: " + string.Join(", ", arr));
        BubbleSort(arr);
        Console.WriteLine("排序后: " + string.Join(", ", arr));
    }
}`,
      ],
    ],
  ),
  buildViewBlocks('数据分析与可视化', [
    '在数据科学领域,Python几乎是事实标准',
    'Pandas提供了DataFrame结构,让数据清洗、筛选、聚合变得异常简洁',
    'Matplotlib和Seaborn可以绘制出版级图表,从折线图到热力图都不在话下',
    'Jupyter Notebook更是数据分析师的首选交互式环境——代码、图表、说明文档可以混合编排,成果展示一目了然',
  ]),
  buildViewBlocks('总结', [
    `Python不是最快的语言,也不是最严谨的语言,但它是最'懂你'的语言`,
    '它用简洁的语法降低了编程的门槛,用丰富的生态覆盖了几乎所有的技术领域',
    '无论是刚入行的新手,还是资深架构师,都能在Python中找到适合自己的工具和节奏',
    '这也正是它能在人工智能、Web开发、数据分析、自动化运维等多个领域都占据重要位置的根本原因',
  ]),
]
const popupRefs = ref([])
const showPopup = (index) => {
  if (popupRefs.value[index]) {
    popupRefs.value[index].show()
  }
}

</script>
