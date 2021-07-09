import { defineComponent, h, PropType, App, Ref } from "vue";
import commonProps from "../../utils/commonProps";
import JsonChart from "../chart";
import * as echarts from "echarts/core";
import { EChartsOption } from "echarts/types/dist/shared";
import { PieChart } from "echarts/charts";

import handlePie, { PieDataSource, PieSettings } from "./pie";

echarts.use([PieChart]);

interface JsonPieData {
  Options: EChartsOption;
}

const JsonPie = defineComponent({
  name: "JsonPie",
  data() {
    return {
      Options: {}
    } as JsonPieData;
  },
  props: {
    ...commonProps,
    dataSource: {
      type: Array as PropType<PieDataSource<{}>[]>,
      default: () => ({})
    },
    settings: {
      type: Object as PropType<PieSettings>,
      default: () => ({})
    }
  },

  render() {
    const { dataSource, settings, ...rest } = this.$props;

    return h(JsonChart, {
      ref: "JsonChartRef",
      ...rest,
      options: this.Options
    });
  },
  methods: {
    resize() {
      (this.$refs["JsonChartRef"] as Ref & { resize }).resize();
    }
  },
  mounted() {
    const { dataSource, settings, ariaShow } = this.$props;

    this.Options = handlePie(dataSource, settings, ariaShow);
  },

  watch: {
    $props() {
      const { dataSource, settings, ariaShow } = this.$props;

      this.Options = handlePie(dataSource, settings, ariaShow);
    }
  }
});

JsonPie.install = (app: App) => {
  app.component(JsonPie.name, JsonPie);
};
export default JsonPie;
