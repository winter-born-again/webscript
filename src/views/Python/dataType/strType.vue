<template>
  <blockView :result="result">
    <template #title>
      <h2 class="st">字符串(str)</h2>
    <h3 class="kt rem1">在python中文本的存储方式</h3>
    </template>
    <template #default="{index,value}"></template>
  </blockView>
</template>
<style scoped></style>
<script setup>
import { knowledgeData } from '@/script/data'

const result = knowledgeData.python.string
</script>
