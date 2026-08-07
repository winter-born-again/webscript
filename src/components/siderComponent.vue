<template>
  <el-row class="begin">
    <el-col :span="4">
      <div v-if="$route.path.includes('/python')">
        <el-menu class="el-menu-vertical-demo kt" :collapse="isCollapse" :default-active="activeMenu">
          <el-menu-item index="1" @click="aside_toggle">
            <el-icon>
              <House />
            </el-icon>
            <span style="font-size: 1.3rem"><router-link to="/"
                style="text-decoration: none; color: var(--el-color-info-dark-2)">使用指南</router-link></span>
          </el-menu-item>
          <el-menu-item index="/python/var_page" @click="gotopath(`/python/varPage`)">
            <el-icon>
              <TrendCharts />
            </el-icon>
            <span>变量</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>数据类型</span>
            </template>

            <el-sub-menu index="3-1">
              <template #title><span>可变类型</span></template>
              <el-menu-item index="/python/dataType?id=list"
                @click="gotopath(`/python/dataType?id=list`)">列表(list)</el-menu-item>
              <el-menu-item index="/python/dict" @click="gotopath(`/python/dataType?id=dict`)">字典(dict)</el-menu-item>
              <el-menu-item index="/python/set" @click="gotopath(`/python/dataType?id=set`)">集合(set)</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3-2">
              <template #title><span>不可变类型</span></template>
              <el-menu-item index="/python/str"
                @click="gotopath(`/python/dataType?id=string`)">字符串(string)</el-menu-item>
              <el-menu-item index="/python/another" @click="gotopath(`/python/dataType?id=another`)">其他类型</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/python/dataProcess"
              @click="gotopath(`/python/dataType?id=dataProcess`)">数据操作</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="4">
            <el-icon>
              <Expand />
            </el-icon>
            <span @click="gotopath('/python/flowcontrol')">流程控制</span>
          </el-menu-item>
          <el-sub-menu index="5">
            <template #title>
              <el-icon>
                <Box />
              </el-icon>
              <span>面向对象</span>
            </template>
            <el-menu-item index="/python/func" class="tobig" @click="gotopath(`/python/func`)">函数</el-menu-item>
            <el-menu-item index="/python/oopPage" class="tobig" @click="gotopath(`/python/oopPage`)">类</el-menu-item>
          </el-sub-menu>
          <!-- <el-sub-menu index="6">
          <template #title>
            <el-icon>
              <Cpu />
            </el-icon>
            <span>算法</span>
          </template>
          <el-menu-item index="6-1">基础算法</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/thinkStudy" @click="gotopath(`/thinkStudy`)">
          <el-icon><Edit /></el-icon>
          <span>thinkStudy</span>
        </el-menu-item> -->
        </el-menu>
      </div>
      <div v-if="$route.path.includes('/Csharp')">
        <el-menu class="el-menu-vertical-demo kt" :collapse="isCollapse" :default-active="activeMenu">
          <el-menu-item index="1" @click="aside_toggle">
            <el-icon>
              <House />
            </el-icon>
            <span style="font-size: 1.3rem"><router-link to="/"
                style="text-decoration: none; color: var(--el-color-info-dark-2)">使用指南</router-link></span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>数据类型</span>
            </template>

            <el-sub-menu index="3-1">
              <template #title><span>值类型</span></template>
              <el-menu-item index="3-1-1"></el-menu-item>
              <el-menu-item index="3-1-2"></el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3-2">
              <template #title><span>引用类型</span></template>
              <el-menu-item index="3-2-1" @click="gotopath('/Csharp/dataType?id=array')">数组</el-menu-item>
              <el-menu-item index="3-2-2"></el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </div>
    </el-col>
    <el-col class="media" :xs="{ span: 20, offset: 4 }" :sm="{ span: 21, offset: 2 }" :md="{ span: 21, offset: 2 }">
      <slot></slot>
    </el-col>
  </el-row>
</template>
<style>
.title {
  background-color: var(--el-color-info-light-9);
  width: 100%;
  height: 40px;
  color: var(--el-color-info-dark-2);
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
  background-color: var(--el-color-info-light-9);
}

.el-row {
  justify-content: center;
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
  color: var(--el-color-info-dark-2);
}

.tobig {
  font-size: 1em;
}

.el-sub-menu .el-sub-menu__title {
  color: var(--el-color-info-dark-2) !important;
  font-size: 1em;
}

.el-sub-menu .el-sub-menu__title:hover {
  background-color: var(--el-fill-color-dark) !important;
  color: #fff !important;
}

.el-menu-item {
  color: var(--el-color-info-dark-2) !important;
  font-size: 1em;
}

.el-menu-item:hover {
  background-color: var(--el-fill-color-dark) !important;
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
  color: var(--el-text-color-regular);
  overflow: hidden;
}
</style>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import {
  Expand,
  Menu as IconMenu,
  TrendCharts,
  Box,
  House,
  Cpu,
  Edit,
} from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const activeMenu = computed(() => route.path as string)
const isCollapse = ref<boolean>(true)
const router = useRouter()
const route = useRoute()
const aside_toggle = ():boolean => {
  isCollapse.value = !isCollapse.value
  return isCollapse.value
}
const gotopath = (path:string):void => {
  isCollapse.value = true
  router.push(path)
}
const goStudy = ():void => {
  router.push('/thinkStudy')
}
onMounted(() => {
  isCollapse.value = true
})
</script>
