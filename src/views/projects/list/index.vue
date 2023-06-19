<template>
  <div>
    <project-form />
    <project-table :table-data="tableData" />
  </div>
</template>
<script lang="ts" setup>
import ProjectForm from "../component/form.vue";
import ProjectTable from "../component/table.vue";

const tableData = [
  {
    project_name: "svip回流",
    project_game: "开心消消乐",
    project_status: "开发中",
    project_develpor: "shiyu.he、dong.guo",
    project_productor: "wenfeng.zhu",
  },
  {
    project_name: "海滨H5",
    project_game: "海滨消消乐",
    project_status: "已上线",
    project_develpor: "shiyu.he、dong.guo",
    project_productor: "xxxx",
  },
  {
    project_name: "svip回流",
    project_game: "开心消消乐",
    project_status: "开发中",
    project_develpor: "shiyu.he、dong.guo",
    project_productor: "wenfeng.zhu",
  },
  {
    project_name: "svip回流",
    project_game: "开心消消乐",
    project_status: "开发中",
    project_develpor: "shiyu.he、dong.guo",
    project_productor: "wenfeng.zhu",
  },
];
</script>
