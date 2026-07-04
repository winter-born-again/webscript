<template>
  <div class="demo-container">
    <h2>Vue 3 关键帧动画</h2>

    <!-- 使用CSS关键帧动画 -->
    <div class="box" :class="{ 'animate-bounce': isAnimating }">
      <p>🎯 点击按钮触发关键帧动画</p>
      <p style="font-size: 0.9rem; opacity: 0.8;">弹跳 + 旋转 + 缩放</p>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">
      <button @click="startAnimation">播放动画</button>
      <button @click="isAnimating = false" class="secondary">重置</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAnimating = ref(false)

const startAnimation = () => {
  // 先重置，再触发动画（让动画可以重复播放）
  isAnimating.value = false
  // 使用 nextTick 确保 DOM 更新后再添加类
  setTimeout(() => {
    isAnimating.value = true
  }, 10)
}
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.box {
  width: 300px;
  padding: 30px 20px;
  background: linear-gradient(135deg, #42b883, #35495e);
  color: white;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* 定义关键帧动画 */
@keyframes bounceRotateScale {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  30% {
    transform: translateY(-30px) rotate(5deg) scale(1.05);
  }
  50% {
    transform: translateY(0) rotate(-3deg) scale(0.95);
  }
  70% {
    transform: translateY(-15px) rotate(3deg) scale(1.02);
  }
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}

/* 应用动画 */
.box.animate-bounce {
  animation: bounceRotateScale 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

button {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #35495e;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(53, 73, 94, 0.3);
}

button:hover {
  background: #42b883;
  transform: translateY(-2px);
}

button.secondary {
  background: #dc3545;
}

button.secondary:hover {
  background: #c82333;
}
</style>
