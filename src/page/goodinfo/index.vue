<template>
  <div class="googinfo">
    <h2>我是googinfo</h2>

    <!-- 商品轮播 -->
    <div class="mui-card tb">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- <img
            src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3824068165,96769393&fm=173&app=25&f=JPEG?w=218&h=146&s=B787D04E864351555F138BAB0300201D"
            alt
          >-->
          <swipe :lbtsj="lbtsj"></swipe>
        </div>
      </div>
    </div>

    <!-- 中间 -->
    <div class="mui-card zb">
      <div class="mui-card-header">{{info.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="zt">
            市场价:
            <del>￥{{info.market_price}}</del>销售价:
            <span>￥{{info.sell_price}}</span>
          </p>
          <div class="gmsl">
            <transition
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:after-enter="afterEnter"
              name="vv"
            >
              <div class="xq" v-show="flag" ref="bill"></div>
            </transition>

            <span class="gmsl-span">购买数量:</span>
            <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0" data-numbox-max="100">
              <button class="mui-btn mui-numbox-btn-minus" type="button"  >-</button>
              <input class="mui-numbox-input" type="number" ref="text" value="1" @change="countChanged">
              <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
            </div>
          </div>
          <div>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="gediq">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部
    -->
    <div class="mui-card db">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{info.goods_no}}</p>
          <p>库存情况:{{info.stock_quantity}}</p>
          <p>上架时间:{{info.add_time}}</p>
        </div>
      </div>
    </div>

    <div class="mui-card-footer">
      <mt-button type="primary" size="large" plain class="tw" @click="goDesc(id)">图文介绍</mt-button>
      <mt-button type="danger" size="large" plain @click="pl(id)">商品评论</mt-button>
    </div>
  </div>
</template>

<script>
import mui from "@/mui/js/mui.min.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lbtsj: [],
      info: {},
      flag: false,
      flagg:false,
      count:1
      // count:1
      // selected:true
    };
  },
  created() {
    this.geilist();
    this.geiinfo();

  },
  // mounted() {
  //   // console.log(this.$refs.text.value)
  //   this.count=this.$refs.text.value*1
  //   console.log(this.$refs.text.value*1)
  //   console.log(this.count,22)
  // },

  methods: {
   countChanged(){
this.count=this.$refs.text.value*1
   },
    geilist() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        if (res.body.status == 0) {
          //   this.list=res.body.message
          this.lbtsj = res.body.message;
          //  console.log(this.lbtsj)
        }
      });
    },
    geiinfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(res => {
        if (res.body.status == 0) {
          //   this.list=res.body.message
          this.info = res.body.message[0];
          //   console.log(this.info);
          //   console.log(typeof this.info.stock_quantity);
          // mui必须要这种方法加属性,才能让最大值生效
          mui(".mui-numbox")
            .numbox()
            .setOption("max", this.info.stock_quantity);
        }
      });
    },
    // add() {
    //   this.flag = !this.flag;
    // },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 获取小球的 在页面中的位置
      const d1 = this.$refs.bill.getBoundingClientRect();
      // console.log(d1, 1111);

      const d2 = document.getElementById("badge").getBoundingClientRect();
      // console.log(d2, 1111);

      const dx = d2.left - d1.left;
      const dy = d2.top - d1.top;

      el.style.transform = `translate(${dx}px, ${dy}px)`;

      el.style.transition = "all 0.6s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    },
    goDesc(id){
        this.$router.push('/home/gooddesc/'+this.id)
    },
    pl(id){
         this.$router.push('/home/goodscomment/'+this.id)
    },
    gediq(){
      if(!this.flagg){
         this.flag = ! this.flag
         this.flagg=true
          setTimeout(() => {
        this.flagg=false
      }, 1000);
         
      }


      // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
      // 拼接出一个，要保存到 store 中 car 数组里的 商品信息对象
      let goodinfo={
        id:this.id,
        count:this.count,
        selected:true,
        price:this.info.sell_price
      }
// 调用 store 中的 mutations 来将商品加入购物车
// console.log(this.$store,55)
    this.$store.commit("addlist", goodinfo)
    //  this.$store.commit("addToCar", goodsinfo);
    
    }
  }
};
</script>

<style lang="less" scoped>
.zb {
  .zt {
    margin: 5px 3px;
    color: #000;
    del {
      margin-right: 15px;
      font-size: 10px;
    }
    span {
      color: red;
    }
  }
  .gmsl {
    // position: relative;
    margin: 6px 2px;
    .xq {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      bottom: 71px;
      right: 183px;
      z-index: 2;
    }
    .gmsl-span {
      font-size: 16px;
    }
    .mui-numbox {
      margin-left: 8px;
      width: 127px;
      height: 34px;
    }
  }
}
.db {
  p {
    margin: 5px;
  }
}
.mui-card-footer,
.mui-card-header {
  display: block;
  .tw {
    margin: 10px 0px;
  }
}
.googinfo .mui-card{
    overflow: visible;
    display: block;
}
</style>
