import * as yup from 'yup'

yup.setLocale({
  mixed:{
    required: '${label}必须输入'
  },
  string:{
    email: '邮箱格式错误',
    min: '密码应大于6位'
  },
  
})

export default yup