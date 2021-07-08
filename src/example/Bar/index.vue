<template>
  <div>
    <div>
      <h3>基础柱状图</h3>
      <json-bar :dataSource="singleData"></json-bar>
    </div>

    <div>
      <h3>正负值柱状图</h3>
      <json-bar
        :dataSource="negativeData"
        :settings="{ brush: { xAxisIndex: 0 } }"
      ></json-bar>
    </div>
    <div>
      <h3>双柱状图</h3>
      <json-bar :dataSource="data"></json-bar>
    </div>
    <div>
      <h3>显示百分百</h3>
      <json-bar :dataSource="data1"></json-bar>
    </div>
    <div>
      <h3>使用Ycharts实现</h3>
      <j-charts type="5" :dataSource="data1"></j-charts>
    </div>
  </div>
</template>

<script lang="ts">
import JsonBar from "../../packages/Bar";
import { defineComponent } from "vue";
import JCharts from "../../packages/main/index";

export default defineComponent({
  components: {
    JsonBar,
    JCharts
  },
  setup(props) {
    const singleData = [
      {
        label: "余杭人数",
        value: 1200
      },
      {
        label: "西湖人数",
        value: 3421
      },
      { label: "下城人数", value: 2993 },
      { label: "萧山人数", value: 3421 }
    ];
    const negativeData = [
      // {
      //     label: "余杭人数",
      //     value: 1200,
      // },
      {
        label: "西湖人数",
        value: -3421
      }
      // { label: "下城人数", value: -2993 },
      // { label: "萧山人数", value: -3421 },
    ];
    const data = [
      {
        series: "男",
        label: "余杭人数",
        value: 1200
      },
      {
        series: "男",
        label: "西湖人数",
        value: 3421
      },
      { series: "男", label: "下城人数", value: 2993 },
      { series: "男", label: "萧山人数", value: 3421 },
      {
        series: "女",
        label: "余杭人数",
        value: 1100
      },
      {
        series: "女",
        label: "西湖人数",
        value: 3121
      },
      { series: "女", label: "下城人数", value: 1993 },
      { series: "女", label: "萧山人数", value: 1421 }
    ];
    const data1 = [
      {
        series: "男",
        label: "余杭人数",
        value: 1200,
        percent: "10%"
      },
      {
        series: "男",
        label: "西湖人数",
        value: 3421,
        percent: "31%"
      },
      {
        series: "男",
        label: "下城人数",
        value: 2993,
        percent: "27%"
      },
      {
        series: "男",
        label: "萧山人数",
        value: 3421,
        percent: "31%"
      },
      {
        series: "女",
        label: "余杭人数",
        value: 1100,
        percent: "14%"
      },
      {
        series: "女",
        label: "西湖人数",
        value: 3121,
        percent: "40%"
      },
      {
        series: "女",
        label: "下城人数",
        value: 1993,
        percent: "26%"
      },
      {
        series: "女",
        label: "萧山人数",
        value: 1421,
        percent: "18%"
      }
    ];

    return {
      data,
      data1,
      singleData,
      negativeData
    };
  }
});
</script>

<style lang="stylus"></style>
