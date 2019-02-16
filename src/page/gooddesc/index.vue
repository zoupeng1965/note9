<template>
    <div class="goodsdesc-container">
        <h2>我是goodsdesc-container</h2>
         <h3>{{list.title}}</h3>

    <hr>

    <div class="content" v-html="list.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            list:[]
        }
    },
    created() {
        this.getlist()
    },
   methods: {
      getlist(){
      this.$http.get("api/goods/getdesc/"+this.id).then(res=>{
        // console.log(res.body.message)
        if(res.body.status==0){
          this.list=res.body.message[0]
          console.log(this.list)
         
        }
      })
    } 
   }, 
}
</script>



<style lang="less" >
.goodsdesc-container {
  padding: 4px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}


</style>
