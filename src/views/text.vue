<template>
  <div ref="container" style="width: 100%; height: 600px"></div>
  <Treenode :result="data"></Treenode>
</template>

<style scoped></style>
<script setup lang="ts">
import { onMounted, ref, h, getCurrentInstance, provide } from 'vue'
import { ExtensionCategory, register, Graph, treeToGraphData } from '@antv/g6'
import { VueNode } from 'g6-extension-vue'
import { buildViewBlocks } from '@/script/tool'
import Treenode from '@/components/treenode.vue'
provide('language', 'Javascript')
register(ExtensionCategory.NODE, 'vue-node', VueNode)
const app = getCurrentInstance()?.appContext.app
const container = ref<HTMLDivElement | null>(null)
let graph: Graph | null = null
const treeData = {
  id: 'C#',
  children: [
    {
      id: 'Class Heap',
      children: [
        {
          id: 'array',
          collapsed: true,
          children: [
            {
              id: 'static_method',
              data: {
                result: [
                  buildViewBlocks(
                    'sort',
                    ['static sort of array'],
                    [
                      [
                        'csharp',
                        `using System;
using System.Diagnostics;
using System.Linq;
namespace ConsoleApp
{
    public class Solution
    {
        public IList<IList<int>> ShiftGrid(int[][] grid, int k)
        {
            int m = grid.Length;
            int n = grid[0].Length;
            int total = m * n;
            k %= total;
            if (k == 0) return grid;

            return [[]];
        }
    }
    public static class Function
    {
        public static void Read<T>(this T[] array)
        {
            Console.WriteLine(string.Join(",",array));
        }
    }
    public class Program
    {
        public static void Main()
        {
            Solution solution = new Solution();
            int[] nums = {2,1,3,4 };
            Console.WriteLine(string.Join(",", nums));
            Array.Sort(nums);
            nums.Read();
            string str1="11221";
            int result = 1;
          for(int i = 0; i < str1.Length; i++)
            {
                result*=(int)str1[i];
            }
            Console.WriteLine(result);
        }

    }

}
`,
                      ],
                    ],
                  ),
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
const data = [
  buildViewBlocks(
    'sort',
    ['static sort of array'],
    [
      [
        `csharp`,
        `using System;
using System.Diagnostics;
using System.Linq;
namespace ConsoleApp
{
    public class Solution
    {
        public IList<IList<int>> ShiftGrid(int[][] grid, int k)
        {
            int m = grid.Length;
            int n = grid[0].Length;
            int total = m * n;
            k %= total;
            if (k == 0) return grid;

            return [[]];
        }
    }
    public static class Function
    {
        public static void Read<T>(this T[] array)
        {
            Console.WriteLine(string.Join(",",array));
        }
    }
    public class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Programpublic class Program
    {
        public static void Main()
        {
            Solution solution = new Solution();
            int[] nums = {2,1,3,4 };
            Console.WriteLine(string.Join(",", nums));
            Array.Sort(nums);
            nums.Read();
            string str1="11221";
            int result = 1;
          for(int i = 0; i < str1.Length; i++)
            {
                result*=(int)str1[i];
            }
            Console.WriteLine(result);
        }

    }

}
`,
      ],
    ],
  ),
]
onMounted(() => {
  if (!container.value) return

  graph = new Graph({
    container: container.value,
    width: container.value.scrollWidth,
    height: container.value.scrollHeight || 600,
    data: treeToGraphData(treeData),
    node: {
      type: (nodeData: any) => {
        if (!nodeData.data?.result) {
          return 'circle'
        }
        return 'vue-node'
      },
      style: {
        component: (nodeData: any) => {
          if (!nodeData.data?.result) {
            return undefined
          } else {
            return h(Treenode, {
              result: nodeData.data?.result || [],
            })
          }
        },
        size: (nodeData: any) => {
          if (!nodeData.data?.result) {
            return 14
          } else {
            console.log(nodeData.data.result[0])
            return [250, 120]
          }
        },
        labelText: (d) => d.id,
        labelBackground: true,
        labelFontSize: 14,
        labelFontFamily: 'Gill Sans',
      },
    },
    edge: {
      type: 'cubic-radial',
      style: {
        lineWidth: 3,
      },
    },
    layout: {
      type: 'compact-box',
      radial: true,
      direction: 'RL',
      getVGap: () => 40,
      getHGap: () => 80,
      preLayout: false,
    },
    behaviors: [
      'zoom-canvas',
      'drag-element',
      {
        key: 'hover-activate',
        type: 'hover-activate',
        degree: 5,
        direction: 'in',
        inactiveState: 'inactive',
      },
      {
        key: 'collapse-expand',
        type: 'collapse-expand',
        shouldBegin: (event: any) => {
          return true
        },
      },
    ],
    transforms: ['place-radial-labels'],
    animation: false,
  })

  graph.render()
  graph.once('afterrender', () => {
    graph?.collapseElement('array')
  })
})

</script>
