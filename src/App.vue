<script setup lang="ts">
import { provide } from "vue";
import { ElConfigProvider } from "element-plus";
import { useAppStore } from "@/store/modules/app";
import {
  initVisualData,
  injectKey,
  localKey,
} from "@/visual-editor/hooks/useVisualData";
const appStore = useAppStore();

const visualData = initVisualData();
// 注入可视化编辑器所有配置
provide(injectKey, visualData);

const { jsonData } = visualData;

window.addEventListener("beforeunload", () => {
  sessionStorage.setItem(localKey, JSON.stringify(jsonData));
});
</script>

<template>
  <el-config-provider :locale="appStore.locale" :size="appStore.size">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss">
@import "styles/common";
</style>
