<template>
  <div class="menu xy-bg-primary">
    <div class="logo ">
      <i class="fab fa-bilibili "></i>
      <span>日益努力</span>
    </div>
    <!-- 菜单 -->
     <div class="left-container">
      <dl>
        <dt>
          <section>
            <i class="fas fa-house-user mr-2"></i>
            <span>错误页面</span>
          </section>
          <section>
            <i class="fas fa-angle-down text-md"></i>
          </section>
        </dt>
        <dd class="active">404页面</dd>
        <dd>403页面</dd>
      </dl>
     </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.menu{
  @apply w-[220px];

  .logo{
    @apply flex justify-center items-center p-4;

    i{
      @apply text-sky-500 text-4xl mr-4;
    }
    span{
      @apply text-gray-200 text-lg font-mono;
    }
  }

  .left-container{
    @apply px-4 cursor-pointer;

    dl{
      @apply text-gray-300 test-sm;

      dt{
        @apply text-lg mt-6 flex justify-between items-center;
      }

      dd{
        @apply py-2 pl-4 my-2 text-white rounded-md hover:bg-sky-600 duration-300;

        &.active{
          @apply bg-sky-700;
        }
      }
    }
  }
}
</style>