import { App, defineComponent, h, PropType } from "vue";
import commonProps from "../../utils/commonProps";
import JsonChart from "../chart";
import handleBarLine, {
  BarLineDataSource,
  BarLineSettings,
  BarLineType
} from "../common/BarLine";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { EChartsOption } from "echarts/types/dist/shared";

echarts.use(LineChart);

interface JsonLineData {
  Options: EChartsOption;
}

const JsonLine = defineComponent({
  name: "JsonLine",
  data() {
    return {
      Options: {}
    } as JsonLineData;
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Array as PropType<BarLineDataSource[]>,
      default: () => []
    },
    settings: {
      type: Object as PropType<BarLineSettings>,
      default: () => ({})
    }
  },

  render() {
    const { dataSource, settings, ...rest } = this.$props;

    return h(JsonChart, {
      ...rest,
      options: this.Options
    });
  },
  mounted() {
    const { dataSource, settings, ariaShow } = this.$props;
    // 检查是否传类型
    settings.type === BarLineType.LINE
      ? null
      : (settings.type = BarLineType.LINE);
    this.Options = handleBarLine(dataSource, settings, ariaShow);
  },
  watch: {
    $props() {
      const { dataSource, settings, ariaShow } = this.$props;
      // 检查是否传类型
      settings.type === BarLineType.LINE
        ? null
        : (settings.type = BarLineType.LINE);
      this.Options = handleBarLine(dataSource, settings, ariaShow);
    }
  }
});

JsonLine.install = (app: App) => {
  app.component(JsonLine.name, JsonLine);
};

export default JsonLine;
