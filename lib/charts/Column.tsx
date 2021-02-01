import { ref, defineComponent, onMounted, Ref, PropType } from "vue";
import { Column, ColumnOptions } from "@antv/g2plot";
import { SingleChartPropsDefine, defaultHistogramConfig } from "../types";

export default defineComponent({
  name: "Column",
  props: {
    config: {
      type: Object as PropType<ColumnOptions>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },
  setup(props) {
    const chartColumnRef: Ref = ref(null);

    onMounted(() => {
      const ColumnPlot = new Column(chartColumnRef.value, {
        ...defaultHistogramConfig,
        ...props.config,
        data: props.value
      });
      ColumnPlot.render();
    });
    return () => {
      return <div id="chart-column" ref={chartColumnRef}></div>;
    };
  }
});
