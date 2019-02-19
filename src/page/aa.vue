<template>
  <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
  <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
  <input class="mui-numbox-input" type="number" :value="inlene" ref="text" @change="chang"/>
  <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
</div>

  <!-- 分析： 子组件什么时候把 数据传递给父组件 -->
  <!--  -->
</template>
<script>
import mui from "@/mui/js/mui.min.js";
export default {
    mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
   
  },
  data() {
    return {
      
    }
  },
  methods: {
    chang(){
      //  console.log(this.$refs.text.value,4)
      //  console.log(this.text)
      var o={
        id:this.text,
        count:parseInt(this.$refs.text.value),
      }
      this.$store.commit("addgwc",o)
    }
  },
  props:["text","inlene"]
 
}
</script>