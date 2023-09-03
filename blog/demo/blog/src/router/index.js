import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue';
import Index from '../views/Index.vue';
import Info from '../views/Info.vue';
import Archive from '../views/Archive.vue';
import Login from '../views/Login.vue';
Vue.use(VueRouter)

const routes=[
  {
    path:'/',component:App,
    children:[{
      path:'',component:Index
    }]
  },
  {
    path:'/index',component:Index
  },
  {
    path:'/info',component:Info
  },
  {
    path:'/archive',component:Archive
  },
  {
    path:'/login',component:Login
  },
]

// 使用上面定义的路由配置
const router=new VueRouter({
  routes
})

export default router