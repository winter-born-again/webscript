<template>
  <blockView :result="result[idex]" v-for="(value, idex) in h2title">
    <template #title>
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1">{{ h3title[idex] }}</h3>
    </template>
    <template #default="{ index, value }">
      <div v-if="route.query.id === 'list' && [0, 3].includes(index)">
        <el-button type="info" @click="showPopup(index)">
          <component :is="value.title"></component>
        </el-button>
        <popUp :data="popUpData[index]" :ref="(el) => setPopUpRef(el, index)"> </popUp>
      </div>
    </template>
    <template #block="{ index, item }">
      <div v-if="route.query.id === 'list' && index === 2 && item === 7">
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
      <div v-if="route.query.id === 'dataProcess' && index === 1 && item === 0">
        <h4 class="rem1">位运算是基于二进制所进行的，所以在之前我们还要讨论一些计算机概论知识了</h4>
        <h4 class="rem1 normal">
          与其他语言不同的是，python的数位是不存在超出长度，但是我们下面讲述为了方便理解还是用八位比特(bit)来表示:
        </h4>
        <h4 class="rem1">什么是二进制？</h4>
        <h4 class="rem1 normal">
          我们不妨来对比一下十进制，十进制是一个<b>数位</b>上的数<b>大于九</b>就<b>进位</b>(多出一位)
        </h4>

      </div>
    </template>
  </blockView>
</template>
<style scoped>
#compare {
  width: calc(100% - 20px);
  height: 300px;
  background-color: #1e1e1e;
  margin: 20px 0;
  border-radius: 20px;
  padding: 10px;
}

.color1 {
  background: #106369;
}

.color2 {
  background: #3b5a5e;
}

.el-button {
  color: rgb(167, 167, 167);
  background: #1e2022;
  border: 0;
  padding: 0 5px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
}

.bitGraph {
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: auto 2fr;
  align-items: center;
  justify-items: center;
}
.button {
  width: 100%;
  height: 100px;
  grid-column: 1 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
:deep(.el-input__wrapper) {
  background-color: rgb(0, 0, 0) !important;
  box-shadow: 0 0 0 1px #333 inset;
}
:deep(.el-input__inner) {
  color: #b1b1b1;
  background-color: transparent;
}
.button > [class^='el-'] {
  height: 30px;
  width: 30%;
}
.bitGraph > div {
  font-size: 50px;
}
.virtual,
.reality {
  width: 100%;
  height: 100%;
}
</style>
<script setup>
import { knowledgeData } from '@/script/data'
import { computed, ref, nextTick, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { buildViewBlocks } from '@/script/tool'
const h2unit = {
  list: ['列表(list)'],
  dict: ['字典(dict)'],
  set: ['集合(set)'],
  string: ['字符串(str)'],
  another: ['元组(tuple)', '整数(int)', '浮点型(float)', '复数(complex)', '布尔类型(boolean)'],
  dataProcess: ['数据操作'],
}
const h3unit = {
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
const resultunit = {
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
const popUpDataunit = {
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
}
const currentId = ref('')
const route = useRoute()
const h2title = computed(() => h2unit[route.query.id] || [])
const h3title = computed(() => h3unit[route.query.id] || [])
const result = computed(() => resultunit[route.query.id] || [])
const popUpData = computed(() => popUpDataunit[route.query.id] || [])
const popUpRef = reactive([])
const setPopUpRef = (el, index) => {
  if (el) {
    popUpRef[index] = el
  }
}
const showPopup = (index) => {
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
</script>
