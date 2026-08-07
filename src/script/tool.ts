import { h, type VNode, inject, unref } from 'vue'
import blockCode from '@/components/codeComponent.vue'

export interface ViewBlock {
  title: VNode
  section: string[]
  content: VNode[]
  path: string
}

export function buildViewBlocks(
  title: string = '',
  section: (string | null)[] | string | null = [],
 content: (string | null | string[])[] | string | [] = "",
  path: string = '',
): ViewBlock {
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
        return h(blockCode, { language:unref(inject("language","text")) , code: x as string })
      }
      return h("span", "没有值")
    })
  } else if (content !== "") {
    processedContent = [h(blockCode, { language: unref(inject("language",'text')), code: content as string })]
  }

  // 处理 section
  const sectionArray = Array.isArray(section) ? section as string[]: section ? [section] : []

  return {
    title: h('span', { class: 'bold', id: path }, title),
    section: sectionArray ,
    content: processedContent,
    path: path,
  }
}
export const makeX6Core = (nodes:any, edges:any,polygonSettings:any):any => {
  let nodeInput:any = {}
  for (let key in nodes) {
    if (key === 'polygon') {
      nodeInput[key] = nodes[key].map((id:string) => {
        return {
          id: id,
          shape: 'polygon',
          ports: polygonSettings.ports,
          attrs: polygonSettings.attrs,
        }
      })
    } else if (key === 'rect' || key === 'ellipse') {
      nodeInput[key] = nodes[key].map((id:string) => {
        return {
          id: id,
          shape:'rect',
        }
      })
    }
  }
  nodeInput.edges = edges.map((item:any) => {
    if (Array.isArray(item[0]) && Array.isArray(item[1])) {
      return {
        source: { cell: item[0][0], port: item[0][1] },
        target: { cell: item[1][0], port: item[1][1] },
        label: '否',
      }
    } else if (Array.isArray(item[0])) {
      return { source: { cell: item[0][0], port: item[0][1] }, target: item[1], label: '是' }
    } else {
      return { source: item[0], target: item[1] }
    }
  })
  return nodeInput
}
export const makeX6all = (data:any, line:any, positionLabel:any) => {
  let nodeOption = {}
  for (let value in data) {
    if (value == 'edges') {
      data[value] = data[value].map((x:any) => {
        return { ...x, ...positionLabel[value], ...line.edges }
      })
    } else {
      data[value] = data[value].map((item:any, index:any) => {
        return {
          ...item,
          ...positionLabel[value][index],
          ...line[value],
        }
      })
    }
  }
  nodeOption = {
    nodes: [...data.rect, ...data.polygon, ...data.ellipse].map((x) => {
      return { ...x, width: 100, height: 50 }
    }),
    edges: [...data.edges],
  }
  return nodeOption
}
