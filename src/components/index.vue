<template>
  <div id="box">
    <div class="box2">
      <van-search class="search" placeholder="请输入搜索关键词"  />
      <!-- 顶部图片 -->
      <div class="index-pic">
        <!-- 这是作者图片 -->
        <router-link to="/author">
        <div class="wen">
            <p class="p1">—　作者　—</p>
            <p class="p2">Article</p>
        </div>
        </router-link>
      </div>
      <!-- 这是首页下面的两个小图片 -->
      <div class="box-pic">
        <router-link to="/Wen">
          <div class="box-left">
              <p class="p1">—　文学　—</p>
              <p class="p2">Literature</p>
          </div>
        </router-link>
        <router-link to="/Science">
          <div class="box-right">
              <p class="p1">—　科学　—</p>
              <p class="p2">Sciencu</p>
          </div>
        </router-link>
      </div>
            <div class="box-pic">
              <router-link to="/Art">
          <div class="box-art">
              <p class="p1">—　艺术　—</p>
              <p class="p2">Literature</p>
          </div>
          </router-link>

          <router-link to="/Magazine">
          <div class="box-megazine">
              <p class="p1">—　杂志　—</p>
              <p class="p2">Sciencu</p>
          </div>
          </router-link>
      </div>
            <div class="box-pic">
              <router-link to="/Live">
          <div class="box-live">
              <p class="p1">—　生活　—</p>
              <p class="p2">Literature</p>
          </div>
          </router-link>
          <router-link to="/Travel">
          <div class="box-travel">
              <p class="p1">—　旅行　—</p>
              <p class="p2">Sciencu</p>
          </div>
          </router-link>
      </div>
            <div class="box-pic">
              <router-link to="/Manage">
          <div class="box-manage">
              <p class="p1">—　经管　—</p>
              <p class="p2">Literature</p>
          </div>
          </router-link>
          <router-link to="/History">
          <div class="box-history">
              <p class="p1">—　历史　—</p>
              <p class="p2">Sciencu</p>
          </div>
          </router-link>
      </div>
      <!-- 底部 -->
      <van-tabbar v-model="active" class="top">
          <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
          <van-tabbar-item icon="chat"><router-link to="/bookShelf">书架</router-link></van-tabbar-item>
          <van-tabbar-item icon="records" ><router-link to="/">图书馆</router-link></van-tabbar-item>
          <van-tabbar-item icon="records"><router-link to="/Digest">书摘</router-link></van-tabbar-item>
          <van-tabbar-item icon="contact" ><router-link to="/my">我的</router-link></van-tabbar-item>
      </van-tabbar>
      </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style lang='scss' scoped>
#box {
  width: 750px;
  overflow: hidden;
//   /deep/ .van-field__control{
//   background: #f2f2f2;
// }
}
.box2{
  width: 700px;
  margin-left: 25px;
}
.index-pic {
  width: 700px;
  height: 320px;
  margin-top: 30px;
  background-image: url("../img/pic-01.jpg");
  background-position: center center;
  background-size: 700px;
  overflow: hidden;
}
p {
  font-size: 28px;
  color: #ffffff;
  margin-top: 96px;
  font-family: "平方中等犀利";
}
.p2 {
  margin: 0;
}
#box .box-pic {
  width: 750px;
  height: 280px;
}
#box .box-pic .box-left {
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-02.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
}
#box .box-pic .box-art{
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-04.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
}
#box .box-pic .box-megazine{
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-05.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
  margin-left: 20px;
}
#box .box-pic .box-live{
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-06.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
}
#box .box-pic .box-travel{
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-07.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
  margin-left: 20px;
}
#box .box-pic .box-manage{
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-08.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
}
#box .box-pic .box-right {
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-09.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
  margin-left: 20px;
}
#box .box-pic .box-history {
  width: 340px;
  height: 280px;
  background-image: url("../img/pic-10.jpg");
  background-position: center center;
  margin-top: 20px;
  float: left;
  text-align: center;
  margin-left: 20px;
}
 .van-tabbar{
    width: 750px;
}
.wen{
  text-align: center;
}
</style>