<template>
  <div class="home">
    <h2>我是home</h2>

<!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="(item,index) of lbtsj" :key=index>
          <img :src="item.img" alt="">
      </mt-swipe-item>
      
    </mt-swipe>

    <!-- 九宫格区域 -->
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		                    <img src="@/assets/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
		                    <img src="@/assets/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="@/assets/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="@/assets/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="@/assets/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="@/assets/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
                       
                            
		          
		        </ul> 
		</div>


  </div>



</template>

<script>
export default {
  name: "home",
  data() {
    return {
        lbtsj:[]
    };
  },
  created(){
 this.getlbt()
  },
  methods: {
      getlbt(){
          this.$http.get("http://vue.lovegf.cn:8899/api/getlunbo").then(res=>{
            //   console.log(res)
              this.lbtsj=res.body.message
          })
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .mint-swipe{
    height: 200px;
    .mint-swipe-item{
         background-color: red;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
.mui-grid-view.mui-grid-9{
     background-color: #fff;
      border: none;
      img{
          width:60px;
          height: 60px;
      }
       .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
