<template>
    <div class="good">
        <!-- <h2>我是good</h2> -->
        <div class="sj" v-for="item in list" :key="item.id" @click="tz(item.id)">

            <img :src="item.img_url" alt="">
            <h2>{{item.title}}</h2>
            <div class="sj-db">
                <p class="sj-db-jg">
                    <span >
                        #{{item.market_price}}
                    </span>
                     <span>
                         @{{item.sell_price}}
                     </span>
                </p>
                <p class="sj-db-js">
                     <span>
                         热卖中
                     </span>
                     <span>
                         剩{{item.stock_quantity}}件
                     </span>
                </p>
            </div>
        </div>
       

         <mt-button type="danger" size="large" plain class="button" @click="geimor">加载更多</mt-button>

    </div>
</template>

<script>
export default {
   
    data(){
        return {
            page:1,
            list:[]
        }
    },
    created() {
        this. geilist()
        // console.log(this.page,555)
    },
    methods: {
        geilist(){
             this.$http.get("api/getgoods?pageindex="+this.page).then(res=>{
        
        if(res.body.status==0){
        //   this.list=res.body.message
        this.list=this.list.concat(res.body.message)
         
        }
        
      })
        },
         geimor(){
            this.page++
           this.geilist()
        },
        tz(id){
            this.$router.push('/home/goodinfo/'+id)
        }
    },
}
</script>






<style lang="less" scoped>
.good{
    overflow: hidden;
    padding: 5px;
    display: flex;
    flex-flow: wrap;
    .sj{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        min-height: 293px;
        margin-top: 3px;
         border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
        width: 49%;
         padding: 5px;
         margin-right: 3px;
         img{
             width: 100%;
         }
         h2{
             font-size: 14px;
         }
         .sj-db{
             background-color: #eee;
             padding: 3px;
        .sj-db-jg span:nth-child(1) {
         font-size: 16px;
         color: red;
         font-weight: bold;
        }
        .sj-db-jg span:nth-child(2) {
        text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
         
        }
        .sj-db-js{
            display: flex;
           justify-content: space-between;
        font-size: 13px;
        }

         }
    }
    .button{
        margin-top: 10px;
    }
}
</style>
