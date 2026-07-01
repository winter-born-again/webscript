<template>
  <appSider>
    <h2 class="st">字典(dict)</h2>
    <h3 class="kt rem1">当你需要使用有关联的数据时，你可以尝试使用字典</h3>
    <div style="padding-left: 10px; margin-bottom: 50px" class="kt" v-for="(value, index) in result" :key="index">
      <h3 class="normal" align="center" v-if="false">
        <div v-if="[0, 3].includes(index)">
          <el-button type="info" @click="showPopup(index)">
            <component :is="value.title"></component>
          </el-button>
          <popUp :data="popUpData[index]" :ref="(el) => setPopUpRef(el, index)"> </popUp>
        </div>
        <div v-else>
          <component :is="value.title"></component>
        </div>
      </h3>
      <div v-else>
        <h3>
          <component :is="value.title"></component>
        </h3>
      </div>
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

const result = knowledgeData.python.dict
</script>
