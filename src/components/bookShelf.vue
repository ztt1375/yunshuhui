<template>
  <div>
    <van-row class="line" >
    <van-col span="8" >
      <img :src="left" alt="" class="left">
    </van-col>
      <van-col span="8" class="text">书架</van-col>
      <van-col span="8">
        <img :src="right" class="right">
      </van-col>
    </van-row>

<van-row class="top" type="flex" justify="space-around" >
  <van-col span="6" class="xyd">
    <img :src="a" >
    <van-checkbox v-model="checked" class="check"></van-checkbox>
  </van-col>
  <van-col span="6" class="xyd">
    <img :src="b" alt="">
    <van-checkbox v-model="checked2" class="check"></van-checkbox>
  </van-col>
  <van-col span="6" class="xyd">
    <img :src="c" alt="">
    <van-checkbox v-model="checked3" class="check"></van-checkbox>
  </van-col>
</van-row>

    <van-row class="bottom">
      <van-col  span="12" >
        <img :src="load" >下载</van-col>
      <van-col  span="12" >
        <img :src="dele" >删除</van-col>
    </van-row>
    <div class="bottom">
      <div>
        <img :src="load" alt="">下载
      </div>
      <div>
        <img :src="dele" alt="">删除
      </div>
    </div>

  </div>

</template>

<script>

    export default {
        name: "bookShelf",
      data(){
          return{
            checked: false,
            checked2: false,
            checked3: false,
            left:require('../img/heisesousuo.png'),
            right:require('../img/shujia.png'),
            a:require('../img/1.png'),
            b:require('../img/2.png'),
            c:require('../img/3.png'),
            load:require('../img/xiazai.png'),
            dele:require('../img/delete.png')

          }

      }

    }
</script>

<style lang="scss" scoped>

  .bottom{
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #F4F4F4;
    div{
      height: 60px;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        margin-right: 5px;
      }
    }
  }
  .line{
    border-bottom:1px solid #F4F4F4;
    width: 100%;
  }
.left{
  float: left;
  margin: 30px  30px;
}
.right{
  float: right;
  margin: 30px  30px ;
}
  .top{
    padding-top:30px;
  }
  .text{
    font-size: 25px;
    color: #121212;
    text-align: center;
    margin-top: 30px;

  }
  .xyd{
    position: relative;
  }
  .check{
    position:absolute;
    top:174px;
    left: 136px;
    /deep/ .van-checkbox__icon .van-icon{
      background-color: white;

    }
    /deep/ .van-checkbox__icon--checked .van-icon{
      /*color: white;*/
      border-color:gray;
      background-color: #3AA5A6;
      text-align: center;
    }
  /deep/ .van-checkbox__icon .van-icon {
    width: 25px;
    height:25px;
  }

  .bottom{
    margin-bottom: 20px;
  }

  }

</style>
