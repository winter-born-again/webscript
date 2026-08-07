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
      path: '/python',
      name: 'python',
      component: () => import('@/views/Python/PythonPage.vue'),
      children: [
        {
          path: 'varPage',
          name: 'python_varPage',
          component: () => import('@/views/Python/varPage.vue'),
        },
        {
          path: "dataType",
          name: "python_dataType",
          component: () => import("@/views/Python/dataType.vue")
        },
        {
          path: "flowcontrol",
          name: "python_flowcontrol",
          component: () => import("@/views/Python/flowControl.vue")
        },
        {
          path: "func",
          name: "python_func",
          component: () => import("@/views/Python/func.vue")
        },
        {
          path: 'oopPage',
          name: 'python_opPage',
          component: () => import('@/views/Python/oopPage.vue'),
        },
      ],
    },
    {
      path: "/Javascript",
      name: "Javascript",
      component: () => import("@/views/JavaScript/JavaScriptPage.vue")
    }, {
      path: "/Csharp",
      name: "Csharp",
      component: () => import("@/views/Csharp/CsharpPage.vue"),
      children:[
         {
          path: "dataType",
          name: "csharpdataType",
          component: () => import("@/views/Csharp/dataType.vue")
        },
      ]
    },
    {
      path: '/algorithmPage',
      name: 'algorithmPage',
      component: () => import('@/views/algorithmPage.vue'),
    },
    {
      path: "/thinkStudy",
      name: "thinkStudy",
      component: () => import("@/views/thinkStudy.vue")
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

export default router
