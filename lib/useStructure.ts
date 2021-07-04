import { ChartTypes, ChartProps } from "./types";

export function useStructure(config, result) {
  let chartConfig = {} as ChartProps;
  let chartData: Record<string, any>[] = [];
  chartConfig.type = config.imgType;
  const resultData = JSON.parse(result.extendData);
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

  switch (config.imgType) {
    case ChartTypes.SCATTER:
      chartData = [{ x: resultData.score2, y: resultData.score }];
      if (!chartConfig.xField) {
        chartConfig.xField = "x";
      }
      if (!chartConfig.yField) {
        chartConfig.yField = "y";
      }
      break;
    case ChartTypes.PIE:
      chartData = resultData;
      if (!config.colorField) {
        chartConfig.colorField = "label";
      }
      if (!config.angleField) {
        chartConfig.angleField = "value";
      }
      break;
    case ChartTypes.COLUMN:
      chartData = resultData;
      chartConfig = {
        ...chartConfig,
        xField: "label",
        yField: "value",
        seriesField: "type",
        isGroup: "true"
      };
      break;
    default:
      break;
  }
  return { chartData, chartConfig };
}
