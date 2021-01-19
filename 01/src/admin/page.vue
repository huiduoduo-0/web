<template>
  <div class="page">
    <div class="productLeft">
      <!-- 左侧中图  -->
      <div class="mdImg">
        <img :src="qall" alt="" />
      </div>
      <!-- 遮罩层  -->
      <div
        v-show="isShow"
        class="marks"
        :style="{ top: top + 'px', left: left + 'px' }"
      ></div>
      <!-- 遮罩层 玻璃板 superMarks -->
      <div
        v-if="isPC == false"
        @touchstart.prevent="enter"
        @touchend.prevent="leave"
        @touchmove.prevent="marks"
        @click.prevent="sub()"
        class="superMarks"
      ></div>

      <div
        v-if="isPC == true"
        @mouseenter="enter"
        @mouseleave="leave"
        @mousemove="marks"
        @click.prevent="sub()"
        class="superMarks"
      ></div>

      <div v-show="isShow" class="lgImg">
        <img
          :src="qallBig"
          alt=""
          :style="{ top: topLgImg + 'px', left: leftLgImg + 'px' }"
        />
      </div>
    </div>
    <div class="pageright">
        <p class="pagename">
        </p>
        <p class="pagedetails" >
            {{pagedetails}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-header",
  data() {
    return {
      isPC: true,
      // 大图片
      qall:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
      qallBig:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
      isShow: false, //控制遮罩层marks和大图片是否显示"
      left: 0, //marks左移位置
      top: 0, //marks下移位置
      leftLgImg: 0, //大图lgImg移动的位置
      topLgImg: 0, //大图lgImg移动的位置
      pagedetails:"商品名称"
    };
  },
  methods: {
    //鼠标进入和离开
    enter() {
      this.isShow = true;
    },
    leave() {
      this.isShow = false;
    },
    //遮罩层放大镜
    marks(e) {
      var marksWidth = 48; //marks的宽
      var marksHeight = 48; //marks的高
      if (this.isPC == true) {
        //PC端
        this.left = e.offsetX - marksWidth / 2;
        this.top = e.offsetY - marksHeight / 2;
        if (this.left < 0) {
          this.left = 0;
        } else if (this.left > 160) {
          this.left = 160;
        }
        if (this.top < 0) {
          this.top = 0;
        } else if (this.top > 160) {
          this.top = 160;
        }

        //大d图片除以小的图片的宽高
        this.leftLgImg = (-this.left * 320) / 160;
        this.topLgImg = (-this.top * 181) / 91;
      } else {
        //移动端
        this.left = e.changedTouches[0].clientX - marksWidth / 2;
        this.top = e.changedTouches[0].clientY - marksHeight / 2;
        if (this.left < 0) {
          this.left = 0;
        } else if (this.left > 160) {
          this.left = 160;
        }
        if (this.top < 0) {
          this.top = 0;
        } else if (this.top > 45) {
          //45就是小图片的高度的一半，91/2
          this.top = 45;
        }

        //大d图片除以小的图片的宽高
        this.leftLgImg = (-this.left * 320) / 160;
        this.topLgImg = (-this.top * 181) / 91;
      }
    },
  },
  mounted() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      this.isPC = false;
    } else {
      console.log("PC端");
    }
  },
};
</script>

<style scopded>
* {
  margin: 0;
  padding: 0;
}
.pageright{
    display: inline-block;
}
p{
    display: inline-block;
}
.mdImg{
    margin-right: 0;
}
.page {
  width: 90%;
  height: 600px;
  border: 1px solid #000;
  margin-left: 30%;
  margin-top: 6%;
  position: relative;
}
/* 左侧大小图样式 160*91  320*181*/
.productLeft {
    display: inline-block;
  width: 30%;
  height: 300px;
  border: 1px solid #000;
  margin-left: 10%;
  
  /* border: 1px solid #000; */

}
/* 左侧中图 */
.mdImg,
.mdImg > img {
  width: 90%;
  height: 90%;
}
/*遮罩层superMarks */
.superMarks {
  width: 20%;
  height: 30%;
  background-color: rgba(220, 220, 220, 0);
  position: absolute;
  top: 0px;
  left: 0px;
}
/* 遮罩层 */
.marks {
  width: 5%;
  height: 10%;
  position: absolute;
  background-color: rgba(220, 220, 220, 0.5);
  /*top:0px;  //内联设置了动态的top，left
        left:0px;*/
}

/* 左侧隐藏大图 */
.lgImg {
  width: 40%;
  height: 70%;
  overflow: hidden;
  position: absolute;
  top: -3%;
  left: 43%;
  border: 2px solid #aaa;
  background-color: #fff;
}
.lgImg img {
  width: 300%;
  height: 300%;
  position: absolute;
  /*top:100px;
        left:100px;*/
}
</style>