<template>
  <div class="login-content">
    <Form
      class="form"
      @submit="onSubmit"
      :validation-schema="Schema">
      <h1>通用后台脚手架</h1>
      <div class="form-content">
        <Field
          name="username"
          label="用户名或邮箱"
          placeholder="请输入用户名或邮箱"
          value="xiao@xy.com"
          :rules="{ required: true, email: true }"
          class="xy-input">
        </Field>

        <!-- as div就是将这个组件识别成一个 div 默认是 span -->
        <ErrorMessage
          name="username"
          as="div"
          class="xy-error-text"></ErrorMessage>

        <Field
          name="password"
          label="密码"
          placeholder="请输入密码"
          value="xiao666"
          :rules="{ required: true, min: 6 }"
          class="xy-input mt-3">
        </Field>
        <!-- as div就是将这个组件识别成一个 div 默认是 span -->
        <ErrorMessage
          name="password"
          as="div"
          class="xy-error-text"></ErrorMessage>
        <xy-button class="mt-5">登录</xy-button>

        <div class="flex justify-end mt-3">
          <p class="text-white text-sm px-2 cursor-pointer">忘记密码</p>
        </div>
        <!-- <div class=" flex justify-center mt-4">
          <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-2 cursor-pointer "></i>
        </div> -->
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { axiosLogin } from '@/apis/user'
import veeValidate from '@/plugins/validate'
import { store } from '@/utils';
const { Form, Field, ErrorMessage } = veeValidate

const Schema = veeValidate.yup.object({
  username: veeValidate.yup.string().required().email().label('邮箱'),
  password: veeValidate.yup.string().required().min(6).label('密码')
})

const onSubmit = async (values:any) => {
  console.log(values)
  const { data:{token} } = await axiosLogin(values)

  store.set('token',{
    expire:100,
    token
  })
 

  alert('333')
}
</script>

<style lang="scss" scoped>
.login-content {
  @apply h-screen bg-[#2d3a4b] flex justify-center items-center p-5 md:p-0;

  .form {
    @apply w-[420px] -translate-y-32;

    h1 {
      @apply text-white text-2xl text-center font-semibold mb-8;
    }

    .form-content {
      @apply w-full flex flex-col;
    }
  }
}
</style>
