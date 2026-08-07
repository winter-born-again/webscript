<template>
  <titleContent @select-language="languageValue" />
  <appSider>
    <div v-if="$route.path === '/Csharp'" class="introduce">
      <h2>Csharp</h2>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </appSider>
</template>
<style scoped>
.introduce h2 {
  padding: 10px 10px 10px 0;
}
</style>
<script setup lang="ts">
import { provide } from 'vue'

provide('language', 'csharp')
const languageValue = (value: string = 'Csharp'): void => {
  provide('language', value)
  console.log(value)
}
</script>
