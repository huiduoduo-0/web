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
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
        <el-form-item
          label=""
          prop="userPassword"
          
        >
          <el-row>
            
            <el-col :span='22'>
              <el-input
                class="inps"
                placeholder='新密码'
                v-model="loginForm.userPassword"
                show-password
                prefix-icon="iconfont icon-mima"
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
                class="inps"
                placeholder='确认密码'
                v-model="loginForm.ConfirmPassword"
                show-password
                prefix-icon="iconfont icon-mima"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item >
          <el-button
            type="primary"
            round
            class="submitBtn"
            @click="submitForm('loginForm')"
          >确定</el-button>
        </el-form-item>

        
         
             <a @click="login" class="logins">
               <el-button type="text">已找到密码，立即登录</el-button></a>
         
        
       
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
@import url("//at.alicdn.com/t/font_2388775_aj5zgfsigy.css");
#ForgetThePassword {
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
    width: 340px;
    height: 173px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24.5em;
    padding: 30px 10px 10px 2px;
    box-shadow:7px -3px 40px rgb(16 16 16 / 16%);
    background: rgba(255, 255, 255, 0.425);
    border-radius: 4px;
    .submitBtn { 
      width: 274px;
      opacity: 1;
      border-radius: 4px;
      margin-left: 31px;
    }
    .iconfont {
      color: #fff;
    }
    .logins{
      margin-left: 20.5em;
      font-size:xx-small;
      
    }
    .genhuan{
       margin-left: 25%;   
    }
    /deep/ .el-input__inner{
    font-size: xx-small;
    height: 30px;
    margin-left: 33px;    
    box-shadow: 0px -1px 0px rgb(16 16 16 / 8%);
    } 
   /deep/ .el-input__icon {
    padding-right: 14px;
    padding-left: 42px;
    color:#1b1919bd;
    }
   /deep/.el-input--prefix .el-input__inner {
    padding-left: 44px;
    font-size: xx-small;
    width: 92%;   
    }
   /deep/.el-form-item {
    margin-bottom: 2px;
    }
   .message{
    margin-top: -21px;
    margin-bottom: -24px;
    font-size: xx-small;
    margin-inline-start: 36px;
    }
   /deep/ .el-form-item__content {
    line-height: 44px;
    position: relative;
    font-size: xx-small;
   }
   /deep/ .el-input {
    position: relative;
    font-size: xx-small;
    display: inline-block;
    width: 95%;
   }
   /deep/ .el-button {
    border-radius: 4px;
    padding: 9px 20px;
   }
  
   /deep/.el-button--text {
    color: #409EFF;
    font-size: xx-small;
    background: 0 0;
    padding-left: 0;
    padding-right: 0;
   }
 }
}

</style>