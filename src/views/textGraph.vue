<template>
  <div class="graph">
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.graph {
  position: relative;
  display: flex;
   --graph--width:200px;
 --graph--height:200px
}
.graph div {
  width: var(--graph--width);
  height: var(--graph--height);
  border: 1px solid red;
  border-radius: 50%;
}
</style>

<script setup></script>
