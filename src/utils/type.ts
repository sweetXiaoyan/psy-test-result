export type ObjectKey<T = any> = {
  [x in string | number]: T;
};

export type Tuple<T, L extends number> = T[] & { length: L };

export interface Columns {
  label: string;
  value: number;
}
export enum ChartTypes {
    SCATTER = 1, // 散点图，象限图
    PIE = 2, // 饼图
    LINE = 3, //折线图
    COLUMN = 4, // 柱状图
    BAR = 5, //条形图
    RADAR = 6, // 雷达图
    QUADRANT = 7, // 象限图
}
