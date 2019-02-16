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







Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
