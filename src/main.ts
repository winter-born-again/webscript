import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'highlight.js/styles/atom-one-dark.css'; 
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin'; 
import App from './App.vue'
import router from './router/index'
import sider from '@/components/siderComponent.vue'
import popup from '@/components/windowComponent.vue'
import blockcode from '@/components/codeComponent.vue'
import blockview from "@/components/blockModel.vue"
import titleContent from "@/components/title.vue"


const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(hljsVuePlugin);
app.component('appSider', sider)
app.component('popUp', popup)
app.component('blockCode', blockcode)
app.component("blockView",blockview)
app.component("titleContent",titleContent)
app.mount('#app')
