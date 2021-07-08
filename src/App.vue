<template>
  <div style="width:90%; margin:0 auto">
    <!-- 雷达图 -->
    <!-- <json-chart :config="radarConfig" :value="data"></json-chart> -->
    <!-- 散点 -->
    <!-- <json-chart :config="ScatterConfig" :value="ScatterData"></json-chart> -->
    <!-- <json-chart :type="1" :result="result"></json-chart> -->
    <!-- <json-chart :config="config" :value="data"></json-chart> -->
    <!-- <json-chart :config="PieConfig" :value="data"></json-chart>  -->
    <!-- 柱状图 type 不传， 就不用去过滤简单结果，-->
    <!-- <json-chart :result="barResult"></json-chart> -->
  </div>

  <div>
    <base-pie></base-pie>
    <base-line></base-line>
    <base-bar></base-bar>
    <base-radar></base-radar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
// import JsonChart from "../lib/JsonChart";
// import { ChartProps, PieProps, ChartTypes, TestProp } from "../lib/types";
import BasePie from "./example/Pie/BasePie.vue";
import BaseLine from "./example/Line/BaseLine.vue";
import BaseBar from "./example/Bar/index.vue";
import BaseRadar from "./example/Radar/BaseRadar.vue";

export default defineComponent({
  name: "App",
  components: {
    // JsonChart,
    BasePie,
    BaseBar,
    BaseLine,
    BaseRadar
  },

  setup(props) {
    // 柱状图 参数
    const barResult = {
      extendData: JSON.stringify([
        { label: "精确", value: 50, type: "你" },
        { label: "耐心", value: 66.75, type: "你" },
        { label: "乐观", value: 21.5, type: "你" },
        { label: "主动", value: 76, type: "你" },
        { label: "精确", value: 57.1428571429, type: "理想伴侣" },
        { label: "耐心", value: 71.4285714286, type: "理想伴侣" },
        { label: "乐观", value: 53.5714285714, type: "理想伴侣" },
        { label: "主动", value: 53.5714285714, type: "理想伴侣" }
      ]),
      imgType: 4
    };
    const result = ref({
      avatarUrl:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9uR9TUDqdwVVBVbBB517glHxPZlFIHRMkyjAPg5POmJUNJdvYvYic41WibWIdlmuyrVkfCNjXhlVA/132",
      buyState: 1,
      endTime: "2021-04-12 16:26:29",
      extendData: '{"score":2,"score2":2}',
      imgUrl: "http://static1.siyuanren.com/png/1/zhuxingge750_420.png",
      max: 2,
      min: 0,
      modules: [
        {
          id: 12,
          imgType: 0,
          moduleDesc:
            '<p style="text-align: center;"><img src="https://static1.siyuanren.com/png/bb3250ed90744767b64c817a7b997099.png" alt="" width="320" height="335" /></p>',
          moduleFlag: "回避型",
          moduleName: "回避型",
          moduleType: 0
        },
        {
          id: 16,
          imgType: 0,
          moduleDesc:
            "<p>对于亲密的接触相对来说较为抵触，难以短时间内信任、依赖对方，相对独立，因此常常让爱人陷入焦虑。对于预感不佳的结果往往会提前进行&ldquo;躲避&rdquo;，通常会在关系还没确定就开始退缩，觉得不太靠谱，刻意的亲近可能会让人感到紧张。对自己的评价是积极的，有一定的价值感，依赖他人不是一个&ldquo;必要条件&rdquo;，因此不太在乎他人是否喜欢自己。在生活中希望对身边的一切都保持有边界，反对依靠。对于伴侣，不期望对方为自己付出什么。在矛盾发生时，处理问题的方式往往是沉默的冷战。</p>",
          moduleFlag: "回避型",
          moduleName: "回避型",
          moduleType: 1
        },
        {
          id: 28,
          imgType: 0,
          moduleDesc:
            "<p>改善方案</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;可以尝试找一个机会，伴侣彼此冷静坦然的探讨一下自己内心的想法，不需要对彼此的想法做出任何的正面或负面的评价，只需要平静的陈述自己的想法、感受，将内心的剧本客观陈述，这样一个倾诉与感受的过程会使你们能够更快的理解、接纳与放松自己，从而让自己在关系中更加的从容，能够更快的成长，在开始尝试的时候或许会不时地跳回到自己平时的&ldquo;角色&rdquo;，没关系的，只要及时的察觉，慢慢来，你肯定能看到自己的成长。</p>",
          moduleFlag: "回避型",
          moduleName: "回避型",
          moduleType: 1
        },
        {
          contentData: '{"minY":1,"minX":1,"maxY":7,"maxX":7}',
          id: 30,
          imgType: 1,
          moduleDesc: "配象限图例",
          moduleFlag: "配象限图例",
          moduleName: "配象限图例",
          moduleType: 1,
          charts: [
            {
              chartMax: 3,
              chartMax2: 7,
              chartMin: 1,
              chartMin2: 3,
              chartName: "安全型",
              id: 1,
              moduleId: 30
            },
            {
              chartMax: 7,
              chartMax2: 7,
              chartMin: 3,
              chartMin2: 3,
              chartName: "先占型",
              id: 2,
              moduleId: 30
            },
            {
              chartMax: 7,
              chartMax2: 3,
              chartMin: 3,
              chartMin2: 1,
              chartName: "恐惧型",
              id: 3,
              moduleId: 30
            },
            {
              chartMax: 3,
              chartMax2: 3,
              chartMin: 1,
              chartMin2: 1,
              chartName: "回避型",
              id: 4,
              moduleId: 30
            }
          ]
        }
      ],
      nickName: "。",
      resultId: 676,
      score: 2,
      score2: 2,
      startTime: "2021-04-12 16:26:09",
      testId: 98,
      testName: "你的依恋类型是什么",
      userName: "张小艳"
    });
    // const config: Ref<ChartProps> = ref({
    //   type: 3,
    //   title: {
    //     visible: true,
    //     text: "单折线图"
    //   },
    //   description: {
    //     visible: true,
    //     text: "一个简单的单折线图"
    //   },
    //   width: 300,
    //   height: 220,
    //   xField: "x",
    //   yField: "y"
    //   // color: "#5bf96f",
    // });
    const PieConfig = ref({
      type: 5,
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
      type: 1,
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
      type: 6,
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
    //   config,
      data,
      PieConfig,
      ScatterConfig,
      ScatterData,
      radarConfig,
      result,
      barResult
    };
  }
});
</script>
