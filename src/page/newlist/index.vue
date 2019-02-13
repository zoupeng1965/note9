<template>
  <div class="newlist">
    <h2>这是newlist</h2>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link :to="`/home/newinfo/${item.id}`">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          >
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{item.add_time | msg }}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
   
     
    </ul>
  </div>
</template>

<script>
export default {
  name: "newlist",
  data() {
    return {
      list:[]
    };
  },
  created(){
     this.getlist()
  },
  methods: {
    getlist(){
      this.$http.get("api/getnewslist").then(res=>{
        console.log(res.body.message)
        if(res.body.status==0){
          this.list=res.body.message
         
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
.newlist {
  text-align: left;
  h2 {
    text-align: center;
  }
  .mui-table-view {
    .mui-media-body{
      height: 42px;
       h1 {
      font-size: 16px;
    }
    .mui-ellipsis {
      margin-top: 10px;
      font-size: 12px;
      color: blue;
      display: flex;
      justify-content: space-between;
    }
    }
   
  }
}
</style>