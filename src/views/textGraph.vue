<template>
  <div style="height: 600px; width: 100%; background-color: black">
    <RelationGraph ref="graphRef" :options="graphOptions" @on-node-click="handleNodeClick" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RelationGraph from '@relation-graph/vue3'

const graphRef = ref(null)

// 1. 定义图谱配置
const graphOptions = ref({
  defaultJunctionPoint: 'border',
  allowSwitchLineShape: true,
})

// 2. 定义图谱数据
const loadGraphData = () => {
  const data = {
    nodes: [
      { id: 'a', text: '节点A', color: '#43a2f1' },
      { id: 'b', text: '节点B' },
      { id: 'c', text: '节点C', nodeShape: 1 }, // nodeShape: 0为圆形，1为矩形等
    ],
    lines: [
      { from: 'a', to: 'b', text: '关系1' },
      { from: 'a', to: 'c', text: '关系2', color: '#67C23A' },
    ],
  }

  // 使用 setJsonData 方法加载数据[citation:2][citation:4]
  graphRef.value?.setJsonData(data, () => {
    console.log('图谱数据加载完成')
  })
}

// 3. 节点点击事件处理
const handleNodeClick = (nodeObject, event) => {
  console.log('点击了节点:', nodeObject)
}

// 组件挂载后加载数据
onMounted(() => {
  loadGraphData()
})
</script>
