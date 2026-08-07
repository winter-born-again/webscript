<template>
  <blockView :result="result[idx]" v-for="(value, idx) in h2title">
    <template #title>
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1 normal">{{ h3title[idx] }}</h3>
    </template>
    <template #default="{ index:_index, value:_value}"></template>
    <template #block="{ index, item }">
      <div v-if="idx === 0 && index === 0 && item === 1">
        <h3>画成流程图就是这样:</h3>
        <flowGraph class="flowgraph" :data="data_if"></flowGraph>
      </div>
      <div v-if="idx === 1 && index === 2 && item === 3" style="margin: 50px 0">
        <h3 class="center">while和for循环的区别</h3>
        <p class="rem1">
          在<span class="bg bold">数字循环(1-10的循环等)</span
          >的尺度下，两者几乎相同，但是for循环只能处理有限的循环次，但是<span class="bg bold"
            >在理论上(硬件支持的情况下)</span
          >while循环可以处理无限次的循环。但是for循环可以很简单的遍历一些可迭代的对象，但是while相对就困难很多。所以各有优劣，<span
            class="bg bold"
            >在编程中没有最好，只有更好。</span
          >
        </p>
        <h4 class="st">
          <el-button style="background-color: var(--el-color-info-light-8);" @click="showPopup(0)"></el-button>
          <popUp :data="popUpData[0]" :ref="(el:any)=>(popUpRefs[0])" ></popUp></h4>
        <div v-for="(example, number) in exampleData">
          <div v-if="number == 0">
            <p class="rem1">一个猜数字的游戏：</p>
          </div>
          <blockCode :code="example"></blockCode>
        </div>
      </div>
    </template>
  </blockView>
</template>
<style scoped>
.flowgraph {
  margin-top: 10px;
}

.example {
  color: var(--el-color-info-dark-2);
  background-color: var(--el-color-info-light-8);
  border: 0;
  padding: 0 5px;
  font-weight: bold;
  font-style: italic;
}

.color {
  width: 100%;
  height: 20px;
  background-color: #56c9ff;
}
</style>
<script setup lang="ts">
import { knowledgeData } from '@/script/data'
import flowGraph from '@/components/python/antvx6.vue'
import { buildViewBlocks, makeX6all, makeX6Core } from '@/script/tool'
import { ref } from 'vue'
const h2title = ['判断', '循环', '异常处理', '表达式和生成式']
const h3title = [
  '这是python最基础的语句之一，用来进行判断',
  '当你需要进行重复的操作时循环是一个不错的选择',
  '如果你只是写一些简单语法操作，你是基本用不到的，但是当你开始写一些具、有交互场景时候，异常处理就是不可或缺的',
]
const result = [
  knowledgeData.python.flow_if,
  knowledgeData.python.flow_loop,
  knowledgeData.python.flow_catch,
  knowledgeData.python.flow_for_another,
]
//定义节点的类型
//其中 rect表示执行的正方形，ellipse表示开始和结束的椭圆形，polygon表示代表判断的菱形
const nodeSettings = {
  rect: ['block2', 'block4', 'block6', 'block8', 'block10', 'block11'],
  ellipse: ['block1', 'block12'],
  polygon: ['block3', 'block5', 'block7', 'block9'],
}
//定义了特殊形状的特殊行为，这里定义了判断的三个连接桩(分别是上左下，就是连线的出发点和目的点)
const polygonSettings = {
  ports: {
    groups: {
      top: {
        position: { name: 'absolute', args: { x: 50, y: 0 } },
        attrs: {
          circle: { r: 4, magnet: true, fill: '#fff', stroke: '#e67e22', strokeWidth: 2 },
        },
      },
      right: {
        position: { name: 'absolute', args: { x: 100, y: 25 } },
        attrs: {
          circle: { r: 4, magnet: true, fill: '#fff', stroke: '#e67e22', strokeWidth: 2 },
        },
      },
      bottom: {
        position: { name: 'absolute', args: { x: 50, y: 50 } },
        attrs: {
          circle: { r: 4, magnet: true, fill: '#fff', stroke: '#e67e22', strokeWidth: 2 },
        },
      },
    },
    items: [
      { id: 'top', group: 'top' },
      { id: 'right', group: 'right' },
      { id: 'bottom', group: 'bottom' },
    ],
  },
  attrs: {
    body: {
      refPoints: '0,40 40,0 80,40 40,80',
      fill: '#f39c12',
      stroke: '#e67e22',
      strokeWidth: 2,
    },
    label: {
      fill: '#fff',
      fontSize: 13,
      fontWeight: 'bold',
    },
  },
}
//定义了最为基本的，所有节点的连线属性
const line = {
  edges: {
    router: 'orth',
    attrs: {
      line: { stroke: '#8d9095' },
    },
  },
  rect: {
    attrs: {
      body: {
        stroke: 2,
        fill: '#56c9ff',
      },
      label: {
        fill: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
      },
    },
  },
  ellipse: {
    attrs: {
      body: {
        fill: '#2ecc71',
        stroke: '#27ae60',
        rx: 25,
      },
      label: {
        fill: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
  },
  polygon: {
    attrs: {
      body: {
        refPoints: '0,40 40,0 80,40 40,80',
        fill: '#f39c12',
        stroke: '#e67e22',
        strokeWidth: 2,
      },
      label: {
        fill: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
      },
    },
  },
}
//这里定义了每个块的位置已经文字配置
const positionLabel = {
  rect: [
    {
      x: 0,
      y: 100,
      label: 'grade=80',
    },
    {
      x: 0,
      y: 300,
      label: 'print("优秀")',
    },
    {
      x: 120,
      y: 350,
      label: 'print("良好")',
    },
    {
      x: 240,
      y: 400,
      label: 'print("一般")',
    },
    {
      x: 360,
      y: 450,
      label: 'print("合格")',
    },
    {
      x: 480,
      y: 500,
      label: 'print("不合格")',
    },
  ],
  ellipse: [
    {
      x: 0,
      y: 0,
      label: '开始',
    },
    {
      x: 0,
      y: 550,
      label: '结束',
    },
  ],
  polygon: [
    {
      x: 0,
      y: 200,
      label: 'grade>=90',
    },
    {
      x: 120,
      y: 250,
      label: 'grade>=80',
    },
    {
      x: 240,
      y: 300,
      label: 'grade>=70',
    },
    {
      x: 360,
      y: 350,
      label: 'grade>=60',
    },
  ],
}
//指定连接，如果有涉及连接桩需要注明
const edgeSettings = [
  ['block1', 'block2'],
  ['block2', 'block3'],
  [
    ['block3', 'right'],
    ['block5', 'top'],
  ],
  [['block3', 'bottom'], 'block4'],
  [
    ['block5', 'right'],
    ['block7', 'top'],
  ],
  [['block5', 'bottom'], 'block6'],
  [
    ['block7', 'right'],
    ['block9', 'top'],
  ],
  [['block7', 'bottom'], 'block8'],
  [['block9', 'bottom'], 'block10'],
  [['block9', 'right'], 'block11'],
  ['block4', 'block12'],
  ['block6', 'block12'],
  ['block8', 'block12'],
  ['block10', 'block12'],
  ['block11', 'block12'],
]
//makex6all会将上述填写的数据同时一个格式化成antvx6能接收的data形式
//makeX6core会将生成核心的数据块，也就是每个块的数据
//秉承着职责分离，我使用了这个两个函数，这两个函数来自根目录/script/tool.js
let data_if:any = makeX6all(
  makeX6Core(nodeSettings, edgeSettings, polygonSettings),
  line,
  positionLabel,
)
data_if.edges[9].label = '否'

const popUpRefs = ref<any>([])
const popUpData = [
  buildViewBlocks('具体的例子', [
    `<p class="rem1">这样的例子还有很多，比如while循环利好的斐波那契数列。`,
    `<p class="rem1">几乎百分之八十的for循环都可以改写成while循环，但是反过来不成立。`,
    `<p class="rem1">for循环其实很省心，出错只会报错，而while循环可能出现无限循环的情况。`,
    `<p class="rem1">同时很多便捷的语法都有for循环的参与，比如列表推导式，生成表达式。`,
    `<p class="rem1">斐波那契(fib)数列：每一项等于这个项前两项的和。列举出来就是0 1 1 2 3 5 8 13 ……`,
  ]),
]
const showPopup = (index:number):void => {
  if (popUpRefs.value[index]) {
    popUpRefs.value[index].show()
  }
}
const exampleData = [
  `import random#导入一个随机库
target = random.randint(1, 100)#生成了一个
guess = 0
while guess != target:
    guess = int(input("猜一个数字(1-100): "))
    if guess < target:
        print("太小了！")
    elif guess > target:
        print("太大了！")
print("恭喜，猜对了！")`,
  `fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
print(fruit)`,
  `fruits = ['apple', 'banana', 'cherry']
i = 0
while i < len(fruits):
    print(fruits[i])
i += 1  `,
]
</script>
