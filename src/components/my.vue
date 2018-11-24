
<template>
    
<div>
  <van-row>
    <van-col span="8"></van-col>
    <van-col span="8"><img :src="img"  class="img"></van-col>
    <van-col span="8"></van-col>
  </van-row>
    <span>
       <p class="id">用户ID</p>
        <P class="qianming">个性签名</P>
    </span>
       
<van-cell-group class="group">
  <van-cell value="我的账户" icon="balance-pay" is-link />
  <van-cell value="地址管理" icon="location" is-link />
  <van-cell value="关于云书汇" icon="certificate" is-link/>

    <van-cell value="联系客服" icon="certificate" is-link />
      <van-cell value="设置" icon="certificate" is-link />
</van-cell-group>
    <van-tabbar  >
          <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
          <van-tabbar-item icon="chat"><router-link to="/bookShelf">书架</router-link></van-tabbar-item>
          <van-tabbar-item icon="records" ><router-link to="/">图书馆</router-link></van-tabbar-item>
          <van-tabbar-item icon="records"><router-link to="/Digest">书摘</router-link></van-tabbar-item>
          <van-tabbar-item icon="contact" ><router-link to="/my">我的</router-link></van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      img: require("../img/tou.jpg")
    };
  }
};
</script>
<style lang="scss">
.img {
  width: 200px;
  height:200px;
  border-radius: 50%;
  margin: 30px 275px
}
.id {
  font-family: PingFang-SC-Bold;
  font-size: 40px;
  color: #131313;
  font-weight: 500;
  text-align: center;
  margin: 0;
}
.qianming {
  font-family: PingFang-SC-Regular;
  font-size: 24px;
  color:gray;
   text-align: center;
   margin-top: 5px
}
.group {
  /deep/ .van-icon{
    font-size: 30px;
    line-height: 87px;
    margin:0 30px;
  }
  /deep/ .van-cell{
  height: 87px;
  /deep/ .van-cell__value--alone{
    line-height: 87px;
    font-size: 30px;
  }
}
}
 /deep/ .van-cell-group van-hairline--top-bottom{
   margin-left: 30px;
}



</style>

