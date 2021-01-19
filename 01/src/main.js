import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import axios from 'axios'





Vue.prototype.$echarts = echarts;
axios.defaults.withCredentials=true
Vue.prototype.$axios=axios


axios.defaults.baseURL="http://192.168.2.149:8090"

// 导入ElementUI
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入font-awesome(导入就可以直接用了)
import 'font-awesome/scss/font-awesome.scss'


// function myxx () {
// 	console.log(66661111)
// 	var x=200
// 	// console.log(this)
// 	Vue.prototype.$x=x
// }
// Vue.use(myxx)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
