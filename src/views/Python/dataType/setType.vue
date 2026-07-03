<template>
  <blockView :result="result">
    <template #title>
      <h2 class="st">集合(set)</h2>
    <h3 class="kt rem1">当你需要使用不重复且没有明确映射关系的数据时，你可以考虑集合</h3>
    </template>
    <template #default="{index,value}"></template>
  </blockView>
</template>
<style scoped></style>
<script setup>
import { knowledgeData } from '@/script/data'

const result = knowledgeData.python.set
</script>
