<template>
  <appSider>
    <h2 class="st">字符串(str)</h2>
    <h3 class="kt rem1">在python中文本的存储方式</h3>
    <div style="margin-bottom: 50px" class="kt" v-for="(value, index) in result" :key="index">
      <h3 class="normal" align="center">
        <component :is="value.title"></component>
      </h3>

      <div style="padding-left: 10px" v-for="item in Array(value.section.length).keys()" :key="item">
        <h4 class="normal" v-html="value.section[item]"></h4>
        <component :is="value.content[item]"></component>
      </div>
    </div>
  </appSider>
</template>
<style scoped></style>
<script setup>
import { knowledgeData } from '@/script/data'

const result = knowledgeData.python.string
</script>
