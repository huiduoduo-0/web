<template>
   <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column prop="date" label="排名" sortable width="230">
        </el-table-column>
        <el-table-column prop="name" label="商家名" sortable width="230">
        </el-table-column>
        <el-table-column prop="address" label="销量 " :formatter="formatter" width="500">
        </el-table-column>
         <el-table-column prop="type" label="类型 " :formatter="formatter">
        </el-table-column>
      </el-table>
</template>

<script>
export default {
data(){

    return{
          tableData: [
        {
          date: "0",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          type:"生活"
        },
        {
          date: "8",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          type:"生活"
        },
        {
          date: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          type:"生活"
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          type:"生活"
        },
        {
          date: "5",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          type:"生活"
        }
      ],
    }
}
}
</script>

<style>

</style>