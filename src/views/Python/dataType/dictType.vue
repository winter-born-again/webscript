<template>
  <template #title>
    <h2 class="st">字典(dict)</h2>
    <h3 class="kt rem1">当你需要使用有关联的数据时，你可以尝试使用字典</h3>
  </template>
  <template #default="{ index, value }"></template>
</template>
<style scoped></style>
<script setup>
import { knowledgeData } from '@/script/data'

const result = knowledgeData.python.dict
</script>
