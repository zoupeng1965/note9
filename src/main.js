import Vue from 'vue'
import App from './App'
import router from './router'

// import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import App from './App.vue'

Vue.use(MintUI)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter("msg",(aa,bb="YYYY-MM-DD HH:mm:ss")=>{
 return moment(aa).format(bb);
})



//引入vue-resource文件
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root = 'http://vue.lovegf.cn:8899/'



import "bootstrap/dist/css/bootstrap.min.css"
//引入mui与字体图标
import "./mui/css/mui.min.css"
import './mui/css/icons-extra.css'

//引入初始化css
import "./comment/comment.css"

// 1. 导入 评论子组件
import pl from "./page/pinglun.vue";
Vue.component("com",pl)

// 导入轮播图插件
import swipe from "./page/swipre.vue";
Vue.component("swipe",swipe)

// 引入缩略图插件
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

// 引入vuex插件
import Vuex from 'vuex'

Vue.use(Vuex)

let car=JSON.parse(localStorage.getItem("car")||'[]')
// console.log(car,55)
// car=[]
const store = new Vuex.Store({
  state: {
   car:car
  },
  mutations:{
    addlist(state,goodinfo){
        // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可
      // console.log(state.car)
      let index=state.car.findIndex((item)=>
         item.id==goodinfo.id
      )
      // console.log(index)
      if(index==-1){
        state.car.push(goodinfo)
      }else{
        // console.log(typeof state.car[index].count)
        // state.car[index].count=parseInt(state.car[index].count)
        // console.log(typeof state.car[index].count)
        state.car[index].count+=parseInt(goodinfo.count)
      }
      // console.log(11)
      // state.car=[]
      localStorage.setItem("car",JSON.stringify(state.car))
      // console.log(localStorage.getItem("car"),55)
      
    },
    addgwc(state,gwcinfo){
      state.car.some(item=>{
        if(item.id==gwcinfo.id){
          item.count=parseInt(gwcinfo.count)
          return true
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    removelist(state,id){
      state.car.some((item,i)=>{
        if(item.id==id){
          state.car.splice(i,1)
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    },
    anniu(state,id){
      state.car.some(item=>{
        if(item.id==id){
          item.selected=!item.selected
        }
      })
      localStorage.setItem("car",JSON.stringify(state.car))
    }
  },
  getters: {
    text(state){
      let sum=0
      state.car.forEach(item => 
         sum+=item.count  
      );
      return sum
    },
    hetgood(state){
      var o ={}
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    },
    anniu(state){
      var c={}
      state.car.some(item=>{
        c[item.id]=item.selected
      })
      return c
    },
    gxsl(state){
      var sum1={
       aa:0,
       bb:0
      };
      state.car.forEach(item=>{
        
        if(item.selected){
          
          // 数量
          
          sum1.aa+=item.count
          // 总价
          sum1.bb+=item.count*item.price
          console.log(sum1.aa,55)
          console.log(sum1)
        }
       
      })
      return sum1
    }
  }
})








Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
