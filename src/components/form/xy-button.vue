<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
button{
  @apply py-2 bg-violet-700 w-full text-white rounded-md hover:bg-violet-500 duration-300
}
</style>