import { defineComponent, Fragment, onMounted, PropType } from "vue";
import {
  CommonChartPropsDefine,
  ConfigProps,
  PieProps,
  ChartProps,
  ChartTypes,
  ResultModule
} from "./types";
import ChartItem from "./ChartItem";
import "./common.less";

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
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  },

  setup(props) {
    const chartConfig = {
      type: 0,
      width: 290,
      height: 240,
      color: "r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#6397ff",
      xField: "x",
      yField: "y"
    } as ChartProps;
    let ChartData: Record<string, any>[];

    const HtmlWrapper = ({ title, content }: any) => {
      return (
        <div class="text_module">
          <span class="title">{title}</span>
          <div class="content" innerHTML={content}></div>
        </div>
      );
    };
    const chartModule = ({ config }: ChartWrapperProps) => {
      const { result } = props;
      chartConfig.type = config.imgType;
      if (config.imgType === ChartTypes.SCATTER) {
        ChartData = [{ x: result.score, y: result.score2 }];
      }

      if (config.moduleName) {
        chartConfig.title = {
          visible: true,
          text: config.moduleName
        };
      } else {
        chartConfig.title = {
          visible: false
        };
      }
      console.log("chartConfig:----", chartConfig);

      if (!chartConfig.xField) {
        chartConfig.xField = "x";
      }
      if (!chartConfig.yField) {
        chartConfig.yField = "y";
      }
      if (!chartConfig.title) {
        chartConfig.title = {
          visible: false
        };
      }
      return (
        <ChartItem
          type={chartConfig.type}
          config={chartConfig}
          value={ChartData}
        />
      );
    };
    const modulesWrapper = () => {
      let { modules, type } = props.result;
      if (type == 1 || type == 0) {
        // 详细结果
        modules = modules.filter((item: any) => item.type == type);
      }
      return modules.map((mod: ResultModule) => {
        return mod.imgType ? (
          <chartModule config={mod} />
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
