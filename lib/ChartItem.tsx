import { defineAsyncComponent, defineComponent, PropType } from "vue";
import { SingleChartPropsDefine, ChartProps, ChartTypes } from "./types";
import Bar from "./charts/Bar";
import Column from "./charts/Column";
import Line from "./charts/Line";
import Pie from "./charts/Pie";
import Scatter from "./charts/Scatter";
import Radar from "./charts/Radar";
import Describe from "./Describe";

const ChartItemWrapper = defineComponent({
  name: "ChartItemWrapper",
  setup(props, { slots }) {
    return () => {
      return (
        <div class="chart-item-wrapper">{slots.default && slots.default()}</div>
      );
    };
  }
});
export default defineComponent({
  name: "ChartItem",
  props: {
    config: {
      type: Object as PropType<ChartProps>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    },
    type: {
      type: String
    }
  },

  setup(props) {
    return () => {
      let Component: any;
      const { type, config } = props;
      switch (type) {
        case ChartTypes.BAR:
          console.log("渲染条形图");
          Component = Bar;
          break;
        case ChartTypes.COLUMN:
          console.log("渲染柱状图");
          Component = Column;
          break;
        case ChartTypes.LINE:
          console.log("渲染折线图");
          Component = Line;
          break;
        case ChartTypes.PIE:
          console.log("渲染饼图");
          if (!config.colorField) {
            config.colorField = "x";
          }
          if (!config.angleField) {
            config.angleField = "y";
          }
          Component = Pie;
          break;
        case ChartTypes.SCATTER:
          console.log("散点图");
          Component = Scatter;
          break;
        case ChartTypes.RADAR:
          console.log("雷达图----");
          Component = Radar;
          break;
        default:
          break;
      }
      return (
        <ChartItemWrapper>
          <Describe
            direction="center"
            title={config.title}
            description={config.description}
          />
          <Component {...props} />
        </ChartItemWrapper>
      );
    };
  }
});
