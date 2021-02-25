<template>
  <div style="width:90%; margin:0 auto">
    <!-- 雷达图 -->
    <!-- <json-chart :config="radarConfig" :value="data"></json-chart> -->
    <!-- 散点 -->
    <!-- <json-chart :config="ScatterConfig" :value="ScatterData"></json-chart> -->
    <json-chart :value="ScatterData" :type="0" :result="result"></json-chart>
    <!-- <json-chart :config="config" :value="data"></json-chart>
        <json-chart :config="PieConfig" :value="data"></json-chart> -->
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
    const result = ref({
      resultId: 677,
      score2: 3,
      max: 2,
      nickName: "。",
      userName: "张小艳",
      modules: [
        {
          id: 30,
          moduleName: "配象限图例",
          moduleDesc: "配象限图例",
          moduleType: 0,
          imgType: 1,
          charts: [
            {
              id: 1,
              chartName: "安全型",
              chartMin: 1,
              chartMax: 3,
              chartMin2: 3,
              chartMax2: 7,
              moduleId: 30
            },
            {
              id: 2,
              chartName: "先占型",
              chartMin: 3,
              chartMax: 7,
              chartMin2: 3,
              chartMax2: 7,
              moduleId: 30
            },
            {
              id: 3,
              chartName: "恐惧型",
              chartMin: 3,
              chartMax: 7,
              chartMin2: 1,
              chartMax2: 3,
              moduleId: 30
            },
            {
              id: 4,
              chartName: "回避型",
              chartMin: 1,
              chartMax: 3,
              chartMin2: 1,
              chartMax2: 3,
              moduleId: 30
            }
          ]
        },
        {
          id: 13,
          moduleName: "恐惧型",
          moduleDesc: "在人际关系中焦虑感和回避感都较高",
          moduleType: 0,
          imgType: 0
        },
        {
          id: 17,
          moduleName: "恐惧型",
          moduleDesc:
            "内心渴望他人的接纳，但又非常不接受自己的不完美，通常会表现出徘徊和拒绝。同时与伴侣的相处中有时可能会感到困惑，会觉得自己的伴侣非常敏感，一件小事情就会被触发非常强烈的反应。也有可能又会觉得对方非常的冷漠，遇到问题就只会包裹自己而不知道该怎样去解决。\r\n自我评价较为消极，怕被拒绝，或担心自己离不开对方，因而避免和他人建立亲密关系。但进入亲密关系之后，又担心被抛弃，时常感到焦虑。对方不在身边时不安，在身边又有点厌烦。所以虽然你的最深层情绪时担心被抛弃，但是表现出来的态度却可能让伴侣感到你占有欲强，在亲密关系中，掌控的程度与能够获得的安全感、自我价值感成正比，同时追求平静与轻松。\r\n与他人有冲突时，更喜欢以间接方式表达不满，如疏远冷淡。在一段关系中，较为容易成为“逃兵”，想要先放手，以此缓解内心的焦虑和被控制的感觉。对亲密关系既渴望又恐惧的心态，让自己表现得若即若离，总在亲密与疏远之间挣扎徘徊。",
          moduleType: 1,
          imgType: 0
        },
        {
          id: 29,
          moduleName: "恐惧型",
          moduleDesc:
            "试着接纳、爱护自己，正视自己的内心，用心去体会、理解自己内心的想法，尝试着去想为什么会有这样的想法，然后找到你所能理解的角度去接纳它，这是建立自信心的一个好的开始，同时遇到问题时要做到有效的沟通，其中沟通重点可以放在客观的陈述自己内心的想法与感受，减少意气化得相互指责，尝试着多从“我们”的角度去阐述问题，而不仅仅是“我”，同时在生活中可以尝试降低对于每件事物的预期，相信这样的你会获得更好的成长与改变。",
          moduleType: 1,
          imgType: 0
        }
      ],
      score: 2,
      min: 0,
      startTime: "2021-02-24 14:32:22",
      testId: 98,
      endTime: "2021-02-24 14:32:43",
      testName: "你的依恋类型是什么"
    });
    const config: Ref<ChartProps> = ref({
      type: 3,
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
      config,
      data,
      PieConfig,
      ScatterConfig,
      ScatterData,
      radarConfig,
      result
    };
  }
});
</script>
