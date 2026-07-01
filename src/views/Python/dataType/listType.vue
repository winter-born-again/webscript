<template>
  <appSider>
    <h2 class="st">列表(list)</h2>
      <h3 class="kt rem1">当你需要使用有序的，可修改的数据类型时你可以考虑列表</h3>
    <div style="padding-left: 10px; margin-bottom: 50px" class="kt" v-for="(value, index) in result" :key="index">
      <h3 class="normal" align="center">
        <div v-if="[0, 3].includes(index)">
          <el-button type="info" @click="showPopup(index)">
            <component :is="value.title"></component>
          </el-button>
          <popUp :data="popUpData[index]" :ref="(el) => setPopUpRef(el, index)">
          </popUp>
        </div>
        <div v-else>
          <component :is="value.title"></component>
        </div>
      </h3>
      <div style="padding-left: 10px" v-for="item in Array(value.section.length).keys()" :key="item">
        <h4 class="normal" v-html="value.section[item]"></h4>
        <component :is="value.content[item]"></component>
        <h4 v-if="index == 2 && item == 7">三者对比</h4>
        <div v-if="index == 2 && item == 7" id="compare">
          <table style="width: 100%; height: 100%" cellspacing="0" cellpadding="2%" align="center">
            <tr align="center">
              <th color="red">添加方法</th>
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
    </div>
  </appSider>
</template>

<style scoped>
/* 样式保持不变 */
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
</style>

<script setup>
import { knowledgeData } from '@/script/data'
import { buildViewBlocks } from '@/script/tool'
import { nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Codemirror, { CodeMirror } from 'codemirror-editor-vue3';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/python/python.js';
const result = knowledgeData.python.list
const route = useRoute()

import { reactive } from 'vue'
const popUpRef = reactive([])
const setPopUpRef = (el, index) => {
  if (el) {
    popUpRef[index] = el
  }
}

const popUpData = [
  buildViewBlocks('列表的本质', [
    '如果你写过其他语言，或者写过一些简单的算法题，你会不会疑问，为什么只有python中这样的数据称为列表，但是其他的语言里几乎都称之为数组',
    "最简单的来说，python的list类型其实负责了其他语言中<span class='bold'>可变顺序表</span>和<span class='bold'>不可变顺序表</span>这两个顺序表的职责。",
    "<span class='bold'>为什么会有可变表和不可变表呢？</span>",
    "这个问题就要这样来看了，假设你在餐厅吃饭，两张桌子中间空隙很小，一张桌子可以坐六个人，这就是不可变顺序表，空间是固定的。",
    "但是现在又来了两个人，你们一共有八个人，那么你们就坐不下了，怎么办呢，很简单，换一张大桌子，然后你们所有人做在大桌子上，这就是可变列表在遇到添加元素的时候所执行的逻辑，即先申请更大空间（内存），然后拷贝之前空间的所有元素到新空间"
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
]

const showPopup = (index) => {
  popUpRef[index].show()
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
