<template>
  <div class="m-5 grid grid-flow-col gap-2 justify-start">
    <a href="#" v-for="(ele,index) in links" :key="index" class="bg-white rounded-md py-2 px-3 text-sm text-gray-600">
      {{ ele.title }}
      <i class="fas fa-xmark text-xs ml-1 "></i>
    </a>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const links = reactive<{title:string}[]>([
  {
    title:'首页'
  },
  {
    title:'文章管理'
  },
  {
    title:'富文本编辑器'
  },
  {
    title:'文章管理'
  },
  {
    title:'富文本编辑器'
  },
  {
    title:'文章管理'
  },
  {
    title:'富文本编辑器'
  },
])
</script>

<style scoped>

</style>