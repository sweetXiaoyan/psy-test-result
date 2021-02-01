import { ref, defineComponent, onMounted, Ref, PropType } from "vue";
import { Radar, RadarOptions } from "@antv/g2plot";

export default defineComponent({
  name: "Radar",
  props: {
    config: {
      type: Object as PropType<RadarOptions>,
      required: true
    },
    value: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },
  setup(props) {
    const chartRadarRef: Ref = ref(null);

    onMounted(() => {
      const RadarPlot = new Radar(chartRadarRef.value, {
        point: {
          color: "green",
          size: 2,
          shape: "circle"
        },
        tooltip: false,

        area: {
          color: "#5B8FF9"
        },
        xAxis: {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null
              }
            }
          }
        },
        yAxis: {
          grid: {
            line: {
              type: "line",
              style: {
                lineDash: null
              }
            }
          }
        },

        ...props.config,
        data: props.value
      });
      RadarPlot.render();
    });
    return () => {
      return <div id="radar-column" ref={chartRadarRef}></div>;
    };
  }
});
