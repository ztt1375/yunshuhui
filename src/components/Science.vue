<template>
    <div>
      <van-nav-bar title="科学"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>科普读物</li>
                 <li>自然科学总论</li>
                 <li>数学</li>
                 <li>物理学</li>
                 <li>化学</li>
                 <li>天文学</li>
                 <li> 地球科学</li>
                 <li>地理学</li>
                 <li>生物科学</li>
                 <li>统计学</li>
                 <ul class="web_ul2">
                   <li>航空与航天</li>
                   <li>环境科学</li>
                   <li>安全科学</li>
                   <li> 丛书与文集</li>
                   <li>科技史</li>
                 </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/k1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">大爆炸简史(新版 第一推动丛书·宇宙...)</h3>
               
                <span class="wen_book_a" >如此空前的一个宇宙事件，西蒙·辛格完成得很生动！</span>
                <p class="wen_book_b">(英)西蒙·辛格</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/k2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">生机无限：医学2.0</h3>
                  <span class="wen_book_a" >《科学美国人》杂志精选，深度解读医学新知！</span>
                  <p class="wen_book_b">《环球科学》杂志社 外研社科学出版工作室</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/k3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">普林斯顿恐龙大图鉴</h3>
                  <span class="wen_book_a" >献给恐龙爱好者的一场视觉盛宴！</span>
                  <p class="wen_book_b">(清)王国维</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/k4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">人间词话 (插画珍藏本)</h3>
                  <span class="wen_book_a" >岳麓书社插画珍藏本，有境界则自成高格！</span>
                  <p class="wen_book_b">(清)王国维</p>
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
        name: "Science"
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
