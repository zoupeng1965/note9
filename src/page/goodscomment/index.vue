<template>
    <div class="goodscomment">
        我是goodscomment
         <com :text="this.id"></com>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            
        }
    },
    created() {
        
    },
   methods: {
     
   }, 
}
</script>