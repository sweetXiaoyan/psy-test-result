import { App, defineComponent, h, PropType } from "vue";
import commonProps from "../../utils/commonProps";
import { barDefaultSeries, barDefaultGrid } from "../Bar/barDefaultConfig";
// import Chart from "../chart";

// import * as echarts from "echarts/core";
// import { BarChart, LineChart } from "echarts/charts";
import {
    EChartsOption,
    LineSeriesOption,
    BarSeriesOption,
    TitleOption,
    TooltipOption,
    YAXisOption,
    GridOption,
} from "echarts/types/dist/shared";
import { Columns, Tuple, ObjectKey } from "@/utils/type";
import {
    defaultColors,
    defaultLegend,
    defaultTooltip,
} from "../../utils/defaultConfig";
import { isBoolean } from "@/utils/utils";

// echarts.use([BarChart, LineChart]);

interface BarLineData {
    Options: EChartsOption;
}

type BarLineBase = {
    type?: string;
    series?: string; //柱子|折线 个数
};
export type BarLineDataSource = Columns & BarLineBase;
// const data: BarLineDataSource[] = [
//     {
//         label: "1",
//         value: 1,
//     },
// ];

// 坐标轴类型
export declare const AXIS_TYPES: {
    readonly value: 1;
    readonly category: 1;
    readonly time: 1;
    readonly log: 1;
};
// BarLine 支持的 图表类型
export enum BarLineType {
    LINE = "line",
    BAR = "bar",
    COLUMN = "column",
}
export type OptionAxisType = keyof typeof AXIS_TYPES;

export type BarLineSeriesOption = BarSeriesOption | LineSeriesOption;

export interface BarLineSettings {
    color?: string; // 柱子颜色
    opacity?: number; //柱子不透明渐变
    type?: BarLineType;
    title?: TitleOption | TitleOption[];
    xAxisType?: OptionAxisType;
    xVisible?: boolean;
    xAxis?: Array<string>;

    // 区域图形显示
    area?: boolean;
    smooth?: boolean;
    tooltip?: TooltipOption | boolean;
    yFormatter?: Tuple<string | ((val: any) => string), 2>;
    yVisible?: boolean;
    yAxisName?: Array<string>;
    yAxis?: Array<string>;

    LegendVisible?: boolean;
    barGap?: string;
    stack?: boolean;
    labelShow?: boolean;

    waterfall?: boolean;
    fallTotalName?: string;
    fallLegendName?: string;
    fallBarColor?: string;
    grid?: GridOption;
}

const barLineXAxis = <T>(
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const {
        xAxisType = "category",
        xVisible = true,
        waterfall = false,
    } = settings;

    // 设置值
    if (!dataSource.length) {
        console.warn("dataSource 数据不能为空");
        return;
    }
    let xAxis: Array<string> = [];
    dataSource.forEach((item: BarLineDataSource) => {
        !xAxis.includes(item.label) ? xAxis.push(item.label) : null;
    });
    const xAxisDefault = {
        splitLine: {
            show: false,
            lineStyle: {
                color: "#D3D3D3",
            },
        },
        axisLine: {
            show: false,
        },
    };

    return {
        ...xAxisDefault,
        type: xAxisType,
        data: waterfall ? xAxis : xAxis,
        show: xVisible,
    };
};

const barLineYAxis = <T>(
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const {
        yVisible = true,
        yFormatter = ["{value}", "{value}"],
        yAxisName = [],
    } = settings;

    const yAxisDefault: YAXisOption = {
        type: "value",
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            //y轴网格
            show: true,
            lineStyle: {
                type: "dashed",
            },
        },

        show: yVisible,
    };

    const yAxisResult: YAXisOption[] = [];
    for (let i = 0; i < 2; i++) {
        yAxisResult[i] = Object.assign({}, yAxisDefault, {
            position: i === 1 ? "right" : "left",
            axisLabel: {
                formatter: yFormatter[i],
            },
        });

        yAxisResult[i].name = yAxisName[i] || "";
    }
    return yAxisResult;
};

const barLineGrid = (
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const { grid = {}, type = BarLineType.LINE } = settings;
    return {
        ...barDefaultGrid(),
        ...grid,
    };
};

const barDefaultLabel = {
    normal: {
        show: true,
        position: "top",
        fontSize:10,
        color:"#333",
        formatter: (params) => {
            console.log("params",params)
            return params.data.percent ? params.data.percent : params.value;
        },
    },
    emphasis: {
        show: true,
        position: "top",
    },
};

const waterFallSeries = (
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const {
        labelShow = false,
        fallLegendName = "",
        fallBarColor = "",
    } = settings;

    if (Array.isArray(dataSource)) {
        console.warn("dataSource 必须是数组");
        return [];
    }

    const series: BarLineSeriesOption[] = [];
    const seriesDataAuxiliary: number[] = [0];

    series[0] = {
        name: "",
        type: "bar",
        stack: "总量",
        label: {
            show: false,
        },
        itemStyle: {
            borderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
        },
        emphasis: seriesDataAuxiliary,
    };
};

const normalSeries = (
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const {
        area,
        smooth = true,
        barGap = "20%",
        stack = false,
        labelShow = true,
        type = BarLineType.LINE,
        color = defaultColors,
        opacity = 1,
    } = settings;

    if (!Array.isArray(dataSource)) {
        console.warn("dataSource 必须是数组");
        return [];
    }

    let series: BarLineSeriesOption[] = [];
    let seriesNum: Array<string> = dataSource.reduce((cur: any, next) => {
        next.series ? cur.push(next.series) : null;
        return Array.from(new Set(cur));
    }, []);
    const lineSeries: LineSeriesOption = {
        smooth,
        symbolSize: 10,
        ...(area
            ? {
                  areaStyle: {
                      opacity: 0.2,
                  },
              }
            : {}),
    };
    const barSeries = (color) => ({
        barGap,
        ...barDefaultSeries(color, opacity),
        ...(stack ? { stack: "stack" } : {}),
        // label: {
        //     show: labelShow,
        //     color: "#314659",
        // },
        label: labelShow ? { ...barDefaultLabel } : {},
    });

    if (seriesNum.length) {
        series = seriesNum.map((item, index) => {
            const dataSourceMap: ObjectKey = {
                name: item,
                type,
            };

            dataSourceMap.data = dataSource.filter(
                (el) => el.series == dataSourceMap.name
            );
      
            const seriesItem: BarLineSeriesOption = {
                ...dataSourceMap,
                ...(type === BarLineType.LINE
                    ? lineSeries
                    : type === BarLineType.BAR
                    ? barSeries(color[index])
                    : {}),
            };
            return seriesItem;
        });
    } else {
        const dataSourceMap: ObjectKey = {};
        dataSourceMap.type = type;
        dataSourceMap.data = dataSource.map((item) => item.value);
        const seriesItem: BarLineSeriesOption = {
            ...dataSourceMap,
            ...(type === BarLineType.LINE
                ? lineSeries
                : type === BarLineType.BAR
                ? barSeries(color[0])
                : {}),
        };
        return seriesItem;
    }
    return series;
};

const barLineTooltip = (
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const { tooltip = true, waterfall = false } = settings;

    let defaultTip = defaultTooltip();

    if (waterfall) {
        const waterFallTooltip: TooltipOption = {
            formatter: (param: any) => {
                if (Array.isArray(param) && param.length > 2) {
                    const target = param[1];
                    return `${target.name}<br/>${target.marker || ""}${
                        target.seriesName
                    } : <b style="font-weight:bold; color: #000">${
                        target.value
                    }</b>`;
                }
                return "";
            },
        };
        defaultTip = Object.assign({}, waterFallTooltip, defaultTip);
    }
    return isBoolean(tooltip) ? (tooltip ? defaultTip : {}) : tooltip;
};

const barLineLegend = (
    dataSource: BarLineDataSource[],
    settings: BarLineSettings
) => {
    const { LegendVisible = true } = settings;

    return defaultLegend(LegendVisible);
};

const handleBarLine = <T = any>(
    dataSource: BarLineDataSource[],
    settings: BarLineSettings,
    ariaShow = false
) => {
    const xAxis = barLineXAxis(dataSource, settings);
    const yAxis = barLineYAxis(dataSource, settings);
    // const series = settings.waterfall
    //     ? waterFallSeries(dataSource, settings)
    //     : normalSeries(dataSource, settings);
    const series = normalSeries(dataSource, settings);
    const tooltip = barLineTooltip(dataSource, settings) as TooltipOption;
    const legend = barLineLegend(dataSource, settings);
    const grid = barLineGrid(dataSource, settings);
    const { title = {}, type } = settings;
    const options: EChartsOption = {
        aria: {
            decal: {
                show: ariaShow,
            },
        },
        title,
        legend,
        xAxis,
        yAxis,
        series,
        tooltip,
        grid,
    };

    return options;
};

export default handleBarLine;
