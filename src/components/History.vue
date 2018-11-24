<template>
    <div>
      <van-nav-bar title="历史"  left-arrow>
      </van-nav-bar>
        <van-row type="flex">
          <van-col span="6">
            <van-tabs >
            <van-tab title="热门">
             <div class="wen_tag">
               <ul class="wen_ul">
                 <li class="all">全部 </li>
                 <li>中国史</li>
                 <li>世界总史</li>
                 <li>欧洲史</li>
                 <li>美洲史</li>
                 <li>非洲史</li>
                  <li>大洋洲史</li>
                  <li>地方志史</li>
                 <li>文化史</li>
                  <li>史学理论</li>
                 <ul class="web_ul2">
                   <li>风俗习惯</li>
                   <li>文化考古</li>
                   <li>普及读物</li>
                 </ul>
               </ul>
             </div>
              <div class="wen_division "></div>
              <div class="wen_main_body">
              <div class="wen_book_img">
                <img src="@/img/h1.png" alt="">
              </div>
              <div class="wen_book_pro">
                <h3 class="wen_book_h3">二十四史谋略通鉴（图说天下·国学...</h3>
               
                <span class="wen_book_a" >54个历史图文故事，展现一个中华谋略的世界！</span>
                <p class="wen_book_b">《图说天下·国学书院系列》 编委会</p>
              </div>
            </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/h2.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">两个世界的战争：2500年来东方与西...</h3>
                  <span class="wen_book_a" >“文明冲突论”历史细节版，深刻揭露当今世界冲突的根源！</span>
                  <p class="wen_book_b">【美】 安东尼·帕戈登</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/h3.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">历史的注脚</h3>
                  <span class="wen_book_a" >**纪实文学作家叶永烈出入红墙，采访当年往事！</span>
                  <p class="wen_book_b">叶永烈</p>
                </div>
              </div>
              <div class="wen_main_body">
                <div class="wen_book_img">
                  <img src="@/img/h4.png" alt="">
                </div>
                <div class="wen_book_pro">
                  <h3 class="wen_book_h3">史学方法导论（跟大师学国学）</h3>
                  <span class="wen_book_a" >**历史学家傅斯年代表作，中华书局出品。</span>
                  <p class="wen_book_b">傅斯年</p>
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
  name: "History"
};
</script>

<style lang="scss" scoped>
.wen_tag {
  width: 750px;
  height: 175px;
  /*background: black;*/
}
.wen_ul {
  display: flex;
  flex-wrap: wrap;
  margin-top: 27px;
  /*margin-left:30px ;*/
  margin-bottom: 20px;
}
.web_ul2 li {
  float: left;
  font-size: 24px;
  color: #353535;
}
.wen_ul li {
  /*display: flex;*/
  margin: 3px;
  font-size: 26px;
  margin-left: 30px;
  margin-bottom: 22px;
}
.wen_division {
  background: #e7dbdc;
  width: 750px;
  height: 10px;
}
.wen_main_body {
  width: 750px;
  /*height: 300px;*/
  /*background: aqua;*/
  display: flex;
  padding: 20px 0 30px 30px;
}
.wen_book_img {
  width: 150px;
  height: 190px;
  background: black;
  margin-right: 20px;
}
.wen_book_pro {
  /*width: 450px;*/
  height: 190px;
  text-align: left;
}
.wen_book_h3 {
  margin-top: 22px;
  font-size: 20px;
}
.wen_book_a {
  margin-top: 30px;
  font-size: 22px;
}
.wen_book_b {
  margin-top: 55px;
}
/deep/ .van-tabs__line {
  background-color: #ffffff;
}
/deep/ .van-nav-bar .van-icon {
  color: black;
  line-height: 88px;
  font-size: 20px;
}
/deep/ .van-nav-bar {
  height: 88px;
}
/deep/ .van-nav-bar__title {
  line-height: 88px;
  font-size: 28px;
  font-weight: bold;
}
/deep/ .van-tab--active {
  color: #33bba7;
  font-size: 24px;
}
/deep/ .wen_book_h3[data-v-7c81126e] {
  font-size: 26px;
}
.all {
  color: #33bba7;
  font-size: 24px;
  margin-left: 30px;
}
</style>
