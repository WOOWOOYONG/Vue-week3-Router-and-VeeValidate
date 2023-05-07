import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import AllRules from '@vee-validate/rules'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// configure({
//   generateMessage: localize({ zh_TW: zhTW }),
//   validateOnInput: true // 輸入文字時，就立即進行驗證
// })

configure({
  generateMessage: localize(
    { zh_TW: zhTW },
    {
      messages: {
        required: '{field} 必須填寫'
      }
    }
  ),
  validateOnInput: true // 輸入文字時，就立即進行驗證
})

setLocale('zh_TW')

const app = createApp(App)

app.use(router)

// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
