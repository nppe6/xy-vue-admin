<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
      <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
    </el-breadcrumb>

    <div
      class="flex justify-center items-center cursor-pointer relative group"
      @click="handleClick()">
      <img
        class="w-8 h-8 object-cover"
        src="/src/assets/image/avatar.jpg"
        alt="" />
      <span class="ml-2 text-sky-500 font-mono font-semibold"
        >肖先生的admin</span
      >
      <i class="fas fa-angle-down ml-2 text-sky-500"></i>
      <section
        class="group-hover:block absolute top-full bg-white text-sm text-gray-600 whitespace-nowrap border rounded-md hidden">
        <div
          class="flex items-center cursor-pointer border-b px-5 py-3 hover:bg-sky-100">
          <span>首页</span>
        </div>
        <div
          class="flex items-center cursor-pointer border-b px-5 py-3 hover:bg-sky-100">
          <span>文章管理</span>
        </div>
        <div
          class="flex items-center cursor-pointer border-b px-5 py-3 hover:bg-sky-100">
          <span>退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const NavList = ref<HTMLElement | null>(null)
const handleClick = () => {
  if (NavList.value) {
    // NavList.value.style.display = 'block'
  }
}
</script>

<style scoped></style>
