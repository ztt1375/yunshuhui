<template>
    
<div>
<h2>书摘</h2>
    <img :src="img" >
    <div>
        <span class="left"><h2>如果你自己不做出一点努力的样子，人家想拉你一把，都不知道你的手在哪里。</h2></span>
        <p class="right"><span>————刘同 《向着光亮那方》</span></p>
    </div>

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
        name:"Digest",
            data() {
                return {
                img:require('../img/shu.jpg')
            }
            }
}
</script>
<style>
img{
   width:750px;
    height: 400px;
}
h2{
    text-align: center;
}
.left{
    margin: 30px;
    line-height: 40px;
    float: left;
    text-align: left;
}
.right{
  float: right;
    margin: 30px;
}

</style>
