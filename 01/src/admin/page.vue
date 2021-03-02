<template>
  <div class="app">
    <div class="appleft">
      <div
        class="left"
        style="display: none"
        :style="{ display: 'block' }"
        @mouseover="overShow()"
        @mouseleave="outHide()"
      >
        <img class="leftImg" :src="pageimg" alt="" />
        <!-- 鼠标层罩 -->
        <div v-show="topShow" class="top" :style="topStyle"></div>
        <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
        <div
          class="maskTop"
          @mouseenter="enterHandler"
          @mousemove="moveHandler"
          @mouseout="outHandler"
        ></div>
      </div>
      <div v-show="rShow" class="right">
        <img :style="r_img" class="rightImg" :src="pageimg" alt="" />
      </div>
    </div>
    <div id="commodityright" class="appright">
      <div class="commodityname">
        <span class="commodityname2">{{ pagename }}</span>
      </div>
      <div class="commodityPrice">
        <span class="commodityPrice2"
          ><span class="myprice">价格</span>{{ pagePrice }} 元</span
        >
      </div>
      <div class="commoditycontent">
        <span class="myprice"
          ><span class="myprice">商品规格</span>{{ pagecontent }}</span
        >
      </div>
      <el-row>
        <el-button class="join" type="danger">加入收藏</el-button>
      </el-row>
    </div>
    <div class="appbtn">
      <!-- 路由 -->
      <el-tabs type="border-card">
        <el-tab-pane label="商品详情" class="xiangqing">
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
          <div class="xiangqinga">
            <span>商品名称：</span>
            <span>{{ pagename }}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="规格参数">
          <div class="canshu">
            <img class="jinzhi" src="@/assets/jinzhi.png" alt="" />
            <p>暂无规格参数</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品评论">
          <div>
            <p class="haoping">好评率：{{ haoping }}</p>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="全部评价" name="first"></el-tab-pane>
              <el-tab-pane label="晒图评价" name="second"></el-tab-pane>
              <el-tab-pane label="好评" name="third"></el-tab-pane>
              <el-tab-pane label="差评" name="fourth"></el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品咨询">
          <div>
            <img class="tishiimg" src="@/assets/tishi.png" alt="" />
            <span class="tishitext">提示：</span>
            <p class="tishi">
              因商家更改商品包装、场地、附配件等不做提前通知，且每位咨询者购买、提问时间等不同，为此，已购用户的回复不能作为长期参考，给您带来的不便还请谅解，谢谢！
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      topStyle: { transform: "" },
      r_img: {},
      topShow: false,
      rShow: false,
      pageimg:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1933440720,2469399825&fm=26&gp=0.jpg",
      pagename: "蒙娜丽莎正版画像",
      pagePrice: "28",
      pagecontent: "25cmX25cm",
      haoping: "100%",
    };
  },
  methods: {
    // 鼠标进入原图空间函数
    enterHandler() {
      // 层罩及放大空间的显示
      this.topShow = true;
      this.rShow = true;
    },
    // 鼠标移动函数
    moveHandler(event) {
      // 鼠标的坐标位置
      let x = event.offsetX;
      let y = event.offsetY;
      // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
      let topX = x - 100 < 0 ? 0 : x - 100;
      let topY = y - 100 < 0 ? 0 : y - 100;
      // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
      if (topX > 200) {
        topX = 200;
      }
      if (topY > 200) {
        topY = 200;
      }
      // 通过 transform 进行移动控制
      this.topStyle.transform = `translate(${topX}px,${topY}px)`;
      this.r_img.transform = `translate(-${2 * topX}px,-${2 * topY}px)`;
    },
    // 鼠标移出函数
    outHandler() {
      // 控制层罩与放大空间的隐藏
      this.topShow = false;
      this.rShow = false;
    },
    overShow() {
      document.getElementById("commodityright").style.display = "none";
    },
    outHide() {
      document.getElementById("commodityright").style.display = "inline-block";
    },
  },
};
</script>
<style scoped>
.app {
  width: 80%;
  height: 100%;
  margin-top: 5vh;
  margin-left: 30vh;
  padding: 50px;
  border: 1px solid #ccc;
  border-bottom: none;
  border-top: none;
  flex-direction: row;
  justify-content: space-around;
}
.appleft {
  display: inline-block;
  position: relative;
  height: 100%;
}
.appright {
  width: 20vw;
  height: 110%;
  float: right;
  margin-right: 5vw;
}
/* 放大的图片，通过定位将左上角定位到(0,0) */
.rightImg {
  display: inline-block;
  width: 800px;
  height: 800px;
  position: absolute;
  top: 0;
  left: 0px;
}
/* 右边的区域图片放大空间 */
.right {
  margin-left: 412px;
  width: 400px;
  height: 400px;
  border: 1px solid red;
  position: relative;
  overflow: hidden;
}
/* 一个最高层层罩 */
.maskTop {
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
}
/* 层罩，通过定位将左上角定位到(0,0) */
.top {
  width: 200px;
  height: 200px;
  background-color: lightcoral;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
}
/* 原图的显示 */
.leftImg {
  width: 38.5vh;
  height: 38.5vh;
  display: inline-block;
}
/* 原图的容器 */
.left {
  width: 38.5vh;
  height: 38.5vh;
  border: 1px solid teal;
  float: left;
  position: relative;
}
.commodityname {
  width: 18vw;
  height: 8vh;
  margin-left: 2vw;
}
.commodityname2 {
  line-height: 8vh;
  font-size: 18px;
}
.commodityPrice {
  width: 18vw;
  height: 8vh;
  margin-left: 2vw;
}
.commodityPrice2 {
  font-size: 25px;
  font-weight: 700;
  color: #f42424;
}
.myprice {
  font-size: 15px;
  margin-right: 3vh;
  color: #1c1c1d;
  font-weight: 100;
}
.commoditycontent {
  width: 18vw;
  height: 5vh;
  margin-left: 2vw;
  border-bottom: 1px solid rgb(51, 51, 51);
}
.join {
  margin-top: 2vh;
  margin-left: 2vw;
  width: 7vw;
  height: 2.5vw;
  font-size: 20px;
  background-color: #da0b0b;
}
.appbtn {
  width: 100%;
  height: 100%;
  margin-top: 3%;
  /* flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-between; */
}
.xiangqing {
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-between;
}
.xiangqinga {
  margin-right: 3vh;
  margin-left: 4vh;
  margin-top: 1vh;
  display: inline-block;
  color: rgb(160, 159, 159);
}
.canshu {
  height: 100%;
  text-align: center;
  color: rgb(177, 174, 174);
  font-size: 14px;
}
.jinzhi {
  width: 6.5%;
}
.haoping {
  font-weight: 700;
  color: rgb(250, 20, 20);
  font-size: 20px;
  margin-bottom: 2vh;
}
.tishiimg {
  width: 6.5%;
  float: left;
  margin-right: 10px;
}
.tishitext{
  font-size: 15px;
  color: rgb(134, 133, 133);
}
.tishi{
 color: rgb(182, 180, 180);
 font-size: 12px;
 
}
</style>

