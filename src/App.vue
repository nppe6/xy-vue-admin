<script setup lang="ts">
import Helper from '@/utils/helper'
import { axiosGetUser } from './apis/user';
// 转换类型成功 
console.log(typeof Helper.env.VITE_ROUTER_AUTOLOAD);
console.log(typeof import.meta.env.VITE_ROUTER_AUTOLOAD);

async function requestUser(){
  const res = await axiosGetUser()
  console.log(res.data.name);
  
}
requestUser()
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
