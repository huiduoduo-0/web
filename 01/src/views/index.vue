<template>
  <div class="app">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-deom"
      mode="horizontal"
      @select="handleSelect"
      background-color="#293038"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <a href="https://www.hjuji.com/"
        ><img
          src="https://www.hjuji.com/img/hjuji-logo-1.145cebc.png"
          class="logo"
      /></a> -->

      <div class="huiduoduoa">
        <a class="huiduoduo" href="http://localhost:8080/goods"
          >惠多多后台管理中心</a
        >
      </div>

      <input type="text" class="put" v-model="myput" />
      <el-row class="buttonone">
        <router-link to="Mall">
          <el-button @click="search" icon="el-icon-search" circle> </el-button>
        </router-link>
      </el-row>
    </el-menu>
    <el-col :span="3">
      <el-menu
        default-active="3"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#F6F8FC"
        text-color="#656D92"
        active-text-color="#2A94DE"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item-group>
            <router-link to="Recharge">
              <el-menu-item index="2-1">充值中心</el-menu-item>
            </router-link>
            <router-link to="usercenter">
              <el-menu-item index="2-2">个人详情</el-menu-item>
            </router-link>
            <router-link to="/history">
              <el-menu-item index="2-3">我的订单</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <!-- disabled -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
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
.app{
  margin: -1px;
}
.huiduoduoa {
  float: left;
  width: 12.5%;
  height: 112px;
  display: inline-block;
  background-color: #F6F8FC;
  text-align: center;
  outline:none;
}
.huiduoduo {
  font-size: 25px;
  line-height: 100px;
  color: #364064;
  font-weight: 700;
}
.myinput {
  height: 100%;
  display: block;
}
.put {
  width: 40%;
  height: 50px;
  margin-left: 16%;
  border-radius: 50px;
  margin-top: 1.2%;
  outline:none;
  font-size: 20px;
  padding-left: 20px;
}

.buttonone {
  display: inline-block;
  float: right;
  margin-top: 1.5%;
  position: absolute;
  right: 31.5%;
}
.ranks {
  color: #fff;
}
.el-menu-vertical-demo {
  height: 860px;
  font-size: 15px;
  font-weight: 700;
}
.el-submenu__title {
  text-align: center;
}
.el-menu-item {
  text-align: center;
}
.el-menu-deom el-menu--horizontal el-menu {
  position: relative;
}

* {
  font-family: "微软雅黑";
}
</style>