import { ref, defineComponent, onMounted, Ref, PropType } from "vue";
import { Scatter, ScatterOptions } from "@antv/g2plot";

export default defineComponent({
  name: "Scatter",
  props: {
    config: {
      type: Object as PropType<ScatterOptions>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },

  setup(props) {
    const chartScatterRef: Ref = ref(null);
    const newConfig = JSON.parse(JSON.stringify(props.config));
    if (newConfig?.type) {
      delete newConfig.type;
    }
    onMounted(() => {
      const ScatterPlot = new Scatter(chartScatterRef.value, {
        xAxis: {
          min: 0,
          max: 6
        },
        yAxis: {
          min: 0,
          max: 6,
          grid: null
        },
        ...newConfig,
        data: props.value
      });
      ScatterPlot.render();
    });
    return () => {
      return <div id="chart-scatter" ref={chartScatterRef}></div>;
    };
  }
});
