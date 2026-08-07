<template>
  <div class="container">
    <h2>流程图示例</h2>
    <div ref="x6blockRef" class="x6block"></div>
  </div>

</template>

<style scoped>
.container {
  padding: 20px;
}


h2 {
  margin-bottom: 16px;
  color: #333;
}
</style>

<script setup>
import { Graph } from '@antv/x6'
import { nextTick, onMounted, ref, onUnmounted } from 'vue'

const x6blockRef = ref(null)
let graph = null

// 定义流程图数据
const flowcharthata = {
  nodes: [
    {
      id: 'start',
      shape: 'rect',
      x: 350,
      y: 30,
      width: 100,
      height: 50,
      label: '开始',
      attrs: {
        body: {
          fill: '#2ecc71',
          stroke: '#27ae60',
          rx: 8,
        },
        label: {
          fill: '#fff',
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
    },
    {
      id: 'judge',
      shape: 'polygon',
      x: 360,
      y: 130,
      width: 80,
      height: 80,
      label: '条件?',
      attrs: {
        body: {
          refPoints: '0,40 40,0 80,40 40,80',
          fill: '#f39c12',
          stroke: '#e67e22',
          strokeWidth: 2,
        },
        label: {
          fill: '#fff',
          fontSize: 13,
          fontWeight: 'bold',
        },
      },
    },
    {
      id: 'process1',
      shape: 'rect',
      x: 150,
      y: 270,
      width: 100,
      height: 50,
      label: '处理A',
      attrs: {
        body: {
          fill: '#3498db',
          stroke: '#2980b9',
          rx: 4,
        },
        label: {
          fill: '#fff',
          fontSize: 14,
        },
      },
    },
    {
      id: 'process2',
      shape: 'rect',
      x: 550,
      y: 270,
      width: 100,
      height: 50,
      label: '处理B',
      attrs: {
        body: {
          fill: '#9b59b6',
          stroke: '#8e44ad',
          rx: 4,
        },
        label: {
          fill: 'red',
          fontSize: 14,
        },
      },
    },
    {
      id: 'end',
      shape: 'rect',
      x: 350,
      y: 380,
      width: 100,
      height: 50,
      label: '结束',
      attrs: {
        body: {
          fill: '#e74c3c',
          stroke: '#c0392b',
          rx: 8,
        },
        label: {
          fill: '#fff',
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
    },
  ],
  edges: [
    {
      source: 'start',
      target: 'judge',
      router: 'orth',
      attrs: {
        line: {
          stroke: '#7f8c8d',
          strokeWidth: 2,
          targetMarker: {
            name: 'block',
            width: 10,
            height: 8,
            fill:"#fff"
          },
        },
      },
    },
    {
      source: 'judge',
      target: 'process1',
      label: '是',
      router: 'orth',
      attrs: {
        line: {
          stroke: '#2ecc71',
          strokeWidth: 2,
        },
        label: {
          fill: '#27ae60',
          fontSize: 13,
          fontWeight: 'bold',
        },
      },
    },
    {
      source: 'judge',
      target: 'process2',
      label: '否',
      router: 'orth',
      attrs: {
        line: {
          stroke: '#e74c3c',
          strokeWidth: 2,
        },
        label: {
          fill: '#c0392b',
          fontSize: 13,
          fontWeight: 'bold',
        },
      },
    },
    {
      source: 'process1',
      target: 'end',
      router: 'orth',
      attrs: {
        line: {
          stroke: '#7f8c8d',
          strokeWidth: 2,
        },
      },
    },
    {
      source: 'process2',
      target: 'end',
      router: 'orth',
      attrs: {
        line: {
          stroke: '#7f8c8d',
          strokeWidth: 2,
        },
      },
    },
  ],
}

onMounted(() => {
  nextTick(() => {
    // 确保容器存在
    if (!x6blockRef.value) {
      console.warn('容器未找到')
      return
    }

    // 创建画布
    graph = new Graph({
      container: x6blockRef.value,
      width: 800,
      height: 500,
      grid: {
        visible: true,
        size: 10,
      },
      panning: {
        enabled: false,
      },
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
      },
    })

    // 渲染流程图
    graph.fromJSON(flowcharthata)

    // 居中显示
    graph.centerContent()
  })
})

// 组件销毁时清理画布
onUnmounted(() => {
  if (graph) {
    graph.dispose()
    graph = null
  }
})


</script>
