<template>
  <div id="verification">
    <div id="bgd">
      <canvas
        id='myCanvas'
        :width='width'
        :height='height'
      >
      </canvas>
    </div>
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
          
        >
          <el-row>
            <el-col :span='22'>
              <el-input
               @blur="users('userName')"
                class="inps"
                placeholder='用户名'
                v-model="loginForm.userName"
                prefix-icon="iconfont icon-yonghu"
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
               @blur="users('mobile')"
                class="inps"
                placeholder='注册时使用的手机号'
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
            
            <el-col :span='16'>
              <el-input
              @blur="users('code')"
                class="inps"
                placeholder='验证码'
                v-model="loginForm.code"
                prefix-icon="iconfont icon-T"
              ></el-input>
              <div class="message" v-if="flag"><span style="color:#dc2406">{{message}}</span></div>
            </el-col>

            <el-col :span='5'>
             <img :src="imgUrl"  alt=""  @click="resetImg" style="margin: 5.2px -2px -7px 18px; box-shadow: -1px 2px 3px rgb(38 10 17 / 54%);border-radius: 2px;">
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item style="margin-top:15px;">
          <el-button
            type="primary"
            class="submitBtn"
            @click="submitForm('loginForm')"
          >确定</el-button>
        </el-form-item>
             <a @click="login" class="goLogin">
               <el-button type="text" style="font-size: 0.5em;">已找到密码，立即登录</el-button></a>
       
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
          callback()
        } else {
          return callback(new Error(' '))
        }
      }
    }
        //用户名正则校验
      let nameRule1 = (rule, value, callback) => {
          let regExp = /^[A-Za-z0-9]{5,12}$/;
          if(!value){
               callback(new Error(' '));
          }else{
             if (regExp.test(value) === false) {
               callback(new Error(' '));
              } else {
               callback()
              }
          }

      }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      flag: false,
      message: "",
      loginForm: {
        userName: "",
        mobile: "",
        code:""
      },
       imgUrl: "http://localhost:8090/code/img?time="+new Date(),
      loginRules: {
        userName: [   
          { required: true,validator:nameRule1, trigger: "blur" }
        ],
        mobile: [{ required: true, validator:phoneRules, trigger: "blur" }
        ],
        code: [{ required: true, message: "  ", trigger: "blur" }]
      }
    };
  },
  methods: {
    //提交登录
    submitForm(loginForm) {
       var userName = this.loginForm.userName;
       var mobile = this.loginForm.mobile;
       var code = this.loginForm.code;
       let user = {
         userName: userName,
         mobile: mobile,
         code: code
       };
       if(!userName && userName === ""){
          this.flag = true;
          this.message = "请输入用户名";
        }else if(!this.loginForm.mobile && this.loginForm.mobile === ""){
            this.flag = true;
            this.message = "请输入联系方式";
         }else if(! this.loginForm.code &&  this.loginForm.code === ""){
            this.flag = true;
            this.message = "验证码不能为空";
        }
       let vueThis = this
         this.$refs[loginForm].validate((valid) =>{
           if (valid) {
             this.$axios
            .post("/user/selectByUserNameAndMobile", user)
            .then(function (response) {
              
              if (response.data.code == 200) {
                
               vueThis.$router.push({
                    path: '/ForgetThePassword',
                      query: {
                       id: response.data.date.user.id
                 }
        })
              }else{
              alert(response.data.message) 
              vueThis.imgUrl = "http://localhost:8090/code/img?time="+new Date();
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
      login(){
        window.location.href = "/";
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
           if(status === "mobile"){
          if(!this.loginForm.mobile && this.loginForm.mobile == ""){
            this.flag = true;
            this.message = "请输入联系方式";
          } else {
             const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/ 
             if(!reg.test(this.loginForm.mobile )){
               this.flag = true;
               this.message = "请输入联系正确的方式";
             }
        
          }
        }        
        if(status === "code"){
          if(!this.loginForm.code && this.loginForm.code == ""){
            this.flag = true;
            this.message = "验证码不能为空";
          }
        }
      }
    },
  mounted() {
 
  }
};
</script>

<style lang='less' scoped>
@import url("//at.alicdn.com/t/font_2388775_aj5zgfsigy.css");
#verification {
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #fffefe;
  color: rgb(255, 255, 255,1.5);
  font-family: "Microsoft YaHei";
  background-size: 100%;
  height: 56%;
  background-image: url("../assets/beijing.png");
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
    margin-top: 25em;
    padding: 30px 10px 10px 10px;
    box-shadow:7px -3px 40px rgb(16 16 16 / 16%);
    background: rgba(255, 255, 255, 0.425);
    border-radius: 4px;
    .submitBtn { 
    width: 321px;
    opacity: 1;
    margin-left: 12px;
    }
    .iconfont {
      color: #fff;
    }

    .goLogin{
      margin-left: 212px;
    }
    /deep/ .el-input__inner{
    font-size: 2px;
  	  height: 30px;
      margin-left: 12px;     
  } 
  /deep/ .el-input__icon {
    padding-right: 14px;
    padding-left: 30px;
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
    margin-bottom: -41px;
    margin-left: 13px;
    font-size: 6px;
  }

  }
}
</style>