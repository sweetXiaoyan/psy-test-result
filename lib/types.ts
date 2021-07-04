import { PropType } from "vue";
export interface DescribeProps {
  visible: boolean;
  text?: string;
}
export enum ChartTypes {
  SCATTER = 1, // 散点图，象限图
  PIE = 2, // 饼图
  LINE = 3, //折线图
  COLUMN = 4, // 柱状图
  BAR = 5, //条形图
  RADAR = 6 // 雷达图
}
export type ConfigProps = {
  type: number;
  title?: DescribeProps;
  description?: DescribeProps;

  width?: number;
  height?: number;
  xField?: string; // x轴数据字段
  yField?: string; // y轴数据字段
  seriesField?: string; // 多数据数据字段

  colorField?: string;
  angleField?: string;
  color?: Array<string> | string;
  radius?: string;
  isGroup?: string; //是否分组
};

export interface TestProp {
  name: string;
  age?: number;
}
export type PieProps = {
  angleField?: string;
  colorField?: string;
  radius?: string;
};

export type ScatterProps = {
  size?: number;
  shape?: string;
  quadrant?: any;
};
export type ChartProps = PieProps & ConfigProps;

export const CommonChartPropsDefine = {
  config: {
    type: Object as PropType<ChartProps>,
    required: true
  },
  value: {
    type: Array as PropType<Record<string, any>[]>,
    required: true
  }
} as const;

export const SingleChartPropsDefine = {
  ...CommonChartPropsDefine,
  type: {
    type: String,
    required: true
  }
} as const;

// 柱状图 默认配置
export const defaultHistogramConfig = {
  maxBarWidth: 20,
  shapeStyle: {
    borderRadius: 14
  },
  label: {
    offsetX: 0,
    style: {
      // 设置字体颜色无效
      opacity: 0.5,
      fontSize: 10
    }
  },
  // 提示
  tooltip: false as const,
  xAxis: {
    grid: null // 不显示网格
  },
  yAxis: {}
};

export interface TestResult {
  avatarUrl: string;
  nickName: string;
  testId: number;
  resultId: number;
  startTime: string;
  modules: ResultModule[];
}
export type ResultModule = {
  id?: number;
  moduleName?: string;
  moduleDesc?: string;
  imgType: number;
  moduleType?: number;
};
