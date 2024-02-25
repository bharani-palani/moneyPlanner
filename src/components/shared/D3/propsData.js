import { appThemeBgColor, appThemeColor } from "./constants";
import {
  divergingBarChartData,
  pannableChartData,
  stackedVerticalBarChartData,
  zoomableCirclePackingChartData,
  scatterPlotChartData,
} from "./mockData";

const divergingBarChartProps = {
  name: "Diverging chart",
  width: 600,
  barHeight: 20,
  marginTop: 30,
  marginRight: 60,
  marginBottom: 10,
  marginLeft: 60,
  metric: "relative",
  style: {},
  fillColor: appThemeBgColor,
  fontColor: "currentColor",
  lineColor: "currentColor",
  fontSize: 14,
  data: divergingBarChartData,
  showAnimation: true,
  showTooltip: true,
  tooltipPrefix: "",
  tooltipSuffix: "",
  showXaxis: true,
  showYaxis: true,
  yTicks: 6,
  onClick: () => {},
};

const pannableChartProps = {
  name: "Pannable chart",
  width: 700,
  height: 300,
  marginTop: 10,
  marginRight: 20,
  marginBottom: 40,
  marginLeft: 50,
  fillColor: appThemeBgColor,
  fontColor: appThemeBgColor,
  lineColor: "currentColor",
  yAxisLabel: "y-axis",
  style: {},
  data: pannableChartData,
  showYaxisLine: true,
  showXaxis: true,
  showYaxis: true,
  showYaxisLabel: true,
  yTicks: 6,
};

const donutChartProps = {
  name: "Donut chart",
  width: 350,
  height: 350,
  outerRadius: 100,
  innerRadius: 70,
  data: [12, 23, 34, 45, 56].map((m, i) => ({
    label: "Sample " + (i + 1),
    value: m,
  })),
  style: {},
  fillColor: [appThemeBgColor, appThemeColor],
  fontSize: 12,
  tooltipPrefix: "",
  tooltipSuffix: "",
  showTooltip: true,
  onClick: () => {},
  fontColor: "currentColor",
  showAnimation: true,
  animationDuration: 1000,
  showLegend: true,
  showXaxisLabel: true,
  xAxisLabel: "Sample",
  showXaxisLabel: true,
};

const horizontalBarChartProps = {
  name: "Horizontal bar chart",
  width: 600,
  barHeight: 20,
  data: new Array(10).fill("_").map((_, i) => ({
    label: `C${i + 1}`,
    value: Number((Math.random() * 100).toFixed(2)),
  })),
  marginTop: 30,
  marginRight: 50,
  marginBottom: 10,
  marginLeft: 60,
  sortClause: "",
  padding: 0.05,
  style: {},
  fillColor: appThemeBgColor,
  fontColor: "currentColor",
  lineColor: appThemeBgColor,
  tooltipPrefix: "",
  tooltipSuffix: "",
  showTooltip: true,
  onClick: () => {},
  fontSize: 12,
  showAnimation: true,
  animationDuration: 1000,
};

const pieChartProps = {
  name: "Pie chart",
  width: 250,
  height: 250,
  tooltipPrefix: "",
  tooltipSuffix: "",
  showTooltip: true,
  fillColor: [appThemeBgColor, appThemeColor],
  fontColor: "currentColor",
  data: [
    { label: "<5", value: 45000 },
    { label: "5-9", value: 30000 },
    { label: "10-14", value: 40000 },
    { label: "15-19", value: 50000 },
    { label: "20-24", value: 60000 },
    { label: "25-29", value: 70000 },
    { label: "30-34", value: 80000 },
  ],
  style: {},
  fontSize: 12,
  showXaxisLabel: true,
  showYaxisLabel: true,
  sortClause: "",
  onClick: () => {},
  lineColor: "#555",
  showAnimation: true,
  className: "",
};

const stackedVerticalBarChartProps = {
  name: "Stacked vertical bar chart",
  width: 500,
  height: 200,
  marginTop: 10,
  marginRight: 10,
  marginBottom: 20,
  marginLeft: 80,
  fillColor: [appThemeBgColor, appThemeColor],
  fontColor: "currentColor",
  lineColor: "currentColor",
  showTooltip: true,
  style: {},
  padding: 0.01,
  yTicks: 6,
  showAnimation: true,
  animationDuration: 1000,
  sortClause: "",
  data: stackedVerticalBarChartData.filter(f =>
    ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL"].includes(
      f.label,
    ),
  ),
  showYaxis: true,
  showXaxis: true,
  showXaxisLabel: true,
  showXaxisLine: true,
  showYaxisLine: true,
  showYaxisLabel: true,
  onClick: () => {},
  fontSize: 12,
};

const verticalBarChartProps = {
  name: "Vertical bar chart",
  width: 600,
  height: 200,
  marginTop: 20,
  marginRight: 10,
  marginBottom: 40,
  marginLeft: 60,
  fillColor: appThemeBgColor,
  fontColor: appThemeBgColor,
  lineColor: "currentColor",
  yAxisLabel: "y-axis",
  xAxisLabel: "x-axis",
  padding: 0.01,
  style: {},
  tooltipPrefix: "",
  tooltipSuffix: "",
  showTooltip: true,
  data: new Array(20).fill("_").map((_, i) => ({
    label: `C${i + 1}`,
    value: Number((Math.random() * 100).toFixed(2)),
  })),
  showYaxisLine: true,
  showXaxis: true,
  showXaxisLabel: true,
  showYaxis: true,
  showYaxisLabel: true,
  showAnimation: true,
  showLegend: true,
  animationDuration: 1000,
  sortClause: "",
  xAxisTicksOrientation: "horizontal",
  fontSize: 14,
  yTicks: 6,
  onClick: () => {},
};

const zoomableCirclePackingChartProps = {
  name: "zoomable circle packing chart",
  width: 600,
  height: 600,
  style: {},
  fillColor: [appThemeBgColor, appThemeColor],
  padding: 3,
  tooltipPrefix: "",
  tooltipSuffix: "",
  showTooltip: true,
  fontSize: 10,
  animationDuration: 750,
  showAnimation: true,
  data: zoomableCirclePackingChartData,
  onClick: () => {},
};

const allChartProps = {
  width: 0,
  height: 0,
  innerRadius: 0,
  outerRadius: 0,
  barHeight: 0,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  padding: 0,
  animationDuration: 1000,
  fontSize: 14,
  yTicks: 1,
  fillColor: [],
  fontColor: [],
  lineColor: [],
  name: "",
  xAxisLabel: "",
  yAxisLabel: "",
  tooltipPrefix: "",
  tooltipSuffix: "",
  className: "",
  xAxisTicksOrientation: "horizontal",
  sortClause: "asc",
  showTooltip: true,
  showXaxisLabel: true,
  showYaxisLine: true,
  showXaxis: true,
  showYaxis: true,
  showYaxisLabel: true,
  showAnimation: true,
  showLegend: true,
  data: [],
};

const scatterPlotChartProps = {
  width: 700,
  height: 400,
  marginTop: 60,
  marginRight: 60,
  marginBottom: 60,
  marginLeft: 60,
  data: scatterPlotChartData,
  fillColor: ["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"],
  yTicks: 40,
  innerRadius: 9,
  fontSize: 10,
  fontColor: "#D2D7D3",
  lineColor: "#D2D7D3",
};

export {
  divergingBarChartProps,
  pannableChartProps,
  donutChartProps,
  horizontalBarChartProps,
  pieChartProps,
  stackedVerticalBarChartProps,
  verticalBarChartProps,
  zoomableCirclePackingChartProps,
  scatterPlotChartProps,
  allChartProps,
};
