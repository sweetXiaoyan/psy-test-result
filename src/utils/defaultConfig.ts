export const defaultLegend = (LegendVisible = true) => {
  const defaultLegend = {
    show: LegendVisible,
    icon: "circle",
    textStyle: {
      fontSize: 12,
      color: "#c8c8c8"
    }
  };

  return defaultLegend;
};

export const defaultTooltip = (trigger = "axis") => {
  return {
    trigger, //触发类型: 'item' 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis':坐标轴触发
    axisPointer: {
      label: {
        show: true,
        backgroundColor: "#fff",
        color: "#556677",
        borderColor: "rgba(0,0,0,0)",
        shadowOffsetY: 0
      },
      lineStyle: {
        width: 1
      }
    },
    padding: [10, 10]
  };
};
