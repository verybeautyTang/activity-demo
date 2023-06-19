<template>
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
      <el-button type="primary" size="large" @click="onSubmit">搜索</el-button>
      <el-button type="danger" size="large" @click="onSubmit">清空</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

const formInline = reactive({
  user: "",
  region: "",
});

const onSubmit = () => {
  console.log("submit!");
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
