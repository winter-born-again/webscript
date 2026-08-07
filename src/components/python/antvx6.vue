<template>
  <div ref="x6blockRef" class="x6block"></div>
</template>

<style scoped>
.x6block {
  width: 100%;
  height: 500px;
}
</style>

<script setup lang="ts">
import { Graph } from '@antv/x6'
import { nextTick, onMounted, ref, onUnmounted, watch } from 'vue'

const x6blockRef = ref<HTMLElement|null>(null)
let graph:Graph|null = null

const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => ({ nodes: [], edges: [] }),
  },
})

const initGraph = () => {
  if (!x6blockRef.value) return
  if (graph) {
    graph.dispose()
    graph = null
  }

  graph = new Graph({
    container: x6blockRef.value,
    width: x6blockRef.value.clientWidth,
    height: 500,
    grid: {
      visible: true,
      size: 10,
      color: '#e9ecef',
    }as any,
    panning: {
      enabled: true,
      modifiers: ['shift'],
    },
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
    },
    connecting: {
      snap: true,
    },
  })

  if (props.data && props.data.nodes && props.data.edges) {
    graph.fromJSON(props.data)
    graph.zoomToFit({ maxScale: 0.8 })
    graph.centerContent()
  }
}

//暴力重绘
const reRender = () => {
  if (!x6blockRef.value) return

  // 保存当前数据
  const currentData = props.data

  // 销毁旧的
  if (graph) {
    graph.dispose()
    graph = null
  }

  // 重新创建
  graph = new Graph({
    container: x6blockRef.value,
    width: x6blockRef.value.clientWidth,
    height: 500,
    grid: {
      visible: true,
      size: 10,
      color: '#e9ecef',
    }as any,
    panning: {
      enabled: true,
      modifiers: ['shift'],
    },
    mousewheel: {
      enabled: true,
      modifiers: ['ctrl', 'meta'],
    },
    connecting: {
      snap: true,
    },
  })

  // 重新渲染数据
  if (currentData && currentData.nodes && currentData.edges) {
    graph.fromJSON(currentData)
    graph.zoomToFit({ maxScale: 0.8 })
    graph.centerContent()
  }
}

// 窗口变化时重绘
const onResize = () => {
  if (x6blockRef.value) {
    reRender()
  }
}

watch(
  () => props.data,
  (newData) => {
    if (newData && newData.nodes && newData.edges) {
      nextTick(() => {
        initGraph()
      })
    }
  },
  { deep: true, immediate: true },
)

onMounted(() => {
  nextTick(() => {
    initGraph()
    window.addEventListener('resize', onResize)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  if (graph) {
    graph.dispose()
    graph = null
  }
})
</script>
