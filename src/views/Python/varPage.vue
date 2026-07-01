<template>
  <appSider>
    <h2 class="st">变量</h2>
    <div>
      <h4 class="kt normal rem2">
        编程是建立在数学之上的，在数学上我们经常分析问题，将问题简单化，在编程中亦是如此，那么我们需要开始辨明一些基础性的概念，变量就是其中最重要的部分。它把具体的东西抽象化。就比如我买了一袋苹果，它有香味，有味道，有形状，但是它叫苹果，而变量就是这么一个功能。
      </h4>
      <h3 class="st">Python的变量命名有三条规则：</h3>
      <div v-for="(item, index) in items" :key="index">
        <h4 class="st rem1">{{ item.title }}</h4>
        <blockcode :code="item.code"></blockcode>
      </div>
    </div>
    <h2 class="st">尝试一下</h2>
    <h4 class="normal kt rem2">输入一个变量名看看符不符合规则吧!</h4>
    <div style="display: flex; gap: 10px">
      <el-input
        type="text"
        v-model="variableName"
        style="width: 200px"
        placeholder="只能完成前两条校验"
      ></el-input>
      <el-button class="black" type="info" text @click="checkVariable">校验</el-button>
    </div>
  </appSider>
</template>
<style scoped>
:deep(.el-input__wrapper) {
  background-color: rgb(0, 0, 0) !important;
  box-shadow: 0 0 0 1px #333 inset;
}

:deep(.el-input__inner) {
  color: #fff;
  background-color: transparent;
}
</style>
<script setup>
import { ref, computed } from 'vue'
import blockcode from '@/components/codeComponent.vue'
const items = [
  {
    title: '合法字符',
    code: `#字母(A-Z, a-z)
#数字(0-9，但不能开头)
#下划线(_)

# ✅ 合法的
name = "张三"
age_1 = 25
_private = "内部用"
MAX_SIZE = 100
# ❌ 非法的
2name = "test"    # 数字开头
my-name = "test"  # 连字符
my name = "test"  # 空格
$amount = 100     # 特殊字符`,
  },
  {
    title: ' 不能是关键字',
    code: `# Python 35个关键字，都不能用作变量名#
常见的关键字：
import keyword
print(keyword.kwlist)
# ['False', 'None', 'True', 'and', 'as', 'assert', 'async', ...]

# ❌ 错误示例
class = "Python课"    # class是关键字
def = "函数"          # def是关键字`,
  },
  {
    title: '区分大小写',
    code: `Name = "张三"
name = "李四"
NAME = "王五"
print(Name)  # "张三"
print(name)  # "李四"
print(NAME)  # "王五"
# 三个不同的变量！`,
  },
]
import { message, ask } from '@tauri-apps/plugin-dialog'

const variableName = ref('')
const validationResult = computed(() => {
  const name = variableName.value.trim()

  if (!name) {
    return { valid: false, message: '请输入变量名' }
  }

  if (/^[0-9]/.test(name)) {
    return { valid: false, message: '❌ 变量名不能以数字开头' }
  }

  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
    return { valid: false, message: '❌ 变量名只能包含字母、数字和下划线' }
  }
  const keywords = [
    'False',
    'None',
    'True',
    'and',
    'as',
    'assert',
    'async',
    'await',
    'break',
    'class',
    'continue',
    'def',
    'del',
    'elif',
    'else',
    'except',
    'finally',
    'for',
    'from',
    'global',
    'if',
    'import',
    'in',
    'is',
    'lambda',
    'nonlocal',
    'not',
    'or',
    'pass',
    'raise',
    'return',
    'try',
    'while',
    'with',
    'yield',
  ]
  if (keywords.includes(name)) {
    return { valid: false, message: `❌ "${name}" 是 Python 关键字，不能用作变量名` }
  }

  return { valid: true, message: `✅ "${name}" 是合法的变量名！` }
})
const checkVariable = async () => {
  const result = validationResult.value
  try {
    if (result.valid) {
      // 合法变量名 - 弹个消息通知
      await message(result.message, {
        title: '校验通过',
        type: 'info',
      })
    } else {
      // 非法变量名 - 带确认按钮的警告弹窗，让用户确认后可以继续输入
      const shouldContinue = await ask(result.message, {
        title: '命名不符合规则',
        type: 'warning',
        okLabel: '重新输入',
        cancelLabel: '知道了',
      })

      // 如果用户点击"重新输入"，可以自动清空或聚焦输入框
      if (shouldContinue) {
        variableName.value = ''
        // 也可以让输入框自动获取焦点
        // 需要给 el-input 加 ref，然后用 .focus() 方法
      }
    }
  } catch {
    if (result.valid) {
      alert('校验通过')
    } else {
      alert('命名不符合规则')
    }
  }
}
</script>
