<template>
  <div class=" grid md:grid-flow-col gap-3 cursor-pointer bg-gray-100">
    <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="(ele,index) in cards" :key="index">
    <template #header>
    <div class="flex justify-between items-center">
      <span>{{ ele.title }}</span>
      <el-tag type="danger" size="mini" effect="dark">月</el-tag>
    </div>
    </template>
    <!-- card body -->
     <section class="flex justify-between items-center">
      <span class="text-2xl">${{ ele.price }}</span>
      <i class=" text-sky-500 text-5xl" :class="ele.icon"></i>
     </section>
     <section class="flex justify-between text-base items-center mt-4">
      <span>{{ ele.totalTitle }}</span>
      <span>{{ ele.total }}</span>
     </section>
  </el-card>
  </div>

  <div class="mt-5">
    <section>
      <Echarts></Echarts>
    </section>
  </div>
  
</template>


<script setup lang="ts">
import { reactive } from 'vue';
import Echarts from'@/layouts/components/echarts.vue'

interface ICard{
  title:string,
  price:number,
  icon:string,
  totalTitle: string,
  total:number
}

const cards = reactive<ICard[]>([
  {
    title:'总人数',
    price: 29980,
    icon:'fab fa-btc',
    totalTitle:'总用户数',
    total:24468
  },
  {
    title:'总交易',
    price: 29980,
    icon:'fab fa-bootstrap',
    totalTitle:'总交易数',
    total:24468
  },
  {
    title:'访问量',
    price: 29980,
    icon:'fab fa-canadian-maple-leaf',
    totalTitle:'总访问数量',
    total:24468
  },
  {
    title:'评论数',
    price: 29980,
    icon:'fab fa-centos',
    totalTitle:'总评论数',
    total:24468
  },
])

</script>

<style scoped>

</style>


<!-- <script>
export default {
  route:{path: "userIndex"}
}
</script> -->