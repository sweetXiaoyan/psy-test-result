import {
  App,
  defineComponent,
  h,
  PropType,
  ref,
  Ref,
  toRefs,
  watch
} from "vue";
import "echarts/lib/chart/radar";
import commonProps from "../../utils/commonProps";
import JsonChar from "../chart";
import { EChartsOption } from "echarts/types/dist/shared";
import handlerRadar, { RadarDataSource, RadarSettings } from "./radar";

const JsonRadar = defineComponent({
  name: "JsonRadar",
  props: {
    ...commonProps,
    dataSource: {
      type: Array as PropType<RadarDataSource[]>,
      default: () => []
    },
    settings: {
      type: Object as PropType<RadarSettings>,
      default: () => ({})
    }
  },
  setup(props) {
    const { dataSource, settings } = toRefs(props);
    const options: Ref<EChartsOption> = ref(
      handlerRadar(dataSource.value, settings.value)
    );
    console.log("---", options);
    watch([dataSource, settings], () => {
      options.value = handlerRadar(dataSource.value, settings.value);
    });

    return {
      Options: options
    };
  },
  render() {
    const { dataSource, settings, ...rest } = this.$props;
    return h(JsonChar, {
      ...rest,
      options: this.Options
    });
  }
});

JsonRadar.install = (app: App) => {
  app.component(JsonRadar.name, JsonRadar);
};

export default JsonRadar;
