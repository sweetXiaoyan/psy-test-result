import { App, defineComponent, h, PropType } from "vue";
import commonProps from "../../utils/commonProps";
import JsonChart from "../chart";
import handleBarLine, {
  BarLineDataSource,
  BarLineSeriesOption,
  BarLineSettings,
  BarLineType
} from "../common/BarLine";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { computedPercent } from "../../utils/utils";
import { EChartsOption } from "echarts/types/dist/shared";
echarts.use(BarChart);

interface JsonBarData {
  Options: EChartsOption;
}

const JsonBar = defineComponent({
  name: "JsonBar",
  props: {
    ...commonProps,
    percent: {
      // 是否一百分比展示
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array as PropType<BarLineDataSource[]>,
      default: () => []
    },
    settings: {
      type: Object as PropType<BarLineSettings>,
      default: () => ({})
    }
  },
  data() {
    return {
      Options: {}
    } as JsonBarData;
  },
  render() {
    let { dataSource, settings, percent, ...rest } = this.$props;
    if (percent) {
      dataSource = computedPercent(dataSource);
    }
    return h(JsonChart, {
      ...rest,
      options: this.Options
    });
  },
  mounted() {
    const { dataSource, settings, ariaShow } = this.$props;
    // 检查是否传类型
    settings.type === BarLineType.BAR
      ? null
      : (settings.type = BarLineType.BAR);

    this.Options = handleBarLine(dataSource, settings, ariaShow);
  },
  watch: {
    $props() {
      const { dataSource, settings, ariaShow } = this.$props;
      // 检查是否传类型
      settings.type === BarLineType.BAR
        ? null
        : (settings.type = BarLineType.BAR);
      this.Options = handleBarLine(dataSource, settings, ariaShow);
    }
  }
});

export default JsonBar;
