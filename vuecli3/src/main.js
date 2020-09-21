import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 没有el选项，则使用.$mount()挂载模板
new Vue({
  render: h => h(App),
}).$mount('#app')
