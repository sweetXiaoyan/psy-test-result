import { ref, defineComponent, onMounted, Ref, PropType } from "vue";
import { Line, LineOptions } from "@antv/g2plot";
import { SingleChartPropsDefine, defaultHistogramConfig } from "../types";

export default defineComponent({
  name: "Line",
  props: {
    config: Object as PropType<LineOptions>,
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },
  setup(props) {
    const chartLineRef: Ref = ref(null);

    onMounted(() => {
      const LinePlot = new Line(chartLineRef.value, {
        // ...defaultHistogramConfig,
        ...props.config,
        data: props.value
      });
      LinePlot.render();
    });
    return () => {
      return <div id="chart-column" ref={chartLineRef}></div>;
    };
  }
});
