<template>
  <div class="bitGraph">
    <div class="button">
      <el-input v-model="inputNumber"></el-input>
      <el-button type="info" @click="add()">+1</el-button>
      <el-button type="info" @click="sub()">-1</el-button>
    </div>
    <div class="virtual">
      <div ref="numberPositionRef">{{numberBit}}</div>
      <div :class="{fade:isFade}" style="opacity: 0;" :key="twice"> {{ changeValue > 0 ? '+1' : '-1' }}</div>
    </div>
    <div>=></div>
    <div class="reality">
      <p ref="realityNumberR"></p>
    </div>
  </div>
</template>

<style scoped>
.bitGraph {
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: auto 2fr;
  align-items: center;
  justify-items: center;
  color: aqua;
}
.button {
  width: 100%;
  height: 100px;
  grid-column: 1 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
:deep(.el-input__wrapper) {
  background-color: rgb(0, 0, 0) !important;
  box-shadow: 0 0 0 1px #333 inset;
}
:deep(.el-input__inner) {
  color: #b1b1b1;
  background-color: transparent;
}
.button > [class^='el-'] {
  height: 30px;
  width: 30%;
}
.bitGraph > div {
  font-size: 50px;
}
.virtual,
.reality {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
}
.virtual{
  display:grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
    justify-items: center;
}
.fade{
animation: toggle 1s ease 0s linear;
}
@keyframes toggle {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-20px); }
  100% { opacity: 0; transform: translateY(-40px); }
}
</style>

<script setup>
import { ref } from 'vue';

const numberBit=ref(0)
const inputNumber=ref(0)
const isFade=ref(false)
const twice=ref(0)
const changValue=ref(1)
const rewriteKey=()=>{
  twice.value++
}
const add=()=>{
  changValue.value=1
  numberBit.value++
changValue()
}
const sub=()=>{
  changValue.value=-1
  numberBit.value--
changValue()
}
</script>
