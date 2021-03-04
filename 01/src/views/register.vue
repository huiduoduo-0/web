<template>
  <div id="register">
   
    <div id="loginBox">
      
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item
          label=""
          prop="userName"
          style=""
        >
          <el-row>
           
            <el-col :span='22'>
              <el-input
               @blur="users('userName')"
               class="inps"
               placeholder='用户名，6到12位英文或数字'
               v-model="loginForm.userName"
               prefix-icon="iconfont icon-yonghu"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item
          label=""
          prop="userPassword"
        >
          <el-row>
            
            <el-col :span='22'>
              <el-input
                 @blur="users('userPassword')"
                class="inps"
                placeholder='密码，8到20位英文或数字'
                 v-model="loginForm.userPassword"
                prefix-icon="iconfont icon-mima"
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
            
            <el-col :span='22'>
              <el-input
               @blur="usersConfirmPassword()"
                class="inps"
                placeholder='确认密码，和密码相同'
                v-model="loginForm.ConfirmPassword"
                prefix-icon="iconfont icon-mima"
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
            
            <el-col :span='22'>
              <el-input
               @blur="usersEmail()"
                class="inps"
                placeholder='邮箱,非必填'
                v-model="loginForm.email"
                prefix-icon="iconfont icon-youxiang"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item
          label=""
          prop="mobile"
        >
          <el-row>
            
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='手机号'
                @blur="usersMobile('12')"
                v-model="loginForm.mobile"
                prefix-icon="iconfont icon-shouji"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item
          label=""
          prop="code"
        >
          <el-row>
            
            <el-col :span='15'>
              <el-input
                class="inps"
                placeholder='验证码'
                @blur="userCode('code')"
                v-model="loginForm.code"
                prefix-icon="iconfont icon-T"
              ></el-input>
              <div class="message" v-if="flag"><span style="color:#dc2406">{{message}}</span></div>
            </el-col>
            <el-col :span='6'>
             <img :src="imgUrl"  alt=""  @click="resetImg" style="margin:10.2px 0px -5px 18px;box-shadow: -1px 2px 3px rgb(38 10 17 / 54%);border-radius: 2px;">
          </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-left:35px;">
          <el-button
            type="primary"
            
            class="submitBtn"
            @click="submitForm('loginForm')"
          >注册</el-button>
        </el-form-item>

             <a @click="goLogin" class="goLogin"><el-button type="text">已有账号？立即登录</el-button></a>
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
        callback(new Error('  '))
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
          callback(new Error('  '))
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });

        } else {
          return callback(new Error('  '))
        }
      }
    }
    //邮箱验证规格及有效性查询查重
      const checkEmail = (rule, value, callback) => {
      const mailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!value) {
        callback(new Error("   "))
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
              callback(new Error(' '))
            }
            
          })
          .catch(function (error) {
            console.log(error);
          });
        } else {
          callback(new Error('  '))
        }
      
    }
    //确认密码验证
      var validatePass2 = (rule, value, callback) => {
      if (value === '') { 
        callback(new Error('  '))
      } else if (value !== this.loginForm.userPassword) {
        callback(new Error('   '))
      } else {
        callback()
      }
       }
    //用户名正则校验
      let nameRule1 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{5,12}$/;
          if(!value){
               callback(new Error('  '));
          }else{
             if (regExp.test(value) === false) {
               callback(new Error('  '));
              } else {
                 //用户名有效性校验（查重）
                //去后台查询
                
               var userName = value
                this.$axios
              .get("/user/repeatUsername", {params:{userName:userName,id:0}
              
              })
              .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                callback()
                }else{
                  callback(new Error('   '))
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
             callback(new Error('  '));
          } else {
            if (regExp.test(value) === false) {
              callback(new Error('   '));
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
      flag: false,
      message: "",
      loginRules: {
        userName: [
          { required : true,validator:nameRule1 ,trigger: "blur" }],
        userPassword: [{ required: true, validator:nameRule2, trigger: "blur" } ],
        code: [{ required: true, message: "  ", trigger: "blur" }],
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
       if(!userName && userName === ""){
          this.flag = true;
          this.message = "请输入用户名";
        }else  if (!userPassword && userPassword === "") {
              this.flag = true;
              this.message = "请输入密码";
        } else if(! this.loginForm.code &&  this.loginForm.code === ""){
            this.flag = true;
            this.message = "验证码不能为空";
        } else if(!this.loginForm.email && this.loginForm.email === ""){
            this.flag = true;
            this.message = "邮箱不能为空";
        }else if(!this.loginForm.mobile && this.loginForm.mobile === ""){
            this.flag = true;
            this.message = "请输入联系方式";
         }
       let vueThis = this;
      this.$refs[loginForm].validate((valid) =>{
           if (valid) {
            this.$axios
          .post("/user/doRegister", result)
          .then(function (response) {
            console.log(response);
            if (response.data.code == 200) {
              window.location.href = "/";
            }else{
              vueThis.flag = true;
              vueThis.message = response.data.message;
               
               vueThis.imgUrl = "http://localhost:8090/code/img?time="+new Date();
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
      users(status){
        var userName = this.loginForm.userName;
        var userPassword = this.loginForm.userPassword;
        var code = this.loginForm.code;
        var ConfirmPassword = this.loginForm.ConfirmPassword;
        var mobile = this.loginForm.mobile;
        var email = this.loginForm.email;
        var _this = this;
      if(status === "userName"){
        if(!userName && userName === ""){
          this.flag = true;
          this.message = "请输入用户名";
        }else{
          let regExp = /^[A-Za-z0-9]{5,12}$/;
          if(regExp.test(userName) != true){
          this.flag = true;
          this.message = "请输入5到12尾的数字加英文组合";
          }else{
             //用户名有效性校验（查重）
                //去后台查询
               var userName = userName
                this.$axios
              .get("/user/repeatUsername", {params:{userName:userName,id:0}
              })
              .then(function (response) {
                console.log(response);
                if (response.data.code == 404) {
                _this.flag = true;
                _this.message = "该用户名已经注册，请重新填写";  
                 
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      }
        if(status === "userPassword"){
          let regExp = /^[A-Za-z0-9]{6,20}$/;
          if (!userPassword && userPassword === "") {
              this.flag = true;
              this.message = "请输入密码";
          } else {
            if (regExp.test(userPassword) === false) {
              this.flag = true;
              this.message = "请输入6到18尾的数字加英文组合";
            } 
        }
        
        
      }
     },
     userCode(status){
       if(status === "code"){
          if(! this.loginForm.code &&  this.loginForm.code === ""){
            this.flag = true;
            this.message = "验证码不能为空";
          }
        }
     },
     usersEmail(){
       var _this = this;
        if(!this.loginForm.email && this.loginForm.email === ""){
            this.flag = true;
            this.message = "邮箱不能为空";
          }else{
            const mailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(mailReg.test(this.loginForm.email) === false){
              this.flag = true;
              this.message = "请输入正确的邮箱格式";
            }else{
              //去后台查询
              var value = this.loginForm.email; 
              this.$axios
              .get("/user/repeatEmail", {params:{"email":value}})
              .then(function (response) {
                console.log(response);
                if (response.data.code == 404) {
                  _this.flag = true;
                  _this.message = "该邮箱已经注册，请重新填写";
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            }
        }
     },
      usersMobile(status){
           
          if(!this.loginForm.mobile && this.loginForm.mobile === ""){
            this.flag = true;
            this.message = "请输入联系方式";
          }else{
             const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
             if(!reg.test(this.loginForm.mobile)){
               this.flag = true;
               this.message = "请输入正确的手机号码"
             }else{
                 var value = this.loginForm.mobile; 
                 //去后台查询
                 var _this = this;
                 this.$axios
                 .get("/user/repeatMobile", {params:{"mobile":value}})
                 .then(function (response) {
                 console.log(response.data);
                 if (response.data.code == 404) {
                   
                     _this.flag = true;
                     _this.message = "该手机号已经注册，请重新填写";
                  }
                 })
                 .catch(function (error) {
                    console.log(error);
                 });
             }
          }
         },
         
     usersConfirmPassword(){
          if(!this.loginForm.ConfirmPassword && this.loginForm.ConfirmPassword === ""){
            this.flag = true;
            this.message= "请再次输入密码";
          }else if(this.loginForm.ConfirmPassword != this.loginForm.userPassword){
            this.flag = true;
            this.message= "两次输入密码不一致!";
          }
        }
    }
   

  
  
}
</script>

<style lang='less' scoped>
@import url("//at.alicdn.com/t/font_2388775_aj5zgfsigy.css");
#register {
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #fffefe;
  color: rgb(255, 255, 255,1.5);
  font-family: "Microsoft YaHei";
  background-size: 100%;
  height: 56%;
  background-image: url("../assets/register.png");
  position: relative;
  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #loginBox {
    width: 350px;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23em;
    padding: 30px 10px 10px 2px;
    box-shadow:7px -3px 40px rgb(16 16 16 / 16%);
    background: rgba(255, 255, 255, 0.425);
    border-radius: 4px;
    .submitBtn { 
      width: 283px;
      opacity: 1;
      border-radius: 5px;
    }
    .iconfont {
      color: #fff;
    }
    .goLogin{
      margin-left: 26em;
      font-size:0.5em;
    }
    .genhuan{
       margin-left: 25%;   
    }
    /deep/ .el-input__inner{
    font-size: 2px;
    height: 30px;
    margin-left: 38px;    
    box-shadow: 0px -1px 0px rgb(16 16 16 / 8%);
    } 
   /deep/ .el-input__icon {
    padding-right: 14px;
    padding-left: 55px;
    color:#1b1919bd;
    }
   /deep/.el-input--prefix .el-input__inner {
    padding-left: 56px;
    font-size: 2px;
    width: 92%;   
    }
   /deep/.el-form-item {
    margin-bottom: 2px;
    }
   .message{
    margin-top: -21px;
    margin-bottom: -24px;
    font-size: 5px;
    margin-inline-start: 36px;
    }
   /deep/ .el-form-item__content {
    line-height: 44px;
    position: relative;
    font-size: 14px;
   }
   /deep/ .el-input {
    position: relative;
    font-size: 15px;
    display: inline-block;
    width: 95%;
   }
   /deep/ .el-button {
    padding: 9px 20px;
   }
  
   /deep/.el-button--text {
    color: #409EFF;
    font-size: 6px;
    background: 0 0;
    padding-left: 0;
    padding-right: 0;
   }
 }
}
</style>