<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 组件切换动画 -->
    <transition>
      <router-view/>
    </transition>

    <nav class="mui-bar mui-bar-tab">
      <!-- 直接写/是因为托管了吗 -->
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
// import { Header } from 'mint-ui';
// import Vue from 'vue'
// Vue.component(Header.name, Header);
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// 	margin-top: 60px;
// 	// margin-bottom: 50px;
// }
#app{
  background-color: #fff;
	padding-top: 50px;
	text-align: center;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter
{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	position: absolute;
		opacity: 0;
	transform: translateX(-100%)
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}
</style>
