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
        size: 6,
        width: 300,
        shape: "circle",
        quadrant: {
          xBaseline: 3,
          yBaseline: 3,
          labels: [
            {
              content: "安全型"
            },
            {
              content: "痴迷型"
            },
            {
              content: "回避型"
            },
            {
              content: "恐惧型"
            }
          ],
          lineStyle: {
            stroke: "#ff7b5b",
            lineWidth: 1,
            lineDash: [3, 4],
            strokeOpacity: 0.7,
            shadowColor: "black",
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            cursor: "pointer"
          },
          regionStyle: [
            {
              fill: "#fbe6e6",
              fillOpacity: 0.3,
              cursor: "pointer"
            },

            {
              fill: "#e4ffdd",
              fillOpacity: 0.3,
              cursor: "pointer"
            },
            {
              fill: "#d5f7ff",
              fillOpacity: 0.3,
              cursor: "pointer"
            },
            {
              fill: "#f2e1ff",
              fillOpacity: 0.3,
              cursor: "pointer"
            }
          ]
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
