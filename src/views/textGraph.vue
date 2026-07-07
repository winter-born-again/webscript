<template>
  <div class="bitGraph">
    <div class="button">
      <el-input v-model="inputNumber" placeholder="输入数字双击=>赋值"></el-input>
      <el-button type="info" @click="add()">+1</el-button>
      <el-button type="info" @click="sub()">-1</el-button>
      <el-select v-model="radix_value" placeholder="选择进制" >
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
      <div>{{ dtreprocessing(digittozh_cn(radix_value)) }}进制为：{{ radix_bit }}</div>
      <div>表示数量：{{ realityPosition }}</div>
    </div>
  </div>
  <h4 class="rem1 normal">
    实际上是9这个一位数加上了一个1变成了两位的1和0的十进制数。那为什么我们知道这个两位十进制数是实际意义上的十呢？其实我们可以理解为：
  </h4>
  <div class="bitExpand">
    <template v-for="item in createBitVNode">
      <component :is="item"></component>
    </template>
  </div>
</template>

<style scoped>
.bitGraph {
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: auto 2fr;
  align-items: center;
  justify-items: center;
  color: rgb(52, 87, 87);
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
  width: 20%;
}
.bitGraph > div {
  font-size: 50px;
}
.virtual,
.reality {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
.virtual {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
}
.virtual > div:nth-child(2) {
  font-size: 30px;
  opacity: 0;
  height: 100%;
  font-size: 0;
}
.fade {
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
}

h4,
.bitExpand {
  color: cadetblue;
}
.bitExpand {
  width: 100%;
  height: 300px;
  background-color: darkolivegreen;
  display: grid;
  direction: rtl;
  grid-template-columns: repeat(20,1fr);
  gap:5px
}
</style>

<script setup>
import { ref, h, watch, computed } from 'vue'

const numberBit = ref(0)
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
  numberBit.value = inputNumber.value === '' ? inputNumber.value : 0
}
const transformOptions = (array) => {
  return array.map((x) => ({ value: x, label: x }))
}
const optionsnumber = transformOptions([...Array(35)].map((_, x) => `${x + 2}`))
const numberZh_cn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

const radix_value = ref(2)
const radix_bit = ref()
const realityPosition = ref()
const digittozh_cn = (num) => {
  let unitZh_cn = ''
  let reality_value = ''
  let result = []
  const digit = [
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
    unitZh_cn += numberZh_cn[i]
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
const dtreprocessing = (numZh_cn) => {
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
const bitevery = (bitNow, base) => {
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
  return data.map((x) => {
    return h(
      'div',
      { style: 'display:flex;justify-items: center; align-items: center;flex-direction: column;height:50%;gap:5px;' },
      [
        h('div',[x.virtual[0],h("sup",x.virtual[1])]),
        h('div', x.reality),
        h('div', `${Math.pow(x.virtual[0], x.virtual[1])}`),
        h('div', { style: 'transform: rotate(90deg);' }, '=>'),
        h("div",`${Math.pow(x.virtual[0], x.virtual[1])}X${x.reality}`)
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
