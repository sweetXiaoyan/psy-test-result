import { ref, defineComponent, onMounted, Ref, PropType } from "vue";
import { Bar, BarOptions } from "@antv/g2plot";
import { SingleChartPropsDefine, defaultHistogramConfig } from "../types";

// const defaultConfig = {
//     maxBarWidth: 20,
//     label: {
//         offsetX: 0,
//         style: {
//             // 设置字体颜色无效
//             opacity: 0.5,
//             fontSize: 10,
//         },
//     },
//     // 提示
//     tooltip: false as const,
//     xAxis: {
//         grid: null, // 不显示网格
//     },
//     yAxis: {},
// };
export default defineComponent({
  name: "Bar",
  props: {
    config: {
      type: Object as PropType<BarOptions>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },
  setup(props) {
    const chartBarRef: Ref = ref(null);

    onMounted(() => {
      const BarPlot = new Bar(chartBarRef.value, {
        ...defaultHistogramConfig,
        ...props.config,
        data: props.value
      });
      BarPlot.render();
    });
    return () => {
      return <div id="chart-bar" ref={chartBarRef}></div>;
    };
  }
});
