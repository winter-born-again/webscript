<template>
  <appSider>
    <div v-for="(value, idex) in h2title">
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1">{{ h3title[idex] }}</h3>
      <div style="margin-bottom: 50px" class="kt" v-for="(value, index) in result[idex]" :key="index">
        <h3 class="normal" align="center">
          <component :is="value.title"></component>
        </h3>

        <div style="padding-left: 10px" v-for="item in Array(value.section.length).keys()" :key="item">
          <h4 class="normal" v-html="value.section[item]"></h4>
          <component :is="value.content[item]"></component>
        </div>
      </div>
    </div>
  </appSider>
</template>
<style scoped></style>
<script setup>
import { knowledgeData } from '@/script/data'
const h2title = ['元组(tuple)', '整数(int)', '浮点型(float)', '复数(complex)', '布尔类型(boolean)']
const h3title = [
  '如果你需要不变的数据,你可以使用元组',
  '在python中整数的表现形式',
  '在python中小数的表现形式',
  '如果你学过高中数学,那么你想的没错,就是那个实数和虚数的超集,复数',
  'python中正确和错误的逻辑抽象,就是true就是对的,false就是错误',
]
const result = [
  knowledgeData.python.tuple,
  knowledgeData.python.int,
  knowledgeData.python.float,
  knowledgeData.python.complex,
  knowledgeData.python.boolean,
]
</script>
