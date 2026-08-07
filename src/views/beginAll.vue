<template>
  <div class="title">
    <span>webscript</span>
  </div>
  <div class="main-content">
    <h2 class="st center">欢迎您的使用</h2>

    <h2 class="st center">目前语言内容</h2>
    <div class="language-grid">
      <div class="lang-card" v-for="lang in languages" :key="lang.name" @click="selectLanguage(lang)">
        <Icon :icon="lang.icon" width="50" />
        <div class="lang-info">
          <span class="lang-name">{{ lang.name }}</span>
          <span class="lang-desc">{{ lang.desc }}</span>
        </div>
        <!-- <el-tag size="small" :type="lang.tagType">{{ lang.tag }}</el-tag> -->
      </div>
    </div>
    <h2 class="st center">技术选型</h2>
    <h3 class="center">antvx6</h3>
    <h3 class="kt rem1 normal center">所有的流程图都源于antvx6的支持</h3>
    <div v-if="false" class="table">
      <h3 class="kt rem1 normal center">对于数据的配置方面使用集合数据的方式是这样的</h3>
      <h3 class="kt rem2">nodes:</h3>
      <table cellpadding="2px" cellspacing="0px" class="center" width="100%" style="text-align: center">
        <tr>
          <th colspan="2">配置项</th>
          <th>填写数值</th>
          <th>表示</th>
        </tr>
        <tr>
          <td colspan="2" rowspan="9">shape（节点的形状）</td>
          <td>rect</td>
          <td>矩形</td>
        </tr>
        <tr>
          <td>ellipse</td>
          <td>椭圆</td>
        </tr>
        <tr>
          <td>polygon</td>
          <td>菱形</td>
        </tr>
        <tr>
          <td>triangle</td>
          <td>三角形</td>
        </tr>
        <tr>
          <td>hexagon</td>
          <td>六边形</td>
        </tr>
        <tr>
          <td>star</td>
          <td>星形</td>
        </tr>
        <tr>
          <td>donut</td>
          <td>甜甜圈</td>
        </tr>
        <tr>
          <td>image</td>
          <td>图片</td>
        </tr>
        <tr>
          <td>html</td>
          <td>HTML</td>
        </tr>
        <tr>
          <td colspan="2">id</td>
          <td>String</td>
          <td>id配置</td>
        </tr>
        <tr>
          <td colspan="2">x,y</td>
          <td>Number</td>
          <td>节点相较于画面的位置</td>
        </tr>
        <tr>
          <td colspan="2">width,height</td>
          <td>Number</td>
          <td>节点的尺寸</td>
        </tr>
        <tr>
          <td colspan="2">label</td>
          <td>String</td>
          <td>节点的文本</td>
        </tr>
        <tr>
          <td rowspan="5">attrs</td>
          <td rowspan="3">body Object</td>
          <td>fill</td>
          <td>填充颜色</td>
        </tr>
        <tr>
          <td>stroke</td>
          <td>边框颜色</td>
        </tr>
        <tr>
          <td>rx</td>
          <td>边框圆角</td>
        </tr>
        <tr>
          <td rowspan="2">label Object</td>
          <td>fill</td>
          <td>填充颜色</td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>字体大小</td>
        </tr>
      </table>
      <h3 class="kt rem2">edges:</h3>
      <table cellpadding="2px" cellspacing="0px" class="center" width="100%" style="text-align: center">
        <tr>
          <th colspan="4">配置项</th>
          <th>填写数据</th>
          <th>表示</th>
        </tr>
        <tr>
          <td colspan="4">source</td>
          <td>node的id</td>
          <td>连接的开始点</td>
        </tr>
        <tr>
          <td colspan="4">target</td>
          <td>node的id</td>
          <td>连接的结束点</td>
        </tr>
        <tr>
          <td colspan="4">label</td>
          <td>String</td>
          <td>连线的文本</td>
        </tr>
        <tr>
          <td colspan="4" rowspan="4">router</td>
          <td>orth</td>
          <td>直角折线</td>
        </tr>
        <tr>
          <td>curve</td>
          <td>平滑曲线</td>
        </tr>
        <tr>
          <td>normal</td>
          <td>直接连线</td>
        </tr>
        <tr>
          <td>metro</td>
          <td>地铁线</td>
        </tr>
        <tr>
          <td rowspan="8">attrs</td>
          <td colspan="3" rowspan="2">line</td>
          <td>stroke</td>
          <td>连接线条的颜色</td>
        </tr>
        <tr>
          <td>strokeWidth</td>
          <td>连接线条的宽度</td>
        </tr>
        <tr>
          <td rowspan="5">line</td>
          <td rowspan="5">targetMarker</td>
          <td>name</td>
          <td>block</td>
          <td>可配置的箭头</td>
        </tr>
        <tr>
          <td>width</td>
          <td>Number</td>
          <td>箭头的宽度</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Number</td>
          <td>箭头的高度</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>箭头的大小</td>
        </tr>
        <tr>
          <td>fill</td>
          <td>rgb</td>
          <td>填充箭头的颜色</td>
        </tr>
      </table>
      <h3 class="kt rem2">graph:</h3>
      <table cellpadding="2px" cellspacing="0px" class="center" width="100%" style="text-align: center">
        <tr>
          <th colspan="2">配置项</th>
          <th>填写数值</th>
          <th>表示</th>
        </tr>

        <tr>
          <td colspan="2">container</td>
          <td>ref</td>
          <td>画面容器</td>
        </tr>
        <tr>
          <td colspan="2">width,height</td>
          <td>Number</td>
          <td>画面尺寸</td>
        </tr>
        <tr>
          <td rowspan="2">grid</td>
          <td>visible</td>
          <td>boolean</td>
          <td>是否显示背景</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number</td>
          <td>背景的尺寸</td>
        </tr>
        <tr>
          <td>panning</td>
          <td>enabled</td>
          <td>boolean</td>
          <td>是否可拖动</td>
        </tr>
        <tr>
          <td rowspan="2">mousewheel</td>
          <td>enabled</td>
          <td>boolean</td>
          <td>是否启用鼠标滚轮缩放功能。</td>
        </tr>
        <tr>
          <td>modifiers</td>
          <td>Array</td>
          <td>缩放配置</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="normal kt rem2" style="width: 100%; color: var(--el-color-info-dark-2);position: fixed;bottom: 0px;background-color: #202121;">
    <p style="text-align: center">如果我的创意有帮助到您，我十分荣幸，感谢您的使用</p>
  </div>
</template>

<style scoped>
.title {
  background-color: #202121;
  width: 100%;
  height: 40px;
  color: var(--el-color-info-dark-2);
  text-align: center;
  line-height: 40px;
  position: fixed;
  padding-top: 20px;
  top: 0;
  left: 0;
  z-index: 9999;
  font-size: 1.4rem;
}

.main-content {
  margin: 50px auto 30px auto;
  color: var(--el-color-info-dark-2);
  padding: 20px;
  max-width: 1200px;
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
  background-color: #202121;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
}

.lang-card:hover {
  background-color: var(--el-color-info-light-5);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--el-color-info-light-3);
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
  color: var(--el-text-color-regular);
}

.lang-desc {
  font-size: 13px;
  color: var(--el-text-color-placeholder);
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

.table table,
.table td {
  border: 1px solid #a6a9ad;
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
    path: '/python',
  },
  // {
  //   name: 'JavaScript',
  //   icon: 'logos:javascript',
  //   desc: 'Web 开发的核心语言',
  //   tag: '必备',
  //   tagType: 'warning',
  //   path: '/JavaScript',
  // },
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
