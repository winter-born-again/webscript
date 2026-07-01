<template>
  <div class="from">
    <div>
      <p>{{ language }}</p>
      <el-button class="black" type="info" @click="copycode" text>{{
        iscopied ? 'compete' : 'copy'
      }}</el-button>
    </div>
    <highlightjs class="code" :code="props.code" :autodetect="false" :language="language"></highlightjs>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
.from {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
}
.from > div {
  background-color: #272727 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}
p {
  padding: 10px;
}

.code {
  overflow: auto;
}
</style>
<script setup>
import { inject, ref, computed } from 'vue'
const props = defineProps({
  code: String,
  language: String,
})
const iscopied = ref(false)
const copycode = async () => {
  await navigator.clipboard.writeText(props.code)
  iscopied.value = true
  setTimeout(() => (iscopied.value = false), 2000)
}
const language = computed(() => {
  return props.language || inject('language', 'Python')
})
</script>
