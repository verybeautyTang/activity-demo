<template>
  <ActivityList :list="data"></ActivityList>
</template>
<script lang="ts" setup>
import ActivityList from "@/components/ActivityList/index.vue";
const data = [
  {
    title: "pop官网",
    iframe: "https://babytopia.oceangames.com/home",
    desc: "",
  },
  {
    title: "ninja官网",
    iframe: "https://ninja.oceangames.com/",
    desc: "",
  },
  {
    title: "sh01-h5",
    iframe:
      "https://ff.happyelements.com/activites/sh01-miniprogram/holiday/#/",
    desc: "",
  },
  {
    title: "sh01官网",
    iframe: " https://ff.happyelements.com/activites/sh01/",
    desc: "",
  },
];
</script>
