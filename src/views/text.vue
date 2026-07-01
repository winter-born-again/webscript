<template>
  <Codemirror
    v-model:value="code"
    :options="cmOptions"
    border
    :height="200"
    @change="onChange"
    @beforeCursorEnter="onEnter"
  />
  <div class="result"></div>
</template>

<script setup>
import { ref } from 'vue';
import Codemirror from 'codemirror-editor-vue3';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';

const code = ref(`console.log('Hello, CodeMirror!');`);

const cmOptions = {
  mode: 'text/javascript',
  theme: 'dracula',
  lineNumbers: true,
  smartIndent: true,
  indentUnit: 2,
  extraKeys: {
    Enter: (cm) => {
      // 处理回车逻辑
      const cursor = cm.getCursor();
      const line = cm.getLine(cursor.line);
      console.log('写完这一行:', line);

      // 让编辑器继续处理默认回车行为
      cm.execCommand('newlineAndIndent');
    }
  }
};

const onEnter = () => {
  console.log('按了回车键');
};
</script>
