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
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/vip">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/search">
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
.mint-header.is-fixed {
  
    z-index: 2;
}

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
	// text-align: center;
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

.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
