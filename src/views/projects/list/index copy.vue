<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="project-container demo-form-inline"
    >
      <el-form-item label="项目名称">
        <el-input
          v-model="formInline.user"
          placeholder="请输入项目名称"
          size="large"
        />
      </el-form-item>
      <el-form-item label="所属游戏">
        <el-select
          v-model="formInline.region"
          placeholder="请选择所属游戏"
          size="large"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="项目状态">
        <el-select
          v-model="formInline.region"
          placeholder="请选择项目状态"
          size="large"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" @click="onSubmit"
          >搜索</el-button
        >
        <el-button type="danger" size="large" @click="onSubmit">清空</el-button>
      </el-form-item>
    </el-form>
    <div class="project-table">
      <el-button type="success" class="project-create">创建项目</el-button>
      <el-table :data="tableData" stripe style="width: 100%">
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
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const handleClick = () => {
  console.log("click");
};

const formInline = reactive({
  user: "",
  region: "",
});

const onSubmit = () => {
  console.log("submit!");
};
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
