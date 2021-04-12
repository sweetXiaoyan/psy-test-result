<template>
  <div style="width:90%; margin:0 auto">
    <!-- 雷达图 -->
    <!-- <json-chart :config="radarConfig" :value="data"></json-chart> -->
    <!-- 散点 -->
    <!-- <json-chart :config="ScatterConfig" :value="ScatterData"></json-chart> -->
    <json-chart :value="ScatterData" :type="1" :result="result"></json-chart>
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
      resultId: 678,
      score2: 0,
      avatarUrl:
        "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9uR9TUDqdwVVBVbBB517glHxPZlFIHRMkyjAPg5POmJUNJdvYvYic4Tu9r5zszrI0fCmG67WXITg/132",
      max: 2,
      buyState: 1,
      nickName: "。",
      extendData:
        '[{"label":"S","max":0,"min":0,"score":1,"value":7},{"label":"D","max":0,"min":0,"score":2,"value":9},{"label":"C","max":0,"min":0,"score":3,"value":8},{"label":"I","max":0,"min":0,"score":4,"value":6}]',
      userName: "张小艳",
      modules: [
        {
          id: 322,
          moduleFlag: "Dominance－支配型/控制者",
          moduleName: "Dominance－支配型/控制者",
          moduleDesc:
            '<p><span style=\\"color: #ff9900;\\">&nbsp;<strong>在情感方面</strong>，D型人一个坚定果敢的人，酷好变化，喜欢控制，干劲十足，独立自主，超级自信。可是，由于比较不会顾及别人的感受，所以显得粗鲁、霸道、没有耐心、穷追不舍、不会放松。D型人不习惯与别人进行感情上的交流，不会恭维人，不喜欢眼泪，匮乏同情心。</span></p>\\n<p><span style=\\"color: #ff9900;\\">&nbsp;&nbsp;&nbsp;&nbsp;<strong>在工作方面，</strong>D型人是一个务实和讲究效率的人，目标明确，眼光全面，组织力强，行动迅速，解决问题不过夜，果敢坚持到底，在反对声中成长。但是，因为过于强调结果， D型人往往容易忽视细节，处理问题不够细致。爱管人、喜欢支使他人的特点使得D型人能够带动团队进步，但也容易激起同事的反感。</span></p>\\n<p><span style=\\"color: #ff9900;\\">&nbsp;&nbsp;&nbsp;&nbsp;<strong>在人际关系方面，</strong>&nbsp;D型人喜欢为别人做主，虽然这样能够帮助别人做出选择，但也容易让人有强迫感。由于关注自己的目标， D型人在乎的是别人的可利用价值。喜欢控制别人，不会说对不起。</span></p>\\n<p><span style=\\"color: #ff9900;\\">&nbsp;&nbsp;&nbsp;<strong>描述性词语：</strong>积级进取、争强好胜、强势、爱追根究底、直截了当、主动的开拓者、坚持意见、自信、直率</span></p>',
          moduleType: 1,
          imgType: 0
        },
        {
          id: 331,
          moduleFlag: "D型",
          moduleName: "D型",
          moduleDesc:
            '<p><img src="http://static1.siyuanren.com/png/ec2a80bffe8c4875ad2eff87c6ab4dc5.png" alt="" width="320" height="340" /></p>',
          moduleType: 0,
          imgType: 0
        },
        {
          id: 323,
          moduleFlag: "改善方案",
          moduleName: "改善方案",
          moduleDesc:
            "<p>关注别人的需要，凡事小心谨慎，注意琐碎的事情，培养耐心和弹性。</p>\\n<p>1、减轻对别人的压力学会放松要缓和。</p>\\n<p>2、尝试接受别人的号召和意见尝试耐心和低调。</p>\\n<p>3、停止争吵，让别人也感觉到放松。</p>\\n<p>4、学习包容、学会道歉、学会坦然接受自己的错误、放开胸怀（当一个力量型的人学会承认错误那么他便成功了）。 &uuml;</p>\\n<p>尝试着发觉他人的需求，用缓和放松的状态去与人沟通，加强关注事物细节的能力，培养耐心与包容，试着去坦然的面对自己的错误，去冷静的思考接受他人的意见，当你能够坦然的承认自己的不足时，那么成功已经离你不远了。</p>",
          moduleType: 1,
          imgType: 0
        },
        {
          id: 330,
          moduleFlag: "性格占比图",
          moduleName: "性格占比图",
          moduleType: 1,
          imgType: 2,
          contentData: '{"D":1,"I":2,"S":3,"C":4}',
          charts: []
        }
      ],
      imgUrl: "http://static1.siyuanren.com/png/1/zhuxingge750_420.png",
      score: 2,
      min: 2,
      startTime: "2021-04-12 17:30:41",
      testId: 100,
      endTime: "2021-04-12 17:31:16",
      testName: "主性格类型测验"
    });
    console.log(result, "------");
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
