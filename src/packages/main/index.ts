import JsonBar from "../Bar";
import JsonPie from "../Pie";
import JsonLine from "../Line";
import JsonRadar from "../Radar";
import { ObjectKey, ChartTypes } from "../../utils/type";
import { defineComponent, h, App } from "vue-demi";
import { PieDataSource, PieSettings } from "../pie/pie";
import { BarLineDataSource, BarLineSettings } from "../common/BarLine";
import { RadarDataSource, RadarSettings } from "../Radar/radar";

const JCharts = defineComponent({
  name: "JCharts",
  data() {
    return {};
  },
  props: {
    type: {
      type: Number || String
    },
    percent: {
      // 以百分比显示
      type: Boolean,
      default: false
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  render() {
    let { type, dataSource, settings, ...rest } = this.$props;
    if (!type) {
      console.warn("使用JCharts 必须传入type");
      return;
    }
    if (isNaN(Number(type))) {
      console.warn("参数type不正确");
      return;
    }

    switch (Number(type)) {
      case ChartTypes.PIE:
        return h(JsonPie, {
          ...rest,
          dataSource: dataSource as PieDataSource<ObjectKey>[],
          settings: settings as PieSettings
        });
      case ChartTypes.BAR:
        return h(JsonBar, {
          ...rest,
          dataSource: dataSource as BarLineDataSource[],
          settings: settings as BarLineSettings
        });
      case ChartTypes.COLUMN:
        return h(JsonBar, {
          ...rest,
          dataSource: dataSource as BarLineDataSource[],
          settings: settings as BarLineSettings
        });
      case ChartTypes.LINE:
        return h(JsonLine, {
          ...rest,
          dataSource: dataSource as BarLineDataSource[],
          settings: settings as BarLineSettings
        });
      case ChartTypes.RADAR:
        return h(JsonRadar, {
          ...rest,
          dataSource: dataSource as RadarDataSource[],
          settings: settings as RadarSettings
        });
      default:
        return h(JsonPie, {
          ...rest,
          dataSource: dataSource as PieDataSource<ObjectKey>[],
          settings: settings as PieSettings
        });
    }
  }
});

JCharts.install = (app: App) => {
  app.component(JCharts.name, JCharts);
};

export default JCharts;
