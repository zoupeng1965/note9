<template>
    <div class="pinglun">
        <h2>发表评论</h2>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入要BBB的内容" maxlength="120"></textarea>
         <mt-button type="primary" size="large" >发表评论</mt-button>
         <div class="hezi">
             <div class="tb">
                 第一楼游湖放水电费第三方水果发的广泛地
             </div>
             <div class="db">
                 娃哈哈
             </div>
         </div>
         <mt-button type="danger" size="large" plain >加载更多</mt-button>

    </div>
</template>

<style lang="less" scope>
    hr{
        margin-top: 3px;
        margin-bottom:3px;
    }
    .pinglun{
         h2 {
    font-size: 18px;
    margin: 5px;
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