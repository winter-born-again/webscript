<template>
  <div class="unit-date-wrapper" v-show="isVisible" ref="wrapperRef" :style="wrapperStyle"
    :class="{ 'is-resizing': isResizing }">
    <div class="header" :class="{ dragable: isdrag }" @mousedown="startDrag" @touchstart="startDrag">
      <h3>
        <component :is="data.title"></component>
      </h3>
      <el-icon @click="toggleVisibility" :size="25">
        <CloseBold />
      </el-icon>
    </div>
    <div class="content" ref="contentRef">
      <div v-for="item in Array(data.section.length).keys()" :key="item">
        <p v-html="data.section[item]"></p>
        <component :is="data.content[item]"></component>
      </div>
    </div>
    <div class="comments">
      <slot></slot>
    </div>
    <div class="resize-handle" @mousedown="startResize" @touchstart="startResize"></div>
  </div>
</template>

<script setup>
import { CloseBold } from '@element-plus/icons-vue'
import { ref, onMounted, onUnmounted, nextTick, reactive, computed } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && typeof value === 'object'
    },
  },
})

const isVisible = ref(false)
const wrapperRef = ref(null)
const contentRef = ref(null)

// 拖拽相关
const isdrag = ref(false)
const startX = ref(0)
const startY = ref(0)
const currentLeft = ref(0)
const currentTop = ref(0)

// 调整大小相关
const isResizing = ref(false)
const resizeStartX = ref(0)
const resizeStartY = ref(0)
const resizeStartWidth = ref(0)
const resizeStartHeight = ref(0)

// 尺寸状态 - 减小默认高度
const size = reactive({
  width: 350,  // 适中的宽度
  height: 200, // 减小默认高度
})

// 计算样式
const wrapperStyle = computed(() => ({
  width: size.width + 'px',
  height: size.height + 'px',
}))

const isInitialized = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
  if (isVisible.value) {
    nextTick(() => {
      handleResize()
    })
  }
}

const startDrag = (e) => {
  if (isResizing.value) return

  let clientX, clientY
  if (e.touches) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }

  const rect = wrapperRef.value.getBoundingClientRect()
  startX.value = clientX
  startY.value = clientY
  currentLeft.value = rect.left
  currentTop.value = rect.top
  isdrag.value = true
  document.body.style.userSelect = 'none'
}

// 调整大小
const startResize = (e) => {
  e.stopPropagation()
  e.preventDefault()

  let clientX, clientY
  if (e.touches) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }

  const rect = wrapperRef.value.getBoundingClientRect()
  resizeStartX.value = clientX
  resizeStartY.value = clientY
  resizeStartWidth.value = rect.width
  resizeStartHeight.value = rect.height
  isResizing.value = true

  document.body.style.userSelect = 'none'
}

const onResize = (e) => {
  if (!isResizing.value) return

  let clientX, clientY
  if (e.touches) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }
  e.preventDefault()

  const deltaX = clientX - resizeStartX.value
  const deltaY = clientY - resizeStartY.value

  let newWidth = Math.max(200, resizeStartWidth.value + deltaX)
  let newHeight = Math.max(150, resizeStartHeight.value + deltaY)

  size.width = newWidth
  size.height = newHeight
}

const endResize = () => {
  isResizing.value = false
  document.body.style.userSelect = ''
}

const onDrag = (e) => {
  if (isResizing.value) return

  if (!isdrag.value) return
  let clientX, clientY
  if (e.touches) {
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  } else {
    clientX = e.clientX
    clientY = e.clientY
  }
  e.preventDefault()

  const deltaX = clientX - startX.value
  const deltaY = clientY - startY.value

  wrapperRef.value.style.left = currentLeft.value + deltaX + 'px'
  wrapperRef.value.style.top = currentTop.value + deltaY + 'px'
}

const endDrag = () => {
  isdrag.value = false
  document.body.style.userSelect = ''
}

const handleResize = () => {
  if (!wrapperRef.value || !isVisible.value) return

  const rect = wrapperRef.value.getBoundingClientRect()
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  let left = rect.left
  let top = rect.top

  // 确保组件在可视区域内
  if (rect.right > viewportWidth) left = viewportWidth - rect.width - 10
  if (rect.bottom > viewportHeight) top = viewportHeight - rect.height - 10
  if (rect.left < 0) left = 10
  if (rect.top < 0) top = 10

  wrapperRef.value.style.left = left + 'px'
  wrapperRef.value.style.top = top + 'px'
}

// 设置初始位置
const setInitialPosition = () => {
  if (!wrapperRef.value) return

  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // 确保组件在可视区域内
  const left = (viewportWidth - size.width) / 2
  const top = (viewportHeight - size.height) / 2

  wrapperRef.value.style.left = Math.max(10, left) + 'px'
  wrapperRef.value.style.top = Math.max(10, top) + 'px'
}

onMounted(() => {
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', endDrag)
  document.addEventListener('touchmove', onDrag, { passive: false })
  document.addEventListener('touchend', endDrag)
  document.addEventListener('touchcancel', endDrag)

  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', endResize)
  document.addEventListener('touchmove', onResize, { passive: false })
  document.addEventListener('touchend', endResize)
  document.addEventListener('touchcancel', endResize)

  window.addEventListener('resize', handleResize)

  // 设置初始位置
  nextTick(() => {
    setInitialPosition()
    isInitialized.value = true
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', endDrag)
  document.removeEventListener('touchcancel', endDrag)

  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', endResize)
  document.removeEventListener('touchmove', onResize)
  document.removeEventListener('touchend', endResize)
  document.removeEventListener('touchcancel', endResize)

  window.removeEventListener('resize', handleResize)
  document.body.style.userSelect = ''
})

defineExpose({
  toggleVisibility,
  show: () => {
    isVisible.value = true
    nextTick(() => {
      handleResize()
    })
  },
  hide: () => {
    isVisible.value = false
  },
  setSize: (width, height) => {
    size.width = width
    size.height = height
  }
})
</script>

<style scoped>
.unit-date-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2f2f30;
  padding: 0px 10px 10px 10px;
  border: 1px solid #50565f;
  z-index: 20;
  gap: 5px;
  cursor: default;
  user-select: none;
  min-width: 200px;
  min-height: 150px;
  max-width: 80vw;
  max-height: 90vh;
  overflow: auto;
  /* 防止内容溢出影响布局 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.header {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #50565f;
  gap: 10px;
  flex-shrink: 0;
  padding: 8px 0;
}


.content {
  overflow: auto;
  flex: 1;
  width: 100%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}



.content {
  overflow: auto;
}

.comments {
  text-indent: 2rem;
}

p {
  text-indent: 2rem;
  text-align: left;
}

.dragable {
  cursor: grab;
}

.dragable:hover {
  cursor: grabbing;
}

/* 调整大小的手柄 */
.resize-handle {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: se-resize;
  background: linear-gradient(135deg, transparent 50%, #666 50%);
  border-radius: 0 0 6px 0;
  transition: background 0.2s;
}

.resize-handle:hover {
  background: linear-gradient(135deg, transparent 50%, #888 50%);
}

.resize-handle::after {
  content: '↘';
  position: absolute;
  bottom: 1px;
  right: 2px;
  font-size: 14px;
  color: #666;
  opacity: 0.8;
}

.resize-handle:hover::after {
  color: #888;
}

.is-resizing {
  cursor: se-resize;
}

.is-resizing .header {
  pointer-events: none;
}

.el-icon {
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}

.el-icon:hover {
  color: #e0e0e0;
}
</style>
