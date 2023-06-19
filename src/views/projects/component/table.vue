<template>
  <div class="project-table">
    <el-button type="success" class="project-create">创建项目</el-button>
    <el-table :data="props.tableData" stripe style="width: 100%">
      <el-table-column prop="project_name" label="项目名称" width="180px" />
      <el-table-column prop="project_game" label="所属游戏" width="180px" />
      <el-table-column prop="project_status" label="项目状态" width="80px" />
      <el-table-column prop="project_develpor" label="开发人员" />
      <el-table-column prop="project_productor" label="项目提出者" />
      <el-table-column fixed="right" label="操作">
        <template #default>
          <el-button type="primary" size="large" @click="handleClick"
            >预览</el-button
          >
          <el-button type="primary" size="large">编辑</el-button>
          <el-button type="danger" size="large">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { ITableItem } from "./type.ts";
const props = defineProps<{
  tableData: ITableItem[];
}>();

console.log(props.tableData);
const handleClick = () => {
  console.log("click");
};
</script>
<style lang="scss">
.project-container {
  padding: 20px;
  box-shadow: 5px 5px 5px 5px #dddddd;
}
.project-table {
  padding-top: 30px;
}
.project-create {
  margin-bottom: 20px;
}
</style>
