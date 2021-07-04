<template>
  <div>
    <div>
      <h3>基础雷达图</h3>
      <json-radar :dataSource="singleData"></json-radar>
    </div>
    <div>
      <h3>多系列雷达图</h3>
      <json-radar :dataSource="data"></json-radar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JsonRadar from "../../packages/Radar";

export default defineComponent({
  components: {
    JsonRadar
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

    return {
      singleData
    };
  }
});
</script>

<style lang="stylus"></style>
