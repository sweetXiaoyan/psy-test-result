import {
  EChartsOption,
  RadarSeriesOption,
  TitleOption,
  TooltipOption,
  LegendComponentOption
} from "echarts/types/dist/shared";
import { Columns, ObjectKey } from "../../utils/type";
import { isBoolean } from "../../utils/utils";
import {
  defaultLegend,
  defaultTooltip,
  defaultColors
} from "../../utils/defaultConfig";

type RadarData = {
  series?: string;
};

export type RadarDataSource = Columns & RadarData;

export interface RadarSettings {
  color?: string | string[];
  type?: string;
  title?: TitleOption;
  tooltip?: TooltipOption | boolean;
  legend?: LegendComponentOption | boolean;
}

const radarTooltip = (
  dataSource: RadarDataSource[],
  settings: RadarSettings
) => {
  const { tooltip = false } = settings;
  const defaultRadarTooltip = {};
  return isBoolean(tooltip)
    ? tooltip
      ? defaultRadarTooltip
      : { show: false }
    : tooltip;
};

const radarLegend = (
  dataSource: RadarDataSource[],
  settings: RadarSettings
) => {
  const { legend = false } = settings;
  return isBoolean(legend)
    ? legend
      ? defaultLegend()
      : { show: false }
    : length;
};
const radarIndicator = (
  dataSource: RadarDataSource[],
  settings: RadarSettings
) => {
  let sourceKeys: string[] = [];
  let indicatorArr: ObjectKey[] = [];
  dataSource.forEach(item => {
    if (sourceKeys.includes(item.label)) {
      return;
    }
    sourceKeys.push(item.label);
    indicatorArr.push({ text: item.label });
  });
  return indicatorArr;
};
const radarSeries = (
  dataSource: RadarDataSource[],
  settings: RadarSettings
) => {
  const { color = defaultColors } = settings;
  let series: RadarSeriesOption[] = [];
  let seriesNum: Array<string> = dataSource.reduce((cur: any, next) => {
    next.series ? cur.push(next.series) : null;
    return Array.from(new Set(cur));
  }, []);
  const seriesData: ObjectKey[] = [];

  if (seriesNum.length > 1) {
    // 多个
    seriesNum.forEach((item, index) => {
      let sourceMap: ObjectKey = {
        name: item,
        symbol: "none",
        areaStyle: {
          color: color[index]
        },
        lineStyle: {
          // 单项线条样式
          width: 0
        },
        label: {
          color: "#666666"
        },
        type: "radar"
      };
      // sourceMap.data = dataSource.filter((el) => item === el.series);
      sourceMap.value = dataSource.reduce((cur: number[], next): number[] => {
        next.series == item ? cur.push(next.value) : null;
        return cur;
      }, []);
      seriesData.push(sourceMap);
    });
    series[0] = {
      type: "radar",
      // symbol: "none",
      //     areaStyle: {
      //         color: color[0],
      //     },
      data: seriesData
    };
  } else {
    series[0] = {
      type: "radar",
      symbol: "none",
      areaStyle: {
        color: typeof color == "string" ? color : color[0]
      },
      lineStyle: {
        // 单项线条样式
        width: 0
      },
      label: {
        color: "#666666"
      },
      data: [dataSource.map((item: RadarDataSource) => item.value)]
    };
  }
  console.log("----series", series);
  return series;
};

const handleRadar = (
  dataSource: RadarDataSource[],
  settings: RadarSettings
) => {
  const { title = { show: false } } = settings;

  const tooltip = radarTooltip(dataSource, settings);
  const legend = radarLegend(dataSource, settings) as LegendComponentOption;
  const indicator = radarIndicator(dataSource, settings);
  const series = radarSeries(dataSource, settings);
  const options: EChartsOption = {
    title: title,
    tooltip,
    legend,
    radar: {
      shape: "circle",
      indicator: indicator,
      radius: 80,
      axisLine: {
        lineStyle: {
          color: "#DDDCFF"
        }
      },
      splitLine: {
        //背景网格
        lineStyle: {
          width: 2,
          color: ["#EAE9FD"]
        }
      },
      axisName: {
        color: "black",
        borderRadius: 3,
        padding: [3, 5]
        // textStyle: {
        //
        // },
      }
    },
    series: series
  };
  console.log("options---", options);
  return options;
};
export default handleRadar;
