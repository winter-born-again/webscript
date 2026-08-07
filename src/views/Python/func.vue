<template>
  <blockView :result="result[idx]" v-for="(value, idx) in h2title">
    <template #title>
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1 normal">{{ h3title[idx] }}</h3>
    </template>
    <template #default="{ index:_index, value:_value}"></template>
    <template #block="{ index:_index, item:_item }"></template>
  </blockView>
  </template>
<style scoped>
</style>
<script setup lang="ts">
import { knowledgeData } from '@/script/data';

const h2title = ["函数"]
const h3title = [
  "这一个章节，是所有编程语言中最为重要的部分,因为它人们得以实现功能，因为它人们得以构建工程，因为它人们得以面向过程，所有的操作可以说都是通过函数来实现的，它传递数据，复用代码，构筑面向对象。"]
const result = [ knowledgeData.python.func]
</script>

