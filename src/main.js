import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//引入全局样式
import "./assets/css/document.css"
new Vue({
  render: h => h(App),//渲染App
}).$mount('#app')//挂载到app
