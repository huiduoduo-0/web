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
      <h2 class="yanzheng">验证</h2>
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
          prop="mobile"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='注册时使用的手机号'
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
             <img :src="imgUrl"  alt=""  @click="resetImg"><a class="genhuan"><el-button type="text" >看不清，点击更换</el-button></a>
          </el-row>
        </el-form-item>


        <el-form-item style="margin-top:55px;">
          <el-button
            type="primary"
            round
            class="submitBtn"
            @click="submitForm('loginForm')"
          >确定</el-button>
        </el-form-item>
        <el-form-item >
          <el-row>
             <a @click="login" class="goLogin">
               <el-button type="text">已找到密码，立即登录</el-button></a>
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
          callback()
        } else {
          return callback(new Error('请输入正确的电话'))
        }
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
               callback()
              }
          }

      }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
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
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
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
      }
    },
  mounted() {
 
  }
};
</script>

<style lang='less' scoped>
#verification {
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
  background-image: url("../assets/beijing.png");
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
      margin-left: 15%;
    }
    .iconfont {
      color: #fff;
    }
    .yanzheng {
      margin-left: 40%;   
    }
    .goLogin{
       margin-left: 25%;
    }
    .genhuan{
       margin-left: 25%;   
    }
  }
}
</style>