<template>
  <ActivityList :list="data"></ActivityList>
</template>
<script lang="ts" setup>
import ActivityList from "@/components/ActivityList/index.vue";
const data = [
  {
    title: "收集类",
    iframe: "https://ff.happyelements.com/activites/svipreturn/#/",
    desc: "",
  },
  {
    title: "签到类",
    iframe: "http://ff.happyelements.com/activites/sign-day-by-day/",
    desc: "",
  },
  {
    title: "抽奖类",
    iframe: "http://ff.happyelements.com/activites/wechat_lottery/x849fos1/",
    desc: "",
  },
  {
    title: "上传图片类",
    iframe: "http://ff.happyelements.com/wishing/mothersday/",
    desc: "",
  },
  {
    title: "游戏答题类",
    iframe: "http://ff.happyelements.com/wishing/clover/",
    desc: "",
  },
  {
    title: "年会类",
    iframe: "http://ff.happyelements.com/wishing/am9/",
    desc: "",
  },
  {
    title: "推广类",
    iframe: "http://ff.happyelements.com/wishing/tsumtsum0212/",
    desc: "",
  },
];
</script>
