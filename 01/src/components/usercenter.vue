<template>
  <div>
    <el-container class="w">
      <!-- <el-aside width="200px">
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <div>
            <span>{{ myname }}</span
            >|
            <span>{{ myaddress }}</span>
            <el-row>
              <el-button>退出登录</el-button>
            </el-row>
          </div>
        </div>
      </el-aside> -->
      
      <el-main>
        <el-form
          :label-position="labelPosition"
          label-width="70px"
          :model="formLabelAlign"
        >
          <el-form-item label="名称">
            <el-input  v-model="myname"></el-input>
          </el-form-item>
          <el-form-item label="地点">
            <el-input v-model="myaddress"></el-input>
          </el-form-item>
          <el-form-item label="用户权限">
            <el-input v-model="vip"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="selectTel"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="emily"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio v-model="radio" style="margin-left: 30px;" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="username"></el-input>
          </el-form-item>
        </el-form>
        <el-row>
          <el-button @click="usercenterbut" class="usercenterbut" type="primary">保存</el-button>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myname: "小米",
      myaddress: "上海浦东",
      vip: "会员1",
      selectTel: "13663626988",
      labelPosition: "right",
      emily: "123456789@163.com",
      gender: "男",
      radio: "1",
      username: "陈浩南",
    };
  },
  methods:{
    usercenterbut(){
      var myname = this.myname
      var myaddress = this.myaddress
      var vip = this.vip
      var selectTel = this.selectTel
      var emily = this.emily
      var username = this.username
      
      

      this.$axios.get("/user/userCenter").then(function (response) {
         console.log(response);
      }).catch(function(error){
         console.log("error");
      })
      
    }
  }
};
</script>

<style scoped>

.w {
  margin-top: 3%;
  width: 50%;
  height: 120%;
  margin-left: 40%;
  

}
.el-aside {
  background-color: #ec4141;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.usercentlogo {
  width: 20%;
}
.usercentdiv {
  height: 10%;
}
.el-main {
  background-color: #ffffff;
  /* border: 1px solid rgb(196, 196, 196); */
  color: #333;
  line-height: 100px;
}
.el-avatar {
  margin-top: 30px;
  width: 100px;
  height: 100px;
}
.el-input__inner {
    padding-left: 27px;
  float: left;
  width: 20%;
  margin-left: 1.5%;
  margin-top: 5px;
  border: 1px solid #f7f7f8;

}
.el-row{
    height: 10%;
}
.el-form-item__label{
  color: #80808E;
padding: 0 17px 0 0;

}

.usercenterbut{
  width: 8%;
    float: left;
    margin-left: 17%;
    margin-top: 3%;
    border-radius: 10px;
    font-size: 20px;
    padding: 0.3%;
    font-weight: 700;
}
.el-form-item {
    margin-bottom: 26px;
}
.el-input{
  width: 60%;
}

</style>