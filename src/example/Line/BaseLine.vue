<template>
  <div>
    <div>
      <h3>基础折线图</h3>
      <json-line :dataSource="singleData"></json-line>
    </div>
    <div>
      <h3>双折线图</h3>
      <json-line :dataSource="data"></json-line>
    </div>
    <div>
      <h3>使用Ycharts实现</h3>
      <j-charts type="3" :dataSource="data"></j-charts>
    </div>
  </div>
</template>

<script lang="ts">
import JsonLine from "../../packages/Line";
import JCharts from '../../packages/main/index'
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    JsonLine,
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

    return {
      data,
      singleData
    };
  }
});
</script>

<style lang="stylus"></style>
