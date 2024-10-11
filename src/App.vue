<script setup lang="ts">
import Helper from '@/utils/helper'
// 转换类型成功 
console.log(typeof Helper.env.VITE_ROUTER_AUTOLOAD);
console.log(typeof import.meta.env.VITE_ROUTER_AUTOLOAD);



</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
