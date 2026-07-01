<template>
  <div class="title">
    <el-dropdown placement="bottom-start" @command="selectvalue">
      <el-button class="black">webscript</el-button>
      <template #dropdown>
        <el-dropdown-menu class="el-dropdown">
          <el-dropdown-item command="Python"> Python </el-dropdown-item>
          <el-dropdown-item command="JavaScript"> JavaScript</el-dropdown-item>
          <el-dropdown-item command="Csharp">Csharp</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
}

.el-button {
  color: rgb(167, 167, 167);
  background: #1e2022;
  border: 0;
  font-size: 30px;
}
.title a {
  text-decoration: none !important;
}
</style>
<script setup lang="ts">
import { knowledgeData } from '@/script/data'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const selectvalue = (command: string): void => {
  router.push({
    name: 'thinkStudy',
    query: { id: command },
  })
}

const useDate = ref<any>('')

const currentId = ref<string>('')
watch(
  () => route.query.id,
  (newId) => {
    const id = newId as string
    currentId.value = id
    console.log(currentId.value)
    useDate.value = (knowledgeData as any)[id]
    console.log(useDate.value)
  },
)
</script>
