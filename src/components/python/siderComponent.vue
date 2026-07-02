<template>
  <el-row class="begin">
    <el-col :span="4">
      <el-menu class="el-menu-vertical-demo kt" :collapse="isCollapse" :default-active="activeMenu">
        <el-menu-item index="1" @click="aside_toggle">
          <el-icon>
            <House />
          </el-icon>
          <span style="font-size: 1.3rem">使用指南</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <TrendCharts />
            </el-icon>
            <span>变量</span>
          </template>
          <el-menu-item index="/python/var_page" @click="gotopath(`/python/varPage`)">命名规则</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>数据类型</span>
          </template>

          <el-sub-menu index="3-1">
            <template #title><span>可变类型</span></template>
            <el-menu-item index="/python/list" @click="gotopath(`/python/list`)">列表(list)</el-menu-item>
            <el-menu-item index="/python/dict" @click="gotopath(`/python/dict`)">字典(dict)</el-menu-item>
            <el-menu-item index="/python/set" @click="gotopath(`/python/set`)">集合(set)</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3-2">
            <template #title><span>不可变类型</span></template>
            <el-menu-item index="/python/str" @click="gotopath(`/python/str`)">字符串(string)</el-menu-item>
            <el-menu-item index="3-2-2">其他类型</el-menu-item>
          </el-sub-menu>

          <el-menu-item>数据变形</el-menu-item>
          <el-menu-item>运算符</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <Expand />
            </el-icon>
            <span>流程控制</span>
          </template>
          <el-menu-item index="4-1" class="tobig">条件判断</el-menu-item>
          <el-menu-item index="4-2" class="tobig">循环语句</el-menu-item>
          <el-menu-item index="4-3" class="tobig">异常处理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <Box />
            </el-icon>
            <span>面向对象</span>
          </template>
          <el-menu-item index="5-1" class="tobig">函数和类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon>
              <Cpu />
            </el-icon>
            <span>算法</span>
          </template>
          <el-menu-item>基础算法</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
    <el-col class="media" :xs="{ span: 20, offset: 4 }" :sm="{ span: 21, offset: 2 }" :md="{ span: 21, offset: 2 }">
      <slot></slot>
    </el-col>
  </el-row>
</template>
<style>
.title {
  background: #1e2022;
  width: 100%;
  height: 40px;
  color: rgb(167, 167, 167);
  text-align: center;
  line-height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  font-size: 1.4rem;
}

.el-menu {
  overflow: hidden;
  border: 0px solid #dcdfe6;
  background: #1e2022;
}

.el-menu-vertical-demo {
  margin-top: 20px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 40px;
  overflow: auto;
  z-index: 90;
}

.el-sub-menu {
  background: #1e2022;
}

.el-icon {
  color: rgb(167, 167, 167);
}

.tobig {
  font-size: 1em;
}

.el-sub-menu .el-sub-menu__title {
  color: rgb(167, 167, 167) !important;
  font-size: 1em;
}

.el-sub-menu .el-sub-menu__title:hover {
  background-color: rgb(67, 71, 78) !important;
  color: #fff !important;
}

.el-menu-item {
  color: rgb(167, 167, 167) !important;
  font-size: 1em;
}

.el-menu-item:hover {
  background-color: rgb(67, 71, 78) !important;
  color: #fff !important;
}

@media (min-width: 500px) and (max-width: 767px) {
  .media {
    margin-left: 12%;
  }
}

.begin>div:nth-child(2) {
  margin-top: 30px;
  padding: 1em;
  color: #b0b4bd;
  overflow: hidden;
}
</style>
<script setup>
import { computed, ref } from 'vue'
import { Expand, Menu as IconMenu, TrendCharts, Box, House, Cpu } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'

const isCollapse = ref(true)
const router = useRouter()
const route = useRoute()
const aside_toggle = () => {
  isCollapse.value = !isCollapse.value
  return isCollapse.value
}
const gotopath = (path) => {
  router.push(path)
}
const activeMenu = computed(() => route.path)
</script>
