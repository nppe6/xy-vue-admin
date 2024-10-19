<template>
<div class="admin h-screen w-screen flex">
  <menu-components/>
  <div class="content flex-1 bg-gray-200">
    <router-view></router-view>
  </div>
</div>
</template>

<script setup lang="ts">
import MenuComponents from '@/layouts/components/menu.vue'
</script>

<style scoped></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
