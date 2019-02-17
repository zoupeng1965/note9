<template>
    <div class="pinglun">
    这是品论
        <h2>发表评论</h2>
        <hr>
        <textarea v-model="msg" name="" id="" cols="30" rows="10" placeholder="请输入要BBB的内容" maxlength="120"></textarea>
         <mt-button type="primary" size="large"  @click="geipl">发表评论</mt-button>
         <div class="hezi" v-for="(item,i) in pinglun " :key="i" >
             <div class="tb">
                 第{{i+1}}&nbsp;&nbsp;楼用户名:{{item.user_name}}&nbsp;&nbsp;用户时间:{{item.add_time | msg}}
             </div>
             <div class="db">
              {{item.content}}
             </div>
         </div>
         <mt-button type="danger" size="large" plain @click="geimor" >加载更多</mt-button>

    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    
    props:["text"],
    data(){
        return{
            msg:"",
         pageindex:1 ,
         pinglun:[]  
        }
    },
    created() {
        // console.log(this.text)
        this.geilist()
    },
    methods: {
        geilist(){
            this.$http.get("api/getcomments/"+this.text+"?pageindex="+this.pageindex).then(res=>{
               if(res.body.status==0){
        //   this.pinglun=res.body.message
        this.pinglun=this.pinglun.concat(res.body.message)
         
        }
        
            })
        },
        geimor(){
            this.pageindex++
           this.geilist()
        },
        geipl(){
            
            if(this.msg.trim().length==0){
                return Toast("评论内容不能为空！");
            }


            this.$http.post("api/postcomment/"+this.text,{content:this.msg},{emulateJSON:true}).then(res=>{
                if(res.body.status==0){
                    this.pinglun=[]
                    this.pageindex=1
                    this.geilist()
                    this.msg=""



                    // var cmt={
                    //     add_time:Date.now(),
                    //     content:this.msg,
                    //     user_name:"匿名用户"
                    // }
                    // this.pinglun.unshift(cmt)
                    // this.msg=""
                }
            })
        }

    },
}
</script>

<style lang="less" scope>
    hr{
        margin-top: 3px;
        margin-bottom:3px;
    }
    .pinglun{
         h2 {
    font-size: 18px;
    margin: 5px;
    text-align: left;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

    }
    .hezi{
        margin-top: 3px;
        .tb{
            font-size: 13px;
            background-color: #ccc;
            line-height: 30px;
        }
        .db{
            line-height: 35px;
        text-indent: 2em;
        }
    }
</style>