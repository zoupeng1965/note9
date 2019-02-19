<template>
  <div class="shopcar">
    <h2>我要shopcar</h2>
    <div class="tb">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.anniu[item.id]" @change="anniu(item.id)"></mt-switch>
            <img :src="item.thumb_path" alt>
            <div class="info">
              <h2>{{item.title}}</h2>
              <div>
                <span>#{{item.sell_price}}</span>
                <numbox :text="item.id" :inlene="$store.getters.hetgood[item.id]"></numbox>

                <!-- ============== -->
                <span @click="remove(item.id,i)">删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <h2>{{$store.getters.gxsl.aa}}</h2>
          
          <h2>{{$store.getters.gxsl.bb}}</h2>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import mui from "@/mui/js/mui.min.js";
import numbox from "@/page/aa.vue";
export default {
  //      mounted() {
  //   // 初始化数字选择框组件
  //   mui(".mui-numbox").numbox();
  // },
  name: "shopcar",
  data() {
    return {
      goodslist: []
    };
  },

  components: {
    numbox
  },
  created() {
    this.getlist();
  },
  //  mounted() {
  //   // 初始化数字选择框组件
  //   // mui(".mui-numbox").numbox();
  //   mui('.mui-numbox').numbox();
  //   console.log(5555)

  // },
  methods: {
    getlist() {
      // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.car.forEach(item => {
        idArr.push(item.id);
      });
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (idArr.length == 0) {
        return;
      }
      // 获取购物车商品列表
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(res => {
          if (res.body.status === 0) {
            this.goodslist = res.body.message;
          }
          console.log(this.goodslist);
        });
    },
    remove(id,i){
      this.$store.commit("removelist",id)
      this.goodslist.splice(i, 1)
    },
    anniu(id){
      this.$store.commit("anniu",id)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.shopcar {
  .tb {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      img {
        width: 60px;
      }
      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // background-color: red;
        h2 {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
