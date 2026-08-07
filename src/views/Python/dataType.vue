<template>
  <blockView :result="result[idex]" v-for="(value, idex) in h2title">
    <template #title>
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1">{{ h3title[idex] }}</h3>
    </template>
    <template #default="{ index, value }">
      <div v-if="route.query.id === 'list' && [0, 3].includes(index)" class="list">
        <el-button type="info" @click="showPopup(index)">
          <component :is="value.title"></component>
        </el-button>
        <popUp :data="popUpData[index]" :ref="(el:any) => setPopUpRef(el, index)"> </popUp>
      </div>
    </template>
    <template #block="{ index, item }">
      <div v-if="route.query.id === 'list' && index === 2 && item === 7" class="list">
        <h4>三者对比</h4>
        <div id="compare">
          <table style="width: 100%; height: 100%" cellspacing="0" cellpadding="2%" align="center">
            <tr align="center">
              <th>添加方法</th>
              <th>添加位置</th>
              <th>添加元素类型</th>
            </tr>
            <tr align="center">
              <td>append:</td>
              <td class="color1">末尾添加</td>
              <td class="color2">单个元素</td>
            </tr>
            <tr align="center">
              <td>extend:</td>
              <td class="color1">末尾添加</td>
              <td>列表包裹<br />可以添加多个</td>
            </tr>
            <tr align="center">
              <td>insert:</td>
              <td>任意位置</td>
              <td class="color2">单个元素</td>
            </tr>
          </table>
        </div>
      </div>
      <div v-if="route.query.id === 'dataProcess' && index === 1 && item === 0" class="dataProcess">
        <h4 class="rem1">位运算是基于二进制所进行的，所以在之前我们还要讨论一些计算机概论知识了</h4>
        <h4 class="rem1 normal">
          与其他语言不同的是，python的数位是不存在超出长度，但是我们下面讲述为了方便理解还是用八位比特(bit)来表示:
        </h4>
        <h4 class="rem1">什么是二进制？</h4>
        <h4 class="rem1 normal">
          我们不妨来对比一下十进制，十进制是一个<b>数位</b>上的数<b>大于九</b>就<b>进位</b>(多出一位)
        </h4>
        <div class="bitGraph">
          <div class="button">
            <el-input v-model="inputNumber" placeholder="输入数字双击=>赋值"></el-input>
            <el-button type="info" @click="add()">+1</el-button>
            <el-button type="info" @click="sub()">-1</el-button>
            <el-select v-model="radix_value" placeholder="选择进制">
              <el-option
                v-for="item in optionsnumber"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="virtual">
            <div ref="numberPositionRef">{{ numberBit }}</div>
            <div :class="{ fade: isFade }" :key="twice" @animationend="isFade = false">
              {{ changeValue > 0 ? '+1' : '-1' }}
            </div>
          </div>
          <div @click="assign">=></div>
          <div class="reality">
            <div>
              <p>{{ radix_value }}进制为</p>
              <p>{{ radix_bit }}</p>
            </div>
            <div>
              <p>表示数量</p>
              <P>{{ realityPosition }}</P>
            </div>
          </div>
        </div>
        <h4 class="rem1 normal">
          实际上是9这个一位数加上了一个1变成了两位的1和0的十进制数。那为什么我们知道这个两位十进制数是实际意义上的十呢？其实我们可以理解为：
        </h4>
        <div class="bitExpand">
          <h4 align="center">10=>1*10<sup>1</sup>+0*10<sup>0</sup>=>10+0=>10</h4>
          <div class="bitExpand_middle">
            <template v-for="item in createBitVNode">
              <component :is="item"></component>
            </template>
          </div>
        </div>
        <h4 class="rem1">十进制和二进制有什么关系？</h4>
        <h4 class="rem1 normal">
          其实二进制的逻辑也是这样：一个数位上的数大于二就进位(多出一位)。那么其实我们也可以仿照前文的分割方式(10=>1*10<sup>1</sup>+0*10<sup>0</sup>=>10+0=>10)
          来将一个数转换为二进制：
        </h4>
        <h4 class="rem1 center">10=>8+2=>2<sup>3</sup>+2<sup>1</sup>=>1010</h4>
        <h4 class="rem1 normal">
          那为什么是1010不是1100，0101，1001呢，其实我们可以通过观察十进制数(9+1=10)的过程其实可以发现，我们实际的数字十是通过
          1*10<sup>1</sup>+0*10<sup>0</sup>得到的，恰好这个算式中的1和0正好是十进制数的第一位和第二位。这并不是巧合，我们所有的进制都遵循这个规律，即：
        </h4>
        <h4 class="rem1 center">
          实际数字=A*进制<sup>位</sup>+B*进制<sup>位</sup>……=>AB…(n进制的数)
        </h4>
        <h4 class="rem1 normal">
          其中，位就代表了这些数(A，B…)在n进制数中的位置，比如1*10<sup>1</sup>+0*10<sup>0</sup>中1*10<sup>1</sup>其实就是就是告诉我们1这个数字在十进制数的第2位(从右往左数，因为起始位是0所以需要加1)。
        </h4>
        <h4>
          在计算机中，二进制是最多的，这是因为只需要两种状态就可以抽象出二进制，根据公式，最为高效的进制为e进制，也就是接近2.7的进制，但是由于
          一些原因，
          <el-button type="info" @click="showPopup(0)"> 二进制更善于普及 </el-button>
          <popUp :data="popUpData[0]" :ref="(el:any) => setPopUpRef(el, 0)"> </popUp>
        </h4>
      </div>
    </template>
  </blockView>
</template>
<style scoped>
.list #compare {
  width: calc(100% - 20px);
  height: 300px;
  background-color: var(--el-color-info-light-9);
  margin: 20px 0;
  border-radius: 20px;
  padding: 10px;
}

.list .color1 {
  background: #106369;
}

.list .color2 {
  background: #3b5a5e;
}

.list .el-button {
  color: var(--el-color-info-dark-2);
  background-color: var(--el-color-info-light-8);
  border: 0px;
  padding: 0 5px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
}

.dataProcess .bitGraph {
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: auto 2fr;
  align-items: center;
  justify-items: center;
  color: var(--el-color-info-dark-2);
  background-color: var(--el-color-info-light-9);
  border-radius: 20px;
  box-shadow: 0px 0px 10px var(--el-fill-color-dark);
}
.dataProcess .bitGraph .button {
  width: 100%;
  height: 80px;
  grid-column: 1 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.dataProcess .button > [class^='el-'] {
  height: 30px;
  width: 20%;
}
.button .el-button {
  font-size: 20px;
}
.dataProcess .el-button {
  color: var(--el-color-info-dark-2);
  background-color: var(--el-color-info-light-8);
  border: 0;
  padding: 0 5px;
  font-weight: bold;
  font-style: italic;
}
.dataProcess .bitGraph > div {
  font-size: 50px;
}
.dataProcess .virtual,
.dataProcess .reality {
  width: 100%;
  height: 100%;
}
.dataProcess .virtual {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
}
.dataProcess .virtual > div:nth-child(2) {
  font-size: 30px;
  opacity: 0;
  height: 100%;
  font-size: 0;
}
.dataProcess .fade {
  animation: toggle 1s ease 0.03s forwards;
}
@keyframes toggle {
  0% {
    opacity: 0.5;
    transform: translateY(0);
    font-size: 0px;
  }
  50% {
    opacity: 1;
    transform: translateY(-20px);
    font-size: 30px;
  }
  100% {
    opacity: 0;
    transform: translateY(-40px);
    font-size: 0px;
  }
}
.reality > div {
  font-size: 20px;
  text-align: center;
}
.bitExpand {
  border-radius: 20px;
  box-shadow: 0px 0px 10px var(--el-fill-color-dark);
  display: flex;
  flex-direction: column;
  background-color: var(--el-color-info-light-9);
}

.dataProcess .bitExpand_middle {
  width: calc(100% - 20px);
  display: grid;
  direction: rtl;
  grid-template-columns: repeat(20, 1fr);
  align-items: center;
  gap: 10px;
  padding: 10px;
}
.dataProcess .bitExpand_middle > div {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
.dataProcess h4 .el-button {
  background-color: var(--el-color-info-light-8);
}
</style>
<script setup lang="ts">
import { knowledgeData } from '@/script/data'
import { computed, ref, nextTick, onMounted, reactive, watch, h } from 'vue'
import { useRoute } from 'vue-router'
import { buildViewBlocks } from '@/script/tool'
const h2unit:Record<string,any[]> = {
  list: ['列表(list)'],
  dict: ['字典(dict)'],
  set: ['集合(set)'],
  string: ['字符串(str)'],
  another: ['元组(tuple)', '整数(int)', '浮点型(float)', '复数(complex)', '布尔类型(boolean)'],
  dataProcess: ['数据操作'],
}
const h3unit:Record<string,any[]> = {
  list: ['当你需要使用有序的，可修改的数据类型时你可以考虑列表'],
  dict: ['当你需要使用有关联的数据时，你可以尝试使用字典'],
  set: ['当你需要使用不重复且没有明确映射关系的数据时，你可以考虑集合'],
  string: ['在python中文本的存储方式'],
  another: [
    '如果你需要不变的数据,你可以使用元组',
    '在python中整数的表现形式',
    '在python中小数的表现形式',
    '如果你学过高中数学,那么你想的没错,就是那个实数和虚数的超集,复数',
    'python中正确和错误的逻辑抽象,就是true就是对的,false就是错误',
  ],
  dataProcess: ['运算符与操作符'],
}
const resultunit:Record<string,any[]> = {
  list: [knowledgeData.python.list],
  dict: [knowledgeData.python.dict],
  set: [knowledgeData.python.set],
  string: [knowledgeData.python.string],
  another: [
    knowledgeData.python.tuple,
    knowledgeData.python.int,
    knowledgeData.python.float,
    knowledgeData.python.complex,
    knowledgeData.python.boolean,
  ],
  dataProcess: [knowledgeData.python.dataProcess],
}
const popUpDataunit :Record<string,any[]>= {
  list: [
    buildViewBlocks('列表的本质', [
      '如果你写过其他语言，或者写过一些简单的算法题，你会不会疑问，为什么只有python中这样的数据称为列表，但是其他的语言里几乎都称之为数组',
      "最简单的来说，python的list类型其实负责了其他语言中<span class='bold'>可变顺序表</span>和<span class='bold'>不可变顺序表</span>这两个顺序表的职责。",
      "<span class='bold'>为什么会有可变表和不可变表呢？</span>",
      '这个问题就要这样来看了，假设你在餐厅吃饭，两张桌子中间空隙很小，一张桌子可以坐六个人，这就是不可变顺序表，空间是固定的。',
      '但是现在又来了两个人，你们一共有八个人，那么你们就坐不下了，怎么办呢，很简单，换一张大桌子，然后你们所有人做在大桌子上，这就是可变列表在遇到添加元素的时候所执行的逻辑，即先申请更大空间（内存），然后拷贝之前空间的所有元素到新空间',
    ]),
    buildViewBlocks('1'),
    buildViewBlocks('2'),
    buildViewBlocks('删除方式的不同应用', [
      `del是关键字，pop和clear，remove是方法`,
      `Clear:清空对象`,
      `Remove：清除一个指定的值，如果存在重复值，删除索引靠前的，没有返回值(函数的概念，在后面会提到)`,
      `Pop:清除对应索引的值，有返回值`,
      `Del：清除指定项`,
    ]),
  ],
  dataProcess: [
    buildViewBlocks('二进制和三进制', [
      `其实我们还听见过三进制计算机`,
      `从(数学)理论上来讲三进制计算机确实要比二进制计算机的运算速度快，但是三进制计算机是极难复现的`,
      `因为计算机在物理层面其实是通过电路逻辑(高低电压)来区分0和1的`,
      `但是如果需要再去添加一个部分去模拟第三种状态是很难做到，这会使得计算机出现一些物理层面的缺陷(比如极差的抗干扰能力)`,
      `有人会说我们可以用量子，来模拟三种状态。`,
      `我们抛开复杂的量子力学层面的问题(比如会不会发生量子隧穿，会不会有量子纠缠的干扰)以及这属不属于经典的半导体计算机`,
      `三进制计算机仍然还会面临兼容的问题(比如很多标准都已经基于二进制开发了，比如Unicode，IFEE754等等)这会使得计算机世界迎来颠覆性的挑战`,
    ]),
  ],
}
const route = useRoute()
const h2title = computed(() => h2unit[route.query.id as string] || [])
const h3title = computed(() => h3unit[route.query.id  as string] || [])
const result = computed(() => resultunit[route.query.id as string] || [])
const popUpData = computed(() => popUpDataunit[route.query.id as string] || [])
const popUpRef = reactive<any>([])
const setPopUpRef = (el:any, index:number) :void=> {
  if (el) {
    popUpRef[index] = el
  }
}
const showPopup = (index:number):void => {
  popUpRef[index]?.show()
}
onMounted(async () => {
  await nextTick()
  if (route.hash) {
    const element = document.querySelector(route.hash)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }
})
const numberBit = ref(9)
const inputNumber = ref()
const isFade = ref(false)
const twice = ref(0)
const changeValue = ref(1)
const rewriteKey = () => {
  twice.value++
}

const add = () => {
  changeValue.value = 1
  numberBit.value++
  rewriteKey()
  isFade.value = true
}

const sub = () => {
  changeValue.value = -1
  numberBit.value--
  rewriteKey()
  isFade.value = true
}
const assign = () => {
  const val = parseFloat(inputNumber.value)
  numberBit.value = isNaN(val) ? 0 : val
}

const transformOptions = (array:string[]):any[] => {
  return array.map((x) => ({ value: x, label: x }))
}
const optionsnumber = transformOptions([...Array(35)].map((_, x) => `${x + 2}`))
const numberZh_cn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

const radix_value = ref(10)
const radix_bit = ref()
const realityPosition = ref()
const digittozh_cn = (num:number) => {
  let unitZh_cn:string = ''
  let reality_value:string[] = []
  let result:any[] = []
  const digit:string[] = [
    '个',
    '十',
    '百',
    '千',
    '万',
    '十万',
    '百万',
    '千万',
    '亿',
    '十亿',
    '百亿',
    '千亿',
    '万亿',
  ]
  for (let i of Math.abs(num).toString()) {
    unitZh_cn += numberZh_cn[parseInt(i)]
  }
  reality_value = [...unitZh_cn].reverse()
  for (let i in reality_value) {
    if (reality_value[i] !== '零') {
      result.push(digit[i], reality_value[i])
    } else {
      result.push(reality_value[i])
    }
  }
  return result
}
const dtreprocessing = (numZh_cn:string[]) => {
  return numZh_cn
    .reverse()
    .join('')
    .replace(/个$/, '')
    .replace(/^一十/, '十')
    .replace(/(零)\1+/g, '$1')
    .replace(/零+$/, '')
}
const baseArithmetic = () => {
  const result = digittozh_cn(numberBit.value)
  console.log(result)
  realityPosition.value = (numberBit.value >= 0 ? '' : '负') + dtreprocessing(result)
  radix_bit.value = numberBit.value.toString(radix_value.value)
}
const bitevery = (bitNow:any, base:string|number) => {
  console.log(bitNow)
  const data = Array.from(bitNow)
    .reverse()
    .map((value, index) => {
      return { reality: value, virtual: [base, index] }
    })
  return data
}
const createBitVNode = computed(() => {
  let data = bitevery(radix_bit.value, radix_value.value)
  return data.map((x:any) => {
    return h(
      'div',
      [
        h('div', [x.virtual[0], h('sup', x.virtual[1])]),
        h('div', x.reality),
        h('div', `${Math.pow(x.virtual[0], x.virtual[1])}`),
        h('div', { style: 'transform: rotate(-90deg);' }, '=>'),
        h('div', `${Math.pow(x.virtual[0], x.virtual[1])}X${x.reality}`),
      ],
    )
  })
})

watch(
  [numberBit, radix_value],
  () => {
    baseArithmetic()
  },
  { immediate: true },
)
</script>
