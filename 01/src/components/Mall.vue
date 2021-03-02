<template>
  <div class="Mall">
    <el-row class="pack"> 
      <el-button type="warning" class="mypack" plain>打包到本地</el-button>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 92.5%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="商家名称" width="120">
      </el-table-column>
      <el-table-column prop="commodity" label="商品名称" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="details" label="详情" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="price" label="价格" show-overflow-tooltip>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">删除</el-button>
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
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          commodity: "蛋黄派",
          details: "商品详情",
          price: "100元",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(){
         this.$router.push({ path:'/page'  })
    }
  },
  
};
</script>


<style scoped>
div {
  display: inline-block;
}
.Mall {
  margin-top: 3%;
  margin-left: 1%;
}
.mypack{
  background-color: #F6F8FC;
  border: 3px solid #76BAEA;
  color: #2A94DE;
}
</style>
