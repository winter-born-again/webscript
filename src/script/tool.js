import { h, inject } from 'vue'
import blockCode from '@/components/codeComponent.vue'
export function buildViewBlocks(title = '', section = [], content = "", path = "") {
  let result = {
    title: h("span", { class: "bold", id: path }, title),
    section: [...section],
    content: content,
    path: path
  }
  if (typeof section === 'string' && section.length > 0) {
    result.section = [section]
  }
  if (content === "") {
    result.content = []
  }
  if (Array.isArray(content)) {
    result.content = content.map((x) => {
      if (Array.isArray(x)) {
        return h(blockCode, { language: x[0], code: x[1] })
      }
      else if (typeof x === "string") {
        return h(blockCode, { language: inject("language"), code: x })
      }
    })
  } else if (content !== "") {
    result.content = [h(blockCode, { language: inject("language"), code: content })]
  }
  return result
}
// export function buildGraphViewModel(nodes,lines){}
