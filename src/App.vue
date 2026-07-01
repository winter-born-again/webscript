<script setup></script>

<template>
  <router-view />
</template>

<style>
body {
  background-color: rgb(22, 22, 22);
  padding: 0;
  margin: 0;
  min-width: 320px;
}
.normal {
  font-weight: normal!important;
}
.bold {
  font-weight: bold;
}
.st {
  font-family: '宋体';
}
.kt {
  font-family: '楷体';
}
.rem1 {
  text-indent: 1rem;
}
.rem2 {
  text-indent: 2rem;
}
h2,h3,h4,h5,p{margin: 0;}
h2{padding:20px 0 5px 0;font-size: 35px;}
h3{margin: 10px 0 ;font-size: 20px;}
h4{margin: 8px 0;}
p{margin: 5px 0 ;}
* {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
*::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
.black:hover {
  background-color: rgb(68, 70, 80) !important;
}
</style>
