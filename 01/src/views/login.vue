<template>
  <div id="login">



      
     
   
    <div id="loginBox" style="box-shadow:7px -3px 40px rgb(16 16 16 / 16%);">
     
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="20px"
      >
        <el-form-item
          label=""
          prop="userName"
          style="margin-top:0px;"
          
        >
          <el-row > 
           
            <el-col :span='22'>
              <el-input
              prefix-icon="iconfont icon-yonghu"
                class="inps"
                placeholder='请输入用户名'
                v-model="loginForm.userName"
                @blur="users('userName')"
              ></el-input>
              
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item
          label=""
          prop="userPassword"
          
        >
          <el-row >
            
            <el-col :span='22'>
              <el-input
                class="inps"
                on-icon-click="el-icon-lock"
                prefix-icon="iconfont icon-mima"
                placeholder='请输入密码'
                v-model="loginForm.userPassword"
                 @blur="users('userPassword')"
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
           
            <el-col :span='16'>
              <el-input
                class="inps"
                placeholder='请输入验证码'
                v-model="loginForm.code"
                prefix-icon="iconfont icon-T"
                @blur="users('code')"
              ></el-input>
               <div class="message" v-if="flag"><span style="color:#dc2406">{{message}}</span></div>
            </el-col>
            <el-col :span='5'>
             <img :src="imgUrl"  alt=""   @click="resetImg" style="margin:6.2px 0px 0px 2px;box-shadow: -1px 2px 3px rgb(38 10 17 / 54%);border-radius: 2px;">
          </el-col>
          
           </el-row>
        
         
         
        </el-form-item>

        <el-form-item >
        <el-row>
          <el-button
            type="primary"
            class="submitBtn"
            @click="submitForm('loginForm')"
            
          >登录</el-button>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-row>
            
             <a @click="register"><el-button type="text"  class="logins">免费注册</el-button></a>
             <a @click="FindThePassword"><el-button type="text" class="mima">忘记密码</el-button></a>
          </el-row>
        </el-form-item>
        
      </el-form>
      
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  
  data() {
        //用户名正则校验
      let nameRule1 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{5,12}$/;
          if(!value){
               callback(new Error("  "));
          }else{
             if (regExp.test(value) === false) {
               callback(new Error("  "));
              } else {
              callback();
              }
          }
      }
      //密码正则校验
      let nameRule2 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{6,20}$/;
          if (!value) {
             callback(new Error("  "));
          } else {
            if (regExp.test(value) === false) {
              callback(new Error("  "));
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
       flag : false,
       message : "",
      loginRules: {
        userName: [{ required: true, validator:nameRule1, trigger: "blur" }],
        userPassword: [{ required: true, validator:nameRule2, trigger: "blur" }],
        code: [{ required: true,message:"   ",  trigger: "blur" }]
      }
    };
  },
  methods: {
     ...mapMutations(['changeLogin']),
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
       if(!userName && userName === ""){
               this.flag = true;
               this.message = "账号不能为空";
               
       }else if(!userPassword && userPassword === ""){
               this.flag = true;
               this.message = "密码不能为空";
       }else if(!code && code === ""){
               this.flag = true;
               this.message = "验证码不能为空";
       }
       let vueThis = this;
      this.$refs[loginForm].validate((valid) =>{
           if (valid) {
            this.$axios
            .post("/user/doLogin", user)
            .then(function (response) {
              console.log(response);
              if (response.data.code == 200) {
                var userToken = response.data.date.token;
                vueThis.changeLogin({ Authorization : userToken }); 
                window.location.href = "/goods";
              }else{
              vueThis.imgUrl = "http://localhost:8090/code/img?time="+new Date();
               vueThis.flag = true;
               vueThis.message = response.data.message;
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
      users(status){
        if(status === "userName"){
          if(!this.loginForm.userName && this.loginForm.userName == ""){
               this.flag = true;
               this.message = "账号不能为空";
          }else{
             let regExp = /^[A-Za-z0-9]{5,12}$/;
            if(regExp.test(this.loginForm.userName) === false){
               this.flag = true;
               this.message = "请输入5到12尾的数字加英文组合";
            }
          }
        }
        if(status === "userPassword"){
          if(!this.loginForm.userPassword && this.loginForm.userPassword == ""){
            this.flag = true;
            this.message = "密码不能为空";
          }else{
             let regExp = /^[A-Za-z0-9]{6,20}$/;
             if(regExp.test(this.loginForm.userPassword) === false){
               this.flag = true;
               this.message = "请输入6到18尾的数字加英文组合";
             }
          }
        }
        if(status === "code"){
          if(!this.loginForm.code && this.loginForm.code == ""){
            this.flag = true;
            this.message = "验证码不能为空";
          }
        }
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
@import url("//at.alicdn.com/t/font_2388775_aj5zgfsigy.css");
#login {
  
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #fffefe;
  color: rgb(255, 255, 255,1.5);
  font-family: "Microsoft YaHei";
  background-size: 100%;
  height: 100%;
  background-image: url("../assets/login.png");
  position: relative;
  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #loginBox {
    width: 350px;
    height: 220px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23%;
    padding: 30px 10px 10px 10px;
    
    background: rgba(255, 255, 255, 0.425);
    border-radius: 4px;
    .submitBtn { 
      width: 300px;
      opacity: 1;
      
    }
    .iconfont {
      color: #fff;
    }

    .logins{
      font-size:0.4em;
    }
    .mima{
      margin-left: 28em;
      font-size:0.5em;
    }
    .genhuan{
       margin-left: 25%;   
    }
    /deep/ .el-input__inner{
    font-size: 2px;
  	  height: 30px;     
  } 
  /deep/ .el-input__icon {
    padding-right: 14px;
    padding-left: 15px;
    color:#1b1919bd;
  }
  /deep/.el-input--prefix .el-input__inner {
    padding-left: 56px;
    font-size: 2px;
  }
  /deep/.el-form-item {
    margin-bottom: 2px;
  }
  .message{
    margin-top: -15px;
    margin-bottom: -14px;
    font-size: 5px;
  }

  }
}
</style>