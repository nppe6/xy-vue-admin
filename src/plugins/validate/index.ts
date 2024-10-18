import  * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup'

veeValidate.configure({
  generateMessage: localize('zh_CN', zh_CN)
})

// 这一步操作就是将所有的验证规则默认都加载上
Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate }

export default modules;
