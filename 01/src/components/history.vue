<template>
  <div class="history">
 <h1>
     历史订单
 </h1>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" width="80"> </el-table-column>
      <el-table-column label="日期" width="150" 
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="商家名称" width="150">
      </el-table-column>
      <el-table-column prop="commodity" label="商品名称" width="150">
      </el-table-column>
      <el-table-column prop="address" label="地址"  width="350">
      </el-table-column>
      <el-table-column prop="number" label="数量" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="price" label="价格" show-overflow-tooltip>
      </el-table-column>
        <el-table-column prop="price" label="价格" show-overflow-tooltip>
      </el-table-column>
       <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick" type="text" size="small"
            >查看详情</el-button
          > -->
          <el-button type="text" @click="small" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
          number:"1000"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
           number:"1000"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
           number:"1000"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
           number:"1000"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
           number:"1000"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
           number:"1000"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
           number:"1000"
        },
      ],
      multipleSelection: [],
    };
    
  },

  methods: {

     formatter(row, column) {
        return row.address;
      }
  },
};
</script>


<style scoped>
div{
  display: inline-block;
}
.history{
  margin-top: 3%;
  margin-left: 1%;
}
</style>