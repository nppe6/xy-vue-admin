<template>
<div class="admin h-min-screen w-screen flex">
  <menu-components/>
  <div class="content flex-1 bg-gray-100">
    <navbar-components />
    <history-link/>
    <div class="m-5  ">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import MenuComponents from '@/layouts/components/menu.vue'
import NavbarComponents from '@/layouts/components/navbar.vue'
import HistoryLink from './components/historyLink.vue';
</script>

<style scoped></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
