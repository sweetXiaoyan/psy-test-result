import { ref, defineComponent, onMounted, Ref, PropType } from "vue";
import { Pie, PieOptions } from "@antv/g2plot";
import { SingleChartPropsDefine } from "../types";
export default defineComponent({
  name: "Pie",
  props: {
    config: {
      type: Object as PropType<PieOptions>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },
  setup(props) {
    const chartPieRef: Ref = ref(null);

    onMounted(() => {
      const PiePlot = new Pie(chartPieRef.value, {
        tooltip: false,
        legend: {
          // 图例
          layout: "horizontal",
          position: "bottom",
          flipPage: false,
          itemHeight: 10
        },
        ...props.config,
        data: props.value
      });
      PiePlot.render();
    });
    return () => {
      return <div id="chart-column" ref={chartPieRef}></div>;
    };
  }
});
