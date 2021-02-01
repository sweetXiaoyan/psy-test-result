import { defineComponent, onMounted, PropType } from "vue";
import {
  CommonChartPropsDefine,
  ConfigProps,
  PieProps,
  ChartProps
} from "./types";
import ChartItem from "./ChartItem";
import "./common.less";
export default defineComponent({
  name: "JsonChart",
  props: {
    config: {
      type: Object as PropType<ChartProps>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },

  setup(props) {
    // 处理 config数据

    return () => {
      const { value, config } = props;
      if (!config.xField) {
        config.xField = "x";
      }
      if (!config.yField) {
        config.xField = "y";
      }
      if (!config.title) {
        config.title = {
          visible: false
        };
      }
      const newConfig: ChartProps = config;
      return <ChartItem type={config.type} config={newConfig} value={value} />;
    };
  }
});
