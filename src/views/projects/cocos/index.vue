<template>
  <div>
    <project-form />
    <project-table :table-data="data" />
  </div>
</template>
<script lang="ts" setup>
import ProjectForm from "../component/form.vue";
import ProjectTable from "../component/table.vue";

const data = [
  {
    project_name: "松松周年活动",
    project_game: "松松总动员",
    project_status: "已上线",
    project_develpor: "dong.guo",
    project_productor: "wenfeng.zhu",
    project_product: "",
    project_local:
      "https://ff.happyelements.com/act/tsum3rd/index.html?sign=MjIxODM3MTk=",
  },
  {
    project_name: "解密公益，帮助野马还乡",
    project_game: "开心消消乐",
    project_status: "已上线",
    project_develpor: "dong.guo",
    project_productor: "wenfeng.zhu",
    project_product: "",
    project_local: "http://ff.happyelements.com/act/xxlhorse/",
  },
];
</script>
