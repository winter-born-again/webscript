<template>
  <blockView :result="result[idex]" v-for="(value, idex) in h2title">
    <template #title>
      <h2 class="st">{{ value }}</h2>
      <h3 class="kt rem1">{{ h3title[idex] }}</h3>
    </template>
    <!-- <template #default="{ index, value }">
    </template>
    <template #block="{ index, item }">
    </template> -->
  </blockView>
</template>
<style scoped>

</style>
<script setup lang="ts">
import { knowledgeData } from '@/script/data'
import { computed, ref, nextTick, onMounted, reactive, watch, h } from 'vue'
import { useRoute } from 'vue-router'
import { buildViewBlocks } from '@/script/tool'
const h2unit:Record<string,any[]> = {
  array:["array"]
}
const h3unit:Record<string,any[]> = {
  array:["csharp的数组是标准的数组，他要指定类型，指定大小，不可删改长度"]
}
const resultunit:Record<string,any[]> = {
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
  array:[knowledgeData.csharp.array]
}
const route = useRoute()
const h2title = computed(() => h2unit[route.query.id as string] || [])
const h3title = computed(() => h3unit[route.query.id as string] || [])
const result = computed(() => resultunit[route.query.id as string] || [])

</script>
