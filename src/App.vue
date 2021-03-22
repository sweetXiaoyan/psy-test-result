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
      resultId: 674,
      score2: 1,
      avatarUrl:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9uR9TUDqdwVVBVbBB517glHxPZlFIHRMkyjAPg5POmJUNJdvYvYic4Tu9r5zszrI0fCmG67WXITg/132",
      max: 7,
      extendData:
        '[{"label":"S","max":0,"min":0,"score":1,"value":1},{"label":"D","max":0,"min":0,"score":2,"value":16},{"label":"C","max":0,"min":0,"score":3,"value":13},{"label":"I","max":0,"min":0,"score":4,"value":0}]',
      nickName: "。",
      userName: "张小艳",
      modules: [
        {
          id: 30,
          moduleName: "配象限图例",
          moduleDesc: "配象限图例",
          moduleType: 0,
          imgType: 2,
          contentData: { minY: 1, minX: 1, maxY: 7, maxX: 7 },
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
          id: 10,
          moduleName: "",
          moduleDesc:
            '<p><img src="http://static1.siyuanren.com/jpg/83f39a162cad494a9b5f1e53bb72f114.jpg" alt="" width="640" height="1000" /></p>',
          moduleType: 0,
          imgType: 0
        },
        {
          id: 14,
          moduleName: "安全型",
          moduleDesc:
            "能够平静坦然的处理与他人的关系，并且可以建立起相对独立却又亲密的关系。不会担心被抛弃。对自己和身边的人大部分时候都会做出正面的评价，有自己的价值感，认为自己值得爱与被爱，他人也值得去爱和信任。",
          moduleType: 1,
          imgType: 0
        },
        {
          id: 26,
          moduleName: "安全型",
          moduleDesc:
            "对于安全型的人来说相对最容易对亲密关系感到满意，恋爱关系也往往能够持续更长的时间，彼此信任，彼此承诺，互相依赖，并且在压力大的时候更倾向于向同伴求助，也更愿意在对方有压力时提供支持。你总能成为身边人的支柱和依靠，你只需要注意明确什么是自己的想法，什么是集体/他人的想法，做到这一点后，找到自己的方向努力向前就好。",
          moduleType: 1,
          imgType: 0
        }
      ],
      score: 3,
      min: 3,
      startTime: "2021-02-26 16:42:21",
      testId: 98,
      endTime: "2021-02-26 16:51:20",
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
