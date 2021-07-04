import { defineComponent, h, CSSProperties, PropType, App } from "vue";
import commonProps from "../../utils/commonProps";
import { bind, clear } from "size-sensor";

import { throttle } from "../../utils/utils";
import { defaultTheme } from "../../utils/theme";
import { ObjectKey } from "../../utils/type";

import { EChartsOption } from "echarts/types/dist/shared";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  LegendComponent
]);

// 默认样式
const defaultStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: "300px"
};

const CHART_INSTANCES = new WeakMap<
  Record<string, any>,
  echarts.ECharts | null
>();
const JsonChart = defineComponent({
  props: {
    ...commonProps,
    options: {
      type: Object as PropType<EChartsOption>,
      required: true
    }
  },

  methods: {
    initChart(el: HTMLDivElement): Promise<echarts.ECharts> {
      const renderer = this.renderer;
      return new Promise(resolve => {
        this.$nextTick(() => {
          const currentTheme = this.theme || defaultTheme;
          // 设置主题
          echarts.registerTheme(currentTheme.name, currentTheme.value);

          const chartInstance = echarts.init(el, currentTheme.name, {
            renderer,
            width: undefined,
            height: undefined
          });

          CHART_INSTANCES.set(this, chartInstance);
          resolve(CHART_INSTANCES.get(this)!);
        });
      });
    },

    setOption() {
      if (!CHART_INSTANCES.get(this)) {
        return;
      }

      const notMerge = this.notMerge;
      const lazyUpdate = this.lazyUpdate;
      const silent = this.silent;
      const options = this.options;

      const chart = CHART_INSTANCES.get(this);

      chart?.setOption(options, {
        notMerge,
        lazyUpdate,
        silent
      });
    },
    // 调用resize
    resize() {
      CHART_INSTANCES.get(this)?.resize();
    },
    getInstance() {
      return CHART_INSTANCES.get(this)!;
    },
    bindEvents(instance: echarts.ECharts, events: ObjectKey<Function>) {
      const _bindEvent = (eventName: string, callback: Function) => {
        if (typeof eventName == "string" && typeof callback == "function") {
          // observerEvent(instance, eventName, callback);
          instance.on(eventName, (params: any) => {
            callback(params, instance);
          });
        }
      };
      for (const eventName in events) {
        if (Object.prototype.hasOwnProperty.call(events, eventName)) {
          _bindEvent(eventName, events[eventName]);
        }
      }
    },
    // 销毁实例，实例销毁后无法再被使用。
    dispose() {
      // 绑定了resize监听
      if (this.resizeAble) {
        clear(this.$el);
      }
      CHART_INSTANCES.get(this)?.dispose();
      CHART_INSTANCES.set(this, null);
      CHART_INSTANCES.delete(this);
    }
  },
  beforeUnmount() {
    this.dispose();
  },
  mounted() {
    this.initChart(this.$el as HTMLDivElement).then(instance => {
      this.setOption();

      // 绑定事件
      this.bindEvents(instance, this.events);

      if (this.resizeAble) {
        // 绑定一个 resize 监听方法到 el 元素上
        bind(this.$el as HTMLDivElement, throttle(this.resize, 200));
      }
    });
  },
  created() {
    CHART_INSTANCES.set(this, null);
  },
  watch: {
    options: {
      deep: true,
      handler(v) {
        if (v) {
          this.setOption();
        }
      }
    }
  },
  render() {
    const { style } = this;
    const initStyle = Object.assign({}, defaultStyle, style || {});
    return h("div", {
      style: initStyle
    });
  }
});

JsonChart.install = (app: App) => {
  app.component(JsonChart.name, JsonChart);
};

export default JsonChart;
