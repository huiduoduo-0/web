<template>
  <div class="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-deom"
      mode="horizontal"
      @select="handleSelect"
      background-color="#2A94DE"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <a href="https://www.hjuji.com/"
        ><img
          src="https://www.hjuji.com/img/hjuji-logo-1.145cebc.png"
          class="logo"
      /></a>


        
      <div class="myinput">
         <a class="huiduoduo" href="http://192.168.42.207:8080/">惠多多后台管理中心</a>
        <input type="text" class="put"  v-model="myput"/>
        <el-row class="buttonone">
          <router-link to="Mall">
            <el-button @click="search" icon="el-icon-search" circle>
            </el-button>
          </router-link>
        </el-row>
      </div>
    </el-menu>
    <el-col :span="3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#293038"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <a href="http://192.168.42.207:8080/Recharge">
              <el-menu-item  index="2-1">充值中心</el-menu-item>
            </a>
            <router-link to="usercenter">
              <el-menu-item index="2-2">个人详情</el-menu-item>
            </router-link>
            <router-link to="/history">
              <el-menu-item index="2-3">我的订单</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
<!-- disabled -->
        <el-submenu index="2" >
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>后台管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title"></template>
            <router-link to="/ranks">
              <el-menu-item index="2-4">排行榜</el-menu-item>
            </router-link>
            <router-link to="business">
              <el-menu-item index="2-5">商家信息</el-menu-item>
            </router-link>
            <router-link to="/user">
              <el-menu-item index="2-6">用户信息</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <!-- <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">

        </span>
      </el-menu-item> -->
      </el-menu>
    </el-col>
    <div class="app-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
     
    search() {
      console.log(this.myput);
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
.logo {
  float: right;
  width: 9%;
  margin-top: 5px;
  margin-right: 20px;
}
.huiduoduo{
  font-size: 25px;
  margin-left: 1%;
  color: #000;
  font-weight: 700;
}
.myinput {
  height: 10%;
  display: block;
}
.put {
  width: 40%;
  height: 25px;
  margin-left: 16%;
  margin-bottom: 1%;
  margin-top: 1%;
  border-radius: 15px;
}
.buttonone {
  display: inline-block;
  margin-left: 15px;
}
.ranks {
  color: #fff;
}
.el-menu-vertical-demo {
  height: 860px;
}
</style>