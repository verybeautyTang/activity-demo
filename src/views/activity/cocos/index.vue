<template>
  <ActivityList :list="data"></ActivityList>
</template>
<script lang="ts" setup>
import ActivityList from "@/components/ActivityList/index.vue";
const data = [
  {
    title: "分享类",
    iframe:
      "https://ff.happyelements.com/act/tsum3rd/index.html?sign=MjIxODM3MTk=",
    desc: "",
  },
  {
    title: "游戏类",
    iframe: "https://ff.happyelements.com/act/xxlhorse/",
    desc: "",
  },
  {
    title: "",
    iframe: "",
    desc: "",
  },
];
</script>
