<template>
  <div class="Recharge">
    <div class="mybecharge">
      <div class="user">
        <div class="userleft">
          <div class="demo-type">
            <div class="userhead">
              <el-avatar
                class="userimg"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </div>
            <span class="myuser">充值账户：{{ myuser }}</span>
          </div>
        </div>

        <div class="userright">
          <img src="../../public/qianlogo.png" alt="" class="userqian" />
          <span class="balancetext">当前余额：{{ balance }}</span>
        </div>
      </div>

      <div class="type">
        <el-radio-group v-model="radio1">
          <el-radio-button label="会员1"></el-radio-button>
          <el-radio-button label="会员2"></el-radio-button>
          <el-radio-button label="会员3"></el-radio-button>
          <el-radio-button label="会员4"></el-radio-button>
          <el-radio-button label="其他金额"></el-radio-button>
        </el-radio-group>
      </div>

      <div class="method">
        <span class="methodtext">充值方式：</span>

        <el-radio v-model="radio" label="1" class="zhufu1">
           <el-avatar
                class="weixinimg"
                src="https://i03piccdn.sogoucdn.com/c9dce2672bb0e832"
              ></el-avatar>
          <span class="weixin"> 微信支付 </span>
        </el-radio>
        <el-radio v-model="radio" label="2" class="zhufu2">
           <el-avatar
                class="zhifubaoimg"
                src="https://i04piccdn.sogoucdn.com/3ad6663e8757d437"
              ></el-avatar>
          <span class="zhifubao"> 支付宝支付 </span>
        </el-radio>
      </div>

      

      <div class="methodbut">
        <el-row>
          <el-button @click="methodbutton" class="methodbutton" type="primary"
            >立刻充值</el-button
          >
          <p class="methodtext"
            >温馨提示：充值如出现问题，请及时联系客服
          </p>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myuser: "小小米",
      balance: "100",
      radio1: "上海",
      radio2: "上海",
      radio3: "上海",
      radio4: "上海",
      radio: "1",
    };
  },
  methods: {
    methodbutton() {
      // this.$axios.post("", result).then(function (response) {
      //    alert("result")
      // }).catch(function(error){
      //    console.log("error");
      // })
    },
  },
};
</script>

<style  scoped>
.Recharge {
  width: 99%;
  height: 100%;
  margin-left: 3px;
}
.mybecharge {
  width: 88%;
  height: 700px;
  margin-left: 12%;
}
.headname {
  display: flex;
}
.qianlogo {
  width: 35px;
  height: 35px;
  margin: 30px;
  display: inline-block;
}
.userimg {
  width: 70px;
  height: 70px;
}
.Rechargetext {
  font-weight: 700;
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
  display: inline-block;
}
.Rechargetdetails {
  margin: 0;
  margin-bottom: 5px;
}
.user {
  width: 93%;
  height: 16%;
  margin: 3%;
}
.userleft {
  margin: 0;
  margin-left: 10%;
  display: inline-block;
  color: #707080;
  font-size: 18px;
  font-weight: 700;
}
.demo-type {
  display: flex;
}
.userhead {
  display: inline-block;
  margin-top: 20%;
  margin-left: 10px;
}
.myuser {
  margin-top: 35%;
  margin-left: 10px;
}
.userright {
  display: inline-block;
  float: right;
  display: flex;
  margin-right: 10%;
  margin-top: 1%;
}
.userqian {
  width: 12%;
  margin-top: 15%;
}
.balancetext {
  margin-top: 18%;
  margin-left: 5%;
  color: #707080;
  font-size: 18px;
  font-weight: 700;
}
.type {
  margin-top: 5%;
  margin-left: 8%;
}
.el-radio-group{
  width: 50%;
}
.el-radio-button {
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-left: 5%;
}
.el-radio-button__inner {
  border-radius: 12px;
}
.el-radio-button:first-child .el-radio-button__inner {
  border-radius: 12px;
}
.el-radio-button:last-child .el-radio-button__inner {
  border-radius: 12px;
}

.method {
  height: 10%;
  margin-top: 40px;
  margin-left: 9%;
  position: relative;
}
.methodtext {
  margin-left: 30px;
  color: #707080;
  font-size: 18px;
  margin-bottom: 20%;
}
.methodbut {
  width: 100%;

  margin-top: 60px;
  text-align: center;
}
.methodbutton {
  width: 150px;
  margin: 35px;
  font-size: 23px;
}
.weixin {
  width: 12%;
  margin-bottom: 15px;
  margin-left: 50px;

}
.zhifubao {
  width: 12%;
  margin-bottom: 15px;
  margin-left: 60px;

}
.weixinimg{
   width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 45px;
  position: absolute;
  top: -10px;



}
.zhifubaoimg{
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 45px;
   position: absolute;
    top: -10px;


}
.zhufu1{
  margin-right: 5%;
}
</style>