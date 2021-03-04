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
        <div class="goodsleft">
          <img
            class="myimg"
            src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg"
          />
          <el-button class="pingfen" round>评分</el-button>
        </div>

        <p class="name">商家名</p>
        <p class="introduce">商家的初步介绍 商家的初步介绍...</p>

        <el-row class="button">
          <a class="goodsa" href="http://localhost:8080/Mall">
           进入商家
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

<style >
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.goodsa{
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.interval {
  height: 1000px;
   flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-between;
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
  width: 280px;
  height: 150px;
  text-align: center;
  margin: 5px;
  background: -webkit-linear-gradient(left,#44DCE0 0%,#2C98DE 100%);
  position: relative;
  border-radius: 10px;
}
.interval {
  width: 80%;
  height: 100%;
  margin: 10px auto;
}
.myimg {
  display: inline-block;
  width: 90px;
  height: 90px;
  border-radius: 90px;
  float: left;
  margin-top: 13%;
  margin-left: 13%;
  border: 5px solid rgba(228, 225, 225, 0.5);
  
}
.name {
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  float: left;
  width: 30%;
  margin-top: 10%;
  text-align: left;
  margin-left: 5%;
  color:#fff;
}
.introduce {
  font-size: 12px;
  float: left;
  width: 50%;
  text-align: left;
  margin-top: 2%;
   margin-left: 5%;
   color:#fff;
}
.Price {
  font-size: 10px;
  display: inline-block;
  color: red;
}
.button {
  width: 50%;
  height: 20%;
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 1px;
  background-color: #5ACEE4;
  border-radius: 0px 0px 10px 0px;
 
}
.pingfen {
  width: 70%;
  height: 20%;
  line-height: 2%;
  margin-top: 5%;
  text-align: center;
  box-shadow: -5px 2px 2px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  color: #F67C7C;
  font-weight: 700;
}
.goodsleft{
  float: left;
  display: inline-block;
  width: 45%;
}

</style>