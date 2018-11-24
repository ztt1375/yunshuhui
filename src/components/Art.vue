<template>
    <div>
      <van-nav-bar title="艺术"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>艺术理论与评价</li>
                 <li>艺术家</li>
                 <li>世界各国艺术概况</li>
                 <li>鉴赏收藏</li>
                 <li>绘画</li>
                 <li>书法</li>
                 <li> 设计</li>
                 <li>影视</li>
                 <li>动画</li>
                 <li>戏剧</li>
                 <li>摄影</li>
                 <ul class="web_ul2">
                   <li>雕塑</li>
                   <li>建筑</li>
                   <li>音乐</li>
                   <li> 舞蹈</li>
                   <li>工艺美术</li>
                 </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/y1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">阳羡茗壶系·古董十三说：中华生活...</h3>
               
                <span class="wen_book_a" >中华书局“中华生活经典”丛书，让米品尚古代中国人的优雅生活</span>
                <p class="wen_book_b">（明）周高起（明）董其昌</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/y2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">赵无极中国讲学笔录</h3>
                  <span class="wen_book_a" >画家赵无极1985年绘画讲习班教学笔记！</span>
                  <p class="wen_book_b">孙建平</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/y3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">瓶花谱 瓶史：中华生活经典</h3>
                  <span class="wen_book_a" >中华书局出品，明代著作二本，奠定中国“花道”艺术基础</span>
                  <p class="wen_book_b">（明）张谦德（明）袁宏道</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/y4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">装潢志：中华生活经典</h3>
                  <span class="wen_book_a" >中华书局“中华生活经典”丛书，**部全面系统的总结装裱经验的专著</span>
                  <p class="wen_book_b">（明）周嘉胄（明）尚连霞</p>
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
        name: "Art"
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
