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
    iframe: "https://ff.happyelements.com/activites/sign-day-by-day/",
    desc: "",
  },
  {
    title: "抽奖类",
    iframe: "https://ff.happyelements.com/activites/wechat_lottery/x849fos1/",
    desc: "",
  },
  {
    title: "上传图片类",
    iframe: "https://ff.happyelements.com/wishing/mothersday/",
    desc: "",
  },
  {
    title: "游戏答题类",
    iframe: "https://ff.happyelements.com/wishing/clover/",
    desc: "",
  },
  {
    title: "年会类",
    iframe: "https://ff.happyelements.com/wishing/am9/",
    desc: "",
  },
  {
    title: "推广类",
    iframe: "https://ff.happyelements.com/wishing/tsumtsum0212/",
    desc: "",
  },
  {
    title: "消消乐-春节红包活动",
    iframe: "https://ff.happyelements.com/activites/xxl-newyear-2024",
    desc: "",
  },
  {
    title: "es2-春节红包活动",
    iframe: "https://ff.happyelements.com/activites/es2-vip2302/happy-new-year",
    desc: "",
  },
  {
    title: "es2活动-8周年纪念(多语言)",
    iframe: "https://ff.happyelements.com/activites/es2-ip8/zh/index.html",
    desc: "",
  },
  {
    title: "消消乐-随机抽奖活动",
    iframe:
      "https://ff.happyelements.com/activites/xxl-anniversary-lottery-2024",
    desc: "",
  },
  {
    title: "es2活动转盘抽奖(多语言)",
    iframe: "https://ff.happyelements.com/activites/es2-official-lottery/zh/#/",
    desc: "",
  },
  {
    title: "开心消消乐2024高考活动",
    iframe: "https://ff.happyelements.com/activites/xxl-gaokao-2024",
    desc: "",
  },
  {
    title: "es2活动[下载app-icon](多语言)",
    iframe: "https://ff.happyelements.com/activites/es2-ip8-from-me/zh/",
    desc: "",
  },
];
</script>
