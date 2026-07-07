import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'highlight.js/styles/vs2015.css'
import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import App from './App.vue'
import router from './router'
import sider from '@/components/python/siderComponent.vue'
import popup from '@/components/windowComponent.vue'
import blockcode from '@/components/codeComponent.vue'
import blockview from "@/components/blockModel.vue"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(hljsVuePlugin)
app.component('appSider', sider)
app.component('popUp', popup)
app.component('blockCode', blockcode)
app.component("blockView",blockview)
app.mount('#app')
