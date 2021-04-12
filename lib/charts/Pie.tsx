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
        label: {
          type: "outer",
          content: "{name}: {percentage}"
        },
        legend: {
          // 图例
          layout: "horizontal",
          position: "bottom",
          flipPage: false,
          itemHeight: 10
        },
        autoFit: true,
        width: 300,
        height: 240,
        // innerRadius:0.6, //圆环内半径
        radius: 0.8,
        // colorField: "x",
        // angleField: "y",
        color: ["#5B8FF9", "#5AD8A6", "#F6BD16", "#E8684A", "#5D7092"],
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
