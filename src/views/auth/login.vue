<template>
  <div class="login-content">
    <div class="form">
      <h1>通用后台脚手架</h1>
      <div class="form-content">
        <xy-input class=" input-item" placeholder="请输入手机号或邮箱账号" type="text"></xy-input>
        <xy-input class=" input-item" placeholder="请输入密码" type="password"></xy-input>
        <xy-button>登录</xy-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login-content{
  @apply h-screen bg-[#2d3a4b] flex justify-center items-center p-5 md:p-0;

  .form{
    @apply w-[420px] -translate-y-32;

    h1{
      @apply text-white text-2xl text-center font-semibold mb-8
    }

    .form-content{
      @apply w-full flex flex-col gap-4;

      .input-item{
        @apply bg-transparent text-white bg-[#283443];
      }
    }
  }
}
</style>