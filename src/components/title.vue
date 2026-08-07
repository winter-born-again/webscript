<template>
   <div class="title">
    <el-dropdown placement="bottom-start" @command="selectvalue">
      <el-button class="black">webscript</el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="python">Python</el-dropdown-item>
          <el-dropdown-item command="JavaScript">JavaScript</el-dropdown-item>
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
  padding-top: 20px;
}

.el-button {
  color: var(--el-text-color-primary);
  background: #1e2022;
  border: 0;
  font-size: 30px;
}
</style>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const emit = defineEmits(["select-language"])
const router=useRouter()
const selectvalue = (command:string):void=>{
  emit("select-language",command)
  router.push(`/${command}`)
}
</script>
