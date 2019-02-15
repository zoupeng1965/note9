<template>
    <div class="photoinfo">
        <h2 class="jz">我是photoinfo</h2>

        <h3 class="title">{{info.title}}</h3>
        <p>
            <span>发表时间:{{info.add_time | msg}}</span>
            <span>点击{{info.click}}次</span>
        </p>
        <hr>
        <div class="thumbs">
             <img class="preview-img" v-for="(item, index) in list" :key="index" :src="item.src" height="100" @click="$preview.open(index, list)">
        </div>


        <div class="content" v-html="info.content"></div>
        <com :text="this.id"></com>
    </div>
</template>

<script>
export default {
    data(){
        return {
          id:this.$route.params.id,
          info:[],
          list:[]
        }
    },
    created() {
        this.getinfo()
        this.getlist()
        
    },
    methods: {
        getinfo(){
             this.$http.get("api/getimageInfo/"+this.id).then(res => {
        if (res.body.status == 0) {
         
          this.info = res.body.message[0];
        //   console.log(this.info,5555555555)
        }
      });
        },
        getlist(){
                  this.$http.get("api/getthumimages/"+this.id).then(res => {
        if (res.body.status == 0) {
         res.body.message.forEach((item)=>{
              item.w = 600;
            item.h = 400;
         })
          this.list = res.body.message;
          console.log(this.list,22222222222)
        }
      });  
        }
    },
}
</script>

<style lang="less" scoped>
.photoinfo{
    .jz{
  text-align: center;
}
    .title{
        color: #26a2ff;
    font-size: 15px;
     margin: 15px 0;
     text-align: center;
    }
    p{
        display: flex;
        justify-content: space-between;
    font-size: 13px;
    }
     .content {
         text-align: left;
    font-size: 13px;
    line-height: 30px;
  }
}
.thumbs{
    width: 100%;
    text-align: left;
    padding-left: 20px;
    img{
        margin-top: 10px;
        width: 27%;
      margin-right: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
</style>
