<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
    class="users"
  >
    <el-table-column prop="date" label="编号" sortable width="150">
    </el-table-column>
    <el-table-column prop="name" label="用户名" sortable width="150">
    </el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter"  width="300">
    </el-table-column>
    <el-table-column prop="volume" label="订单" :formatter="formatter"  width="300">
    </el-table-column
    ><el-table-column prop="business" label="权限" :formatter="formatter">
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
          business:"会员2"
        },
        {
          date: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          volume:"50",
          business:"平民"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          volume:"100",
          business:"会员2"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"200",
          business:"会员2"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"300",
          business:"会员2"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"900",
          business:"会员2"
        },

        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"500",
          business:"会员2"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"100",
          business:"会员2"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"600",
          business:"会员2"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          volume:"700",
          business:"会员2"
        },
      ],
    };
  },
};
</script>

<style>
.users{
  margin-left: 1%;
}
.cell{
  margin-right: 10%;
}
</style>