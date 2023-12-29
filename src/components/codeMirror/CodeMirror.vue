<template>
  <codemirror
      ref="mirror"
      v-model="$props.code"
      placeholder="Code gose here..."
      :style="{ height: 'calc(100vh - 100px)' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tabSize="2"
      :extensions="extensions"
      @ready="log('ready', $event)"
      @change="change"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
  />
</template>

<script setup lang="ts">

    import {
      ref,
    } from "vue";

    import {
      Codemirror
    } from "vue-codemirror";

    import {
      oneDark
    } from "@codemirror/theme-one-dark";

    import {
      javascript
    } from "@codemirror/lang-javascript";


    const $props = defineProps(['code'])
    const $emit = defineEmits(['change'])

    // refs
    const mirror = ref();
    // log
    const log = ref(console.log)
    // code 配置项
    const extensions = [javascript(), oneDark];

    /*
    * 数据更新
    * */
    const change = (value:string) => {
      $emit('change',value)
    }

    /*
    * 获取数据源
    * */
    const getModelValue = () => {
      return mirror.value.modelValue;
    }

    defineExpose({
      getModelValue
    })

</script>

<style scoped>
 * {
   font-size: 24px;
   font-weight: bolder;
   letter-spacing: 0.5px;
 }

</style>
