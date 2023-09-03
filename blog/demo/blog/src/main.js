import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index.js';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

Vue.filter('formatDate', function(value) {
  if (value) {
    const date = new Date(value);
    const options = {
       year: 'numeric', 
       month: '2-dight',
       day:'2-dight',
       hour:'2-dight',
       minute:'2-dight',
       hour12:false//使用24小时制
       };
    return date.toLocaleDateString('en-US', options);
  }
  return '';
});
