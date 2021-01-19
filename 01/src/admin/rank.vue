
<template>
  <div class="rank">
    <div class="ranking">
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "echart",
  components: {},
  data() {
    return {
      params: {
        title: {
          text: "商家排行榜",
        },
        tooltip: {},
        xAxis: {
          data: ["裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [40, 20, 10],
          },
        ],
      },
    };
  },
  mounted() {
    let myChart = echarts.init(document.getElementById("myEchart"));
    myChart.setOption(this.params);
  },
  //方法集合
  methods: {
    formatter(row, column) {
      return row.address;
    },
  },
};
</script>
<style lang='scss' scoped>
#myEchart {
  width: 300px;
  height: 277px;
  display: inline-block;
}
.echart {
  display: inline-block;
}
.ranking {
  width: 70%;
  display: inline-block;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 5%;

}
.rank {
  width: 80%;
  margin: 0 auto;
}

.echart{
  width: 30px;
}
</style>