<template>
  <div style="width:80%; margin:0 auto">
    <!-- 雷达图 -->
    <json-chart :config="radarConfig" :value="data"></json-chart>
    <!-- 散点 -->
    <json-chart :config="ScatterConfig" :value="ScatterData"></json-chart>
    <json-chart :config="config" :value="data"></json-chart>
    <json-chart :config="PieConfig" :value="data"></json-chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import JsonChart from "../lib/JsonChart";
import { ChartProps, PieProps, ChartTypes, TestProp } from "../lib/types";

export default defineComponent({
  name: "App",
  components: {
    JsonChart
  },

  setup(props) {
    const config: Ref<ChartProps> = ref({
      type: "column" as ChartTypes,
      title: {
        visible: true,
        text: "单折线图"
      },
      description: {
        visible: true,
        text: "一个简单的单折线图"
      },
      width: 300,
      height: 220,
      xField: "x",
      yField: "y"
      // color: "#5bf96f",
    });
    const PieConfig = ref({
      type: "pie",
      title: {
        visible: true,
        text: "这是一个饼图"
      },
      description: {
        visible: true,
        text: "这是一个饼图"
      },
      autoFit: true,
      width: 300,
      height: 240,
      // innerRadius:0.6, //圆环内半径
      radius: 0.8,
      colorField: "x",
      angleField: "y",
      color: ["#5B8FF9", "#5AD8A6", "#5D7092", "#F6BD16", "#E8684A"]
    });

    const ScatterConfig = ref({
      type: "scatter" as ChartTypes,
      title: {
        visible: true,
        text: "象限图"
      },
      description: {
        visible: true,
        text: "将散点图改装为象限图"
      },
      width: 300,
      height: 240,
      color: "r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#6397ff",
      size: 6,
      xField: "x",
      yField: "y",
      shape: "circle",
      quadrant: {
        xBaseline: 3,
        yBaseline: 3,
        labels: [
          {
            content: "安全型"
          },
          {
            content: "痴迷型"
          },
          {
            content: "回避型"
          },
          {
            content: "恐惧型"
          }
        ],
        lineStyle: {
          stroke: "#ff7b5b",
          lineWidth: 1,
          lineDash: [3, 4],
          strokeOpacity: 0.7,
          shadowColor: "black",
          shadowBlur: 10,
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          cursor: "pointer"
        },
        regionStyle: [
          {
            fill: "#fbe6e6",
            fillOpacity: 0.3,
            cursor: "pointer"
          },

          {
            fill: "#e4ffdd",
            fillOpacity: 0.3,
            cursor: "pointer"
          },
          {
            fill: "#d5f7ff",
            fillOpacity: 0.3,
            cursor: "pointer"
          },
          {
            fill: "#f2e1ff",
            fillOpacity: 0.3,
            cursor: "pointer"
          }
        ]
      }
    });
    const ScatterData = ref([{ x: 4, y: 5 }]);

    const radarConfig = ref({
      type: "radar",
      title: {
        visible: true,
        text: "雷达图"
      },
      description: {
        visible: true,
        text: "将散点图改装为象限图"
      },
      width: 300,
      height: 240,
      radius: 0.6,
      xField: "x",
      yField: "y"
      // color: ["#5B8FF9"],
      // smooth:true,
      // lineStyle: {
      //     fill: "#5B8FF9",
      //     fillOpacity: 0.6,
      //     stroke: "black",
      //     lineWidth: 0,
      //     shadowBlur: 10,
      //     shadowOffsetX: 5,
      //     shadowOffsetY: 5,
      //     cursor: "pointer",
      // }
    });
    const data = ref([
      {
        x: "家具家电",
        y: 263
      },
      {
        x: "粮油副食",
        y: 170
      },
      {
        x: "生鲜蔬菜",
        y: 952
      },
      {
        x: "美容护肤",
        y: 157
      },
      {
        x: "食品饮料",
        y: 740
      },
      {
        x: "家庭日用",
        y: 694
      }
    ]);

    return {
      config,
      data,
      PieConfig,
      ScatterConfig,
      ScatterData,
      radarConfig
    };
  }
});
</script>
