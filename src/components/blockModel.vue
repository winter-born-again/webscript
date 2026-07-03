<template>
  <appSider>
    <slot name="title"></slot>

    <div v-for="(value, index) in result" :key="index" style="margin-bottom: 50px" class="kt">
      <h3 class="normal" align="center">
        <slot name="default" :index="index" :value="value">
          <component :is="value.title"></component>
        </slot>
      </h3>

      <div v-for="(section, item) in value.section" :key="item" style="padding-left: 10px">
        <h4 class="normal" v-html="section"></h4>
        <component :is="value.content[item]"></component>
        <slot name="block" :index="index" :item="item" :value="value"></slot>
      </div>
    </div>
  </appSider>
</template>

<script setup>
const props = defineProps({
  result: {
    type: Array,
    required: true
  }
})
</script>
