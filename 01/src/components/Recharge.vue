<template>
  <div class="Recharge">
    <div class="mybecharge">
      <div class="head">
        <div class="headname">
          <img src="../../public/qianlogo.png" alt="" class="qianlogo" />
          <span class="Rechargetext">充值中心</span>
        </div>
      </div>

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

        <el-radio v-model="radio" label="1">微信支付</el-radio>
        <el-radio v-model="radio" label="2">支付宝支付</el-radio>
      </div>

      <div class="method">
        <span class="balancetext">当前余额：{{ balance }}</span>
        <span></span>
      </div>

      <div class="methodbut">
        <el-row>
          <el-button @click="methodbutton" class="methodbutton" type="primary"
            >立刻充值</el-button
          >
          <span class="methodtext"
            >温馨提示：充值如出现问题，请及时联系客服</span
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myuser: "小米",
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

<style>
.Recharge {
  width: 99%;
  height: 100%;
  margin-left: 3px;
}
.mybecharge {
  width: 88%;
  height: 700px;
  margin-left: 12%;
  border: 1px solid #ccc;
}
.head {
  width: 100%;
  height: 15%;
  background-color: #26b0d5;
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
  border: 1px solid #ccc;
  background-color: #e0f3f9;
}
.userleft {
  display: inline-block;
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
  margin-top: 25%;
  margin-left: 10px;
}
.userright {
  display: inline-block;
  float: right;
  display: flex;
}
.userqian {
  width: 8%;
  margin-top: 15%;
}
.balancetext {
  margin-top: 15%;
  margin-left: 8px;
}
.type {
  margin-left: 10%;
}
.el-radio-button {
  margin-left: 10px;
  border: 1px solid #ccc;
}
.method {
  margin-top: 60px;
}
.methodtext {
  margin-left: 30px;
  margin-top: 20px;
}
.balancetext {
  margin-left: 30px;
}
.methodbut {
  width: 100%;
  border-top: 1px solid #ccc;
  margin-top: 60px;
}
.methodbutton {
  margin: 35px;
}
.methodtext {
  font-size: 10px;
  color: #ccc;
}
</style>