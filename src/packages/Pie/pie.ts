import {
  EChartsOption,
  LegendComponentOption,
  PieSeriesOption,
  TitleOption,
  TooltipOption
} from "echarts/types/dist/shared";

import { Columns, ObjectKey } from "../../utils/type";
import { isBoolean } from "../../utils/utils";
import { defaultLegend, defaultTooltip } from "../../utils/defaultConfig";

// export interface PieBaseColumns {}

export type PieColumns = Columns;

// export interface PieDataSource<T extends ObjectKey> {
//     columns: Array<PieColumns>;
//     rows: T;
// }

export interface PieDataSource<T extends ObjectKey> {
  label: string | number;
  value: number;
}

export interface PieSettings {
  title?: TitleOption;
  tooltip?: TooltipOption | boolean;
  legend?: LegendComponentOption | boolean;

  inRadius?: string; //内半径
  outRadius?: string; // 外半径
  xOffset?: string;
  yOffset?: string;
  seriesName?: string;
  hasBorder?: boolean;
  borderRadius?: number;
  labelFontSize?: number;
  labelShow: boolean;

  roseType: "radius" | "area";
}
// 提示框组件
const pieTooltip = <T>(
  dataSource: PieDataSource<T>[],
  settings: PieSettings
) => {
  const { tooltip = true } = settings;
  let defaultTip = defaultTooltip("item");

  return isBoolean(tooltip) ? (tooltip ? defaultTip : {}) : tooltip;
};
// 图例组件
const pieLegend = <T>(
  dataSource: PieDataSource<T>[],
  settings: PieSettings
) => {
  const { legend = true } = settings;
  return isBoolean(legend) ? defaultLegend() : legend;
};

const pieSeries = <T extends ObjectKey>(
  dataSource: PieDataSource<T>[],
  settings: PieSettings
) => {
  // const { rows, columns } = dataSource;
  const {
    inRadius = "0%",
    outRadius = "60%",
    xOffset = "50%",
    yOffset = "50%",
    seriesName = "",
    hasBorder = true,
    borderRadius = 6,
    labelFontSize = 13,
    roseType = "radius",
    labelShow = true
  } = settings;

  // if (!isArray(dataSource)) {
  //     console.warn("rows 必须是一个对象");
  //     return;
  // }

  // 数据类型
  const seriesData: Array<{ value: number; name: string }> = [];

  dataSource.forEach(item => {
    seriesData.push({
      value: item.value,
      name: item.label + ""
    });
  });

  const series: PieSeriesOption[] = [
    {
      name: seriesName,
      type: "pie",
      radius: [inRadius, outRadius],
      center: [xOffset, yOffset],
      data: seriesData.sort(function(a, b) {
        return a.value - b.value;
      }), //为什么要排序

      // 高亮状态的扇区和标签样式
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        },
        label: {
          show: true,
          fontWeight: "bold"
        }
      },
      // 饼图图形上的文本标签
      label: {
        position: "outside",
        fontSize: labelFontSize,
        show: labelShow,
        distanceToLabelLine: 5,
        formatter: "{b}：{d}%"
      },

      // 图形样式
      itemStyle: hasBorder
        ? {
            borderRadius: borderRadius,
            borderColor: "#f0f0f0",
            borderWidth: 2
          }
        : {},

      // 半径区分数据大小 'radius'| 'area'
      roseType,
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function() {
        return Math.random() * 120;
      }
    }
  ];

  return series;
};

const handlePie = <T = {}>(
  dataSource: PieDataSource<T>[],
  settings: PieSettings,
  ariaShow?: boolean
) => {
  const tooltip = pieTooltip<T>(dataSource, settings) as TooltipOption;
  const legend = pieLegend<T>(dataSource, settings) as LegendComponentOption;
  const series = pieSeries<T>(dataSource, settings);
  const { title = {} } = settings;

  const options: EChartsOption = {
    aria: {
      decal: {
        show: ariaShow
      }
    },
    title,
    tooltip,
    legend,
    series
  };

  return options;
};

export default handlePie;
