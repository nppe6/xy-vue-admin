<template>
  <div class="grid md:grid-cols-2 gap-3">
   <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
      <div>
         <span>用户统计</span>
      </div>
      </template>
      <!-- card body -->
      <div
      id="main1"
      class="w-full h-72"></div>
   </el-card>

   <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header>
      <div>
         <span>用户统计</span>
      </div>
      </template>
      <!-- card body -->
      <div
      id="main2"
      class="w-full h-72"></div>
   </el-card>
   


  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { nextTick } from 'vue'
import { echarts1, echarts2 } from '../plugins/echarts'

nextTick(() => {
  // 绘制图表
  echarts.init(document.getElementById('main1')).setOption(echarts1)
  echarts.init(document.getElementById('main2')).setOption(echarts2)
})
</script>

<style scoped></style>
