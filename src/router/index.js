import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/beginAll.vue'),
    },
    {
      path: '/Python',
      name: 'Python',
      component: () => import('@/views/Python/PythonPage.vue'),
      children: [
        {
          path: 'varPage',
          name: 'varPage',
          component: () => import('@/views/Python/varPage.vue'),
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/Python/dataType/listType.vue'),
        },{
          path: 'dict',
          name: 'dict',
          component: () => import('@/views/Python/dataType/dictType.vue'),
        },{
          path: 'set',
          name: 'set',
          component: () => import('@/views/Python/dataType/setType.vue'),
        },
        {
          path: 'process_control',
          name: 'process_control',
          component: () => import('@/views/Python/processControl.vue'),
        },
        {
          path: 'oopPage',
          name: 'oopPage',
          component: () => import('@/views/Python/oopPage.vue'),
        },
      ],
    },
    {
      path: "/Javascript",
      name: "Javascript",
      component: () => import("@/views/JavaScript/JavaScriptPage.vue")
    },{
      path: "/Csharp",
      name: "Csharp",
      component: () => import("@/views/Csharp/CsharpPage.vue")
    },
    {
      path: '/algorithmPage',
      name: 'algorithmPage',
      component: () => import('@/views/algorithmPage.vue'),
    },
    {path:"/thinkStudy",
      name:"thinkStudy",
      component:()=>import("@/views/thinkStudy.vue")
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('@/views/text.vue'),
    },
    {
      path: '/textGraph',
      name: 'textGraph',
      component: () => import('@/views/textGraph.vue'),
    },
  ],
})
// 在路由定义后面，加这几行就行
// router.beforeEach((to, from, next) => {
//   // 改标题
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }

//   // 改图标
//   if (to.meta.icon) {
//     let link = document.querySelector("link[rel='icon']")
//     if (!link) {
//       link = document.createElement('link')
//       link.rel = 'icon'
//       document.head.appendChild(link)
//     }
//     link.href = to.meta.icon
//   }

//   next()
// })
export default router
