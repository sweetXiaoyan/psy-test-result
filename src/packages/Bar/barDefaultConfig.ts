import { graphic } from "echarts";
import { BarSeriesOption } from "echarts/types/dist/shared";
export const barDefaultSeries = (color = "#066EFF", opacity = 1) => {
  const defaultSeries: BarSeriesOption = {
    barWidth: 12, //柱子宽度
    barGap: "90%",
    itemStyle: {
      borderRadius: [12, 12, 0, 0], //柱子圆角
      color: color
      // color: opacity ==1 ? color :  new graphic.LinearGradient(1, 1, 0, 0, [
      //     { offset: 0, color: color },
      //     { offset: 1, color: color},
      // ]),
    }
  };
  return defaultSeries;
};

export const barDefaultGrid = () => {
  return {
    show: false,
    left: "15%"
  };
};
