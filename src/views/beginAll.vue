<template>
  <div class="title">
    <span>webscript</span>
  </div>
  <div class="main-content">
    <h2 class="st" align="center">欢迎您的使用</h2>
    <p class="normal kt rem2">
      此网站以及应用使用了vue3以及elementplus的组件库来完成前端搭建，可视化部分使用antv6实现。
    </p>
    <h2 class="st" align="center">目前语言内容</h2>
    <div class="language-grid">
      <div
        class="lang-card"
        v-for="lang in languages"
        :key="lang.name"
        @click="selectLanguage(lang)"
      >
        <Icon :icon="lang.icon" width="50" />
        <div class="lang-info">
          <span class="lang-name">{{ lang.name }}</span>
          <span class="lang-desc">{{ lang.desc }}</span>
        </div>
        <!-- <el-tag size="small" :type="lang.tagType">{{ lang.tag }}</el-tag> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.main-content {
  margin-top: 50px;
  color: rgb(167, 167, 167);
  padding: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.lang-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background-color: rgb(36, 36, 36);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
}

.lang-card:hover {
  background-color: #3d3d3d;
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border-color: #636363;
}

.lang-card:active {
  transform: translateY(2px) scale(0.98);
  transition-duration: 0.05s;
}

.lang-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.lang-name {
  font-size: 18px;
  font-weight: 600;
  color: #e0e0e0;
}

.lang-desc {
  font-size: 13px;
  color: #888;
  margin-top: 2px;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .language-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 12px;
  }

  .language-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .lang-card {
    padding: 14px 16px;
  }

  .lang-name {
    font-size: 16px;
  }
}

@media (min-width: 1400px) {
  .language-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const languages = [
  {
    name: 'Python',
    icon: 'logos:python',
    desc: '目前世界使用最为广泛的语言',
    tag: '热门',
    tagType: 'success',
    path: '/Python',
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    desc: 'Web 开发的核心语言',
    tag: '必备',
    tagType: 'warning',
    path: '/JavaScript',
  },
  {
    name: 'C#',
    icon: 'logos:c-sharp',
    desc: '微软生态的主流语言',
    tag: '稳定',
    tagType: 'info',
    path: '/Csharp',
  },
]

const selectLanguage = (lang) => {
  router.push(lang.path)
}
</script>
