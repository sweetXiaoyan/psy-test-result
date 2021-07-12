<template>
  <div>
    <div style="width:80%; margin:0 auto">
      <h3>基础雷达图</h3>
      <json-radar :dataSource="singleData"></json-radar>
    </div>
    <div>
      <h3>多系列雷达图</h3>
      <json-radar :dataSource="data"></json-radar>
    </div>
    <div>
      <h3>使用Jchart实现</h3>
      <j-charts type="6" :dataSource="data"></j-charts>
    </div>
    <div>
      <h3>使用Jchart实现</h3>
      <j-charts type="6" :dataSource="data2"></j-charts>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JsonRadar from "../../packages/Radar";
import JCharts from "../../packages/main/index";
export default defineComponent({
  components: {
    JsonRadar,
    JCharts
  },
  setup(props) {
    const singleData = [
      {
        label: "指标1",
        value: 10
      },
      {
        label: "指标2",
        value: 12
      },
      {
        label: "指标3",
        value: 8
      },
      {
        label: "指标4",
        value: 13
      },
      {
        label: "指标5",
        value: 9
      }
    ];

    const data = [
      {
        label: "指标1",
        value: 10,
        series: "小汽车排放"
      },
      {
        label: "指标2",
        value: 12,
        series: "小汽车排放"
      },
      {
        label: "指标3",
        value: 8,
        series: "小汽车排放"
      },
      {
        label: "指标4",
        value: 13,
        series: "小汽车排放"
      },
      {
        label: "指标1",
        value: 9,
        series: "飞机排放"
      },
      {
        label: "指标2",
        value: 23,
        series: "飞机排放"
      },
      {
        label: "指标3",
        value: 13,
        series: "飞机排放"
      },
      {
        label: "指标4",
        value: 20,
        series: "飞机排放"
      }
    ];
    const data2 = [
      { label: "主导力量", value: 37, percent: 37 },
      { label: "活泼友善", value: 87, percent: 87 },
      { label: "稳健和平", value: 60, percent: 60 },
      { label: "精确顺从", value: 20, percent: 20 }
    ];

    return {
      singleData,
      data,
      data2
    };
  }
});
</script>

<style lang="stylus"></style>
