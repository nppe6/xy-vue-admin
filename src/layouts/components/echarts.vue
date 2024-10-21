<template>

   <div class="grid grid-flow-col gap-3">
    <div id="main1" style="width: 600px;height:400px;"></div>

    <div id="main2" style="width: 600px;height:400px;"></div>
   </div>

</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { nextTick } from 'vue';
import { echarts1, echarts2 } from '../plugins/echarts';

nextTick(()=>{
// 绘制图表
echarts.init(document.getElementById('main1')).setOption(echarts1);
echarts.init(document.getElementById('main2')).setOption(echarts2);
})
</script>

<style scoped>

</style>