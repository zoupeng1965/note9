import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login'
import home from '@/page/home'
import vip from '@/page/vip'
import shopcar from '@/page/shopcar'
import search from '@/page/search'
import newlist from '@/page/newlist'
import newinfo from '@/page/newinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/home'
    },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login
    // },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/vip",
      name: "vip",
      component: vip
    },
    {
      path: "/shopcar",
      name: "shopcar",
      component: shopcar
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/home/newlist",
      name: "newlist",
      component: newlist
    },
    {
      path: "/home/newinfo/:id",
      name: "newinfo",
      component: newinfo
    },
  ],
  linkActiveClass: 'mui-active'// 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
