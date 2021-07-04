import {
  EChartsOption,
  RadarSeriesOption,
  TitleOption,
  TooltipOption,
  LegendComponentOption
} from "echarts/types/dist/shared";
import { Columns, ObjectKey } from "../../utils/type";
import { isBoolean } from "../../utils/utils";
import { defaultLegend, defaultTooltip } from "../../utils/defaultConfig";

type RadarData = {
  series?: string;
};

export type RadarDataSource = Columns & RadarData;

export interface RadarSettings {
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
  indicatorArr = dataSource.map(item => {
    if (sourceKeys.includes(item.label)) {
      return;
    }
    return { name: item.label };
  }) as ObjectKey[];
  return indicatorArr;
};
const radarSeries = (
  dataSource: RadarDataSource[],
  settings: RadarSettings
) => {
  let series: RadarSeriesOption[] = [];
  let seriesNum: Array<string> = dataSource.reduce((cur: any, next) => {
    next.series ? cur.push(next.series) : null;
    return Array.from(new Set(cur));
  }, []);
  console.log("@@@", seriesNum);

  if (seriesNum.length > 1) {
    console.log("))))", seriesNum);
    // 多个
    seriesNum.forEach(item => {
      let sourceMap: ObjectKey = {
        name: item,
        type: "radar"
      };
      sourceMap.data = dataSource.map(el => el.value);
      console.log("---sourceMap", sourceMap);
      series.push(sourceMap);
    });
  } else {
    series[0] = {
      type: "radar",
      data: [dataSource.map((item: RadarDataSource) => item.value)]
    };
  }

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
      indicator: indicator
    },
    series: series
  };
  return options;
};
export default handleRadar;
