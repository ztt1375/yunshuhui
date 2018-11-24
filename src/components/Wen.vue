<template>
    <div>
      <van-nav-bar title="文学"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>文学理论</li>
                 <li>文学评论与鉴赏</li>
                 <li>文学史</li>
                 <li>名家作品及欣赏</li>
                 <li>作品集</li>
                 <li>散文随笔</li>
                 <li> 影视文学</li>
              
                 <ul class="web_ul2">
                   <li>诗词歌曲</li>
                   <li>纪实文学</li>
                   <li>戏剧与曲艺</li>
                   <li> 青春文学</li>
                   <li>民间文学</li>
                 </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/w1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">人间词话（插画珍藏本）</h3>
               
                <span class="wen_book_a" >岳麓书社插画珍藏本，有境界则自成高格！</span>
                <p class="wen_book_b">(清)王国维</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/w2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">鲁迅全集（全18卷）</h3>
                  <span class="wen_book_a" >增补不足，修正错讹，人民文学全新修订版！</span>
                  <p class="wen_book_b">鲁迅</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/w3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">西厢记论证（增订本）</h3>
                  <span class="wen_book_a" >东北师大教授张人和，为你讲解《西厢记》！</span>
                  <p class="wen_book_b">张人和</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/w4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">诗境浅说</h3>
                  <span class="wen_book_a" >俞平伯之父为儿孙学古诗词而选编的启蒙读物</span>
                  <p class="wen_book_b">俞陛云</p>
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
        name: "Wen"
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
