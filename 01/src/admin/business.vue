<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
    <el-table-column prop="date" label="编号" sortable width="150">
    </el-table-column>
    <el-table-column prop="name" label="商家名" sortable width="150">
    </el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter">
    </el-table-column>
    <el-table-column prop="volume" label="销量" :formatter="formatter">
    </el-table-column
    ><el-table-column prop="type" label="类型" :formatter="formatter">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          volume:"100",
          type:"生活"
        },
        {
          date: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          volume:"50",
          type:"生活"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          volume:"100",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"200",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"300",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"900",
          type:"生活"
        },

        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"500",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"100",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"600",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"700",
          type:"生活"
        },
      ],
    };
  },
};
</script>

<style>
</style>