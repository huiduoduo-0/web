 <template>
  <div id="ForgetThePassword">
    <div id="bgd">
      <canvas
        id='myCanvas'
        :width='width'
        :height='height'
      >
      </canvas>
    </div>
    <div id="loginBox">
      <h2 class="wjmm">修改密码</h2>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item
          label=""
          prop="userPassword"
          style="margin-top:40px;"
        >
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"></span>
            </el-col>
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='新密码'
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
                placeholder='确认密码'
                v-model="loginForm.ConfirmPassword"
                show-password
              ></el-input>
            </el-col>
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
             <a @click="login" class="logins">
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
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      loginForm: {
        userPassword: "",
        ConfirmPassword: ""
      },
      
      loginRules: {
        userPassword: [{ required: true, validator:nameRule2, trigger: "blur" } ],
        ConfirmPassword:[{required : true,validator:validatePass2,trigger: "blur" }]
        
      }
    };
  },
  methods: {
    //提交登录
    submitForm(loginForm) {
       var userPassword = this.loginForm.userPassword;
       var ConfirmPassword = this.loginForm.ConfirmPassword
        var id = this.$route.query.id;
        console.log(id)
       let user = {
         userPassword: userPassword,
         ConfirmPassword: ConfirmPassword,
         id: id
       };
       let vueThis = this
         this.$refs[loginForm].validate((valid) =>{
           if (valid) {
             this.$axios
            .post("/user/forgetUserPassword", user)
            .then(function (response) {
              console.log(response.data);
              if (response.data.code == 200) {

                window.location.href = "/"
              }else{
              alert(response.data.message) 
              this.imgUrl = "http://localhost:8090/code/img?time="+new Date();
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
#ForgetThePassword {
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
    height: 350px;
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
    .logins{
        margin-left: 25%;
    }
    .wjmm{
      margin-left: 35%;
    }
  }
}
</style>