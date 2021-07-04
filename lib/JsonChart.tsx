import { defineComponent, defineAsyncComponent, Fragment } from "vue";
import { ChartTypes, ResultModule } from "./types";
import "./common.less";
import { useStructure } from "./useStructure";
// import Bar from "./charts/Bar";
import Column from "./charts/Column";
// import Line from "./charts/Line";
// import Radar from "./charts/Radar";
import Pie from "./charts/Pie";
import Scatter from "./charts/Scatter";
import Bar from "./charts/Bar";
import Radar from "./charts/Radar";
import Describe from "./Describe";

interface ChartWrapperProps {
  config: ResultModule;
}

export default defineComponent({
  name: "JsonChart",
  props: {
    type: {
      type: Number
    },
    result: {
      type: Object,
      required: true
    },
    value: {
      type: Array //as PropType<Record<string, any>[]>
      // required: true,
    }
  },

  setup(props) {
    const HtmlWrapper = ({ title, content }: any) => {
      return (
        <div class="text_module">
          {title ? <span class="title">{title}</span> : null}
          <div class="content" v-html={content}></div>
        </div>
      );
    };
    const ChartModule = ({ config }: ChartWrapperProps) => {
      let Component: any;
      const { chartData, chartConfig } = useStructure(config, props.result);
      switch (chartConfig.type) {
        case ChartTypes.SCATTER:
          console.log("散点图");
          //   Component = defineAsyncComponent(() => import("./charts/Scatter"));
          Component = Scatter;
          break;
        case ChartTypes.BAR:
          console.log("渲染条形图");
          Component = Bar;
          //  defineAsyncComponent(() =>
          //     import("./charts/Bar")
          // );
          break;
        case ChartTypes.COLUMN:
          console.log("渲染柱状图");
          // Component = defineAsyncComponent(() =>
          //     import("./charts/Column")
          // );
          Component = Column;
          break;
        case ChartTypes.LINE:
          console.log("渲染折线图");
          Component = defineAsyncComponent(() => import("./charts/Line"));
          break;
        case ChartTypes.PIE:
          console.log("渲染饼图");
          // Component = defineAsyncComponent(() =>
          //     import("./charts/Pie")
          // );
          Component = Pie;
          console.log(Component, "这里是Pie 2号");
          break;
        case ChartTypes.RADAR:
          console.log("雷达图----");
          Component = Radar;
          // defineAsyncComponent(() =>import("./charts/Radar"));
          break;
        default:
          break;
      }
      return (
        <Fragment>
          <Describe
            direction="center"
            title={chartConfig.title}
            description={chartConfig.description}
          />
          <Component
            type={chartConfig.type}
            config={chartConfig}
            value={chartData}
          />
        </Fragment>
      );
    };
    const modulesWrapper = () => {
      let { modules } = props.result;
      let { type } = props;
      // 兼容 仅传单个图，非全部测试结果
      modules = modules ? modules : [props.result];
      if (type == 1 || type == 0) {
        // 详细结果|简单结果
        modules = modules.filter((item: any) => item.moduleType == type);
      }
      return modules.map((mod: ResultModule) => {
        return mod.imgType ? (
          <div class="chart-item-wrapper">
            <ChartModule config={mod} />
          </div>
        ) : (
          <HtmlWrapper title={mod.moduleName} content={mod.moduleDesc} />
        );
      });
    };

    return () => {
      return <Fragment>{modulesWrapper()}</Fragment>;
    };
  }
});
