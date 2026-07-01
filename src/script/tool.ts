import { h, type VNode, inject } from 'vue'
import blockCode from '@/components/codeComponent.vue'

export interface ViewBlock {
  title: VNode
  section: string[]
  content: VNode[] // 始终是 VNode 数组
  path: string
}

export function buildViewBlocks(
  title: string = '',
  section: string | string[] | null = [],
  content: string | string[] | string[][] | null = '',
  path: string = '',
): ViewBlock {
  // 处理 content - 始终返回 VNode[]
  let processedContent: VNode[] = []

   if (content === "") {
    processedContent = []
  }
  if (Array.isArray(content)) {
    processedContent = content.map((x) => {
      if (Array.isArray(x)) {
        return h(blockCode, { language: x[0], code: x[1] })
      }
      else if (typeof x === "string") {
        return h(blockCode, { language: inject("language") as string, code: x as string})
      }
      return h("span","没有值")
    })
  } else if (content !== "") {
   processedContent = [h(blockCode, { language: inject("language") as string, code: content as string })]
  }

  // 处理 section
  const sectionArray = Array.isArray(section) ? section : section ? [section] : []

  return {
    title: h('span', { class: 'bold', id: path }, title),
    section: sectionArray,
    content: processedContent,
    path: path,
  }
}
