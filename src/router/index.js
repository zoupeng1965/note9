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
import photo from '@/page/photo'
import photoinfo from '@/page/photoinfo'
import goodlist from '@/page/goodlist'
import goodinfo from '@/page/goodinfo'
import gooddesc from '@/page/gooddesc'
import goodscomment from '@/page/goodscomment'

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
    {
      path: "/home/photo",
      // name: "newinfo",
      component: photo
    },
    {
      path: "/home/photoinfo/:id",
      
      component: photoinfo
    },
    {
      path: "/home/goodlist",
      
      component: goodlist
    },
    {
      path: "/home/goodinfo/:id",
      
      component: goodinfo
    },
    {
      path: "/home/gooddesc/:id",
      
      component: gooddesc
    },
    {
      path: "/home/goodscomment/:id",
      
      component: goodscomment
    },
  ],
  linkActiveClass: 'mui-active'// 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
