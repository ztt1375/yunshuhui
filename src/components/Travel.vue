<template>
    <div>
      <van-nav-bar title="旅行"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>旅游随笔</li>
                 <li>国内游</li>
                 <li>国外游</li>
                 <li>自助游</li>
                 <li>户外探险</li>
                 <li>旅游摄影</li>
                 <li> 旅游常识</li>
                 <li>旅游语言</li>
                 <li>旅游理论与务实</li>
                   <ul class="web_ul2">
                 <li>地图</li>
                   </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/t1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">舌尖上的中国（第二季）·心传</h3>
               
                <span class="wen_book_a" >多看版更精彩！网友神吐槽与家传秘制菜谱乱入！</span>
                <p class="wen_book_b">中央电视台记录频道</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/t2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">舌尖上的中国（第二季）·秘境</h3>
                  <span class="wen_book_a" >热播纪录片同名图书，在舌尖上体验文字带来的感动于心跳</span>
                  <p class="wen_book_b">中央电视台记录频道</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/t3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">舌尖上的中国（第二季）·时节</h3>
                  <span class="wen_book_a" >CCTV9官方**授权，在舌尖上体验文字带来的感动于心跳</span>
                  <p class="wen_book_b">（美）格雷戈里·S.保罗</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/t4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">舌尖上的中国（第二季）·三餐</h3>
                  <span class="wen_book_a" >热播纪录片同名图书，在文字版重温当初的感动与心跳</span>
                  <p class="wen_book_b">（英）史蒂芬·霍金</p>
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
        name: "Travel"
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
