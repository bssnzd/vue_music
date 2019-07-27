import Vue from 'vue'
import Router from 'vue-router'
import global from "@/core/global"
// console.log(global.getParam())
Vue.use(Router)

 const routers=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      // 重定向 如果是/ 显示info页
      redirect: "index",
      children:[
        {
          path:"index",
          name: 'index',
          meta:{
            keepAlive:true
          },
          //keepAlive true 禁止重复加载  false不禁止
          component: resolve => require(['@/components/main/index'], resolve)
        },
        {
          path:"search",
          name: 'search',
          component: resolve => require(['@/components/main/search'], resolve),
        },
        {
          path:"mv",
          name: 'mv',
          component: resolve => require(['@/components/main/mv'], resolve)
        },
        {
          path:"user",
          name: 'user',
          component: resolve => require(['@/components/main/user'], resolve)
        },
        {
          path:"my",
          name: 'my',
          component: resolve => require(['@/components/main/my'], resolve)
        }
      ]
    }
  ]
})

export default routers
