<template>
  <div class="container">
    <div class="contaner-sort">
      <div class="container-title">活动分类</div>
      <div class="container-content">
        <el-card
          v-for="item in data"
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
    </div>
    <div class="container-title">活动类型</div>
    <div class="container-content">
      <div id="box" ref="box" style="width: 50%; height: 400px"></div>
      <div id="pie" ref="pie" style="width: 50%; height: 400px"></div>
    </div>
  </div>
</template>

<script setup ts>
import { onMounted } from "vue";
import * as echarts from "echarts";

const box = ref();
const pie = ref();
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

onMounted(() => {
  const myecharts = echarts.init(box.value);
  const pieChart = echarts.init(pie.value);
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    xAxis: {
      type: "category",
      data: [
        "收集类",
        "签到类",
        "抽奖类",
        "打卡类",
        "推广类",
        "游戏答题类",
        "周年分享类",
        "发帖类",
        "助力类",
        "年会类",
        "编关类",
      ],
    },
    series: [
      {
        name: "社区活动",
        type: "bar",
        data: [2, 2, 3, 6, 6, 5, 4, 0, 0, 0, 0],
      },
      {
        name: "项目活动",
        type: "bar",
        data: [2, 1, 0, 1, 0, 0, 0, 1, 2, 2, 2],
      },
    ],
  };
  const pieOption = {
    title: {
      text: "活动种类图",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 4, name: "收集类" },
          { value: 3, name: "签到类" },
          { value: 3, name: "抽奖类" },
          { value: 7, name: "打卡类" },
          { value: 6, name: "推广类" },
          { value: 6, name: "游戏答题类" },
          { value: 5, name: "周年分享类" },
          { value: 4, name: "发帖类" },
          { value: 2, name: "助力类" },
          { value: 2, name: "编关类" },
          { value: 2, name: "年会类" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  pieChart.setOption(option);
  myecharts.setOption(pieOption);
  window.onresize = function () {
    console.log("窗口大小发生改变了");
    // echarts适配
    myecharts.resize();
  };
});

const showDetail = item => {
  window.open(item, "_blank");
};
</script>

<style lang="scss">
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
