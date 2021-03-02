import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import axios from 'axios';
Vue.prototype.$echarts = echarts;

axios.defaults.headers.post['Content-Type'] = "application/json"

axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = store.state.token
Vue.prototype.$axios=axios
axios.defaults.baseURL="http://localhost:8090"
import store from './store/index'
Vue.config.productionTip = false

// 导入ElementUI
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入font-awesome(导入就可以直接用了)
import 'font-awesome/scss/font-awesome.scss'
Vue.use(ElementUI);



// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


