<template>
  <div id="box">
          <van-nav-bar class="return" left-arrow color="black"/>
          <div class="zhuce">
            <van-row>
              <van-col class="register" span="8">密码登录</van-col>
            </van-row>
            <!-- 请输入用户名和密码 -->
            <van-cell-group>
              <van-field v-model="username" class="user" placeholder="请输入用户名" />
              <van-field v-model="password" type="password" class="psw" placeholder="密码长度6~20位" />
              <van-col span="8">密码登录</van-col>
            </van-cell-group>
            <van-button type="default" class="btn" size="large">登录</van-button>
          </div>
  </div>
</template>

<script>

  export default {
    name:'register', 
    props:[''],
    data () {
      return {
              //   表单验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: "6", max: "10", message: "用户名必须在6~16位之间",trigger: "blur"}
        ],
        // 验证码
        sms:[
          { required:true,message:"请输入验证码",trigger:'blur'}
        ],
        // 密码的验证规则
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          // 自定义规则
          { validator: validatorPass1, trigger: "blur" }
        ],
        // 第二次输入的密码
        checkPassWord: [
          { required: true, message: "请确认输入密码", trigger: "blur" },
          // 自定义规则
          { validator: validatorPass2, trigger: "blur" }
        ]
      }
        
      };
    },

  }

</script>
<style lang='scss' scoped>
#box{
  /deep/ .van-nav-bar .van-icon{
    color: #121212;
    font-size: 24px;
    font-weight: bold;
  }
  /deep/ .van-hairline--bottom::after{
    border: none;
  }
}
.return{
  margin-left: 46px;
}
.zhuce{
  width: 576px;
  margin: 0 auto;
  /deep/ .van-button--default{
    background-color: #121212;
  };
  /deep/ .van-button--primary{
    width:128px;
    height:40px;
    border:2px solid #5BA1BF;
    color:#63A6C2;
    background-color: #ffffff;
    border-radius:8px;
  }
}
.register{
  margin-top:140px; 
  font-size:44px;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(40,40,40,1);
  line-height:59px;
}
.user{
  margin-top: 114px;
  height: 87px;
  line-height: 87px;
  ::-webkit-input-placeholder{
    font-size: 26px;
  }
}
.yan{
  height: 87px;
  line-height: 87px;
  ::-webkit-input-placeholder{
    font-size: 26px;
  }
}
.ma{
  font-size: 20px;
}
.psw{
  height: 93px;
  line-height: 93px;
  ::-webkit-input-placeholder{
    font-size: 26px;
  }
}
.btn{

  margin-top: 62px;
  font-size: 30px;
  color:#FFFFFF;
  width:576px;
  height:82px;
  background:rgba(235,235,235,1);
  border-radius:8px;
}
.dian{
  margin-top: 27px;
  font-size: 24px;

}
// 用户协议
.xiyi{
  color:#5BA1BF;
  margin-top: 30px;
}
</style>