<template>
  <div class="container">
    <List :list="props.list"></List>
    <Pie></Pie>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import List from "./list.vue";
import { IActivityItem } from "./type.ts";
import Pie from "./pie.vue";

const props = defineProps<{
  list: IActivityItem[];
}>();
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
