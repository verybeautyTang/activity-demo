<template>
  <div class="container-content">
    <el-card
      v-for="item in props.list"
      :key="item.title"
      class="container-card"
      :body-style="{ padding: '0px' }"
    >
      <iframe class="container-ifarme" :src="item.iframe"></iframe>
      <div style="padding: 14px">
        <div class="bottom">
          <time class="time">{{ item.title }}</time>
          <el-button text class="button" @click="showDetail(item.iframe)"
            >查看详情</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IActivityItem } from "./type.ts";

const props = defineProps<{
  list: IActivityItem[];
}>();
const showDetail = item => {
  window.open(item, "_blank");
};
</script>
<style lang="scss" scope>
.container {
  width: 100%;
  height: 100%;
  .container-title {
    padding: 24px;
    font-weight: 600;
    font-size: 30px;
  }
  .container-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .container-card {
      width: 30%;
      margin-bottom: 20px;
      .container-ifarme {
        width: 100%;
        height: 500px;
      }
    }
  }
}
</style>
