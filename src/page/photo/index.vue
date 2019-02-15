<template>
  <div class="pgoto">
    <h2>我是pgoto</h2>

    <!-- 顶部列表 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            @click="getlist(item.id)"
            :class="['mui-control-item', {'mui-active':item.id==0}]"
            v-for="item in photo"
            :key="item.id"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 中部图片 -->
    <div>
      <ul class="ul">
        <router-link tag="li" :to="'/home/photoInfo/'+item.id" v-for="item in list" :key="item.id" class="lan">
          <img v-lazy="item.img_url">
          <div class="tm">
            <h3 class="tm-title">{{item.title}}</h3>
            <div class="tm-zw">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import mui from "@/mui/js/mui.min.js";

export default {
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },

  created() {
    this.gettop();
    this.getlist(0);
  },
  data() {
    return {
      photo: [],
      list: []
    };
  },

  methods: {
    gettop() {
      this.$http.get("api/getimgcategory").then(res => {
        if (res.body.status == 0) {
          res.body.message.unshift({ title: "全部", id: 0 });
          this.photo = res.body.message;
        }
      });
    },
    getlist(id) {
      this.$http.get("api/getimages/" + id).then(res => {
        if (res.body.status == 0) {
          this.list = res.body.message;
          console.log(this.list);
        }
      });
    }
  }
};
</script>



<style lang="less" scoped>
ul{
    padding: 10px;
}


a {
  text-decoration: none;
}
* {
  touch-action: pan-y;
}
.pgoto {
  .lan {
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    background-color: #ccc;
    img {
    //   display: block;
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .tm {
        color: white;
        text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .tm-title{
           font-size: 14px;
      }
      .tm-zw{
           font-size: 13px;
      }
    }
  }
}
</style>
