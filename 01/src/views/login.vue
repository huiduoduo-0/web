<template>
  <div id="login">


    <div id="bgd">
      <canvas
        id='myCanvas'
        :width='width'
        :height='height'
      >
      </canvas>
      
    </div>
   
    <div id="loginBox">
      <h2 class="denglu">登录</h2>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item
          label=""
          prop="userName"
          style="margin-top:40px;"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='用户名'
                v-model="loginForm.userName"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item
          label=""
          prop="userPassword"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='密码'
                v-model="loginForm.userPassword"
                show-password
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item
          label=""
          prop="code"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='验证码'
                v-model="loginForm.code"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item >
          <el-row>
             <img :src="imgUrl"  alt=""  @click="resetImg">
             <a class="genhuan"  @click="resetImg"><el-button type="text" >看不清，点击更换</el-button></a>
          </el-row>
        </el-form-item>


        <el-form-item style="margin-top:55px;">
          <el-button
            type="primary"
            round
            class="submitBtn"
            @click="submitForm('loginForm')"
          >登录</el-button>
        </el-form-item>
        <el-form-item >
          <el-row>
            
             <a @click="register"><el-button type="text" class="logins">没有账号？立即注册</el-button></a>
          </el-row>
        </el-form-item>
        <div class="mima" ><a @click="FindThePassword"><el-button type="text">找回密码</el-button></a></div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        //用户名正则校验
      let nameRule1 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{5,12}$/;
          if(!value){
               callback(new Error('请输入用户名'));
          }else{
             if (regExp.test(value) === false) {
               callback(new Error('请输入5到12尾的数字加英文组合'));
              } else {
              callback();
              }
          }
         
      }
      //密码正则校验
      let nameRule2 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{6,20}$/;
          if (!value) {
             callback(new Error('请输入密码'));
          } else {
            if (regExp.test(value) === false) {
              callback(new Error('请输入6到18尾的数字加英文组合'));
            } else {
              callback();
          }
          }
          
      }
    return {
       width: window.innerWidth,
      height: window.innerHeight,
      loginForm: {
        userName: "",
        userPassword: "",
        code:""
       
      },
       imgUrl: "http://localhost:8090/code/img?time="+new Date(),
    
      loginRules: {
        userName: [{ required: true, validator:nameRule1, trigger: "blur" }],
        userPassword: [{ required: true, validator:nameRule2, trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交登录
    submitForm(loginForm) {
       var userName = this.loginForm.userName;
       var userPassword = this.loginForm.userPassword;
       var code = this.loginForm.code;
       let user = {
         userName: userName,
         userPassword: userPassword,
         code: code
       };
       let vueThis = this;
      this.$refs[loginForm].validate((valid) =>{
           if (valid) {
             this.$axios
            .post("/user/doLogin", user)
            .then(function (response) {
              console.log(response.data);
              if (response.data.code == 200) {
                
                window.location.href = "/index";
              }else{
               
              vueThis.imgUrl = "http://localhost:8090/code/img?time="+new Date();
              alert(response.data.message)
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          } else {
            
           return false;
          }
       })
      
      },
      resetImg(){
        this.imgUrl = "http://localhost:8090/code/img?time="+new Date();
      },
      register(){
        window.location.href = "register";
      },
      FindThePassword(){
        window.location.href = "verification";
      }
     
    },
  mounted() {
  }
};
</script>

<style lang='less' scoped>
#login {
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  background-size: 100%;
  background-image: url("../assets/xx.png");
  position: relative;
  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #loginBox {
    width: 300px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    /deep/ .inps input {
      border: none;
      color: #fff;
      background-color: transparent;
      font-size: 12px;
    }
    .submitBtn {
      background-color: transparent;
      color: #39f;
      width: 200px;
      margin-left: 14%;
    }
    .iconfont {
      color: #fff;
    }
    .mima{
      float:right;
      font-size:0.9em;
    }
    .logins{
        margin-left: 25%;
    }
    .denglu{
      margin-left: 40%;
    }
    .genhuan{
       margin-left: 25%;   
    }
  }
}
</style>