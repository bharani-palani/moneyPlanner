import React from "react";
import { doubleArrowShapeProps } from "./propsData";
import PropTypes from "prop-types";

const DoubleArrowShape = ({
  id,
  width,
  height,
  fillColor,
  showAnimation,
  animationClass,
  strokeWidth,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`${showAnimation ? animationClass : ""} shape`}
    >
      <defs>
        <marker
          id={`${id}-markerStart`}
          className='shape'
          markerUnits='strokeWidth'
          markerWidth={width}
          markerHeight={height}
          viewBox={`0 0 ${width} ${height}`}
          refX='8.5'
          refY='6'
          orient='auto'
        >
          <path
            d='M 14 2 L 10 6 L 14 10 L 6 6 L 14 2'
            className='shape'
            fill={fillColor}
          ></path>
        </marker>
        <marker
          id={`${id}-markerEnd`}
          className='shape'
          markerUnits='strokeWidth'
          markerWidth={width}
          markerHeight={height}
          viewBox={`0 0 ${width} ${height}`}
          refX='6'
          refY='6'
          orient='auto'
        >
          <path
            d='M2,2 L10,6 L2,10 L6,6 L2,2'
            className='shape'
            fill={fillColor}
          ></path>
        </marker>
      </defs>
      <line
        x1={height * 0.25}
        x2={width - height * 0.4}
        y1={height / 2}
        y2={height / 2}
        stroke={fillColor}
        strokeWidth={strokeWidth}
        markerEnd={`url(#${id}-markerEnd)`}
        markerStart={`url(#${id}-markerStart)`}
        className='shape'
      />
    </svg>
  );
};

DoubleArrowShape.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  fillColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  lineColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  padding: PropTypes.number,
  opacity: PropTypes.number,
  showAnimation: PropTypes.bool,
  animationClass: PropTypes.string,
  strokeWidth: PropTypes.number,
};

DoubleArrowShape.defaultProps = doubleArrowShapeProps;

export default DoubleArrowShape;
