<template>
  <div class="container">
    <div class="contaner-sort">
      <div class="container-title"></div>
      <el-row :gutter="20" class="container-content" style="height: 160px">
        <el-col :span="8" @click="toH5()">
          <el-card shadow="hover" class="container-h5">
            <div>移动端H5</div>
          </el-card>
        </el-col>
        <el-col :span="8" @click="toGame()">
          <el-card shadow="hover" class="container-game">
            <div>COCOS游戏活动页</div>
          </el-card>
        </el-col>
        <el-col :span="8" @click="toPC()">
          <el-card shadow="hover" class="container-pc">
            <div>PC端项目</div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="container-title"></div>
    <div class="container-content">
      <div id="box" ref="box" style="width: 50%; height: 400px"></div>
      <div id="pie" ref="pie" style="width: 50%; height: 400px"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import * as echarts from "echarts";

const box = ref();
const pie = ref();

const router = useRouter();
const toH5 = () => {
  router.push({
    path: "/activity/h5",
  });
};
const toGame = () => {
  router.push({
    path: "/activity/cocos",
  });
};
const toPC = () => {
  router.push({
    path: "/activity/backed",
  });
};

onMounted(() => {
  const myecharts = echarts.init(box.value);
  const pieChart = echarts.init(pie.value);
  const option = {
    title: {
      text: "页面个数图",
      left: "center",
    },
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
      data: ["H5移动端", "COCOS游戏", "PC端活动"],
    },
    series: [
      {
        name: "",
        type: "bar",
        data: [30, 10, 3],
      },
    ],
  };
  const pieOption = {
    title: {
      text: "页面分布图",
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
          { value: 30, name: "移动端H5类" },
          { value: 10, name: "cocos游戏类" },
          { value: 3, name: "后台类【包括官网】" },
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

onMounted(() => {});
</script>
<style lang="scss" scoped>
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
    width: 100%;
    .container-h5 {
      background-color: black;
      color: white;
      padding: 40px 0;
      cursor: pointer;
      &:hover {
        font-weight: 700;
        font-size: 24px;
      }
    }
    .container-pc {
      background-color: green;
      color: white;
      padding: 40px 0;
      cursor: pointer;
      &:hover {
        font-weight: 700;
        font-size: 24px;
      }
    }
    .container-game {
      background-color: rgb(38, 171, 237);
      color: white;
      padding: 40px 0;
      cursor: pointer;
      &:hover {
        font-weight: 700;
        font-size: 24px;
      }
    }
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
