<template>
    <div>
      <van-nav-bar title="经营"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>经济学</li>
                 <li>管理学</li>
                 <li>投资理财</li>
                 <li>企业管理</li>
                 <li>市场营销</li>
        
                 <ul class="web_ul2">
                   <li>商务谈判</li>
                   <li>领导学</li>
                   
                 </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/m1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">如何想到又做到：带来持久改变的7...</h3>
               
                <span class="wen_book_a" >媲美《影响力》的行为改变科学，一副清晰的行动路线图</span>
                <p class="wen_book_b">【美】 肖恩·扬</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/m2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">本：重视经济全球化中的东方</h3>
                  <span class="wen_book_a" >全球化时代，看待世界的新视角！</span>
                  <p class="wen_book_b">【德】 贡德·弗兰克</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/m3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">你的第一本保险指南</h3>
                  <span class="wen_book_a" >普通人的实用贴心的保险指南，3秒锁定你的需要的保险</span>
                  <p class="wen_book_b">槽叔</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/m4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">一本书读懂微信公众营销（第2版）</h3>
                  <span class="wen_book_a" >多读书，读好书</span>
                  <p class="wen_book_b">海天电商金融研究中心 杨作梅</p>
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
        name: "Manage"
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
