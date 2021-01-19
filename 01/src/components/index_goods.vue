<template>
  <div>
    <!-- <div class="lunbo">
     
      <template>
        <el-carousel :interval="2000" type="card" height="300px">
          <el-carousel-item v-for="item in 7" :key="item">
            <img
              src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg"
            />
          </el-carousel-item>
        </el-carousel>
      </template>
    </div> -->
    <div class="interval">
      <div class="commodity" v-for="myoff in 18" :key="myoff">
        <img
          class="myimg"
          src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg"
        />
        <p class="name">商家名</p>
        <p class="introduce">商家的初步介绍</p>
        <p class="Price">评分</p>
        <el-row class="button">
          <a href="http://192.168.42.137:8080/Mall">
            <el-button type="danger">进入商家</el-button>
          </a>
        </el-row>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
    
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.interval {
  height: 1000px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lunbo {
  width: 1000px;
  margin: 0 auto;
}
.commodity {
  display: inline-block;
  width: 15%;
  height: 28%;
  border: 1px solid rgb(241, 239, 239);
  text-align: center;
  margin: 3px;
  background-color: rgb(252, 250, 250);
}
.interval {
  width: 80%;
  height: 100%;
  margin: 10px auto;
}
.myimg {
  width: 60%;
  border: 1px solid #000;
  margin-top: 20%;
  margin-right: 20%;
  margin-left: 20%;
}
.name {
  font-size: 25px;
}
.introduce {
  font-size: 12px;
}
.Price {
  font-size: 20px;
  display: inline-block;
  color: red;
}
.button {
  display: inline-block;
  margin-left: 25px;
}
</style>