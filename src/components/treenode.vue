<template>
  <div v-for="(value, index) in result" :key="index" class="kt style">
    <h3 class="normal center">
      <component :is="value.title"></component>
    </h3>

    <div v-for="(section, item) in value.section" :key="item" style="padding-left: 10px">
      <h4 class="normal" v-html="section"></h4>
      <component :is="value.content[item]" class="move"></component>
    </div>
  </div>
</template>
<style scoped>
.style {
  margin-bottom: 50px;
  background-color: #2d2d2f;
  padding: 5px;
  border-radius: 10px;
}
.move{
  overflow: auto;
}
</style>
<script setup lang="ts">
import { type ViewBlock } from '@/script/tool.ts'

const props = defineProps<{
  result: ViewBlock[]
}>()
</script>
