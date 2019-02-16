<template>
    <div>
         <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="(item,index) of lbtsj" :key=index>
          <img :src="item.img || item.src " alt="">
      </mt-swipe-item>
      
    </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lbtsj"],
    data(){
        return{

        }
    }
}
</script>


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
</style>
