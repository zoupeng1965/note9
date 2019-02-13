<template>
    <div class="newinfo">
        <h3 class="bt">我是newinfo</h3>
        <h2 class="btt">{{info.title}}</h2>
        <p class="sj">
            <span>发表时间:{{info.add_time | msg}}</span>
            <span>点击:{{info.click}}次</span>
        </p>
          <hr>
          <!-- 内容区域 -->
    <div class="content" v-html="info.content"></div>

    <pl></pl>
    </div>
</template>

<script>
export default {
     name: "newinfo",
  data() {
    return {
       id:this.$route.params.id,
       info:{}
    };
  },
  created() {
  this.getinfo()    
  },
  methods: {
      getinfo(){
         this.$http.get("api/getnew/"+this.id).then(res=>{
            //  console.log(res)
             if(res.body.status==0){
          this.info=res.body.message[0]
        //   console.log(this.info)
          
         
        }
         }) 
      }
  },
}
</script>

<style lang="less" >
    .newinfo{
        background-color: #fff;
        text-align: left;
        padding: 0 4px;
        .bt{
            margin-bottom: 10px;
            text-align: center;
        }
        .btt{
            color: red;
              font-size: 16px;
    text-align: center;
     margin: 15px 0;
        }
        .sj{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #226aff;
            // margin-top: 10px;
        }
        .content {
    img {
      width: 100%;
    }
  }
    }



</style>