<template>
  <div id="register">
    <div id="bgd">
      <canvas
        id='myCanvas'
        :width='width'
        :height='height'
      >
      </canvas>
    </div>
    <div id="loginBox">
      <h2 class="zhuce">注册</h2>
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
                placeholder='用户名，6到12位英文或数字'
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
                placeholder='密码，8到20位英文或数字'
                v-model="loginForm.userPassword"
                 show-password
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        
        <el-form-item
          label=""
          prop="ConfirmPassword"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='确认密码，和密码相同'
                v-model="loginForm.ConfirmPassword"
                 show-password
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item
          label=""
          prop="email"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='邮箱,非必填'
                v-model="loginForm.email"
                
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item
          label=""
          prop="mobile"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='手机号'
                v-model="loginForm.mobile"
                
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
             <img :src="imgUrl"  alt=""  @click="resetImg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
             <a>看不清，点击图片更换</a>
          </el-row>
        </el-form-item>


        <el-form-item style="margin-top:55px;">
          <el-button
            type="primary"
            round
            class="submitBtn"
            @click="submitForm('loginForm')"
          >注册</el-button>
        </el-form-item>
        <el-form-item >
          <el-row>
             <a @click="goLogin" class="goLogin"><el-button type="text">已有账号？立即登录</el-button></a>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        // 设置手机号的验证规则及有效性查询
    const phoneRules = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入联系方式'))
      } else {
        const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
        if (reg.test(value)) {

            var value = value; 
           //去后台查询
      this.$axios
      .get("/user/repeatMobile", {params:{"mobile":value}})
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
         callback()
        }else{
          callback(new Error('该手机号已经注册，请重新填写'))
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });

        } else {
          return callback(new Error('请输入正确的电话'))
        }
      }
    }
    //邮箱验证规格及有效性查询查重
      const checkEmail = (rule, value, callback) => {
      const mailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!value) {
        callback()
      }
      
        if (mailReg.test(value)) {
          //去后台查询
          var value = value; 
          this.$axios
          .get("/user/repeatEmail", {params:{"email":value}})
          .then(function (response) {
            console.log(response);
            if (response.data.code == 200) {
            callback()
            }else{
              callback(new Error('该邮箱已经注册，请重新填写'))
            }
            
          })
          .catch(function (error) {
            console.log(error);
          });
        } else {
          callback(new Error('请输入正确的邮箱格式'))
        }
      
    }
    //确认密码验证
      var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.userPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
       }
    //用户名正则校验
      let nameRule1 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{5,12}$/;
          if(!value){
               callback(new Error('请输入用户名'));
          }else{
             if (regExp.test(value) === false) {
               callback(new Error('请输入5到12尾的数字加英文组合'));
              } else {
                 //用户名有效性校验（查重）
                //去后台查询
                const qs = require('qs')
               var userName = value
                this.$axios
              .get("/user/repeatUsername", {params:{userName:userName,id:0}
              
              })
              .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                callback()
                }else{
                  callback(new Error('该用户名已经注册，请重新填写'))
                }
              })
              .catch(function (error) {
                console.log(error);
              });
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
              callback()
          }
          }
          
      }
      return {
      width: window.innerWidth,
      height: window.innerHeight,
      loginForm: {
        userName: "",
        userPassword: "",
        ConfirmPassword:"",
        code:"",
        email:"",
        mobile:""
      },
      imgUrl: "http://localhost:8090/code/img?time="+new Date(),
      loginRules: {
        userName: [
          { required : true,validator:nameRule1 ,trigger: "blur" }],
        userPassword: [{ required: true, validator:nameRule2, trigger: "blur" } ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        mobile:[{required: true,validator:phoneRules,trigger:'blur'}],
        email:[{validator:checkEmail,trigger:'blur'}],
        ConfirmPassword:[{required : true,validator:validatePass2,trigger: "blur" }]
      }
    }
  },
  methods: {
    //提交登录
    submitForm(loginForm) {
       var userName = this.loginForm.userName;
       var userPassword = this.loginForm.userPassword;
       var code = this.loginForm.code;
       var ConfirmPassword = this.loginForm.ConfirmPassword;
       var mobile = this.loginForm.mobile;
       var email = this.loginForm.email;
       
       let result = {
         userName : userName,
         userPassword : userPassword,
         code : code,
         mobile : mobile,
         email : email,
         ConfirmPassword : ConfirmPassword
       };
      this.$refs[loginForm].validate((valid) =>{
           if (valid) {
            this.$axios
          .post("/user/doRegister", result)
          .then(function (response) {
            console.log(response);
            if (response.data.code == 200) {
              window.location.href = "/";
            }else{
               alert(response.data.message)
               this.imgUrl = "http://localhost:8090/code/img?time="+new Date();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          } else {
            console.log('error submit!!');
            
           return false;
          }
       })

      },
      //更换验证码
      resetImg(){
        this.imgUrl = "http://localhost:8090/code/img?time="+new Date();
      },
      //去登录
      goLogin(){
        window.location.href = "/";
      },

    },

  mounted() {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d");
    }
  
};
</script>

<style lang='less' scoped>
#register {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
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
    height: 640px;
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
      margin-left: 15%;
    }
    .iconfont {
      color: #fff;
    }
    .zhuce {
      margin-left: 40%;   
    }
    .goLogin{
       margin-left: 25%;
    }
  }
}
</style>