<template>
    <div>
      <van-nav-bar title="杂志"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>新闻人物</li>
                 <li>商业财经</li>
                 <li>时尚生活</li>
                 <li>教育科技</li>
                 <li>娱乐休闲</li>
                 <li>文学艺术</li>
                 <li> 美食旅游</li>
                 <li>小说</li>
                 <li>出版精品</li>
                 <li>头条</li>
                 <ul class="web_ul2">
                   <li>情感</li>
                   <li>脱口秀</li>
                   <li>财经</li>
                   <li> 儿童</li>
                   <li>相声小平</li>
                 </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/z1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">瑞丽·伊人风尚精选</h3>
               
                <span class="wen_book_a" >暂无简介</span>
                <p class="wen_book_b">最新：2018年10号</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/z2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">心探索</h3>
                  <span class="wen_book_a" >心探索，创造内外皆美好的生活！塔罗牌益趣游戏，洞见内心的自己！</span>
                  <p class="wen_book_b">最新：2018年1月</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/z3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">汽车杂志</h3>
                  <span class="wen_book_a" >《汽车杂志》是中国最早的汽车消费类标志，最权威的汽车指南。</span>
                  <p class="wen_book_b">最新：2018年4月</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/z4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">爱摄影</h3>
                  <span class="wen_book_a" >《爱摄影》摄影爱好者的圣经，轻松跨入艺术创作之门！</span>
                  <p class="wen_book_b">最新：第四季</p>
                </div>
              </div>

            </van-tab>
            <van-tab title="最新">

            </van-tab>
          </van-tabs>
          </van-col>
        </van-row>

    
    </div>
</template>

<script>
    export default {
        name: "Magazine"
    }
</script>

<style lang="scss" scoped>
.wen_tag{
  width: 750px;
  height: 175px;
  /*background: black;*/
}
  .wen_ul{
    display: flex;
    flex-wrap: wrap;
    margin-top: 27px ;
    /*margin-left:30px ;*/
    margin-bottom: 20px;
  }
  .web_ul2 li{
    float: left;
    font-size: 24px;
    color: #353535;
  }
  .wen_ul li{
    /*display: flex;*/
    margin: 3px;
    font-size: 26px;
    margin-left: 30px;
    margin-bottom: 22px;
  }
  .wen_division{
    background: #e7dbdc;
    width: 750px;
    height: 10px;
  }
  .wen_main_body{
    width: 750px;
    /*height: 300px;*/
    /*background: aqua;*/
    display: flex;
    padding: 20px 0 30px 30px;
  }
.wen_book_img{
  width: 150px;
  height: 190px;
  background: black;
  margin-right: 20px;
}
.wen_book_pro{
  /*width: 450px;*/
  height: 190px;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  text-align: left
}
.wen_book_h3{
  margin-top: 22px;
  font-size: 20px;
}
.wen_book_a{
  margin-top: 30px;
  font-size: 22px;
}
.wen_book_b{
  margin-top: 55px;
}
/deep/ .van-tabs__line{
  background-color: #ffffff;
}
/deep/ .van-nav-bar .van-icon{
  color: black;
  line-height: 88px;
  font-size: 20px;
}
/deep/ .van-nav-bar{
  height: 88px;
}
/deep/ .van-nav-bar__title{
  line-height: 88px;
  font-size: 28px;
  font-weight: bold;
}
/deep/ .van-tab--active{
  color: #33bba7;
  font-size: 24px;
}
/deep/ .wen_book_h3[data-v-7c81126e]{
  font-size: 26px;
}
.all{
  color: #33bba7;
  font-size: 24px;
  margin-left: 30px;

}
</style>
