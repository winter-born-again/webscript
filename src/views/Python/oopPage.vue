<template>
  <blockView :result="result[idx]" v-for="(value, idx) in h2title">
    <template #title>
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1 normal">{{ h3title[idx] }}</h3>
    </template>
    <template #default="{ index:_index, value:_value }"></template>
    <template #block="{ index:_index, item:_item }"></template>
  </blockView>
  </template>
<style scoped>
</style>
<script setup lang="ts">
import { knowledgeData } from '@/script/data';
const h2title = ["面向对象"]
const h3title = [
  "在此之前，所有的python知识几乎都是通过用的，基本上语法是差不多的，但是此时，面向对象就是一个很著名的分歧，在现代语言并不是所有语言都选择了面向对象。"]
const result = [ knowledgeData.python.oop]
</script>
