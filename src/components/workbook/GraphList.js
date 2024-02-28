import React, { useContext } from "react";
import { Row, Col, OverlayTrigger, Tooltip, Dropdown } from "react-bootstrap";
import {
  divergingBarChartProps,
  pannableChartProps,
  donutChartProps,
  horizontalBarChartProps,
  pieChartProps,
  stackedVerticalBarChartProps,
  verticalBarChartProps,
  // zoomableCirclePackingChartProps,
  scatterPlotChartProps,
  allChartProps,
  densityChartProps,
} from "../../components/shared/D3/propsData";
import WorkbookContext from "./WorkbookContext";

const GraphList = () => {
  const workbookContext = useContext(WorkbookContext);
  const charts = [
    {
      id: null,
      name: "Vertical Bar Chart",
      location: require("../../images/charts/VerticalBarChart.svg").default,
      chartKey: "VerticalBarChart",
      visibility: true,
      props: { ...allChartProps, ...verticalBarChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "value", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Pannable Chart",
      location: require("../../images/charts/PannableChart.svg").default,
      chartKey: "PannableChart",
      visibility: true,
      props: { ...allChartProps, ...pannableChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "value", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Pie Chart",
      location: require("../../images/charts/PieChart.svg").default,
      chartKey: "PieChart",
      visibility: true,
      props: { ...allChartProps, ...pieChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "value", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Diverging Chart",
      location: require("../../images/charts/DivergingChart.svg").default,
      chartKey: "DivergingBarChart",
      visibility: true,
      props: { ...allChartProps, ...divergingBarChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "before", target: "" },
          { source: "after", target: "" },
        ],
      },
    },
    // {
    //   id: null,
    //   name: "Zoomable Circle Packing Chart",
    //   location: require("../../images/charts/ZoomableCirclePacking.svg")
    //     .default,
    //   chartKey: "ZoomableCirclePackingChart",
    // visibility: true,
    //   props: { ...allChartProps, ...zoomableCirclePackingChartProps },
    //   x: 0,
    //   y: 0,
    //   massageConfig: {
    //     type: "nestedArrayOfObjects",
    //     keys: [
    //       { source: "label", target: "" },
    //       { source: "children", target: "" },
    //     ],
    //   },
    // },
    {
      id: null,
      name: "Horizontal Bar Chart",
      location: require("../../images/charts/HorizontalBarChart.svg").default,
      chartKey: "HorizontalBarChart",
      visibility: true,
      props: { ...allChartProps, ...horizontalBarChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "value", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Stacked Vertical Chart",
      location: require("../../images/charts/StackedVerticalChart.svg").default,
      chartKey: "StackedVerticalBarChart",
      visibility: true,
      props: { ...allChartProps, ...stackedVerticalBarChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "where", target: "" },
          { source: "value", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Donut Chart",
      location: require("../../images/charts/DonutChart.svg").default,
      chartKey: "DonutChart",
      visibility: true,
      props: { ...allChartProps, ...donutChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "label", target: "" },
          { source: "value", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Scatter Plot Chart",
      location: require("../../images/charts/ScatterPlotChart.svg").default,
      chartKey: "ScatterPlotChart",
      visibility: true,
      props: { ...allChartProps, ...scatterPlotChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [
          { source: "group", target: "" },
          { source: "subGroup", target: "" },
          { source: "size", target: "" },
          { source: "x", target: "" },
          { source: "y", target: "" },
        ],
      },
    },
    {
      id: null,
      name: "Density Chart",
      location: require("../../images/charts/DensityChart.svg").default,
      chartKey: "DensityChart",
      visibility: true,
      props: { ...allChartProps, ...densityChartProps },
      x: 0,
      y: 0,
      massageConfig: {
        type: "arrayOfObjects",
        keys: [{ source: "x", target: "" }],
      },
    },
  ];
  const { theme } = workbookContext;

  const renderTooltip = (props, title, id) => (
    <Tooltip id={`chart-tooltip-${id}`} {...props}>
      {title}
    </Tooltip>
  );

  return (
    <Row className='m-0 align-items-center'>
      <Col sm={12} className='p-0 m-0'>
        <Dropdown className=''>
          <Dropdown.Toggle
            className={`bni-border bni-border-all bni-border-all-1 btn-bni btn-sm w-100 rounded-end-0`}
            style={{ borderRadius: "5px 0 0 0" }}
          >
            <i className='fa fa-filter' />
          </Dropdown.Toggle>
          <Dropdown.Menu variant={theme} className=''>
            <Dropdown.Item className='p-1'>Abc</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      {charts.map((chart, i) => (
        <Col key={i} sm={6} className='my-2 p-0'>
          <OverlayTrigger
            placement='right'
            overlay={p => renderTooltip(p, chart.name, i)}
          >
            <img
              className='cursor-pointer img-fluid'
              width={25}
              height={25}
              alt={`chartImage-${chart.name}`}
              src={chart.location}
              draggable={true}
              onDragStart={e => {
                e.dataTransfer.setData(
                  "workbookDragData",
                  JSON.stringify({
                    chart,
                  }),
                );
              }}
            />
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
};

export default GraphList;
